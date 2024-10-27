# Sử dụng hình ảnh Node.js chính thức
FROM node:14

# Đặt thư mục làm việc
WORKDIR /

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép mã nguồn vào container
COPY . .

# Biên dịch (nếu cần) hoặc chạy ứng dụng
# RUN npm run build (nếu có bước build)

# Mở cổng mà ứng dụng sẽ lắng nghe
EXPOSE 8080

# Chạy ứng dụng
CMD ["npm", "start"]
