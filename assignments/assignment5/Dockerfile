# syntax=docker/dockerfile:1.4

FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files separately to use cache
COPY package*.json ./

# Optional build tools
RUN apk update && apk add --no-cache python3 make g++


# Use cache for npm
RUN --mount=type=cache,target=/root/.npm \
    npm ci --only=production

# Copy source after deps
COPY . .

# Production image
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app /app

# Use non-root user
RUN addgroup -S app && adduser -S app -G app
USER app

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "index.js"]
