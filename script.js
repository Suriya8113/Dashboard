 const pages = {
            dashboard: `
                <div class="page-header">
                    <h1 class="page-title">Welcome back, Suriya!</h1>
                    <div class="page-subtitle">Here's what's happening with your business today.</div>
                </div>
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-header">
                            <div class="stat-title">Total Revenue</div>
                            <div class="stat-icon blue"><i class="fas fa-dollar-sign"></i></div>
                        </div>
                        <div class="stat-value">$45,231</div>
                        <div class="stat-change positive">+12% from last month</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-header">
                            <div class="stat-title">New Customers</div>
                            <div class="stat-icon green"><i class="fas fa-users"></i></div>
                        </div>
                        <div class="stat-value">1,234</div>
                        <div class="stat-change positive">+8% from last month</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-header">
                            <div class="stat-title">Orders</div>
                            <div class="stat-icon purple"><i class="fas fa-shopping-cart"></i></div>
                        </div>
                        <div class="stat-value">856</div>
                        <div class="stat-change negative">-3% from last month</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-header">
                            <div class="stat-title">Conversion Rate</div>
                            <div class="stat-icon orange"><i class="fas fa-percentage"></i></div>
                        </div>
                        <div class="stat-value">3.24%</div>
                        <div class="stat-change positive">+0.5% from last month</div>
                    </div>
                </div>
                <div class="content-grid">
                    <div class="chart-container">
                        <h2>Revenue by Month</h2>
                        <canvas id="revenueChart"></canvas>
                    </div>
                    <div class="content-card">
                        <div class="card-header">
                            <h3 class="card-title">Recent Activity</h3>
                        </div>
                        <div class="card-body">
                            <div class="activity-item">
                                <div class="activity-avatar">SJ</div>
                                <div class="activity-content">
                                    <div class="activity-text">New order received from Sarah Johnson</div>
                                    <div class="activity-time">2 minutes ago</div>
                                </div>
                            </div>
                            <div class="activity-item">
                                <div class="activity-avatar">OR</div>
                                <div class="activity-content">
                                    <div class="activity-text">Payment processed for Order #1234</div>
                                    <div class="activity-time">15 minutes ago</div>
                                </div>
                            </div>
                            <div class="activity-item">
                                <div class="activity-avatar">MC</div>
                                <div class="activity-content">
                                    <div class="activity-text">New user registration: Mike Chen</div>
                                    <div class="activity-time">1 hour ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="analytics-card">
                    <div class="analytics-header">
                        <h3 class="analytics-title">User Analytics</h3>
                        <select class="analytics-period">
                            <option>Last 30 days</option>
                            <option>Last 7 days</option>
                            <option>Last 90 days</option>
                        </select>
                    </div>
                    <div class="user-stats-grid">
                        <div class="user-stat-item">
                            <div class="user-stat-value">2,847</div>
                            <div class="user-stat-label">Total Users</div>
                        </div>
                        <div class="user-stat-item">
                            <div class="user-stat-value">1,234</div>
                            <div class="user-stat-label">Active Users</div>
                        </div>
                        <div class="user-stat-item">
                            <div class="user-stat-value">156</div>
                            <div class="user-stat-label">New Users</div>
                        </div>
                        <div class="user-stat-item">
                            <div class="user-stat-value">43.5%</div>
                            <div class="user-stat-label">Engagement Rate</div>
                        </div>
                    </div>
                </div>
            `,
            analytics: `
                <div class="page-header">
                    <h1 class="page-title">Analytics</h1>
                    <div class="page-subtitle">Insights into your business performance</div>
                </div>
                <div class="content-grid">
                    <div class="chart-container">
                        <h2>Sales Trends</h2>
                        <canvas id="analyticsChart"></canvas>
                    </div>
                    <div class="content-card">
                        <div class="card-header">
                            <h3 class="card-title">Top Products</h3>
                        </div>
                        <div class="card-body">
                            <div class="activity-item">
                                <div class="activity-avatar">TV</div>
                                <div class="activity-content">
                                    <div class="activity-text">Smart TV 55" - 120 units sold</div>
                                    <div class="activity-time">$71,880 revenue</div>
                                </div>
                            </div>
                            <div class="activity-item">
                                <div class="activity-avatar">SP</div>
                                <div class="activity-content">
                                    <div class="activity-text">Smartphone - 95 units sold</div>
                                    <div class="activity-time">$75,905 revenue</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            users: `
                <div class="page-header">
                    <h1 class="page-title">Users</h1>
                    <div class="page-subtitle">Manage your user accounts</div>
                </div>
                <div class="content-card">
                    <div class="card-header">
                        <h3 class="card-title">User List</h3>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Suriya</td>
                                    <td>Suriya@gmail.com</td>
                                    <td>Admin</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Steve Rogers</td>
                                    <td>Stev@gmail.com</td>
                                    <td>User</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `,
            orders: `
                <div class="page-header">
                    <h1 class="page-title">Orders</h1>
                    <div class="page-subtitle">Track and manage customer orders</div>
                </div>
                <div class="content-card">
                    <div class="card-header">
                        <h3 class="card-title">Recent Orders</h3>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Product</th>
                                    <th>Customer</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1001</td>
                                    <td>Smart TV</td>
                                    <td>Bruce</td>
                                    <td>Shipped</td>
                                </tr>
                                <tr>
                                    <td>1002</td>
                                    <td>Laptop</td>
                                    <td>Steve</td>
                                    <td>Pending</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `,
            products: `
                <div class="page-header">
                    <h1 class="page-title">Products</h1>
                    <div class="page-subtitle">Manage your electronics inventory</div>
                </div>
                <div class="content-card">
                    <div class="card-header">
                        <h3 class="card-title">Product List</h3>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Smart TV 55"</td>
                                    <td>TV</td>
                                    <td>$599</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Smartphone</td>
                                    <td>Phone</td>
                                    <td>$799</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `,
            payments: `
                <div class="page-header">
                    <h1 class="page-title">Payments</h1>
                    <div class="page-subtitle">Monitor payment transactions</div>
                </div>
                <div class="content-card">
                    <div class="card-header">
                        <h3 class="card-title">Payment Transactions</h3>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Transaction ID</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>TX123</td>
                                    <td>$599</td>
                                    <td>2025-07-20</td>
                                    <td>Completed</td>
                                </tr>
                                <tr>
                                    <td>TX124</td>
                                    <td>$799</td>
                                    <td>2025-07-21</td>
                                    <td>Pending</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `,
            settings: `
                <div class="page-header">
                    <h1 class="page-title">Settings</h1>
                    <div class="page-subtitle">Configure your store settings</div>
                </div>
                <div class="content-card">
                    <div class="card-header">
                        <h3 class="card-title">System Settings</h3>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="storeName">Store Name</label>
                            <input type="text" id="storeName" value="Electronics Hub">
                        </div>
                     <div class="form-group">
    <label for="currency">Currency</label>
    <select id="currency">
        <option value="INR" selected>INR</option>
        <option value="USD">USD</option>
        <option value="AED">AED</option>
    </select>
</div>

                        <button class="btn" onclick="saveSettings()">Save Settings</button>
                    </div>
                </div>
            `,
            help: `
                <div class="page-header">
                    <h1 class="page-title">Help</h1>
                    <div class="page-subtitle">Get support and guidance</div>
                </div>
                <div class="content-card">
                    <div class="card-header">
                        <h3 class="card-title">Support</h3>
                    </div>
                    <div class="card-body">
                        <p>For assistance, contact our support team at support@electronics.com.</p>
                        <p>FAQs:</p>
                        <ul>
                            <li>How to add a new product?</li>
                            <li>How to process refunds?</li>
                            <li>How to update user roles?</li>
                        </ul>
                    </div>
                </div>
            `
        };

        let isMobile = window.innerWidth <= 768;
        let sidebarCollapsed = false;

        const sidebarToggle = document.getElementById("sidebarToggle");
        const sidebar = document.getElementById("sidebar");
        const mainContent = document.getElementById("mainContent");
        const userMenu = document.getElementById("userMenu");
        const profileDropdown = document.getElementById("profileDropdown");
        const userAvatar = document.getElementById("userAvatar");
        const userName = document.getElementById("userName");
        const userRole = document.getElementById("userRole");

        function loadPage(page) {
            mainContent.innerHTML = pages[page];
            document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("active"));
            document.querySelector(`.menu-item[onclick="loadPage('${page}')"]`).classList.add("active");
            if (page === 'dashboard' || page === 'analytics') {
                initChart(page);
            }
            if (isMobile) {
                sidebar.classList.remove("mobile-visible");
            }
        }

        function initChart(page) {
            const ctx = document.getElementById(page === 'dashboard' ? 'revenueChart' : 'analyticsChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Revenue',
                        data: [35000, 45000, 28000, 32000, 40000, 38000],
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        function saveSettings() {
            alert('Settings saved successfully!');
        }

        sidebarToggle.addEventListener("click", () => {
            if (isMobile) {
                sidebar.classList.toggle("mobile-visible");
            } else {
                sidebarCollapsed = !sidebarCollapsed;
                sidebar.classList.toggle("collapsed");
                mainContent.classList.toggle("expanded");
            }
        });

        window.addEventListener("resize", () => {
            const wasMobile = isMobile;
            isMobile = window.innerWidth <= 768;

            if (wasMobile !== isMobile) {
                if (isMobile) {
                    sidebar.classList.remove("collapsed");
                    sidebar.classList.add("mobile-hidden");
                    mainContent.classList.remove("expanded");
                } else {
                    sidebar.classList.remove("mobile-hidden", "mobile-visible");
                    if (sidebarCollapsed) {
                        sidebar.classList.add("collapsed");
                        mainContent.classList.add("expanded");
                    }
                }
            }
        });

        document.addEventListener("click", (e) => {
            if (isMobile && sidebar.classList.contains("mobile-visible")) {
                if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                    sidebar.classList.remove("mobile-visible");
                }
            }
            if (userMenu.classList.contains("active")) {
                if (!userMenu.contains(e.target)) {
                    userMenu.classList.remove("active");
                }
            }
        });

        userMenu.addEventListener("click", (e) => {
            e.stopPropagation();
            userMenu.classList.toggle("active");
        });

        profileDropdown.querySelectorAll(".profile-item").forEach((item) => {
            item.addEventListener("click", (e) => {
                e.stopPropagation();
                const name = item.dataset.name;
                const initial = item.dataset.initial;
                const role = item.dataset.role;
                userName.textContent = name;
                userRole.textContent = role;
                userAvatar.textContent = initial;
                userMenu.classList.remove("active");
                const pageTitle = document.querySelector(".page-title");
                if (pageTitle) {
                    pageTitle.textContent = `Welcome back, ${name}!`;
                }
            });
        });

        document.querySelectorAll(".menu-item").forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                document.querySelectorAll(".menu-item").forEach((menuItem) => {
                    menuItem.classList.remove("active");
                });
                item.classList.add("active");
            });
        });

        window.onload = () => {
            if (isMobile) {
                sidebar.classList.add("mobile-hidden");
            }
            initChart('dashboard');
        };
