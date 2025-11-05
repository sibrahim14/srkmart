#!/bin/bash
echo "🔧 Fixing Vite binary permissions..."
chmod +x node_modules/.bin/vite
npm run build
