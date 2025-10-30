#!/bin/bash
# Sevalla build script - ensures clean npm install and build

set -e  # Exit on error

echo "Cleaning npm cache to fix idealTree error..."
npm cache clean --force || true

echo "Removing node_modules only (keeping lock file)..."
rm -rf node_modules || true

echo "Installing dependencies from lock file..."
npm ci || npm install

echo "Building Next.js static site..."
npm run build

echo "Build completed successfully!"
