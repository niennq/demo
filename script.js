// Sample product data
const products = [
    {
        id: 1,
        category: 'ai',
        title: 'ChatGPT Plus 3 tháng',
        subtitle: 'Chỉ với 500k / 3 tháng.',
        image: '/assets/images/chatGPT.jpg',
            originalPrice: '180,000đ / 3 tháng',
            salePrice: '100,000đ / 3 tháng',
            discount: 'GIẢM LÊN TỚI 45%',
        processingTime: 'trong vòng 24h',
        version: 'ChatGPT Plus',
        description: 'Truy cập ChatGPT Plus với tốc độ cao và nhiều tính năng nâng cao',
        features: [
            'Truy cập ưu tiên ngay cả khi có nhu cầu cao',
            'Phản hồi nhanh hơn từ ChatGPT',
            'Truy cập sớm vào các tính năng và cải tiến mới',
            'Giao diện web ổn định',
            'Không giới hạn hình ảnh và file đính kèm'
        ],
        whyBuy: 'ChatGPT Plus giúp bạn làm việc hiệu quả hơn với AI thông minh nhất hiện tại. Phù hợp cho sinh viên, freelancer và các chuyên gia.',
        sku: 'CHATGPT_PLUS'
    },
    {
        id: 2,
        category: 'design',
            title: 'Canva Pro',
            subtitle: 'Canva Pro giá tốt nhất thị trường',
            image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
            originalPrice: '10,000đ / 1 tháng',
            salePrice: '50,000đ / 6 tháng',
            discount: 'GIẢM LÊN TỚI 80%',
            processingTime: 'trong vòng 24h',
            version: 'Canva Pro',
            description: 'Canva Pro bản quyền, hỗ trợ đầy đủ tính năng thiết kế chuyên nghiệp.',
            features: [
                'Tặng kèm Canva 1 tháng khi mua gói khác',
                '6 tháng: 50k',
                '1 năm: 80k',
                'Vĩnh viễn: 140k',
                'Kho template, stock ảnh, video khổng lồ',
                'Hỗ trợ team, chia sẻ dự án',
                'Tính năng AI thiết kế nhanh'
            ],
            whyBuy: 'Canva Pro giúp bạn thiết kế chuyên nghiệp, tiết kiệm chi phí, phù hợp cho cá nhân và doanh nghiệp.',
            sku: 'CANVA_PRO'
    },
    {
        id: 3,
        category: 'design',
            title: 'Netflix Chính Chủ',
            subtitle: 'Netflix chính chủ giá tốt',
            image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
            originalPrice: '88,000đ / 1 tháng',
            salePrice: '60,000đ / 1 tháng',
            discount: 'GIẢM LÊN TỚI 32%',
            processingTime: 'trong vòng 24h',
            version: 'Netflix Chính Chủ',
            description: 'Netflix chính chủ, dùng cho máy tính và TV, không lo bị out.',
            features: [
                '1 tháng: 60k',
                '3 tháng: 120k',
                '6 tháng: 190k',
                '1 năm: 290k',
                'Xem phim chất lượng cao, không quảng cáo',
                'Hỗ trợ nhiều thiết bị',
                'Chính chủ, không lo bị out'
            ],
            whyBuy: 'Netflix chính chủ giúp bạn xem phim chất lượng cao, ổn định, không lo bị out, giá tốt nhất.',
            sku: 'NETFLIX_CHINH_CHU'
    },
    {
        id: 4,
        category: 'ai',
            title: 'Gemini Pro + VEO3',
            subtitle: 'Gemini Pro + VEO3 giá tốt',
            image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
            originalPrice: '50,000đ / 1 tháng',
            salePrice: '25,000đ / 1 tháng',
            discount: 'GIẢM LÊN TỚI 50%',
            processingTime: 'trong vòng 24h',
            version: 'Gemini Pro + VEO3',
            description: 'Gemini Pro + VEO3 bản quyền, hỗ trợ AI đa phương tiện, giá tốt nhất.',
            features: [
                '1 tháng: 25k',
                'Xử lý văn bản, hình ảnh, video',
                'Tích hợp Google Workspace',
                'Hỗ trợ nhiều ngôn ngữ',
                'VEO3 tặng kèm'
            ],
            whyBuy: 'Gemini Pro + VEO3 giúp bạn trải nghiệm AI mạnh mẽ, giá tốt, hỗ trợ đa phương tiện.',
            sku: 'GEMINI_VEO3'
    },
    {
        id: 5,
        category: 'youtube',
            title: 'YouTube Premium',
            subtitle: 'YouTube Premium giá tốt nhất',
            image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
            originalPrice: '28,000đ / 1 tháng',
            salePrice: '25,000đ / 1 tháng',
            discount: 'GIẢM LÊN TỚI 10%',
            processingTime: 'trong vòng 24h',
            version: 'YouTube Premium',
            description: 'YouTube Premium bản quyền, không quảng cáo, nghe nhạc offline.',
            features: [
                '1 tháng: 25k',
                '3 tháng: 60k',
                '6 tháng: 110k',
                '1 năm: 180k',
                'Không quảng cáo',
                'Nghe nhạc offline',
                'YouTube Music Premium đi kèm'
            ],
            whyBuy: 'YouTube Premium giúp bạn trải nghiệm xem video không quảng cáo, nghe nhạc offline, giá tốt nhất.',
            sku: 'YOUTUBE_PREMIUM'
    },
    {
        id: 6,
        category: 'design',
            title: 'Capcut Pro',
            subtitle: 'Capcut Pro giá tốt nhất',
            image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
            originalPrice: '50,000đ / 1 tháng',
            salePrice: '25,000đ / 1 tháng',
            discount: 'GIẢM LÊN TỚI 50%',
            processingTime: 'trong vòng 24h',
            version: 'Capcut Pro',
            description: 'Capcut Pro bản quyền, hỗ trợ đầy đủ tính năng chỉnh sửa video chuyên nghiệp.',
            features: [
                '1 tháng: 25k',
                '1 năm: 220k',
                'Chỉnh sửa video chuyên nghiệp',
                'Kho hiệu ứng, template phong phú',
                'Hỗ trợ xuất video chất lượng cao'
            ],
            whyBuy: 'Capcut Pro giúp bạn chỉnh sửa video chuyên nghiệp, giá tốt nhất, hỗ trợ đầy đủ tính năng.',
            sku: 'CAPCUT_PRO'
    }
    // ,
    // {
    //     id: 7,
    //     category: 'premium',
    //         ...existing code...
    // },
    // {
    //     id: 8,
    //     category: 'premium',
    //         ...existing code...
    // }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const productsContainer = document.getElementById('productsContainer');
const categoryLinks = document.querySelectorAll('.category-link');
const productModal = new bootstrap.Modal(document.getElementById('productModal'));

// State
let currentCategory = 'all';
let currentSearchTerm = '';

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
});

