# Python image
FROM python:3.11-slim

ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Command to install Python Packages
RUN pip install --no-cache-dir flask flask-cors

# Copy backend source code
COPY . .

# Expose flask port number
EXPOSE 5000

# Run application
CMD [ "python", "-m", "backend.app" ]