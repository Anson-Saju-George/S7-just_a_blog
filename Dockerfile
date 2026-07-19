FROM node:20-slim AS build

WORKDIR /build

COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci

COPY frontend/ .
RUN npm run build

FROM caddy:2-alpine

COPY --from=build /build/dist /srv
COPY deploy/Caddyfile /etc/caddy/Caddyfile

ENV XDG_DATA_HOME=/tmp/caddy-data \
    XDG_CONFIG_HOME=/tmp/caddy-config
RUN addgroup -S caddy \
    && adduser -S -G caddy caddy \
    && mkdir -p /tmp/caddy-data /tmp/caddy-config \
    && chown -R caddy:caddy /tmp/caddy-data /tmp/caddy-config /srv
USER caddy

EXPOSE 8000
