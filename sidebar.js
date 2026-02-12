
// aether-navbar.js — Horizontal top navigation system
(function() {
    const ICONS = {
        dashboard: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>',
        workOrders: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>',
        createJob: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>',
        settings: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
        chat: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>',
        management: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
        tools: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.694 6.823a2 2 0 110-2.828L20.172 2.83a2 2 0 012.828 0l2.829 2.83a2 2 0 010 2.828l-8.478 8.477a2 2 0 01-2.828 0l-.001-.001A2 2 0 1011.694 6.823z"/></svg>',
        analytics: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>',
        alerts: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>',
    };

    const NAV_STRUCTURE = {
        fieldworker: [
            { label: 'Dashboard', href: 'field-worker.html', icon: 'dashboard' },
            { label: 'Work Orders', href: 'work-orders.html', icon: 'workOrders' },
            { label: 'Time Tracking', href: 'time-tracking.html', icon: 'settings' },
            {
                label: 'Tools',
                icon: 'tools',
                submenu: [
                    { label: 'Messages', href: 'chat.html' },
                    { label: 'Documents', href: 'document-storage.html' },
                    { label: 'Fuel Calculator', href: 'fuel-calculator.html' }
                ]
            },
            { label: 'Settings', href: 'settings.html', icon: 'settings' }
        ],
        rental: [
            { label: 'Dashboard', href: 'rental-dashboard.html', icon: 'dashboard' },
            { label: 'Create Work Order', href: 'create-job.html', icon: 'createJob' },
            { label: 'Work Orders', href: 'work-orders.html', icon: 'workOrders' },
            {
                label: 'Management',
                icon: 'management',
                submenu: [
                    { label: 'Invoices', href: 'rental-invoices.html' },
                    { label: 'Contracts', href: 'contract-management.html' },
                    { label: 'Equipment', href: 'equipment-tracking.html' },
                    { label: 'Vendor Comparison', href: 'vendor-comparison.html' },
                    { label: 'Recurring Jobs', href: 'recurring-jobs.html' }
                ]
            },
            {
                label: 'Tools',
                icon: 'tools',
                submenu: [
                    { label: 'Reports', href: 'reports.html' },
                    { label: 'Daily Log', href: 'daily-log.html' },
                    { label: 'Documents', href: 'document-storage.html' },
                    { label: 'Bulk Import', href: 'bulk-import.html' },
                    { label: 'Messages', href: 'chat.html' }
                ]
            },
            { label: 'Alerts', href: 'alerts-settings.html', icon: 'alerts' },
            { label: 'Settings', href: 'settings.html', icon: 'settings' }
        ],
        vendor: [
            { label: 'Dashboard', href: 'vendor-dashboard.html', icon: 'dashboard' },
            { label: 'Work Orders', href: 'work-orders.html', icon: 'workOrders' },
            { label: 'Create Work Order', href: 'create-job.html', icon: 'createJob' },
            { label: 'Daily Log', href: 'daily-log.html', icon: 'settings' },
            {
                label: 'Operations',
                icon: 'management',
                submenu: [
                    { label: 'Dispatch Board', href: 'dispatch-board.html' },
                    { label: 'Route Optimization', href: 'route-optimization.html' },
                    { label: 'Worker Metrics', href: 'worker-metrics.html' },
                    { label: 'Inventory', href: 'inventory-management.html' }
                ]
            },
            {
                label: 'Business',
                icon: 'analytics',
                submenu: [
                    { label: 'Invoices', href: 'invoices.html' },
                    { label: 'Payments', href: 'payments.html' },
                    { label: 'Profitability', href: 'profitability.html' },
                    { label: 'Subcontractors', href: 'subcontractor-management.html' },
                    { label: 'Job Bidding', href: 'job-bidding.html' },
                    { label: 'SLA Management', href: 'sla-management.html' }
                ]
            },
            {
                label: 'Tools',
                icon: 'tools',
                submenu: [
                    { label: 'Messages', href: 'chat.html' },
                    { label: 'Documents', href: 'document-storage.html' },
                    { label: 'Fuel Calculator', href: 'fuel-calculator.html' },
                    { label: 'Equipment', href: 'equipment-tracking.html' }
                ]
            },
            { label: 'Alerts', href: 'alerts-settings.html', icon: 'alerts' },
            { label: 'Settings', href: 'settings.html', icon: 'settings' }
        ],
        admin: [
            { label: 'Dashboard', href: 'admin-dashboard.html', icon: 'dashboard' },
            { label: 'Work Orders', href: 'work-orders.html', icon: 'workOrders' },
            { label: 'Messages', href: 'chat.html', icon: 'chat' },
            {
                label: 'Management',
                icon: 'management',
                submenu: [
                    { label: 'Company Management', href: 'company-management.html' },
                    { label: 'Analytics', href: 'analytics.html' },
                    { label: 'System Health', href: 'system-health.html' },
                    { label: 'Feature Flags', href: 'admin-feature-flags.html' },
                    { label: 'Audit Log', href: 'audit-log.html' }
                ]
            },
            { label: 'Settings', href: 'settings.html', icon: 'settings' }
        ]
    };

    function generateNavbar() {
        var user;
        try {
            user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
        } catch(e) {
            user = null;
        }
        var role = (user && user.role) ? user.role : 'rental';
        var navItems = NAV_STRUCTURE[role] || NAV_STRUCTURE.rental;
        var currentPage = window.location.pathname.split('/').pop() || 'index.html';

        var html = '<div class="aether-navbar">';

        // Logo
        html += '<a href="index.html" class="aether-navbar-logo">';
        html += '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/></svg>';
        html += '<span>FleetConnect</span>';
        html += '</a>';

        // Center nav
        html += '<div class="aether-navbar-center">';
        for (var i = 0; i < navItems.length; i++) {
            var item = navItems[i];
            var isActive = item.href && item.href === currentPage ? 'active' : '';

            if (item.submenu) {
                html += '<div class="aether-dropdown">';
                html += '<a class="aether-nav-link">' + item.label + ' ▼</a>';
                html += '<div class="aether-dropdown-menu">';
                for (var j = 0; j < item.submenu.length; j++) {
                    var sub = item.submenu[j];
                    var subActive = sub.href === currentPage ? 'active' : '';
                    html += '<a href="' + sub.href + '" class="aether-dropdown-item ' + subActive + '">' + sub.label + '</a>';
                }
                html += '</div>';
                html += '</div>';
            } else if (item.href) {
                html += '<a href="' + item.href + '" class="aether-nav-link ' + isActive + '">' + item.label + '</a>';
            }
        }
        html += '</div>';

        // Right section
        html += '<div class="aether-navbar-right">';
        html += '<div class="aether-notification-bell" title="Notifications">';
        html += '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 18px; height: 18px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>';
        html += '<span class="aether-notification-badge" style="display: none;">3</span>';
        html += '</div>';
        html += '<div class="aether-user-avatar" title="User Menu">👤</div>';
        html += '</div>';

        html += '</div>';
        return html;
    }

    // Inject navbar into page
    function initNavbar() {
        var navContainer = document.getElementById('aetherNavbar');
        if (!navContainer) {
            navContainer = document.createElement('nav');
            navContainer.id = 'aetherNavbar';
            document.body.insertBefore(navContainer, document.body.firstChild);
        }
        navContainer.innerHTML = generateNavbar();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavbar);
    } else {
        initNavbar();
    }
})();
