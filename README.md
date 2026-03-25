# 陈允鑫个人主页

这是一个适合部署到 GitHub Pages 的纯静态个人主页项目。

## 文件结构

- `index.html`：页面结构与文案
- `styles.css`：页面样式
- `script.js`：滚动显现与交互效果
- `.nojekyll`：告诉 GitHub Pages 直接按静态文件发布
- `.gitignore`：避免把本地配置目录上传到仓库

## 本地预览

直接双击 `index.html` 即可预览。

如果想使用本地服务，可以在当前目录运行：

```powershell
python -m http.server 8000
```

然后打开 `http://localhost:8000`

## 发布到 GitHub Pages

### 方案一：个人主页地址

如果你希望网址是：

`https://你的用户名.github.io/`

那么仓库名必须是：

`你的用户名.github.io`

### 方案二：项目主页地址

如果你希望网址是：

`https://你的用户名.github.io/仓库名/`

那么仓库名可以自由取，比如：

`chenyunxin-profile`

## 上传文件

把下面这些文件上传到仓库根目录：

- `index.html`
- `styles.css`
- `script.js`
- `.nojekyll`
- `README.md`
- `.gitignore`

## GitHub Pages 设置

1. 打开仓库首页
2. 点击顶部的 `Settings`
3. 在左侧 `Code and automation` 区域点击 `Pages`
4. 在 `Build and deployment` 下，把 `Source` 设为 `Deploy from a branch`
5. 在 `Branch` 里选择 `main`
6. 文件夹选择 `/(root)`
7. 点击 `Save`

等待几分钟后，页面就会发布成功。

## 后续可替换内容

### 照片位置

在 `index.html` 中搜索：

`portrait-photo`

当前是一个占位区域，后续可以替换成真实图片。

### 联系方式位置

在 `index.html` 中搜索：

`contact-row-placeholder`

把邮箱、主页、社媒替换成你的真实信息即可。

### 首页身份焦点

在 `index.html` 中搜索：

`hero-spotlight`

如果你想把首页主身份从“健雄书院执行院长”改成其他头衔，可以直接修改这一块。
