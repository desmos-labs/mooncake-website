FROM node:18-alpine AS base
WORKDIR /app

# Install dependencies only when needed
FROM base AS deps

# Add necessary packages
RUN apk add --no-cache libc6-compat

# Copy over the files that are needed in order to install the dependencies
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder

# Copy over the node_modules to avoid reinstalling them
COPY --from=deps /app/node_modules ./node_modules

# Copy over the project files
COPY . .

# Disable Next.js telemetry during the build.
# Learn more here: https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner

# Disable Next.js telemetry during runtime
# Learn more here: https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Copy over the built files
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Create a user and user group in order to run the application as a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Define the NextJS variables used to run the server
ENV PORT 3000
ENV NODE_ENV production

EXPOSE $PORT

CMD ["node", "server.js"]