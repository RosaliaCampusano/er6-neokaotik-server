ARG NODE_VERSION=22.13.1
FROM node:${NODE_VERSION}-slim as base
WORKDIR /usr/src/app
ENV NODE_ENV=production
FROM base as build

COPY package*.json ./
RUN npm ci
COPY . .
RUN tsc --version
RUN npm run build
FROM base
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 3000

CMD ["node", "dist/index.js"]

