# 🌐 Dockerized Static Website with NGINX

This project is a simple static website (HTML, CSS, and images) that is containerized using Docker and served with the lightweight, high-performance **NGINX** web server.


## 🚀 What This Project Demonstrates

- Building a Docker image using an **official NGINX base image**.
- Copying static site files into the image.
- Serving a static website on `localhost` via Docker.
- Preparing and organizing a personal/local project in a production-like format.
- Optional: Docker image tagging and pushing to Docker Hub (if needed).


## 🛠️ How to Run Locally

Make sure Docker is installed on your system.

### 1. Build the Docker image:

docker build -t my-static-website .

### 2. Run the container:

docker run -d -p 8080:80 my-static-website
### 3. Open in your browser:

http://localhost:8080
Your static site will be live!

🐳 Dockerfile Overview
This project uses a minimal Dockerfile to serve static content via NGINX:

dockerfile

# Use official lightweight NGINX image
FROM nginx:alpine

# Remove default NGINX web files
RUN rm -rf /usr/share/nginx/html/*

# Copy project files into NGINX's root directory
COPY . /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
🔒 Optional: Pushing to Docker Hub
If you ever want to publish your image to Docker Hub:

# Tag the image
docker tag my-static-website yourdockerhubusername/my-static-website:latest

# Login to Docker Hub
docker login

# Push the image
docker push yourdockerhubusername/my-static-website:latest
Replace yourdockerhubusername with your actual Docker Hub username.

🙌 Author
Aakrit Das
Passionate about Docker, DevOps, and clean project setups.
This project is part of my journey to master containerization and build a strong portfolio.

---







