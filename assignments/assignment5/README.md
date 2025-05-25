# 🚀 Docker Image Optimization Assignment

This project demonstrates how to create and optimize Docker images for a basic Node.js web application. It compares a naive/unoptimized Dockerfile with a production-grade, optimized Dockerfile using best practices.

---

## 📁 Project Structure
.
├── index.js
├── package.json
├── package-lock.json
├── .dockerignore
├── Dockerfile # Optimized Dockerfile
├── Dockerfile.unoptimized # Unoptimized Dock



---

## 🎯 Objective

✅ Learn how to write a basic Dockerfile to containerize a Node.js app  
✅ Understand and apply Docker image optimization best practices  
✅ Compare image size, build time, caching, and security between unoptimized and optimized builds  

---

## 📦 Tech Stack

- Node.js  
- Express.js  
- Docker (with multi-stage builds)  
- Alpine Linux (as the base image)  

---

## 🐳 Docker Build Instructions

### 🔹 Build Unoptimized Image

```bash
docker build -t node-app-unoptimized -f Dockerfile.unoptimized .

🔹 Build Optimized Image
docker build -t node-app-optimized -f Dockerfile .

⚙️ Run the Container
docker run -p 3000:3000 node-app-optimized

✅ Optimization Techniques Used
Category	Optimization Practice
Security	Use of node:alpine, running as non-root user, minimal system packages
Clarity	Clean use of WORKDIR, ENV, EXPOSE, and .dockerignore
Build Speed	Cache-friendly layer ordering, separate dependency install, --mount=type=cache
Size	Small base image, production-only dependencies via npm ci --omit=dev, multi-stage

🧠 What I Learned
Pinning base image versions for reproducible builds

Splitting dependency installation from source code copy for better cache utilization

Using .dockerignore to reduce build context size

Using multi-stage builds to keep the final image minimal and secure

Applying advanced Docker features like COPY --link, Heredoc syntax, and --mount=type=cache

📚 References
Docker Official Documentation

Best Practices for Writing Dockerfiles

Node.js Docker Guidelines
