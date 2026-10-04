---
layout: default
title: 关于
permalink: /about/
---

<section class="article"><div class="wrap">

# 关于这个博客

这里是 Frank Yuan 的个人博客，主要记录教育科技、Web 开发、AI 应用，以及真实项目中的实践经验。

这个博客运行在 **GitHub Pages + Jekyll** 上，不需要传统服务器和数据库。

## 现在有哪些功能

- 默认跟随系统浅色 / 深色模式，也可以手动切换；
- Markdown 自动生成文章；
- 分类、标签和年份归档；
- 站内全文搜索；
- 阅读时间与文章目录；
- RSS 订阅；
- 一个轻量的网页发文助手。

## 如何发布文章

推荐直接打开：

[进入发文助手 →]({{ '/admin/' | relative_url }})

填写标题、分类、标签、摘要和 Markdown 正文后，点击 **复制 Markdown**，再点击 **打开 GitHub 发布**。博客不会要求你在网页中填写 GitHub Token，最终发布仍通过 GitHub 完成。

也可以直接进入 `SinceJack/blog` 仓库的 `_posts` 文件夹，新建 `YYYY-MM-DD-title.md` 后 Commit。

## 为什么不直接做一个带密码的传统后台

GitHub Pages 本身是静态托管。如果在纯前端网页里保存 GitHub Token，会有安全风险。因此当前的发文助手只负责生成文章，不保存账号凭据；GitHub 继续负责身份验证和最终提交。这种方式更适合个人博客，也更容易长期维护。

</div></section>
