/*
  # Create products table for Maosoft services

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text, product name)
      - `price` (text, formatted price display)
      - `duration` (text, duration description)
      - `category` (text, product category)
      - `icon` (text, emoji or icon representation)
      - `description` (text, product description)
      - `features` (text array, list of features)
      - `sku` (text, product SKU)
      - `discount_percentage` (integer, discount percentage if any)
      - `original_price` (text, original price before discount)
      - `is_featured` (boolean, whether product is featured)
      - `sort_order` (integer, display order)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access (since this is a public website)
    - Add policy for authenticated admin users to manage products
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  price text NOT NULL,
  duration text NOT NULL DEFAULT 'cho 1 ngày',
  category text NOT NULL,
  icon text NOT NULL DEFAULT '🔧',
  description text NOT NULL DEFAULT '',
  features text[] DEFAULT '{}',
  sku text UNIQUE,
  discount_percentage integer DEFAULT 0,
  original_price text,
  is_featured boolean DEFAULT false,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow public read access to products
CREATE POLICY "Anyone can read products"
  ON products
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to manage products (for admin)
CREATE POLICY "Authenticated users can manage products"
  ON products
  FOR ALL
  TO authenticated
  USING (true);

-- Insert sample data
INSERT INTO products (name, price, duration, category, icon, description, features, sku, discount_percentage, original_price, is_featured, sort_order) VALUES
('ChatGPT Plus', '3,000đ', 'cho 1 ngày', 'ai', '🤖', 'Truy cập không giới hạn vào ChatGPT Plus với tốc độ nhanh hơn và các tính năng mới nhất.', ARRAY['Truy cập ưu tiên', 'Tốc độ nhanh hơn', 'Các tính năng mới nhất'], 'CHATGPT_PLUS', 16, '3,600đ', true, 1),
('Adobe Creative Cloud', '2,000đ', 'cho 1 ngày', 'design', '🎨', 'Bộ ứng dụng Adobe đầy đủ bao gồm Photoshop, Illustrator, Premiere Pro và nhiều hơn nữa.', ARRAY['Tất cả ứng dụng Adobe', 'Cloud storage', 'Font và template'], 'ADOBE_CC', 16, '2,400đ', true, 2),
('GitHub Copilot', '1,200đ', 'cho 1 ngày', 'dev', '👨‍💻', 'AI assistant giúp lập trình viên code nhanh hơn và hiệu quả hơn.', ARRAY['AI code suggestions', 'Multi-language support', 'VS Code integration'], 'GITHUB_COPILOT', 0, null, true, 3),
('Discord Nitro', '2,300đ', 'cho 1 ngày', 'social', '💬', 'Nâng cấp Discord với các tính năng premium và emoji tùy chỉnh.', ARRAY['Custom emoji', 'Higher quality video', 'Server boosts'], 'DISCORD_NITRO', 0, null, true, 4),
('Gemini Advanced', '1,500đ', 'cho 1 ngày', 'ai', '💎', 'Google Gemini Advanced với khả năng AI tiên tiến nhất.', ARRAY['Advanced AI model', 'Priority access', 'Enhanced features'], 'GEMINI_ADVANCED', 0, null, false, 5),
('YouTube Premium', '1,800đ', 'cho 1 ngày', 'entertainment', '📺', 'Xem YouTube không quảng cáo và tải video offline.', ARRAY['No ads', 'Background play', 'YouTube Music'], 'YOUTUBE_PREMIUM', 45, '3,300đ', false, 6),
('ELSA Premium', '2,000đ', 'cho 1 ngày', 'education', '🗣️', 'Ứng dụng học phát âm tiếng Anh với AI.', ARRAY['AI pronunciation coach', 'Personalized lessons', 'Progress tracking'], 'ELSA_PREMIUM', 0, null, false, 7),
('Tinder Platinum', '700đ', 'cho 1 ngày', 'social', '💕', 'Tinder Premium với các tính năng cao cấp.', ARRAY['Super likes', 'Boost', 'See who likes you'], 'TINDER_PLATINUM', 0, null, false, 8);