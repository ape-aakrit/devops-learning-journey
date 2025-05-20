# Use the official NGINX base image
FROM nginx:alpine

# Remove the default HTML files
RUN rm -rf /usr/share/nginx/html/*

# Copy all your project files into the container
COPY . /usr/share/nginx/html

# Expose port 80 to access the site
EXPOSE 80

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]

