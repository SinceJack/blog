---
layout: post
title: "用 GitHub Pages 搭一个足够简单的个人博客"
date: 2026-10-04 13:00:00 +0800
category: 技术
description: "不用数据库、不用服务器，只有 Markdown，也可以拥有一个稳定、清晰、容易维护的博客。"
---

GitHub Pages 很适合做个人博客，尤其适合不想维护服务器的人。

## 为什么选择它

它的优点很直接：

- 免费托管静态网站
- 和 Git 仓库天然结合
- 支持 Jekyll
- Markdown 可以直接生成文章页
- 版本历史清晰，文章不容易丢

## 我的发布方式

现在这个博客使用 Jekyll。以后写文章，只需要在仓库的 `_posts` 文件夹里新建 Markdown 文件，例如：

```text
2026-10-05-my-new-post.md
```

文件顶部填写标题、日期和分类，然后在下面写 Markdown 正文即可。

GitHub Pages 会自动重新构建博客，不需要手工制作 HTML 页面。
