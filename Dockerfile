# Use Node.js base image
FROM node:18

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package.json ./
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the NestJS app
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the app
CMD [ "npm", "run", "Start:dev" ]
