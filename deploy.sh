#!/bin/bash

# 小鼠帝国网站 GitHub Pages 部署脚本
# 使用方法: ./deploy.sh

echo "🐭 小鼠帝国网站部署脚本"
echo "================================"

# 检查是否在 git 仓库中
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo "❌ 错误：当前目录不是 Git 仓库"
    echo "请先初始化 Git 仓库："
    echo "  git init"
    echo "  git add ."
    echo "  git commit -m 'Initial commit'"
    exit 1
fi

# 检查是否有未提交的更改
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  检测到未提交的更改，正在提交..."
    git add .
    git commit -m "Update website - $(date)"
fi

# 检查是否有远程仓库
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ 错误：未找到远程仓库"
    echo "请先添加远程仓库："
    echo "  git remote add origin https://github.com/username/mouse-empire.git"
    exit 1
fi

# 构建网站
echo "🔨 正在构建网站..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

echo "✅ 构建成功"

# 推送到 GitHub
echo "📤 正在推送到 GitHub..."
git push origin main

if [ $? -ne 0 ]; then
    echo "❌ 推送失败"
    exit 1
fi

echo "✅ 推送成功"

echo ""
echo "🎉 部署完成！"
echo ""
echo "📝 部署说明："
echo "1. 确保 GitHub 仓库设置了 GitHub Pages"
echo "2. 在仓库设置中，选择 GitHub Pages 源为 'GitHub Actions'"
echo "3. 等待 GitHub Actions 完成构建和部署"
echo "4. 访问 https://username.github.io/mouse-empire 查看网站"
echo ""
echo "🔧 如果需要修改仓库名称，请编辑 next.config.ts 文件"
echo "📧 如有问题，请查看 GitHub Actions 日志"