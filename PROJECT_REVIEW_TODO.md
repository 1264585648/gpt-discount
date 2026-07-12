# GPT Discount 全站审阅与优化清单

更新时间：2026-07-12

当前唯一长期分支：`main`

本清单用于跟踪页面、跳转、内容可信度和去 AI 味优化。按 P0 → P1 → P2 → P3 顺序执行。

## P0：修复会直接影响使用的问题

- [x] 修复 AI 工具专题仍引用已删除的 ChatGPT / Claude 旧 slug
- [x] 首页 GPT 产品锚点从 `#gpt` 统一为 `#chatgpt`
- [x] 补全旧 ChatGPT / Claude / AI 学生优惠页面的无尾斜杠重定向
- [x] 将旧“AI 工具无官方学生优惠”页面跳转到 AI 工具专题
- [x] 为 X Premium+ 礼物订阅补充可点击入口与明确状态说明
- [x] 将此前临时分支的全部提交快进同步回 `main`
- [x] GitHub Actions 和项目文档恢复为只使用 `main`
- [ ] 在 Cloudflare Pages 控制台确认生产分支为 `main`、构建命令为 `npm run build`、输出目录为 `dist`

## P1：统一页面和站内跳转

- [x] BaseLayout 分类导航直接进入四个专题页
- [x] 首页、专题页、详情页统一主要分类跳转逻辑
- [x] 详情页仅在确实需要学生身份时显示学生认证入口
- [x] 修复 FAQ 重复答案与展开内容被隐藏的问题
- [x] 不可点击的领取条件和步骤项去掉错误箭头暗示
- [x] 根据优惠状态和类型调整官方按钮文案
- [x] 修复专题面包屑中的假层级
- [x] 统一分类名称为 AI 工具、学生与教育、常用软件、云服务赠金
- [x] 清除分类数据中的 emoji 图标元数据
- [x] 更新 README 的页面、审计、核验字段和单分支说明

## P2：系统性降低内容 AI 味

- [x] 重写 ChatGPT 礼品卡教程：拆分 iPhone / Android 路线，控制为 7 步
- [x] 重写 Claude 礼品卡教程：聚焦 Pro / Max，缩短学生优惠说明
- [x] 重写 Adobe 学生版：突出首年、续费和取消费用，控制为 7 步
- [x] 重写 Figma Education：突出 Education Team 与每月 3,000 AI 点
- [x] 重写 Microsoft 365：拆分学校 A1、个人学生价和 Copilot
- [x] 修正 GitHub Student Pack：Copilot 新计划注册暂停及合作权益期限
- [x] 修正 Notion Education：区分直接 Education Plus 与 GitHub Pack AI 合作权益
- [x] 重写 Canva Education：拆分 K-12 免费与高校 Campus，控制为 6 步
- [x] 重写 JetBrains 学生授权：明确三种验证方式、非商业限制和 AI Pro 不包含
- [x] 重写 Google Cloud：补 90 天期限、试用结束处理和 Gemini API 不适用限制
- [x] 重写 Google AI Pro 状态页：按历史活动处理，控制为 5 步
- [x] 前三批教程删除“条件—准备—步骤”中的重复信息
- [ ] 按内容类型进一步拆分模板：领取教程 / 状态核验 / 方案对比 / 学校授权 / 风险说明
- [ ] 清理全部旧教程中未渲染的 Markdown 正文
- [ ] 继续审阅其他已发布教程：Grok、X Premium、Google Cloud 之外的云服务和专题汇总页

## P3：防止再次出现断链和空壳内容

- [x] AI 工具专题按 `productSlug` 自动分组，不再依赖文章文件名
- [x] 首页与专题页共用 `src/data/ai-products.ts`
- [x] 收紧 AI 专题规则，防止 Adobe、Figma、Notion 等软件误入“其他 AI 工具”
- [x] 新增源码级 `audit:links`
- [x] CI 检查已删除 slug、错误路径、错误首页锚点和主要占位词
- [x] 新增构建后 `audit:dist`，检查静态页面、站内链接、锚点和空专题
- [x] GitHub Actions 监听 `main` 并执行完整审计
- [x] 增加 `verificationType`：官方页面核验 / 账号实测 / 付款实测
- [x] 增加 `priceVerifiedAt` / `benefitsVerifiedAt` 字段和迁移提醒
- [x] 详情页展示核验方式、总体核验日期、价格日期和权益日期
- [ ] 为所有已发布教程补齐显式分类字段和独立核验日期
- [ ] 对高频变化的价格、额度和截止日期建立定期复核流程

## 已完成的主要提交

- `e23887f`：建立共享 AI 产品数据
- `ac4d54c`：首页改为读取共享产品数据
- `2523e19`：专题页改为读取共享产品数据
- `b346f93`：新增构建后静态链接审计
- `b38149c`：增加核验类型及价格、权益日期字段
- `73683bb`：详情页展示核验记录
- `8f0120f`：内容审计增加核验字段提醒
- `407eed8` / `ebf880d` / `de6ba14`：修正 AI 工具归类规则
- `9485a48`：重写 Adobe 学生版教程
- `df896bb`：重写 Figma Education 教程
- `50a07d7`：重写 Microsoft 365 学生权益教程
- `6ca74a4`：修正 GitHub Student Pack 当前权益状态
- `d424467`：修正 Notion Education 与 AI 合作权益
- `9e6a027`：重写 Canva Education
- `4f9ab9b`：重写 JetBrains 学生授权
- `f955b52`：重写 Google Cloud US$300 赠金教程
- `73f7a2e`：重写 Google AI Pro 学生优惠状态页
- `e60ae7b`：统一分类名称并移除 emoji 元数据
- `d4ff98d`：CI 恢复为只监听 `main`
- `3b1e1cc`：README 恢复为单分支 `main`

## 下一步

1. 在 Cloudflare Pages 控制台确认生产分支为 `main`。
2. 查看 `main` 的 GitHub Actions 构建结果并修复可能的类型或链接问题。
3. 清理剩余教程中未渲染的 Markdown 正文。
4. 为其余已发布教程补齐 `verificationType`、`priceVerifiedAt` 和 `benefitsVerifiedAt`。
5. 继续按内容类型拆分页面模板，降低所有教程使用同一结构带来的模板感。
