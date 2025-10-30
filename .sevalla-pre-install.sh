#!/bin/bash
# Pre-install script to clean npm cache before Sevalla's npm install

echo "🧹 Cleaning npm cache before install..."
rm -rf /root/.npm/_cacache /root/.npm/_logs 2>/dev/null || true
npm cache clean --force 2>/dev/null || true

echo "✅ Cache cleaned, ready for npm install"
