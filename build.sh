#!/bin/bash
# Sevalla build script - handles missing lock file and npm cache issues

set -e  # Exit on error

echo "===== Starting Sevalla Build Process ====="

# Clean npm cache to prevent idealTree errors
echo "Step 1: Cleaning npm cache..."
npm cache clean --force 2>/dev/null || echo "Cache clean failed, continuing..."

# Remove old node_modules
echo "Step 2: Removing old node_modules..."
rm -rf node_modules

# Check if lock file exists
if [ ! -f "package-lock.json" ]; then
    echo "⚠️  WARNING: package-lock.json not found, generating it..."
    npm install --package-lock-only
fi

# Install dependencies
echo "Step 3: Installing dependencies..."
if [ -f "package-lock.json" ]; then
    echo "Using npm ci for clean install..."
    npm ci --prefer-offline --no-audit
else
    echo "Using npm install..."
    npm install --prefer-offline --no-audit
fi

# Build the site
echo "Step 4: Building Next.js static site..."
npm run build

echo "===== Build completed successfully! ====="
