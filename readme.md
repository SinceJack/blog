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
- 作者专用写作台 `/admin/`
- GitHub 身份验证，仅允许 `@SinceJack` 解锁
- Markdown / 富文本双模式
- 右侧实时文章预览
- 可直接发布到 `_posts/`

## 作者登录

写作页：<https://sincejack.github.io/blog/admin/>

由于 GitHub Pages 是纯静态托管，没有传统服务器后台，因此这里使用 **GitHub Fine-grained Personal Access Token** 做作者身份验证和发布授权。

建议创建一个专门用于博客发布的 Fine-grained Token，并严格限制权限：

1. GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens**
2. Repository access 选择 **Only select repositories**
3. 只选择 `SinceJack/blog`
4. Repository permissions → **Contents** → `Read and write`
5. 其他权限尽量保持 `No access`
6. 设置一个合理的过期时间

写作台会调用 GitHub API 验证登录账号是否为 `SinceJack`，并检查是否拥有该仓库写权限。非 `SinceJack` 账号不会解锁编辑器。

Token **不会写入仓库或网页源码**，只存放在当前浏览器 `sessionStorage` 中。点击退出登录或关闭对应浏览器会话后即可清除。

## 推荐发布方式

1. 打开 `https://sincejack.github.io/blog/admin/`
2. 输入专用 GitHub Fine-grained Token，点击「验证并登录」
3. 填写标题、分类、标签和摘要
4. 使用 Markdown 或富文本模式写正文
5. 在右侧实时查看最终文章效果
6. 点击「发布到博客」
7. 写作台自动创建 `_posts/YYYY-MM-DD-title.md`
8. GitHub Pages 自动构建并发布

同时仍然保留「复制 Markdown」和「下载 .md」作为备份发布方式。

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
- `admin/`：作者写作台
- `archive.md`：归档与标签
- `search.md`：站内搜索
- `search.json`：搜索索引
- `feed.xml`：RSS
