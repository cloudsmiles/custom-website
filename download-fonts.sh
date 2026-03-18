#!/bin/bash

# 下载 Google Fonts 到本地，避免 CORS 问题
mkdir -p public/fonts

echo "正在下载字体文件..."

# Cinzel (400, 700)
echo "下载 Cinzel 字体..."
curl -L "https://fonts.gstatic.com/s/cinzel/v29/8vIJ7ww63mGCFnFMYEY.ttf" -o public/fonts/Cinzel-Regular.ttf
curl -L "https://fonts.gstatic.com/s/cinzel/v29/8vIJ7ww63mGCFnFMYEY.woff2" -o public/fonts/Cinzel-Regular.woff2

# Cormorant Garamond (300, 400, 600, italic)
echo "下载 Cormorant Garamond 字体..."
curl -L "https://fonts.gstatic.com/s/cormorantgaramond/v20/8QIUdiDHoXZmGPbCqSs.ttf" -o public/fonts/CormorantGaramond-Light.ttf
curl -L "https://fonts.gstatic.com/s/cormorantgaramond/v20/8QIUdiDHoXZmGPbCqSs.woff2" -o public/fonts/CormorantGaramond-Light.woff2

curl -L "https://fonts.gstatic.com/s/cormorantgaramond/v20/8QIUdiDHoXZmGPbCqSs.ttf" -o public/fonts/CormorantGaramond-Regular.ttf
curl -L "https://fonts.gstatic.com/s/cormorantgaramond/v20/8QIUdiDHoXZmGPbCqSs.woff2" -o public/fonts/CormorantGaramond-Regular.woff2

curl -L "https://fonts.gstatic.com/s/cormorantgaramond/v20/8QIUdiDHoXZmGPbCqSs.ttf" -o public/fonts/CormorantGaramond-SemiBold.ttf
curl -L "https://fonts.gstatic.com/s/cormorantgaramond/v20/8QIUdiDHoXZmGPbCqSs.woff2" -o public/fonts/CormorantGaramond-SemiBold.woff2

# JetBrains Mono
echo "下载 JetBrains Mono 字体..."
curl -L "https://fonts.gstatic.com/s/jetbrainsmono/v15/tDbY2r-fl8EnJTEWvr.ttf" -o public/fonts/JetBrainsMono-Regular.ttf
curl -L "https://fonts.gstatic.com/s/jetbrainsmono/v15/tDbY2r-fl8EnJTEWvr.woff2" -o public/fonts/JetBrainsMono-Regular.woff2

echo "字体下载完成！"
ls -lh public/fonts/
