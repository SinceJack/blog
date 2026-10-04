# Frank Yuan's Blog

个人博客源码，使用 **Jekyll + Markdown + GitHub Pages**。

线上地址：<https://sincejack.github.io/blog/>

## 当前功能

- 跟随系统 / 浅色 / 深色主题
- GitHub 作者身份验证，仅允许 `@SinceJack` 解锁写作台
- Markdown / 富文本双模式
- 右侧实时文章预览
- 自动保存本地草稿
- 分类、标签、自定义 URL Slug
- 图片按钮上传
- 拖拽图片上传
- 剪贴板直接粘贴图片
- 图片自动保存到 `assets/uploads/YYYY/MM/`
- 直接发布文章到 GitHub
- 分类与归档
- 站内全文搜索
- 自动阅读时间
- 文章目录（TOC）
- RSS Feed

## 为什么文章发布到 `_posts/`，而不是 `posts/`

这是 Jekyll 的标准机制：

- `_posts/`：**文章源码目录**，Markdown 必须放这里，Jekyll 才会识别成文章并加入 `site.posts`
- `/posts/.../`：**构建后的公开访问路径**，由 `_config.yml` 中的 `permalink: /posts/:title/` 自动生成

所以写作台发布到 `_posts/` 是正确的。直接把 Markdown 放到普通 `posts/` 目录，反而不会自动进入首页文章列表。

另外，`_posts/` 中的文件名必须符合：

```text
YYYY-MM-DD-title.md
```

例如：

```text
_posts/2026-10-04-my-post.md
```

不带日期前缀的文件会被 Jekyll 忽略。

## 作者登录

写作台：<https://sincejack.github.io/blog/admin/>

使用 GitHub Fine-grained Personal Access Token 验证：

1. GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens
2. Repository access → Only select repositories
3. 只选择 `SinceJack/blog`
4. Repository permissions → Contents → Read and write
5. 其他权限尽量保持 No access

Token 只存放在当前浏览器 `sessionStorage`，不会写入博客仓库。登录成功后验证框自动隐藏，退出登录后重新显示。

## 图片写作流程

登录后可通过三种方式插入图片：

1. 点击编辑器工具栏的「🖼 图片」
2. 把图片直接拖到正文编辑区
3. 在系统中复制图片 / 截图后，在编辑器中直接 `Ctrl/Cmd + V`

图片会自动上传到：

```text
assets/uploads/YYYY/MM/
```

上传完成后，Markdown 图片语法会自动插入正文，右侧实时预览立即显示。

## 发布流程

1. 打开 `/admin/`
2. 登录作者账号
3. 填写标题、分类、标签、摘要，可选填写 URL Slug
4. 使用 Markdown 或富文本模式写正文
5. 右侧实时检查最终效果
6. 点击「发布到博客」
7. 写作台创建 `_posts/YYYY-MM-DD-title.md`
8. GitHub Pages 自动构建
9. 最终访问路径自动生成到 `/blog/posts/title/`

博客时区已设置为 `Asia/Shanghai`，并允许新发布文章立即参与构建。

## 主要目录

- `_posts/`：Jekyll 文章源码
- `_layouts/`：页面模板
- `assets/uploads/`：文章图片
- `assets/css/`：站点与写作台样式
- `assets/js/`：主题功能
- `admin/`：作者写作台
- `archive.md`：归档与标签
- `search.md`：站内搜索
- `search.json`：搜索索引
- `feed.xml`：RSS
