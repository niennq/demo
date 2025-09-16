// Sample product data
const products = [
    {
        id: 1,
        category: 'ai',
        title: 'ChatGPT Plus',
        subtitle: 'Chỉ với 3,000đ cho 1 ngày',
        image: 'https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
        originalPrice: '21,000đ',
        salePrice: '3,000đ',
        discount: 'GIẢM LÊN TỚI 67%',
        processingTime: '15-60 phút',
        version: 'ChatGPT Plus',
        description: 'Truy cập ChatGPT Plus với tốc độ cao và nhiều tính năng nâng cao',
        features: [
            'Truy cập ưu tiên ngay cả khi có nhu cầu cao',
            'Phản hồi nhanh hơn từ ChatGPT',
            'Truy cập sớm vào các tính năng và cải tiến mới',
            'Giao diện web ổn định'
        ],
        whyBuy: 'ChatGPT Plus giúp bạn làm việc hiệu quả hơn với AI thông minh nhất hiện tại. Phù hợp cho sinh viên, freelancer và các chuyên gia.',
        sku: 'CHATGPT_PLUS',
        comparisonData: {
            title: 'So sánh ChatGPT Plus vs. ChatGPT Free',
            headers: ['Tiêu chí', 'ChatGPT Plus', 'ChatGPT Free'],
            rows: [
                {
                    feature: 'Tốc độ phản hồi',
                    licensed: 'Nhanh, ưu tiên cao',
                    free: 'Chậm khi có nhiều người dùng'
                },
                {
                    feature: 'Khả năng truy cập',
                    licensed: 'Luôn có thể truy cập',
                    free: 'Bị giới hạn khi quá tải'
                },
                {
                    feature: 'Tính năng mới',
                    licensed: 'Truy cập sớm các tính năng mới',
                    free: 'Chờ đợi phát hành công khai'
                },
                {
                    feature: 'Model AI',
                    licensed: 'GPT-4 và các model mới nhất',
                    free: 'GPT-3.5 cơ bản'
                },
                {
                    feature: 'Hỗ trợ',
                    licensed: 'Hỗ trợ ưu tiên từ OpenAI',
                    free: 'Hỗ trợ cộng đồng'
                }
            ]
        }
    },
    {
        id: 2,
        category: 'design',
        title: 'Adobe Creative Cloud',
        subtitle: 'Chỉ với 2,000đ cho 1 ngày',
        image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
        originalPrice: '21,000đ',
        salePrice: '2,000đ',
        discount: 'GIẢM LÊN TỚI 90%',
        processingTime: '15-60 phút',
        version: 'Adobe All Apps',
        description: 'Gói phần mềm Creative Cloud đầy đủ với hơn 20 ứng dụng chuyên nghiệp',
        features: [
            'Trên 20 ứng dụng bao gồm Photoshop, Illustrator, Premiere Pro',
            'After Effects, Lightroom, InDesign, Acrobat Pro DC',
            'XD, Audition, và nhiều hơn nữa',
            'Đồng bộ cloud và chia sẻ dự án'
        ],
        whyBuy: 'Giải pháp hoàn hảo cho designer, photographer và video editor chuyên nghiệp.',
        sku: 'ADOBE_CREATIVE_CLOUD',
        comparisonData: {
            title: 'So sánh bản quyền vs. crack',
            headers: ['Tiêu chí', 'Bản quyền', 'Crack'],
            rows: [
                {
                    feature: 'Tính ổn định',
                    licensed: 'Mượt mà, cập nhật chính thức',
                    free: 'Dễ lỗi, treo máy'
                },
                {
                    feature: 'Cập nhật',
                    licensed: 'Tự động lên phiên bản mới',
                    free: 'Không cập nhật được'
                },
                {
                    feature: 'Bảo mật',
                    licensed: 'An toàn, không mã độc',
                    free: 'Nguy cơ virus, trojan'
                },
                {
                    feature: 'Tính năng',
                    licensed: '100% AI & plugin chính hãng',
                    free: 'Nhiều tính năng bị vô hiệu'
                },
                {
                    feature: 'Hỗ trợ',
                    licensed: 'Adobe & maosoft 1:1',
                    free: 'Tự xử lý'
                },
                {
                    feature: 'Pháp lý',
                    licensed: 'Hợp pháp, yên tâm',
                    free: 'Vi phạm bản quyền'
                }
            ]
        }
    },
    {
        id: 3,
        category: 'design',
        title: 'Github Copilot',
        subtitle: 'Chỉ với 1,200đ cho 1 ngày',
        image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
        originalPrice: '10,000đ',
        salePrice: '600đ',
        discount: 'GIẢM LÊN TỚI 94%',
        processingTime: '15-30 phút',
        version: 'Github Copilot Pro',
        description: 'AI programming assistant giúp code nhanh hơn và thông minh hơn',
        features: [
            'Gợi ý code thông minh với AI',
            'Hỗ trợ nhiều ngôn ngữ lập trình',
            'Tích hợp với VS Code và IDE phổ biến',
            'Tăng tốc quá trình development'
        ],
        whyBuy: 'Công cụ không thể thiếu cho developer muốn tăng productivity và học hỏi cách code tốt hơn.',
        sku: 'GITHUB_COPILOT',
        comparisonData: {
            title: 'So sánh GitHub Copilot vs. Free alternatives',
            headers: ['Tiêu chí', 'GitHub Copilot', 'Free alternatives'],
            rows: [
                {
                    feature: 'Độ chính xác',
                    licensed: 'AI được training trên code chất lượng cao',
                    free: 'Độ chính xác thấp hơn'
                },
                {
                    feature: 'Ngôn ngữ hỗ trợ',
                    licensed: 'Hỗ trợ đầy đủ mọi ngôn ngữ',
                    free: 'Giới hạn ngôn ngữ'
                },
                {
                    feature: 'Tích hợp IDE',
                    licensed: 'Tích hợp mượt mà với VS Code, JetBrains',
                    free: 'Tích hợp hạn chế'
                },
                {
                    feature: 'Bảo mật code',
                    licensed: 'Bảo mật cao, không lưu trữ code',
                    free: 'Không đảm bảo bảo mật'
                },
                {
                    feature: 'Cập nhật',
                    licensed: 'Cập nhật model AI thường xuyên',
                    free: 'Ít cập nhật'
                }
            ]
        }
    },
    {
        id: 4,
        category: 'ai',
        title: 'Gemini Advanced',
        subtitle: 'Chỉ với 1,500đ cho 1 ngày',
        image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
        originalPrice: '15,000đ',
        salePrice: '1,500đ',
        discount: 'GIẢM LÊN TỚI 90%',
        processingTime: '15-30 phút',
        version: 'Gemini Ultra',
        description: 'AI model mạnh nhất của Google với khả năng xử lý đa phương tiện',
        features: [
            'Xử lý văn bản, hình ảnh và code',
            'Phản hồi nhanh và chính xác cao',
            'Tích hợp với Google Workspace',
            'Hỗ trợ nhiều ngôn ngữ'
        ],
        whyBuy: 'Lựa chọn tuyệt vời thay thế ChatGPT với nhiều tính năng độc đáo từ Google.',
        sku: 'GEMINI_ADVANCED',
        comparisonData: {
            title: 'So sánh Gemini Advanced vs. Gemini Free',
            headers: ['Tiêu chí', 'Gemini Advanced', 'Gemini Free'],
            rows: [
                {
                    feature: 'Model AI',
                    licensed: 'Gemini Ultra - model mạnh nhất',
                    free: 'Gemini Pro - model cơ bản'
                },
                {
                    feature: 'Giới hạn sử dụng',
                    licensed: 'Không giới hạn câu hỏi',
                    free: 'Giới hạn số lượng câu hỏi'
                },
                {
                    feature: 'Xử lý đa phương tiện',
                    licensed: 'Xử lý hình ảnh, video, audio chất lượng cao',
                    free: 'Xử lý cơ bản'
                },
                {
                    feature: 'Tích hợp Google',
                    licensed: 'Tích hợp sâu với Google Workspace',
                    free: 'Tích hợp hạn chế'
                },
                {
                    feature: 'Ưu tiên xử lý',
                    licensed: 'Xử lý ưu tiên, tốc độ cao',
                    free: 'Tốc độ chậm khi quá tải'
                }
            ]
        }
    },
    {
        id: 5,
        category: 'youtube',
        title: 'YouTube Premium',
        subtitle: 'Chỉ với 600đ cho 1 ngày',
        image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
        originalPrice: '2,000đ',
        salePrice: '2,000đ',
        discount: 'GIẢM LÊN TỚI 45%',
        processingTime: '5-15 phút',
        version: 'YouTube Premium Family',
        description: 'Xem YouTube không quảng cáo và nghe nhạc offline',
        features: [
            'Không có quảng cáo trên YouTube',
            'Phát video khi tắt màn hình',
            'Tải video để xem offline',
            'YouTube Music Premium đi kèm'
        ],
        whyBuy: 'Trải nghiệm YouTube tối ưu nhất cho người dùng thường xuyên.',
        sku: 'YOUTUBE_PREMIUM',
        comparisonData: {
            title: 'So sánh YouTube Premium vs. YouTube Free',
            headers: ['Tiêu chí', 'YouTube Premium', 'YouTube Free'],
            rows: [
                {
                    feature: 'Quảng cáo',
                    licensed: 'Không có quảng cáo',
                    free: 'Có quảng cáo trước và giữa video'
                },
                {
                    feature: 'Phát nền',
                    licensed: 'Phát video khi tắt màn hình',
                    free: 'Dừng khi tắt màn hình'
                },
                {
                    feature: 'Tải offline',
                    licensed: 'Tải video để xem offline',
                    free: 'Không thể tải video'
                },
                {
                    feature: 'YouTube Music',
                    licensed: 'YouTube Music Premium miễn phí',
                    free: 'YouTube Music có quảng cáo'
                },
                {
                    feature: 'Chất lượng',
                    licensed: 'Chất lượng cao nhất có sẵn',
                    free: 'Chất lượng bị giới hạn'
                }
            ]
        }
    },
    {
        id: 6,
        category: 'design',
        title: 'ELSA Pro',
        subtitle: 'Chỉ với 1,500đ cho 1 ngày',
        image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
        originalPrice: '15,000đ',
        salePrice: '1,500đ',
        discount: 'GIẢM LÊN TỚI 90%',
        processingTime: '15-30 phút',
        version: 'ELSA Pro Lifetime',
        description: 'Ứng dụng luyện phát âm tiếng Anh với AI',
        features: [
            'Phân tích phát âm chính xác với AI',
            'Bài học cá nhân hóa',
            'Từ vựng và ngữ pháp phong phú',
            'Theo dõi tiến trình học tập'
        ],
        whyBuy: 'Giải pháp hoàn hảo để cải thiện khả năng nói tiếng Anh một cách tự nhiên và chính xác.',
        sku: 'ELSA_PRO',
        comparisonData: {
            title: 'So sánh ELSA Pro vs. ELSA Free',
            headers: ['Tiêu chí', 'ELSA Pro', 'ELSA Free'],
            rows: [
                {
                    feature: 'Bài học',
                    licensed: 'Hơn 7000 bài học và hoạt động',
                    free: 'Chỉ một số bài học cơ bản'
                },
                {
                    feature: 'Phân tích phát âm',
                    licensed: 'Phân tích chi tiết từng âm',
                    free: 'Phân tích cơ bản'
                },
                {
                    feature: 'Theo dõi tiến trình',
                    licensed: 'Báo cáo chi tiết và thống kê',
                    free: 'Theo dõi hạn chế'
                },
                {
                    feature: 'Chủ đề học',
                    licensed: 'Đa dạng chủ đề: business, travel, academic',
                    free: 'Chỉ chủ đề cơ bản'
                },
                {
                    feature: 'Luyện tập',
                    licensed: 'Không giới hạn luyện tập',
                    free: 'Giới hạn số lần luyện tập'
                }
            ]
        }
    },
    {
        id: 7,
        category: 'premium',
        title: 'Tinder Platinum',
        subtitle: 'Chỉ với 1,700đ cho 1 ngày',
        image: 'https://images.pexels.com/photos/8129901/pexels-photo-8129901.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
        originalPrice: '17,000đ',
        salePrice: '1,700đ',
        discount: 'GIẢM LÊN TỚI 90%',
        processingTime: '15-30 phút',
        version: 'Tinder Platinum',
        description: 'Tính năng cao cấp nhất của Tinder',
        features: [
            'Gửi tin nhắn trước khi match',
            'Xem ai đã like bạn',
            'Unlimited likes',
            'Boost và Super Like miễn phí'
        ],
        whyBuy: 'Tăng cơ hội kết nối và tìm được người phù hợp nhanh chóng.',
        sku: 'TINDER_PLATINUM',
        comparisonData: {
            title: 'So sánh Tinder Platinum vs. Tinder Free',
            headers: ['Tiêu chí', 'Tinder Platinum', 'Tinder Free'],
            rows: [
                {
                    feature: 'Likes mỗi ngày',
                    licensed: 'Unlimited likes',
                    free: 'Giới hạn likes mỗi ngày'
                },
                {
                    feature: 'Xem ai like bạn',
                    licensed: 'Xem tất cả người đã like',
                    free: 'Không thể xem'
                },
                {
                    feature: 'Tin nhắn trước match',
                    licensed: 'Gửi tin nhắn trước khi match',
                    free: 'Chỉ nhắn tin sau khi match'
                },
                {
                    feature: 'Super Like',
                    licensed: '5 Super Like miễn phí mỗi ngày',
                    free: '1 Super Like miễn phí mỗi ngày'
                },
                {
                    feature: 'Boost',
                    licensed: '1 Boost miễn phí mỗi tháng',
                    free: 'Không có Boost miễn phí'
                }
            ]
        }
    },
    {
        id: 8,
        category: 'premium',
        title: 'Tinder Gold',
        subtitle: 'Chỉ với 1,300đ cho 1 ngày',
        image: 'https://images.pexels.com/photos/8129901/pexels-photo-8129901.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
        originalPrice: '13,000đ',
        salePrice: '1,300đ',
        discount: 'GIẢM LÊN TỚI 90%',
        processingTime: '15-30 phút',
        version: 'Tinder Gold',
        description: 'Phiên bản nâng cao của Tinder',
        features: [
            'Xem ai đã like bạn',
            'Unlimited likes',
            'Monthly Boost miễn phí',
            'Top Picks feature'
        ],
        whyBuy: 'Lựa chọn tối ưu cho những ai muốn trải nghiệm Tinder một cách hiệu quả.',
        sku: 'TINDER_GOLD',
        comparisonData: {
            title: 'So sánh Tinder Gold vs. Tinder Free',
            headers: ['Tiêu chí', 'Tinder Gold', 'Tinder Free'],
            rows: [
                {
                    feature: 'Likes mỗi ngày',
                    licensed: 'Unlimited likes',
                    free: 'Giới hạn likes mỗi ngày'
                },
                {
                    feature: 'Xem ai like bạn',
                    licensed: 'Xem tất cả người đã like',
                    free: 'Không thể xem'
                },
                {
                    feature: 'Top Picks',
                    licensed: 'Xem Top Picks hàng ngày',
                    free: 'Không có Top Picks'
                },
                {
                    feature: 'Super Like',
                    licensed: '5 Super Like miễn phí mỗi ngày',
                    free: '1 Super Like miễn phí mỗi ngày'
                },
                {
                    feature: 'Boost',
                    licensed: '1 Boost miễn phí mỗi tháng',
                    free: 'Không có Boost miễn phí'
                }
            ]
        }
    }
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
                        <span class="price-sale">${product.salePrice}/ngày</span>
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
                        <span class="price-large">${product.salePrice}/ngày</span>
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
                    <p><strong>Hình thức giao hàng:</strong> Gửi link tới & tài khoản qua email/Zalo trong vòng ${product.processingTime} sau thanh toán</p>
                </div>

                <div class="contact-buttons">
                    <a href="https://zalo.me/0123456789" class="btn btn-zalo btn-sm">
                        <i class="fab fa-telegram me-2"></i>Zalo
                    </a>
                    <a href="https://wa.me/0123456789" class="btn btn-whatsapp btn-sm">
                        <i class="fab fa-whatsapp me-2"></i>WhatsApp
                    </a>
                    <button class="btn btn-purchase btn-sm flex-fill">
                        <i class="fas fa-shopping-cart me-2"></i>Mua Ngay ${product.salePrice}/Ngày
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
                    <h6 class="section-title">${product.comparisonData.title}</h6>
                    <div class="table-responsive">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th class="feature-name">${product.comparisonData.headers[0]}</th>
                                    <th>${product.comparisonData.headers[1]}</th>
                                    <th>${product.comparisonData.headers[2]}</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${product.comparisonData.rows.map(row => `
                                    <tr>
                                        <td class="feature-name">${row.feature}</td>
                                        <td class="text-success">${row.licensed}</td>
                                        <td class="text-danger">${row.free}</td>
                                    </tr>
                                `).join('')}
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