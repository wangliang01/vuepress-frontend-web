#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add .
git commit -m "feat: 提交文件内容"
git push git@github.com:wangliang01/vuepress-frontend-web.git master:master