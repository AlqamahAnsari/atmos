# Stage 1: Serve static site via lightweight nginx
FROM nginx:stable-alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy your project files into nginx's serving directory
COPY . /usr/share/nginx/html

# Expose default HTTP port
EXPOSE 80

# Start nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
