import React, { useState } from 'react';
import { Search, ShoppingCart, User, ChevronDown, X, Facebook, MessageCircle, Mail, Phone } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  duration: string;
  category: string;
  icon: string;
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 'chatgpt-plus',
    name: 'ChatGPT Plus',
    price: '3,000đ',
    duration: 'cho 1 ngày',
    category: 'ai',
    icon: '🤖',
    description: 'Truy cập không giới hạn vào ChatGPT Plus với tốc độ nhanh hơn và các tính năng mới nhất.',
    features: ['Truy cập ưu tiên', 'Tốc độ nhanh hơn', 'Các tính năng mới nhất']
  },
  {
    id: 'adobe-creative',
    name: 'Adobe Creative Cloud',
    price: '2,000đ',
    duration: 'cho 1 ngày',
    category: 'design',
    icon: '🎨',
    description: 'Bộ ứng dụng Adobe đầy đủ bao gồm Photoshop, Illustrator, Premiere Pro và nhiều hơn nữa.',
    features: ['Tất cả ứng dụng Adobe', 'Cloud storage', 'Font và template']
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    price: '1,200đ',
    duration: 'cho 1 ngày',
    category: 'dev',
    icon: '👨‍💻',
    description: 'AI assistant giúp lập trình viên code nhanh hơn và hiệu quả hơn.',
    features: ['AI code suggestions', 'Multi-language support', 'VS Code integration']
  },
  {
    id: 'discord-nitro',
    name: 'Discord Nitro',
    price: '2,300đ',
    duration: 'cho 1 ngày',
    category: 'social',
    icon: '💬',
    description: 'Nâng cấp Discord với các tính năng premium và emoji tùy chỉnh.',
    features: ['Custom emoji', 'Higher quality video', 'Server boosts']
  }
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất Cả' },
    { id: 'ai', name: 'ChatGPT' },
    { id: 'design', name: 'Adobe' },
    { id: 'dev', name: 'Github' },
    { id: 'social', name: 'Discord' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 text-6xl animate-pulse">🏮</div>
        <div className="absolute top-32 left-10 text-4xl animate-bounce">⭐</div>
        <div className="absolute top-40 right-1/3 text-5xl">🏮</div>
        <div className="absolute bottom-20 left-1/4 text-3xl animate-pulse">✨</div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'serif' }}>
                maosoft
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Trang Chủ</a>
                <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Sản Phẩm</a>
                <div className="relative group">
                  <a href="#" className="text-gray-700 hover:text-red-600 transition-colors flex items-center">
                    ChatGPT <span className="ml-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full">AI</span>
                  </a>
                </div>
                <div className="relative group">
                  <a href="#" className="text-gray-700 hover:text-red-600 transition-colors flex items-center">
                    Adobe <span className="ml-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full">CC</span>
                  </a>
                </div>
                <div className="relative group">
                  <a href="#" className="text-gray-700 hover:text-red-600 transition-colors flex items-center">
                    Hot <ChevronDown className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Khác ✨</a>
                <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Liên hệ</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-red-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-gray-700 hover:text-red-600 transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors underline">
                Đăng nhập
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold text-gray-900">
                  ChatGPT Plus
                </h1>
                <p className="text-sm text-gray-600 uppercase tracking-wider">
                  chỉ với
                </p>
                <div className="text-4xl font-bold text-gray-900">
                  Chỉ từ 3,000đ/ ngày
                </div>
              </div>
              
              <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                MUA NGAY
              </button>
              
              <div className="flex items-center space-x-4 pt-8">
                <div className="text-4xl">✨</div>
                <div>
                  <div className="font-semibold text-gray-900">Ưu Đãi Ngày Tết</div>
                  <div className="text-gray-600 text-sm">DỊCH VỤ PREMIUM</div>
                  <div className="text-gray-600 text-sm">VỚI MỨC GIÁ RẺ HƠN</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
                <div className="relative z-10">
                  <div className="text-lg font-semibold mb-2">maosoft</div>
                  <h2 className="text-3xl font-bold mb-4">CHATGPT<br />PLUS</h2>
                  <div className="text-lg mb-6">Chỉ với 3,000đ cho 1 ngày</div>
                  <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">
                    🤖
                  </div>
                  <button className="bg-red-700 text-white px-6 py-2 rounded-full text-sm font-medium">
                    shop.mas.vn
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-red-800 to-yellow-600 rounded-b-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Dịch Vụ Nổi Bật
          </h2>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 shadow-lg">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-black text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-6 text-white text-center relative overflow-hidden transform group-hover:scale-105 transition-transform">
                  <div className="absolute top-4 right-4 text-sm opacity-75">maosoft</div>
                  <div className="absolute top-4 left-4">
                    <div className="text-xs bg-white/20 rounded-full px-2 py-1">
                      GIẢM LÊN TỚI 16.67%
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold mt-8 mb-2">
                    {product.name.split(' ').map((word, i) => (
                      <div key={i}>{word}</div>
                    ))}
                  </div>
                  
                  <div className="text-sm mb-6">
                    Chỉ với {product.price} {product.duration}
                  </div>
                  
                  <div className="w-20 h-20 bg-white rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">
                    {product.icon}
                  </div>
                  
                  <button className="bg-red-700 text-white px-6 py-2 rounded-full text-sm font-medium">
                    shop.mas.vn
                  </button>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-red-800 to-yellow-600 rounded-b-3xl"></div>
                </div>
                
                <div className="text-center mt-4">
                  <div className="font-semibold text-gray-900">{product.name}</div>
                  <div className="text-gray-600">Chỉ từ {product.price}/{product.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white mt-20 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'serif' }}>
              maosoft
            </div>
            <div className="space-y-2 text-gray-600">
              <div>Địa chỉ : Thành phố Hồ Chí Minh</div>
              <div>E-mail : contact@maosoft.mas.vn</div>
            </div>
            <div className="flex space-x-4">
              <MessageCircle className="w-6 h-6 text-blue-500" />
              <Facebook className="w-6 h-6 text-blue-600" />
              <Mail className="w-6 h-6 text-gray-600" />
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div>Đăng Ký Nhận Tin Tức Mới Từ</div>
              <div className="font-semibold">Maosoft</div>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Địa chỉ email"
                className="flex-1 px-4 py-2 bg-yellow-100 rounded-l-lg"
              />
              <button className="px-4 py-2 bg-yellow-400 rounded-r-lg">→</button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Sản phẩm bán chạy</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm">
                  A
                </div>
                <div>
                  <div className="font-medium">Adobe Creative Cloud</div>
                  <div className="text-sm text-gray-600">Chỉ từ 2,000đ ngày</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white text-sm">
                  E
                </div>
                <div>
                  <div className="font-medium">Elsa Premium</div>
                  <div className="text-sm text-gray-600">Chỉ từ 2,000đ ngày</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm">
                  D
                </div>
                <div>
                  <div className="font-medium">Discord Nitro</div>
                  <div className="text-sm text-gray-600">Chỉ từ 2,000đ ngày</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Dịch vụ phổ biến</h3>
            <div className="space-y-3 text-gray-600">
              <div>ChatGPT Plus</div>
              <div>Discord Nitro Basic</div>
              <div>ELSA Pro</div>
              <div>Tinder Platinum</div>
              <div>Youtube Premium</div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Các Liên Kết Khác</h3>
            <div className="space-y-3 text-gray-600">
              <div>Về Maosoft</div>
              <div>Liên Hệ</div>
              <div>Bảo Hành & Hoàn Tiền</div>
              <div>Điều Khoản Dịch Vụ</div>
              <div>Chính Sách Bảo Mật</div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex justify-between items-center pt-12 mt-12 border-t border-gray-200">
          <div className="text-gray-600">© 2025 maosoft. All Rights Reserved.</div>
          <div className="text-gray-600">Phương thức thanh toán:</div>
        </div>
      </footer>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
                <div className="relative z-10">
                  <div className="text-sm opacity-75 mb-4">maosoft</div>
                  <h2 className="text-4xl font-bold mb-4">
                    {selectedProduct.name.replace(' ', '\n')}
                  </h2>
                  <div className="text-lg mb-6">
                    Chỉ với {selectedProduct.price} {selectedProduct.duration}
                  </div>
                  <div className="w-24 h-24 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center text-4xl">
                    {selectedProduct.icon}
                  </div>
                  <button className="bg-red-700 text-white px-8 py-3 rounded-full font-medium">
                    shop.mas.vn
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-red-800 to-yellow-600"></div>
              </div>
              
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h3>
                  <p className="text-gray-600">{selectedProduct.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Chỉ với {selectedProduct.price}</span>
                    <span className="text-gray-600">(tiết kiệm 20,000đ)</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="font-semibold">Chọn phần loại</div>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="duration" className="text-red-600" defaultChecked />
                        <span>{selectedProduct.price}/ tháng</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="duration" className="text-red-600" />
                        <span>850,000đ/ năm</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="font-semibold">Chọn số ngày mua</div>
                    <div className="flex space-x-2">
                      <button className="bg-black text-white px-4 py-2 rounded-lg">30</button>
                      <button className="border border-gray-300 px-4 py-2 rounded-lg">90</button>
                      <button className="border border-gray-300 px-4 py-2 rounded-lg">180</button>
                    </div>
                  </div>
                  
                  <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    XEM CHI TIẾT
                  </button>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div><strong>SKU:</strong> {selectedProduct.id.toUpperCase().replace('-', '_')}</div>
                    <div><strong>Nhóm:</strong> {selectedProduct.category}</div>
                    <div><strong>Chia sẻ:</strong> Facebook LinkedIn Twitter</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Zalo Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* Floating Scroll to Top */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors">
          ↑
        </button>
      </div>
    </div>
  );
}

export default App;