// Sample product data
const products = [
    // {
    //     id: 1,
    //     category: 'ai',
    //     title: 'ChatGPT Plus',
    //     subtitle: 'Chỉ với 3,000đ cho 1 ngày',
    //     image: 'https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    //     originalPrice: '21,000đ',
    //     salePrice: '3,000đ',
    //     discount: 'GIẢM LÊN TỚI 67%',
    //     processingTime: 'trong vòng 24h',
    //     version: 'ChatGPT Plus',
    //     description: 'Truy cập ChatGPT Plus với tốc độ cao và nhiều tính năng nâng cao',
    //     features: [
    //         'Truy cập ưu tiên ngay cả khi có nhu cầu cao',
    //         'Phản hồi nhanh hơn từ ChatGPT',
    //         'Truy cập sớm vào các tính năng và cải tiến mới',
    //         'Giao diện web ổn định'
    //     ],
    //     whyBuy: 'ChatGPT Plus giúp bạn làm việc hiệu quả hơn với AI thông minh nhất hiện tại. Phù hợp cho sinh viên, freelancer và các chuyên gia.',
    //     sku: 'CHATGPT_PLUS',
    //     comparisonData: {
    //         title: 'So sánh ChatGPT Plus vs. ChatGPT Free',
    //         headers: ['Tiêu chí', 'ChatGPT Plus', 'ChatGPT Free'],
    //         rows: [
    //             {
    //                 feature: 'Tốc độ phản hồi',
    //                 licensed: 'Nhanh, ưu tiên cao',
    //                 free: 'Chậm khi có nhiều người dùng'
    //             },
    //             {
    //                 feature: 'Khả năng truy cập',
    //                 licensed: 'Luôn có thể truy cập',
    //                 free: 'Bị giới hạn khi quá tải'
    //             },
    //             {
    //                 feature: 'Tính năng mới',
    //                 licensed: 'Truy cập sớm các tính năng mới',
    //                 free: 'Chờ đợi phát hành công khai'
    //             },
    //             {
    //                 feature: 'Model AI',
    //                 licensed: 'GPT-4 và các model mới nhất',
    //                 free: 'GPT-3.5 cơ bản'
    //             },
    //             {
    //                 feature: 'Hỗ trợ',
    //                 licensed: 'Hỗ trợ ưu tiên từ OpenAI',
    //                 free: 'Hỗ trợ cộng đồng'
    //             }
    //         ]
    //     }
    // },

    {
        id: 1,
        category: 'ai',
        title: 'ChatGPT Plus </br> 3 tháng',
        subtitle: 'Chỉ với 180,000đ cho 3 tháng',
        image: './assets/images/chatGPT.jpg',
        originalPrice: '500,000đ / 1 tháng',
        salePrice: '500,000đ / 3 tháng',
        discount: 'GIẢM LÊN TỚI 33%',
        processingTime: 'trong vòng 24h',
        version: 'ChatGPT Plus',
        description: 'Truy cập ChatGPT Plus trong 3 tháng với tốc độ cao và nhiều tính năng nâng cao',
        features: [
            'Truy cập ưu tiên ngay cả khi có nhu cầu cao',
            'Phản hồi nhanh hơn từ ChatGPT',
            'Phù hợp cho sinh viên và chuyên gia',
            'Giao diện web ổn định'
        ],
        whyBuy: 'ChatGPT Plus giúp bạn làm việc hiệu quả hơn nhờ AI thông minh với chi phí tiết kiệm cho 3 tháng.',
        sku: 'CHATGPT_PLUS_3M',
        comparisonData: {
            title: 'So sánh ChatGPT Plus vs. ChatGPT Free',
            headers: ['Tiêu chí', 'ChatGPT Plus', 'ChatGPT Free'],
            rows: [
                { feature: 'Tốc độ phản hồi', licensed: 'Nhanh, ưu tiên cao', free: 'Chậm khi nhiều người dùng' },
                { feature: 'Khả năng truy cập', licensed: 'Luôn có thể truy cập', free: 'Bị giới hạn khi quá tải' },
                { feature: 'Tính năng mới', licensed: 'Truy cập sớm', free: 'Chờ phát hành công khai' },
                { feature: 'Model AI', licensed: 'GPT-4', free: 'GPT-3.5' },
                { feature: 'Hỗ trợ', licensed: 'Ưu tiên từ OpenAI', free: 'Hỗ trợ cộng đồng' }
            ]
        }
    },
    {
        id: 2,
        category: 'design',
        title: 'Canva EDU </br> 1 năm',
        subtitle: '70,000đ / 1 năm (tính năng EDU)',
        image: './assets/images/canva_edu.png',
        originalPrice: '150,000đ',
        salePrice: '70,000đ',
        discount: 'GIẢM HƠN 50%',
        processingTime: 'trong vòng 24h',
        version: 'Canva EDU',
        description: 'Canva EDU hỗ trợ tính năng thiết kế tương tự Canva Pro nhưng giới hạn một số tính năng nâng cao. Phù hợp học sinh, sinh viên.',
        features: [
            'Kho template giáo dục phong phú',
            'Truy cập tài nguyên thiết kế cơ bản',
            'Hỗ trợ dùng nhóm lớp hoặc đối tượng học tập',
            'Không đầy đủ tính năng nâng cao Pro'
        ],
        whyBuy: 'Phù hợp cho học sinh, giáo viên muốn dùng công cụ thiết kế tiết kiệm trong môi trường giáo dục.',
        sku: 'CANVA_EDU_1Y',
        comparisonData: {
            title: 'So sánh Canva EDU vs. Canva Pro',
            headers: ['Tiêu chí', 'Canva EDU', 'Canva Pro'],
            rows: [
                { feature: 'Kho thư viện', licensed: 'Hơn 75 triệu mẫu và ảnh', free: 'Hơn 75 triệu mẫu và ảnh' },
                { feature: 'Tính năng thiết kế', licensed: 'Giới hạn một số tính năng nâng cao', free: 'Toàn bộ tính năng nâng cao' },
                { feature: 'Tính năng giáo dục', licensed: 'Hỗ trợ quản lý lớp học, chia sẻ nhóm', free: 'Không hỗ trợ đặc biệt cho giáo dục' },
                { feature: 'Hợp tác', licensed: 'Cộng tác thời gian thực cho giáo viên và sinh viên', free: 'Cộng tác doanh nghiệp và nhóm' },
                { feature: 'Mục tiêu sử dụng', licensed: 'Dành cho học sinh, giáo viên', free: 'Dành cho cá nhân và doanh nghiệp' }
            ]
        }
    },
    {
        id: 3,
        category: 'design',
        title: 'Canva EDU </br> 2 năm',
        subtitle: '100,000đ / 2 năm (tính năng EDU)',
        image: './assets/images/canva_edu.png',
        originalPrice: '280,000đ',
        salePrice: '100,000đ',
        discount: 'GIẢM HƠN 60%',
        processingTime: 'trong vòng 24h',
        version: 'Canva EDU',
        description: 'Gói 2 năm Canva EDU với đầy đủ các hỗ trợ thiết kế cho học sinh, giáo viên với hạn chế so với Canva Pro.',
        features: [
            'Sử dụng dài hạn tiết kiệm',
            'Phù hợp cho giáo dục học tập',
            'Tài nguyên EDU đặc thù',
            'Không có một số tính năng cao cấp'
        ],
        whyBuy: 'Lựa chọn tiết kiệm cho các tổ chức và cá nhân dùng Canva lâu dài trong giáo dục.',
        sku: 'CANVA_EDU_2Y',
        comparisonData: {
            title: 'So sánh Canva EDU (2 năm) vs. Canva Pro',
            headers: ['Tiêu chí', 'Canva EDU (2 năm)', 'Canva Pro'],
            rows: [
                { feature: 'Kho thư viện', licensed: 'Hơn 75 triệu mẫu và ảnh', free: 'Hơn 75 triệu mẫu và ảnh' },
                { feature: 'Tính năng thiết kế', licensed: 'Giới hạn một số tính năng nâng cao', free: 'Toàn bộ tính năng nâng cao' },
                { feature: 'Tính năng giáo dục', licensed: 'Quản lý lớp học và chia sẻ dễ dàng', free: 'Không hỗ trợ giáo dục đặc biệt' },
                { feature: 'Giá trị', licensed: 'Tiết kiệm cho dài hạn', free: 'Chi phí cao hơn' },
                { feature: 'Đối tượng', licensed: 'Giáo viên, học sinh', free: 'Doanh nghiệp, cá nhân' }
            ]
        }
    },
    {
        id: 4,
        category: 'design',
        title: 'Canva Pro không EDU </br> 12 tháng',
        subtitle: 'Chỉ 125,000đ cho 12 tháng',
        image: './assets/images/canva_pro_not_edu.png',
        originalPrice: '350,000đ',
        salePrice: '125,000đ',
        discount: 'GIẢM 65%',
        processingTime: 'trong vòng 24h',
        version: 'Canva Pro',
        description: 'Canva Pro không EDU cung cấp toàn bộ tính năng thiết kế cao cấp trong 12 tháng sử dụng.',
        features: [
            'Kho template và hình ảnh phong phú',
            'Tính năng đồng đội và chia sẻ nâng cao',
            'Bộ công cụ thiết kế chuyên nghiệp',
            'Cập nhật tính năng mới thường xuyên'
        ],
        whyBuy: 'Thích hợp cho cá nhân, doanh nghiệp cần sáng tạo nhanh với các công cụ chất lượng cao.',
        sku: 'CANVA_PRO_12M'
    },
    {
        id: 5,
        category: 'design',
        title: 'Canva Pro không EDU </br> 1 tháng',
        subtitle: 'Chỉ 10,000đ cho 1 tháng',
        image: './assets/images/canva_pro_not_edu.png',
        originalPrice: '35,000đ',
        salePrice: '10,000đ',
        discount: 'GIẢM 70%',
        processingTime: 'trong vòng 24h',
        version: 'Canva Pro',
        description: 'Gói tháng Canva Pro không EDU đơn giản, nhanh chóng cho nhu cầu thiết kế ngắn hạn.',
        features: [
            'Toàn bộ tính năng Pro đầy đủ',
            'Dùng thử linh hoạt theo tháng',
            'Phù hợp cá nhân và dự án ngắn hạn',
            'Tiết kiệm thời gian và chi phí'
        ],
        whyBuy: 'Dùng thử hoặc dùng ngắn hạn cho công việc thiết kế cần tính chuyên nghiệp.',
        sku: 'CANVA_PRO_1M'
    },
    {
        id: 6,
        category: 'premium',
        title: 'Tài khoản CapCut </br> 1 tháng',
        subtitle: 'Chỉ 50,000đ cho 1 tháng',
        image: './assets/images/capcut.jpg',
        originalPrice: '80,000đ',
        salePrice: '50,000đ',
        discount: 'GIẢM 40%',
        processingTime: 'trong vòng 24h',
        version: 'CapCut Premium',
        description: 'CapCut Premium 1 tháng, dùng chỉnh sửa video hiệu quả với tính năng nâng cao.',
        features: [
            'Xóa watermark',
            'Thêm hiệu ứng độc quyền',
            'Tăng tốc xuất video',
            'Kho nhạc bản quyền'
        ],
        whyBuy: 'Phù hợp cho người dùng có nhu cầu chỉnh sửa video ngắn hạn, nhanh chóng.',
        sku: 'CAPCUT_1M',
        comparisonData: {
            title: 'So sánh CapCut Premium vs CapCut Free',
            headers: ['Tiêu chí', 'CapCut Premium', 'CapCut Free'],
            rows: [
                { feature: 'Xóa watermark', licensed: 'Có', free: 'Không có' },
                { feature: 'Hiệu ứng đặc biệt', licensed: 'Đầy đủ', free: 'Chưa đầy đủ' },
                { feature: 'Tốc độ xuất video', licensed: 'Nhanh hơn', free: 'Bình thường' },
                { feature: 'Kho nhạc bản quyền', licensed: 'Có', free: 'Không' }
            ]
        }
    },
    {
        id: 7,
        category: 'premium',
        title: 'Tài khoản CapCut </br> 3 tháng',
        subtitle: 'Chỉ 135,000đ cho 3 tháng',
        image: './assets/images/capcut.jpg',
        originalPrice: '240,000đ',
        salePrice: '135,000đ',
        discount: 'GIẢM 44%',
        processingTime: 'trong vòng 24h',
        version: 'CapCut Premium',
        description: 'Gói 3 tháng CapCut, tăng trải nghiệm chỉnh sửa video chuyên nghiệp hơn.',
        features: [
            'Tính năng đầy đủ Premium',
            'Sử dụng lâu dài hơn 1 tháng',
            'Hỗ trợ kỹ thuật khi cần',
            'Cập nhật hiệu ứng mới'
        ],
        whyBuy: 'Tiết kiệm chi phí cho khách hàng cần chỉnh sửa video trong thời gian dài hơn.',
        sku: 'CAPCUT_3M'
    },
    {
        id: 8,
        category: 'premium',
        title: 'Tài khoản CapCut </br> 6 tháng (cấp theo tháng)',
        subtitle: '250,000đ / 6 tháng',
        image: './assets/images/capcut.jpg',
        originalPrice: '480,000đ',
        salePrice: '250,000đ',
        discount: 'GIẢM 48%',
        processingTime: 'trong vòng 24h',
        version: 'CapCut Premium',
        description: 'CapCut cấp theo tháng giúp bảo toàn dự án khi đổi tài khoản, thích hợp dùng dài hạn.',
        features: [
            'Bảo mật dự án khi đổi tài khoản',
            'Truy cập tính năng Premium đầy đủ',
            'Hỗ trợ đổi tài khoản nhanh chóng',
            'Cập nhật thường xuyên'
        ],
        whyBuy: 'Tối ưu cho người làm video chuyên nghiệp và cần giữ dự án ổn định.',
        sku: 'CAPCUT_6M_MONTHLY'
    },
    {
        id: 9,
        category: 'premium',
        title: 'Tài khoản CapCut </br> 1 năm',
        subtitle: 'Chỉ 350,000đ cho 1 năm',
        image: './assets/images/capcut.jpg',
        originalPrice: '600,000đ',
        salePrice: '350,000đ',
        discount: 'GIẢM 42%',
        processingTime: 'trong vòng 24h',
        version: 'CapCut Premium',
        description: 'Gói 1 năm CapCut với đầy đủ tính năng và ưu đãi giá tiết kiệm cho người dùng lâu dài.',
        features: [
            'Truy cập tính năng Premium toàn diện',
            'Không giới hạn thời gian chỉnh sửa',
            'Hỗ trợ kỹ thuật 24/7',
            'Cập nhật hiệu ứng mới liên tục'
        ],
        whyBuy: 'Phù hợp cho nhà sáng tạo nội dung chuyên nghiệp cần công cụ bền vững.',
        sku: 'CAPCUT_1Y'
    },
    {
        id: 10,
        category: 'ai',
        title: 'Leonardo (Artisan Ultimate) </br> 1 tháng',
        subtitle: 'Chỉ 250,000đ cho 1 tháng',
        image: './assets/images/Leonardo-AI.jpg',
        originalPrice: '300,000đ',
        salePrice: '250,000đ',
        discount: 'GIẢM 17%',
        processingTime: 'trong vòng 24h',
        version: 'Leonardo AI',
        description: 'Gói Artisan Ultimate cung cấp khả năng tạo hình ảnh AI chất lượng cao trong 1 tháng.',
        features: [
            'Tạo ảnh AI sắc nét với độ phân giải cao',
            'Tùy chỉnh nâng cao công cụ sáng tạo',
            'Truy cập ưu tiên tính năng mới',
            'Hỗ trợ kỹ thuật nhanh chóng'
        ],
        whyBuy: 'Lý tưởng cho nghệ sĩ số và nhà thiết kế yêu cầu chất lượng tuyệt đối.',
        sku: 'LEONARDO_ARTISAN_1M',
        comparisonData: {
            title: 'So sánh Leonardo Artisan Ultimate vs Meatro',
            headers: ['Tiêu chí', 'Artisan Ultimate', 'Meatro'],
            rows: [
                { feature: 'Số lượt tạo ảnh', licensed: 'Khoảng 25,000 Fast Tokens + unlimited relaxed', free: 'Hạn chế hơn Artisan, khoảng 8500 tokens' },
                { feature: 'Khả năng tùy chỉnh', licensed: 'Công cụ chuyên sâu, hỗ trợ đào tạo mô hình', free: 'Ít hỗ trợ hơn' },
                { feature: 'Truy cập tính năng mới', licensed: 'Ưu tiên', free: 'Truy cập muộn hơn' },
                { feature: 'Đối tượng sử dụng', licensed: 'Chuyên nghiệp', free: 'Người dùng cá nhân, nhà phát triển' }
            ]
        }
    },
    {
        id: 11,
        category: 'ai',
        title: 'Leonardo (Gói Meatro) </br> 1 tháng',
        subtitle: 'Chỉ 300,000đ cho 1 tháng',
        image: './assets/images/Leonardo-AI.jpg',
        originalPrice: '350,000đ',
        salePrice: '300,000đ',
        discount: 'GIẢM 14%',
        processingTime: 'trong vòng 24h',
        version: 'Leonardo AI',
        description: 'Gói Meatro cung cấp trải nghiệm nâng cao hơn cho sáng tạo hình ảnh AI trong 1 tháng.',
        features: [
            'Tăng số lượt tạo ảnh mỗi ngày',
            'Truy cập cổ điển và nâng cao',
            'Ưu tiên hỗ trợ trực tiếp',
            'Cập nhật liên tục các tính năng AI'
        ],
        whyBuy: 'Phục vụ cho nhà sáng tạo hình ảnh chuyên sâu với nhiều nhu cầu hàng ngày.',
        sku: 'LEONARDO_MEATRO_1M',
        comparisonData: {
            title: 'So sánh Leonardo Meatro vs Artisan Ultimate',
            headers: ['Tiêu chí', 'Meatro', 'Artisan Ultimate'],
            rows: [
                { feature: 'Số lượt tạo ảnh', licensed: 'Nhiều nhưng giới hạn hơn Artisan', free: 'Nhiều hơn, có relaxed unlimited' },
                { feature: 'Khả năng tùy chỉnh', licensed: 'Tốt, hỗ trợ các tính năng mới', free: 'Chuyên sâu hơn' },
                { feature: 'Truy cập tính năng mới', licensed: 'Liên tục cập nhật', free: 'Ưu tiên hơn' },
                { feature: 'Đối tượng sử dụng', licensed: 'Người dùng chuyên sâu', free: 'Nghệ sĩ chuyên nghiệp' }
            ]
        }
    },
    {
        id: 12,
        category: 'ai',
        title: 'KLING AI 1000 CREDIT </br> 1 tháng',
        subtitle: '150,000đ / 1 tháng (1000 credit 1 tháng)',
        image: './assets/images/kling_ai.jpeg',
        originalPrice: '200,000đ',
        salePrice: '150,000đ',
        discount: 'GIẢM 25%',
        processingTime: 'trong vòng 24h',
        version: 'KLING AI Credit',
        description: 'Gói credit dùng cho các tác vụ AI đa dạng trong 1 tháng với 1000 credit.',
        features: [
            'Sử dụng đa năng với các AI hỗ trợ',
            'Linh hoạt sử dụng theo nhu cầu',
            'Hỗ trợ kỹ thuật nhanh chóng',
            'Credit không hết có thể gia hạn'
        ],
        whyBuy: 'Phù hợp cho các dự án AI với dung lượng credit tiêu chuẩn.',
        sku: 'KLING_AI_1000C_1M',
        comparisonData: {
            title: 'Thông tin sử dụng KLING AI 1000 Credit',
            headers: ['Tiêu chí', 'KLING AI 1000 Credit'],
            rows: [
                { feature: 'Số credit', licensed: '1000 credit/tháng' },
                { feature: 'Phạm vi sử dụng', licensed: 'Dùng cho tạo video, hình ảnh AI' },
                { feature: 'Hạn sử dụng', licensed: '1 tháng kể từ kích hoạt' },
                { feature: 'Gia hạn', licensed: 'Có thể gia hạn nếu không hết credit' }
            ]
        }
    },
    {
        id: 13,
        category: 'youtube',
        title: 'YouTube Premium (FAMILY) + Google One 2TB + VEO3 </br> 1 tháng',
        subtitle: 'Chỉ 28,000đ cho gói 1 tháng',
        image: './assets/images/youtube_premium_family.jpg',
        originalPrice: '70,000đ',
        salePrice: '28,000đ',
        discount: 'GIẢM 60%',
        processingTime: 'trong vòng 24h',
        version: 'YouTube Premium Family',
        description: 'Gói YouTube Premium Family kèm Google One 2TB và VEO3 dung lượng cao, đa quyền lợi.',
        features: [
            'Xem video không quảng cáo',
            'Google One lưu trữ 2TB',
            'Dùng VEO3 1TB credit',
            'Hỗ trợ tài khoản gia đình'
        ],
        whyBuy: 'Tiết kiệm khi dùng kết hợp nhiều dịch vụ xem video và lưu trữ đám mây.',
        sku: 'YTPREM_FAMILY_1M',
        comparisonData: {
            title: 'YouTube Premium Family vs Individual',
            headers: ['Tiêu chí', 'Family', 'Individual'],
            rows: [
                { feature: 'Số người dùng', licensed: 'Tối đa 6 thành viên', free: '1 người dùng' },
                { feature: 'Google One tích hợp', licensed: '2TB', free: 'Không có tích hợp' },
                { feature: 'Giá', licensed: '28,000đ (1 tháng)', free: 'Khoảng 15,000đ/1 người' },
                { feature: 'Chia sẻ tài khoản', licensed: 'Dễ dàng', free: 'Không phù hợp chia sẻ' }
            ]
        }
    },
    {
        id: 14,
        category: 'youtube',
        title: 'YouTube Premium (FAMILY) + Google One 2TB + VEO3 </br> 6 tháng',
        subtitle: '280,000đ cho 6 tháng',
        image: './assets/images/youtube_premium_family.jpg',
        originalPrice: '420,000đ',
        salePrice: '280,000đ',
        discount: 'GIẢM 33%',
        processingTime: 'trong vòng 24h',
        version: 'YouTube Premium Family',
        description: 'Gói YouTube Premium Family 6 tháng đi kèm Google One 2TB & VEO3, giá hợp lý cho gia đình.',
        features: [
            'Xem không quảng cáo cả nhóm',
            'Google One 2TB lưu trữ lớn',
            'VEO3 credit 1TB đi kèm',
            'Hỗ trợ chia sẻ cùng gia đình'
        ],
        whyBuy: 'Tiết kiệm chi phí dài hạn cho dùng tài khoản chia sẻ gia đình.',
        sku: 'YTPREM_FAMILY_6M'
    },
    {
        id: 15,
        category: 'youtube',
        title: 'YouTube Premium (FAMILY) + Google One 2TB + VEO3 </br> 12 tháng',
        subtitle: '330,000đ cho 12 tháng',
        image: './assets/images/youtube_premium_family.jpg',
        originalPrice: '700,000đ',
        salePrice: '330,000đ',
        discount: 'GIẢM HƠN 50%',
        processingTime: 'trong vòng 24h',
        version: 'YouTube Premium Family',
        description: 'Gói dài hạn 1 năm YouTube Premium Family với Google One 2TB và VEO3, tiện lợi & tiết kiệm.',
        features: [
            'Xem video không quảng cáo cả năm',
            'Google One 2TB lưu trữ dài hạn',
            'VEO3 1TB credit sử dụng thoải mái',
            'Dùng chung cho cả gia đình'
        ],
        whyBuy: 'Lựa chọn tiết kiệm tối ưu cho nhu cầu gia đình và đa thiết bị.',
        sku: 'YTPREM_FAMILY_12M'
    },
    {
        id: 16,
        category: 'netflix',
        title: 'Netflix loại standard (hàng farm, xài đổi khi bị out) </br> 1 tháng',
        subtitle: '35,000đ cho 1 tháng',
        image: './assets/images/netflix_standard.webp',
        originalPrice: '50,000đ',
        salePrice: '35,000đ',
        discount: 'GIẢM 30%',
        processingTime: 'trong vòng 24h',
        version: 'Netflix Standard',
        description: 'Tài khoản Netflix farm loại standard, cần đổi khi máy bị out, thích hợp xem thường.',
        features: [
            'Nghe xem chất lượng Standard HD',
            'Dùng tài khoản chia sẻ',
            'Phải thực hiện đổi tài khoản khi bị ghi đè',
            'Chi phí rẻ cho giải trí'
        ],
        whyBuy: 'Thích hợp cho người dùng muốn giải trí Netflix giá rẻ không quan trọng riêng tư.',
        sku: 'NETFLIX_FARM_STANDARD_1M',
        comparisonData: {
            title: 'Netflix Standard vs Premium',
            headers: ['Tiêu chí', 'Standard', 'Premium'],
            rows: [
                { feature: 'Độ phân giải', licensed: 'Full HD 1080p', free: 'Ultra HD 4K' },
                { feature: 'Số thiết bị cùng lúc', licensed: '2 thiết bị', free: '4 thiết bị' },
                { feature: 'Tải xuống', licensed: '2 thiết bị', free: '6 thiết bị' },
                { feature: 'Âm thanh không gian', licensed: 'Không có', free: 'Có' }
            ]
        }
    },
    {
        id: 17,
        category: 'netflix',
        title: 'Netflix loại premium (hàng farm, xài đổi khi bị out) </br> 1 tháng',
        subtitle: '50,000đ cho 1 tháng',
        image: './assets/images/netflix-premium.jpg',
        originalPrice: '70,000đ',
        salePrice: '50,000đ',
        discount: 'GIẢM 28%',
        processingTime: 'trong vòng 24h',
        version: 'Netflix Premium',
        description: 'Netflix farm loại Premium HD/4K, cần đổi tài khoản khi bị out, xem chất lượng cao.',
        features: [
            'Chất lượng Ultra HD 4K',
            'Tài khoản dùng chung cần đổi khi bị out',
            'Thích hợp xem nhiều thiết bị',
            'Chi phí thấp so với chính chủ'
        ],
        whyBuy: 'Phù hợp cho gia đình cần Ultra HD với chi phí tiết kiệm.',
        sku: 'NETFLIX_FARM_PREMIUM_1M'
    },
    {
        id: 18,
        category: 'netflix',
        title: 'Netflix giá rẻ dùng cho máy tính và TV </br> 1 tháng',
        subtitle: '35,000đ cho 1 tháng',
        image: './assets/images/netflix-TV.jpg',
        originalPrice: '50,000đ',
        salePrice: '35,000đ',
        discount: 'GIẢM 30%',
        processingTime: 'trong vòng 24h',
        version: 'Netflix Lite',
        description: 'Gói Netflix giá rẻ với quyền truy cập trên máy tính và TV, có thể dùng các tháng tiếp theo.',
        features: [
            'Chỉ xem trên PC và TV',
            'Không hỗ trợ đa thiết bị đồng thời',
            'Giá cực mềm cho giải trí thông thường',
            'Dùng được dài hạn nếu thanh toán'
        ],
        whyBuy: 'Lựa chọn tiết kiệm cho người xem Netflix không cần nhiều thiết bị.',
        sku: 'NETFLIX_LITE_1M'
    },
    {
        id: 19,
        category: 'netflix',
        title: 'Netflix chính chủ riêng tư Ultra HD 4K </br> 1 tháng',
        subtitle: '88,000đ cho 1 tháng',
        image: './assets/images/netflix_ultra.jpg',
        originalPrice: '150,000đ',
        salePrice: '88,000đ',
        discount: 'GIẢM 40%',
        processingTime: 'trong vòng 24h',
        version: 'Netflix Ultra HD 4K',
        description: 'Tài khoản Netflix chính chủ riêng tư chất lượng Ultra HD không phải dùng chung, bảo mật cao.',
        features: [
            'Xem phim HD, Ultra HD 4K',
            'Tài khoản riêng tư không chia sẻ',
            'Hỗ trợ xem nhiều thiết bị',
            'Đảm bảo an toàn và bảo mật'
        ],
        whyBuy: 'Phù hợp người dùng cá nhân cần bảo mật và chất lượng xem tốt nhất.',
        sku: 'NETFLIX_ULTRAHD_1M'
    },
    {
        id: 20,
        category: 'design',
        title: 'VEO3 1TB credit dùng chính chủ + tặng kèm Google One 2TB </br> 1 năm',
        subtitle: '100,000đ cho 1 năm',
        image: './assets/images/ggveo3.jpg',
        originalPrice: '250,000đ',
        salePrice: '100,000đ',
        discount: 'GIẢM 60%',
        processingTime: 'trong vòng 24h',
        version: 'VEO3 Cloud + Google One',
        description: 'Gói lưu trữ VEO3 1TB dành cho cá nhân cùng tặng Google One 2TB, dùng chính chủ ổn định.',
        features: [
            'Kết nối ổn định và bảo mật',
            'Dung lượng lưu trữ lên đến 3TB tổng cộng',
            'Hỗ trợ đồng bộ dữ liệu nhanh',
            'Phù hợp cá nhân và chuyên gia'
        ],
        whyBuy: 'Lựa chọn lưu trữ đám mây giá tốt với quà tặng giá trị kèm theo.',
        sku: 'VEO3_GOOGLEONE_1Y',
        comparisonData: {
            title: 'So sánh VEO3 Cloud + Google One',
            headers: ['Tiêu chí', 'VEO3 Cloud', 'Google One'],
            rows: [
                { feature: 'Dung lượng cloud', licensed: '1TB', free: '2TB' },
                { feature: 'Đồng bộ', licensed: 'Nhanh và ổn định', free: 'Ổn định' },
                { feature: 'Đối tượng', licensed: 'Cá nhân và chuyên gia', free: 'Cá nhân' },
                { feature: 'Tính năng bổ sung', licensed: 'Tích hợp backup, bảo mật cao', free: 'Lưu trữ và chia sẻ dữ liệu' }
            ]
        }
    },
    {
        id: 21,
        category: 'premium',
        title: 'LOCKET GOLD (cam kết không dính iCL) </br> Vĩnh viễn',
        subtitle: 'Chỉ 45,000đ, dùng vĩnh viễn',
        image: './assets/images/locket_gold.png',
        originalPrice: '70,000đ',
        salePrice: '45,000đ',
        discount: 'GIẢM 36%',
        processingTime: 'trong vòng 24h',
        version: 'LOCKET GOLD',
        description: 'Khóa bảo mật LOCKET GOLD cam kết không dính iCloud Lock, sử dụng vĩnh viễn cho thiết bị.',
        features: [
            'Bảo vệ thiết bị an toàn',
            'Cam kết không bị iCloud Lock',
            'Sử dụng một lần vĩnh viễn',
            'Phù hợp tất cả thiết bị'
        ],
        whyBuy: 'Giải pháp bảo mật thiết bị đáng tin cậy và lâu dài.',
        sku: 'LOCKET_GOLD_VINHVIEN',
        comparisonData: {
            title: 'So sánh LOCKET GOLD với các loại khóa khác',
            headers: ['Tiêu chí', 'LOCKET GOLD', 'Khóa thường'],
            rows: [
                { feature: 'Tình trạng iCloud lock', licensed: 'Cam kết không dính iCloud Lock', free: 'Có rủi ro dính lock' },
                { feature: 'Thời gian sử dụng', licensed: 'Vĩnh viễn', free: 'Thường có hạn' },
                { feature: 'Tính an toàn', licensed: 'Cao', free: 'Trung bình hoặc thấp' },
                { feature: 'Phù hợp', licensed: 'Tất cả thiết bị', free: 'Một số thiết bị' }
            ]
        }
    },
    {
        id: 22,
        category: 'ai',
        title: 'Nâng cấp GROK Chính Chủ </br> 1 tháng',
        subtitle: 'Giá 500,000đ cho 1 tháng',
        image: './assets/images/grok_ai.webp',
        originalPrice: '600,000đ',
        salePrice: '500,000đ',
        discount: 'GIẢM 17%',
        processingTime: 'trong vòng 24h',
        version: 'GROK Upgrade',
        description: 'Nâng cấp GROK chính chủ với đầy đủ tính năng và hiệu năng cho 1 tháng sử dụng.',
        features: [
            'Truy cập đầy đủ tính năng GROK',
            'Hỗ trợ kỹ thuật ưu tiên',
            'Hiệu năng tối ưu',
            'Thích hợp cho chuyên gia'
        ],
        whyBuy: 'Nâng cấp bản chính chủ đảm bảo hiệu quả công việc, phù hợp nhu cầu chuyên sâu.',
        sku: 'GROK_1M',
        comparisonData: {
            title: 'Lợi ích nâng cấp GROK Chính Chủ',
            headers: ['Tiêu chí', 'Phiên bản nâng cấp'],
            rows: [
                { feature: 'Truy cập tính năng', licensed: 'Toàn bộ', free: 'Giới hạn' },
                { feature: 'Hỗ trợ kỹ thuật', licensed: 'Ưu tiên', free: 'Thường' },
                { feature: 'Hiệu năng', licensed: 'Tối ưu', free: 'Bình thường' },
                { feature: 'Phù hợp', licensed: 'Chuyên gia và doanh nghiệp', free: 'Người dùng cá nhân' }
            ]
        }
    },
    {
        id: 23,
        category: 'microsoft',
        title: 'Nâng cấp Microsoft 1 năm 1TB full bộ Office',
        subtitle: 'Giá 300,000đ cho 1 năm',
        image: './assets/images/office_1_nam.jpg',
        originalPrice: '1,200,000đ',
        salePrice: '300,000đ',
        discount: 'GIẢM 75%',
        processingTime: 'trong vòng 24h',
        version: 'Microsoft Office 365',
        description: 'Gói Microsoft 365 đầy đủ với dung lượng 1TB và bộ công cụ Office bản quyền 1 năm.',
        features: [
            '1TB lưu trữ OneDrive',
            'Word, Excel, PowerPoint bản quyền',
            'Hỗ trợ cập nhật & bảo mật',
            'Thích hợp cá nhân và doanh nghiệp nhỏ'
        ],
        whyBuy: 'Giải pháp Office bản quyền giá rẻ, tiết kiệm năng suất làm việc từ xa và học tập.',
        sku: 'MS_OFFICE_1Y_1TB',
        comparisonData: {
            title: 'Microsoft Office 365 so với bản dùng thử',
            headers: ['Tiêu chí', 'Microsoft 365 Full', 'Bản dùng thử miễn phí'],
            rows: [
                { feature: 'Lưu trữ OneDrive', licensed: '1TB', free: '5GB' },
                { feature: 'Ứng dụng Office', licensed: 'Word, Excel, PowerPoint bản quyền', free: 'Giới hạn hoặc không có' },
                { feature: 'Cập nhật', licensed: 'Tự động và bảo mật', free: 'Giới hạn' },
                { feature: 'Phù hợp', licensed: 'Cá nhân, doanh nghiệp', free: 'Người dùng cá nhân thử nghiệm' }
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
document.addEventListener('DOMContentLoaded', function () {
    renderProducts();
    setupEventListeners();
});

// Event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Category filtering
    categoryLinks.forEach(link => {
        link.addEventListener('click', function (e) {
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
                    <p><strong>Hình thức giao hàng:</strong> Gửi link tới & tài khoản qua email/Zalo trong vòng ${product.processingTime} sau thanh toán</p>
                </div>

                <div class="contact-buttons">
                    <a href="https://zalo.me/0855586358" class="btn btn-zalo btn-sm">
                        <i class="fab fa-telegram me-2"></i>Zalo
                    </a>
                    <a href="https://wa.me/0855586358" class="btn btn-whatsapp btn-sm">
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
renderProducts = function () {
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
window.addEventListener('error', function (e) {
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
document.addEventListener('keydown', function (e) {
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
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});