// ===== LabourLink - Core JavaScript =====

const API_BASE = '/api';

// ===== Local Storage Helpers =====
function setCurrentUser(user) {
    localStorage.setItem('labourlink_user', JSON.stringify(user));
}

function getCurrentUser() {
    const data = localStorage.getItem('labourlink_user');
    return data ? JSON.parse(data) : null;
}

function clearCurrentUser() {
    localStorage.removeItem('labourlink_user');
}

function requireAuth() {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = '/login.html';
        return null;
    }
    return user;
}

function logout() {
    clearCurrentUser();
    window.location.href = '/index.html';
}

// ===== API Helper =====
async function api(endpoint, options = {}) {
    const url = `${API_BASE}${endpoint}`;
    const config = {
        headers: { 'Content-Type': 'application/json' },
        ...options,
    };

    if (config.body && typeof config.body === 'object') {
        config.body = JSON.stringify(config.body);
    }

    try {
        const response = await fetch(url, config);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Error:', error);
        return { success: false, message: 'Network error. Please try again.' };
    }
}

// ===== Toast Notifications =====
function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️'
    };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${icons[type] || '📢'}</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3500);
}

// ===== Render Stars =====
function renderStars(rating, interactive = false, onRate = null) {
    rating = rating || 0;
    let html = '<div class="stars">';
    for (let i = 1; i <= 5; i++) {
        const filled = i <= Math.round(rating) ? 'filled' : '';
        if (interactive) {
            html += `<span class="star ${filled}" data-value="${i}" onclick="${onRate}(${i})">★</span>`;
        } else {
            html += `<span class="star ${filled}">★</span>`;
        }
    }
    html += '</div>';
    return html;
}

// ===== Badge Helper =====
function statusBadge(status) {
    const s = status.toLowerCase();
    return `<span class="badge badge-${s}">${status}</span>`;
}

// ===== Skill Display =====
const skillIcons = {
    MASON: '🧱', ELECTRICIAN: '⚡', PAINTER: '🎨', LABOURER: '💪',
    PLUMBER: '🔧', CARPENTER: '🪚', WELDER: '🔥', TILE_FITTER: '🔲',
    ROD_BINDER: '🏗️', HELPER: '🤝'
};

function skillDisplay(skill) {
    const icon = skillIcons[skill] || '🔨';
    const name = skill ? skill.replace('_', ' ') : 'N/A';
    return `<span class="skill-tag">${icon} ${name}</span>`;
}

// ===== Format Date =====
function formatDate(dateStr) {
    if (!dateStr) return 'N/A';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ===== Format Currency =====
function formatCurrency(amount) {
    if (!amount) return '₹0';
    return '₹' + Number(amount).toLocaleString('en-IN');
}

// ===== Avatar from name =====
function getInitials(name) {
    if (!name) return '?';
    return name.split(' ').map(w => w[0]).join('').toUpperCase().substring(0, 2);
}

// ===== Navbar Rendering =====
function renderNavbar(activePage = '') {
    const user = getCurrentUser();
    const nav = document.getElementById('navbar');
    if (!nav) return;

    let rightNav = '';
    if (user) {
        const dashUrl = user.role === 'WORKER' ? '/worker-dashboard.html' : '/contractor-dashboard.html';
        rightNav = `
            <a href="${dashUrl}" class="nav-link ${activePage === 'dashboard' ? 'active' : ''}">🏠 Dashboard</a>
            ${user.role === 'WORKER' ? `<a href="/worker-profile.html?id=${user.id}" class="nav-link ${activePage === 'profile' ? 'active' : ''}">👤 Profile</a>` : ''}
            <span class="nav-link" style="color: var(--text-muted); cursor: default;">Hi, ${user.name.split(' ')[0]}</span>
            <button class="btn btn-sm btn-secondary" onclick="logout()">Logout</button>
        `;
    } else {
        rightNav = `
            <a href="/login.html" class="btn btn-sm btn-secondary">Login</a>
            <a href="/signup.html" class="btn btn-sm btn-primary">Sign Up</a>
        `;
    }

    nav.innerHTML = `
        <a href="/index.html" class="navbar-brand">
            <div class="logo-icon">🏗️</div>
            <h1>LabourLink</h1>
        </a>
        <nav class="navbar-nav">
            ${rightNav}
        </nav>
    `;
}

// ===== Modal Helpers =====
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// ===== Page Ready =====
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
});
