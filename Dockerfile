FROM oven/bun:1

WORKDIR /app

COPY package.json ./
COPY bun.lockb* ./
RUN bun install --frozen-lockfile

COPY . .

RUN bun run css:build

EXPOSE 8080

CMD ["bun", "run", "start"]