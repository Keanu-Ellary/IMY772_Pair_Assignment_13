# Python image
FROM python:3.11-slim

ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Command to install Python Packages
RUN pip install --no-cache-dir flask flask-cors gunicorn

# Copy backend source code
COPY backend/ ./backend/

# Expose flask port number
EXPOSE 5000

# Run application
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--workers", "2", "backend.app:app"]