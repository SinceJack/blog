# Frank Yuan's Blog

个人博客源码，使用 **Jekyll + Markdown + GitHub Pages**。

线上地址：<https://sincejack.github.io/blog/>

## 功能

- 自动跟随系统浅色 / 深色模式，可手动切换并记忆
- Markdown 自动生成文章
- 分类与标签
- 年份归档
- 站内全文搜索
- 自动阅读时间
- 文章目录（TOC）
- RSS Feed
- 浏览器发文助手 `/admin/`

## 推荐发布方式

1. 打开 `https://sincejack.github.io/blog/admin/`
2. 填写标题、分类、标签、摘要和正文
3. 点击「复制 Markdown」
4. 点击「打开 GitHub 发布」
5. 文件名使用 `YYYY-MM-DD-title.md`
6. 粘贴 Markdown，点击 **Commit changes**
7. GitHub Pages 自动构建并发布

## 直接在 GitHub 发布

文章文件统一放在 `_posts/`：

```text
_posts/2026-10-05-my-post.md
```

Front Matter 示例：

```yaml
---
layout: post
title: "文章标题"
date: 2026-10-05 10:00:00 +0800
category: 技术
tags: ["PHP", "MySQL"]
description: "文章摘要"
---
```

然后直接使用 Markdown 写正文。

## 主要目录

- `_posts/`：文章
- `_layouts/`：页面模板
- `assets/css/`：样式
- `assets/js/`：主题功能
- `admin/`：发文助手
- `archive.md`：归档与标签
- `search.md`：站内搜索
- `search.json`：搜索索引
- `feed.xml`：RSS
