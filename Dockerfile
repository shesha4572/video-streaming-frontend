# Use the official Node.js 20.18 image as the base image
FROM node:20.18-alpine
WORKDIR /app
COPY package*.json ./

# Install dependencies
RUN npm install
COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
