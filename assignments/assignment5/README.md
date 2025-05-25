# 🚀 Docker Image Optimization Assignment

This project demonstrates how to create and optimize Docker images for a basic Node.js web application. It compares a naive/unoptimized Dockerfile with a production-grade, optimized Dockerfile using best practices.

## 📁 Project Structure
.
├── index.js
├── package.json
├── .dockerignore
├── Dockerfile # Optimized Dockerfile
├── Dockerfile.unoptimized # Unoptimized Dockerfile


## 🎯 Objective

- ✅ Learn how to write a basic Dockerfile to containerize a Node.js app
- ✅ Understand and apply Docker image optimization best practices
- ✅ Compare image size, build time, caching, and security between unoptimized and optimized builds


## 📦 Tech Stack

- Node.js
- Express.js
- Docker (with multi-stage builds)
- Alpine Linux (as the base image)



## 🐳 Docker Build Instructions

### 🔹 Build Unoptimized Image

docker build -t node-app-unoptimized -f Dockerfile.unoptimized .
🔹 Build Optimized Image

docker build -t node-app-optimized -f Dockerfile .
⚙️ Run the Container

docker run -p 3000:3000 node-app-optimized
Then open your browser at http://localhost:3000

✅ Optimization Techniques Used
Category	Practice
Security	Use of node:alpine, non-root user, minimal packages
Clarity	WORKDIR, ENV, EXPOSE, .dockerignore
Build Speed	Cache-friendly COPY, separate dependency install, use of --mount=type=cache, multi-stage build
Size	Small base image, production-only dependencies

🧠 What I Learned
Pinning image versions for reproducibility

Separating dependency installation from source copy for better caching

Using .dockerignore to exclude unnecessary files

Leveraging multi-stage builds to minimize final image size

Applying COPY --link and heredoc syntax (if Docker supports can mount if needed) 


📚 References
Docker Official Docs

Best Practices for Writing Dockerfiles

Node.js Docker Guidelines

