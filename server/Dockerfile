# Use Node.js as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the application code to the working directory
COPY . .

# Expose the application port
EXPOSE 3000

# Set environment variables
ENV PORT=3000 \
    DB_URI=mongodb+srv://rishi:rishi@cluster0.j6qk7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 \
    COOKIE_SECRET=cookie_secret \
    NODE_ENV=DEVELOPMENT \
    CLIENT_URL=http://localhost:3001 \
    BASE_URL=http://localhost:3000 \
    JWT_REFRESH_TOKEN_SECRET=refresh_token_secret \
    SOCIAL_PASSWORD=social_password \
    PASSWORD_SECRET=password_secret \
    JWT_RESET_PASSWORD_REFRESH_TOKEN_SECRET=jwt_reset_password_refresh_token_secret \
    MAILING_SERVICE_CLIENT_ID= \
    MAILING_SERVICE_CLIENT_SECRET= \
    MAILING_SERVICE_REFRESH_TOKEN= \
    SENDER_EMAIL_ADDRESS=

# Start the application
CMD ["npm", "start"]
