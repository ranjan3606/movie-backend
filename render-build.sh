#!/bin/bash

# Render Build Script for NestJS Movie Backend
echo "🚀 Starting Render build process..."

# Verify Node.js version
echo "📋 Node.js version:"
node --version
npm --version

# Clean install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the application
echo "🔨 Building application..."
npm run build

# Verify build output
echo "✅ Build completed. Checking dist directory..."
ls -la dist/

echo "🎉 Build process completed successfully!" 