// Event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Category filtering
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            setActiveCategory(this);
            filterByCategory(category);
        });
    });
}

// Search functionality
function handleSearch() {
    currentSearchTerm = searchInput.value.trim().toLowerCase();
    renderProducts();
}

// Category filtering
function setActiveCategory(activeLink) {
    categoryLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

function filterByCategory(category) {
    currentCategory = category;
    renderProducts();
}

// Product rendering
function renderProducts() {
    const filteredProducts = getFilteredProducts();
    
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `
            <div class="col-12">
                <div class="text-center py-5">
                    <i class="fas fa-search fa-3x text-muted mb-3"></i>
                    <h4 class="text-muted">Không tìm thấy sản phẩm</h4>
                    <p class="text-muted">Vui lòng thử từ khóa khác hoặc chọn danh mục khác.</p>
                </div>
            </div>
        `;
        return;
    }

    productsContainer.innerHTML = filteredProducts.map(product => `
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="product-card hover-scale fade-in-up" data-product-id="${product.id}">
                <div class="product-card-header">
                    <div class="discount-badge">${product.discount}</div>
                    <h5 class="product-title">${product.title}</h5>
                    <p class="product-subtitle">${product.subtitle}</p>
                    <div class="product-image-container">
                        <img src="${product.image}" alt="${product.title}" class="product-image">
                    </div>
                </div>
                <div class="product-body">
                    <div class="product-pricing">
                        <span class="price-original">${product.originalPrice}</span>
                        <span class="price-sale">${product.salePrice}</span>
                    </div>
                    <button class="btn quick-view-btn w-100" onclick="showProductDetails(${product.id})">
                        <i class="fas fa-eye me-2"></i>Xem Nhanh
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function getFilteredProducts() {
    return products.filter(product => {
        const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
        const matchesSearch = currentSearchTerm === '' || 
            product.title.toLowerCase().includes(currentSearchTerm) ||
            product.description.toLowerCase().includes(currentSearchTerm) ||
            product.features.some(feature => feature.toLowerCase().includes(currentSearchTerm));
        
        return matchesCategory && matchesSearch;
    });
}

// Product details modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = product.title;
    
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-5">
                <div class="text-center mb-4">
                    <img src="${product.image}" alt="${product.title}" class="img-fluid rounded shadow" style="max-width: 200px;">
                </div>
                
                <div class="price-info">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="price-original-large">${product.originalPrice}</span>
                        <span class="price-large">${product.salePrice}</span>
                    </div>
                    <div class="savings text-center">
                        <i class="fas fa-tags me-1"></i>${product.discount}
                    </div>
                </div>

                <div class="product-detail-section">
                    <h6 class="section-title">Thông tin sản phẩm</h6>
                    <p><strong>SKU:</strong> ${product.sku}</p>
                    <p><strong>Phiên bản:</strong> ${product.version}</p>
                    <p><strong>Thời gian xử lý:</strong> ${product.processingTime}</p>
                    <p><strong>Hình thức xử lý:</strong> Nhắn thông tin qua Zalo / WhatsApp.</p>
                </div>

                <div class="contact-buttons">
                    <a href="https://zalo.me/0123456789" class="btn btn-zalo btn-sm">
                        <i class="fab fa-telegram me-2"></i>Zalo
                    </a>
                    <a href="https://wa.me/0123456789" class="btn btn-whatsapp btn-sm">
                        <i class="fab fa-whatsapp me-2"></i>WhatsApp
                    </a>
                    <button class="btn btn-purchase btn-sm flex-fill">
                        <i class="fas fa-shopping-cart me-2"></i>Mua Ngay ${product.salePrice}
                    </button>
                </div>
            </div>
            
            <div class="col-md-7">
                <div class="product-detail-section">
                    <h6 class="section-title">Mô tả sản phẩm</h6>
                    <p>${product.description}</p>
                </div>

                <div class="product-detail-section">
                    <h6 class="section-title">Tính năng nổi bật</h6>
                    <ul class="list-unstyled">
                        ${product.features.map(feature => `
                            <li class="mb-2">
                                <i class="fas fa-check-circle text-success me-2"></i>${feature}
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div class="product-detail-section">
                    <h6 class="section-title">Tại sao nên mua?</h6>
                    <p>${product.whyBuy}</p>
                </div>

                <div class="product-detail-section">
                    <h6 class="section-title">So sánh bản quyền vs. crack</h6>
                    <div class="table-responsive">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th class="feature-name">Tiêu chí</th>
                                    <th>Bản quyền</th>
                                    <th>Crack</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="feature-name">Tính ổn định</td>
                                    <td class="text-success">Mượt mà, cập nhật chính thức</td>
                                    <td class="text-danger">Dễ lỗi, treo máy</td>
                                </tr>
                                <tr>
                                    <td class="feature-name">Cập nhật</td>
                                    <td class="text-success">Tự động lên phiên bản mới</td>
                                    <td class="text-danger">Không cập nhật được</td>
                                </tr>
                                <tr>
                                    <td class="feature-name">Bảo mật</td>
                                    <td class="text-success">An toàn, không mã độc</td>
                                    <td class="text-danger">Nguy cơ virus, trojan</td>
                                </tr>
                                <tr>
                                    <td class="feature-name">Tính năng</td>
                                    <td class="text-success">100% AI & plugin chính hãng</td>
                                    <td class="text-danger">Nhiều tính năng bị vô hiệu</td>
                                </tr>
                                <tr>
                                    <td class="feature-name">Hỗ trợ</td>
                                    <td class="text-success">Adobe & maosoft 1:1</td>
                                    <td class="text-danger">Tự xử lý</td>
                                </tr>
                                <tr>
                                    <td class="feature-name">Pháp lý</td>
                                    <td class="text-success">Hợp pháp, yên tâm</td>
                                    <td class="text-danger">Vi phạm bản quyền</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;

    productModal.show();
}

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// Add some animation delays for staggered effect
function addStaggerAnimation() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Call animation after rendering
const originalRenderProducts = renderProducts;
renderProducts = function() {
    originalRenderProducts();
    setTimeout(addStaggerAnimation, 50);
};

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'btn btn-primary position-fixed';
backToTopBtn.style.cssText = `
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: none;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
`;
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Loading states
function showLoading() {
    productsContainer.innerHTML = `
        <div class="col-12">
            <div class="loading">
                <i class="fas fa-spinner"></i>
                <p>Đang tải sản phẩm...</p>
            </div>
        </div>
    `;
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Lỗi:', e.error);
});

// Performance optimization: Debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Replace the original search handler with debounced version
const debouncedSearch = debounce(handleSearch, 300);
searchInput.removeEventListener('input', handleSearch);
searchInput.addEventListener('input', debouncedSearch);

// Add keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    // Close modal with Escape key
    if (e.key === 'Escape' && productModal._isShown) {
        productModal.hide();
    }
    
    // Quick search with Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
});

// Initialize tooltips and popovers if needed
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});