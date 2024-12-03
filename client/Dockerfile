# Use a lightweight Node.js image
FROM node:18-alpine as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the entire application source code into the container
COPY . .

# Set environment variables for React
ENV REACT_APP_API_URL=http://localhost:3000 \
    REACT_APP_DEVELOPER_CONTACT_URL=http://localhost:3001 \
    REACT_APP_GOOGLE_CALLBACK_URL=http://localhost:3001

# Build the React application
RUN npm run build

# Use a lightweight web server for production
FROM nginx:alpine as production

# Copy the build output from the previous stage to the Nginx HTML directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80 inside the container
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
