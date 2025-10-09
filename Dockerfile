FROM node:20-alpine

 WORKDIR /usr/src/app

RUN npm install --production

COPY . .

RUN npm run build

FROM base as build

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 3000

CMD ["node", "dist/index.js"]
