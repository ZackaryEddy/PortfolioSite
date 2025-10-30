#!/bin/bash
# Sevalla build script - ensures clean npm install and build

set -e  # Exit on error

echo "Cleaning npm cache..."
npm cache clean --force || true

echo "Removing node_modules and package-lock.json..."
rm -rf node_modules package-lock.json || true

echo "Installing dependencies..."
npm install

echo "Building Next.js static site..."
npm run build

echo "Build completed successfully!"
