# 陈允鑫个人主页

这是一个可直接部署到 GitHub Pages 的静态个人主页，当前版本采用“答辩展示风”整理学业表现、竞赛成果、科研训练、学生工作与成长起点。

## 文件结构

- `index.html`：页面结构与文案
- `styles.css`：页面样式
- `script.js`：滚动显现、时间线高亮、图片放大预览
- `assets/images/hero/`：首屏主照片
- `assets/images/awards/university/`：大学阶段代表性证书
- `assets/images/awards/high-school/`：高中起点回顾用证书
- `assets/images/moments/`：个人风采照与生活照
- `.nojekyll`：确保 GitHub Pages 正常发布

## 本地预览

直接双击 `index.html` 即可查看，也可以在项目目录运行：

```powershell
python -m http.server 8000
```

然后打开 `http://localhost:8000`

## 更换图片

- 更换首屏主照：
  直接替换 `assets/images/hero/chen-yunxin-hero.jpg`
- 更换大学阶段证书：
  替换 `assets/images/awards/university/` 中对应文件
- 更换高中阶段证书：
  替换 `assets/images/awards/high-school/` 中对应文件
- 更换风采照与生活照：
  替换 `assets/images/moments/` 中对应文件

如果沿用同名文件，页面代码不需要再改；如果改了文件名，再同步修改 `index.html` 里的图片路径即可。

## 发布到 GitHub Pages

1. 将整个项目上传到 GitHub 仓库根目录
2. 打开仓库 `Settings -> Pages`
3. `Source` 选择 `Deploy from a branch`
4. `Branch` 选择当前分支，目录选择 `/(root)`
5. 保存后等待几分钟即可生成公开链接

## 当前页面说明

- 页面只精选展示少量证书原图
- 学业口径保留 `GPA 4.3861`、`21 门 90+`、`7 门满绩`
- 不公开完整申请表、审批表和整套答辩材料原件
