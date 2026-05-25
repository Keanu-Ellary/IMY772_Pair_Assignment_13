# Node image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependancies
RUN npm install

# Copy frontend source code
COPY . .

# Expose port for Vite
EXPOSE 5173

# Start development server
CMD [ "npm", "run", "dev", "--", "--host" ]