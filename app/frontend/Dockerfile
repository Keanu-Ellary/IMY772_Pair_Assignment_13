# Node image
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependancies
RUN npm install

# Copy frontend source code
COPY . .

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build 

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port for Vite
EXPOSE 80

# Start development server
CMD ["nginx", "-g", "daemon off;"]