---
title: "AWS Free Tier 新版教程：新用户最高 US$200 赠金，Free Plan 不超额扣费"
category: "云服务 / 免费额度"
categorySlug: "cloud-credit"
relatedCategorySlugs:
  - "ai-tools"
summary: "2025 年 7 月 15 日后注册的新 AWS 客户，可在 Free Plan 或 Paid Plan 中获得 US$100 注册赠金，并通过 Explore AWS 任务再赚最多 US$100。Free Plan 最长持续 6 个月，额度耗尽或到期后账号会关闭，不会产生超额账单；Paid Plan 则会对超出赠金的用量正常计费。"
status: "可领取"
contentStatus: "已完成"
difficulty: "中等"
estimatedTime: "约 15–30 分钟"
audience: "首次使用 AWS 的开发者、学生、独立项目作者和 AI 应用学习者"
dealType: "新用户赠金 / 免费计划 / 长期免费用量"
lastVerified: "2026-07-11"
originalPrice: "AWS 按服务实际用量计费"
dealPrice: "新客户立即获得 US$100，完成指定任务可再获得最多 US$100；Free Plan 最长 6 个月"
couponCode: "无需优惠码"
region: "面向符合条件的 AWS 全球新客户；中国北京、宁夏区域使用独立规则，GovCloud 通常不适用"
warning: "注册 Free Plan 仍必须提供有效付款方式，但 AWS 官方说明在你升级为 Paid Plan 前不会扣费。Free Plan 会在注册满 6 个月或赠金用完时自动关闭，资源立即停止访问，数据仅保留 90 天。加入 AWS Organizations、启用 Control Tower 等特定操作可能自动把账号升级为 Paid Plan；升级后，超出赠金、免费用量或不适用赠金的服务会正常计费。"
officialUrl: "https://aws.amazon.com/free/"
allBenefitsUrl: "https://aws.amazon.com/free/free-tier-faqs/"
benefits:
  - name: "注册赠金"
    value: "新客户创建账号后获得 US$100"
    type: "core"
  - name: "任务赠金"
    value: "Explore AWS 指定任务最多再赚 US$100"
    type: "core"
  - name: "Free Plan"
    value: "最长 6 个月，无超额账单"
    type: "core"
  - name: "长期免费服务"
    value: "30 多项服务提供每月免费用量"
    type: "core"
  - name: "Paid Plan"
    value: "完整服务访问，超出赠金后按量计费"
    type: "limited"
  - name: "AI / Bedrock"
    value: "模型和地区需单独确认，不能视为无限免费"
    type: "limited"
requirements:
  - label: "必须是 AWS 新客户，过去没有创建或持有过 AWS 账号"
    level: "required"
  - label: "准备长期使用的邮箱、手机号和真实账号资料"
    level: "required"
  - label: "必须提供 AWS 接受的有效付款方式完成身份验证"
    level: "required"
  - label: "注册时明确选择 Free Plan 或 Paid Plan"
    level: "required"
  - label: "不要加入 AWS Organizations 或执行会自动升级计划的企业操作"
    level: "recommended"
preparation:
  - "一个从未注册过 AWS 的本人邮箱"
  - "可接收验证码的手机号"
  - "一张 AWS 接受的有效银行卡或其他付款方式，用于身份和防滥用验证"
  - "准备选择 Free Plan；只有明确需要完整服务或生产环境时才选择 Paid Plan"
  - "项目代码和数据应保留本地或其他平台备份，不能只存放在 Free Plan 账号内"
steps:
  - title: "先确认自己属于 AWS 新客户"
    description: "AWS 新版 Free Tier 赠金仅面向新客户。官方 FAQ 明确说明，如果你已经有 AWS 账号，或过去曾经拥有过账号，就不符合 Free Plan 和新用户赠金资格。不要为了重复领取而批量创建账号，这可能触发身份和支付风控。"
    note: "官方资格说明：[[AWS Free Tier FAQs|https://aws.amazon.com/free/free-tier-faqs/]]"
  - title: "从 AWS Free Tier 官方页面创建账号"
    description: "打开 AWS Free Tier 页面，确认页面显示 Get started for free with up to $200 in credits，再点击 Create a free account。不要使用旧教程中的 12 Months Free 截图判断当前权益；2025 年 7 月 15 日后注册的新账号使用 Free Plan / Paid Plan 新制度。"
    note: "官方入口：[[AWS Free Tier|https://aws.amazon.com/free/]]"
  - title: "填写邮箱、账号名称和联系人信息"
    description: "使用本人长期控制的邮箱创建 AWS 账号，填写真实姓名、地址和手机号。根账号邮箱将接收账单、Free Tier、信用额度和安全通知，后续更换比较麻烦，不建议使用短期学校邮箱、一次性邮箱或他人邮箱。"
  - title: "添加付款方式并完成身份验证"
    description: "Free Plan 也必须提供有效付款方式。AWS 表示该步骤用于验证身份和防止资源滥用，在你保持 Free Plan 时不会向付款方式收取 AWS 用量费用。银行可能显示小额预授权或验证记录，是否释放以及显示方式取决于发卡机构。"
    note: "不要因为需要绑卡就误以为系统一定会自动扣费；真正决定计费方式的是 Free Plan 或 Paid Plan 状态。"
  - title: "注册时优先选择 Free Plan"
    description: "新手、学习和短期测试建议选择 Free Plan。它提供 US$100 初始赠金、指定免费服务以及最多 6 个月的无收费实验期，但只能访问 AWS 允许的部分服务和功能。Paid Plan 可以立即访问全部 AWS 服务，不过赠金用完、使用不适用赠金的项目或超过免费限额后会正常扣费。"
    note: "计划对比：[[Choosing an AWS Free Tier plan|https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-plans.html]]"
  - title: "登录控制台确认 US$100 注册赠金"
    description: "注册完成后打开 AWS Management Console 首页或 Billing and Cost Management，查看 Cost and Usage 小组件与 Credits 页面。新客户正常会获得 US$100 注册赠金；记录赠金余额、Free Plan 剩余天数和到期日期。赠金可能需要短时间才能显示。"
    note: "Credits 页面：[[AWS Billing Credits|https://console.aws.amazon.com/billing/home#/credits]]"
  - title: "通过 Explore AWS 再赚最多 US$100"
    description: "在 AWS Console Home 找到 Explore AWS 小组件，把筛选器设置为 Earn AWS credits。按每项任务标注的完成条件和截止时间操作，例如体验基础服务或完成指定入门活动。所有任务必须在账号创建后的 6 个月内完成；任务类型和奖励金额会动态变化，不能按旧教程假设固定任务。"
    note: "完成任务后，赠金可能需要最多约 30 分钟出现在 Credits 页面。"
  - title: "立即启用根账号 MFA 并创建日常管理身份"
    description: "注册完成后先给 root user 启用 MFA。日常操作不要长期使用根账号，可以按照 AWS 当前推荐使用 IAM Identity Center 或创建具备必要权限的管理身份。根账号只用于付款方式、账号恢复和少数必须操作，降低密钥泄露导致资源被盗刷的风险。"
  - title: "开启 Free Tier 监控和预算提醒"
    description: "在 Billing and Cost Management 中检查 Free Tier、Credits 和 Cost Explorer。创建零支出预算或低金额预算，并设置实际费用和预测费用提醒。AWS Budgets 数据和通知可能延迟数小时，默认提醒也不会立刻停止已经运行的资源，因此不能把预算邮件当作硬性消费上限。"
    note: "官方说明：[[Tracking AWS Free Tier usage|https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/tracking-free-tier-usage.html]] · [[AWS Budgets|https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html]]"
  - title: "优先使用 Free Plan 可访问的低风险服务"
    description: "Free Plan 只能访问 AWS 选定的服务和功能。学习项目可以优先查看 Lambda、DynamoDB、CloudFront、Step Functions、Cognito 等是否在当前 Always Free 列表内，再从服务定价页核对每月免费量。免费用量通常有请求数、存储、运行时间或流量限制，不代表整个服务永久免费。"
  - title: "创建 EC2、数据库和网络资源前先看完整费用"
    description: "不要再套用旧版 EC2 每月 750 小时免费一年的教程。新账号的 Free Plan 主要依靠赠金和当前可访问服务。即使某个实例可以使用，EBS 磁盘、快照、弹性公网 IPv4、负载均衡、NAT Gateway、跨区域流量和备份仍可能单独消耗额度。实验完成后应删除整个资源组中的关联资源，而不只是停止实例。"
  - title: "使用 Amazon Bedrock 或 AI 服务前确认计划限制"
    description: "Free Plan 不提供全部 AWS 服务和功能，Bedrock 模型也受地区、模型访问、供应商条款和按量价格限制。控制台能看到服务不等于可以免费无限调用。需要升级到 Paid Plan 才能使用的模型或功能，在升级后会先消耗适用赠金，超出余额后正常计费。"
  - title: "避免无意中自动升级为 Paid Plan"
    description: "正常情况下需要主动点击 Upgrade Plan 才会升级，但 AWS 官方列出一些会自动升级的情况，包括创建或加入 AWS Organizations、设置 Control Tower landing zone、加入 AWS Partner Network、签订 Professional Services 或 Enterprise Agreement、购买 Skill Builder Team，以及把账号指定为 HIPAA 或 SEC 合规。个人学习账号不要随意操作这些企业功能。"
  - title: "理解 Free Plan 到期和数据保留规则"
    description: "Free Plan 会在账号创建满 6 个月或赠金完全用完时结束，以较早发生者为准。账号随后自动关闭，资源和数据无法继续访问。AWS 会暂时保留内容 90 天；想恢复账号和下载数据，必须在这 90 天内升级到 Paid Plan。超过期限，账号及其内容会被永久删除。"
  - title: "需要继续使用时再升级 Paid Plan"
    description: "在到期前确认自己是否需要保留资源。升级后，剩余 Free Tier 赠金会继续抵扣适用账单，直到账户创建满 12 个月时过期；但从升级开始，超出赠金余额、Always Free 限额以及赠金不适用的费用都会从付款方式扣除。升级前先删除不用的资源并设置预算。"
faq:
  - question: "AWS Free Plan 真的不会产生意外账单吗？"
    answer: "保持 Free Plan 时，AWS 官方说明不会产生用量账单；账号会在 6 个月到期或赠金耗尽时关闭。需要注意的是，执行加入 Organizations 等特定操作可能自动升级为 Paid Plan，升级后就会正常计费。"
  - question: "注册 Free Plan 为什么仍然要求银行卡？"
    answer: "AWS 要求所有新账号提供有效付款方式，用于身份验证和防止滥用。Free Plan 状态下不会因为普通 AWS 用量向银行卡扣费；升级 Paid Plan 后，超出赠金和免费量才会正常扣费。"
  - question: "US$200 会一次性全部到账吗？"
    answer: "不会。创建账号后先获得 US$100；另外最多 US$100 需要在 Explore AWS 小组件中完成指定任务领取。每项任务有单独奖励和截止日期。"
  - question: "Free Plan 是 6 个月，为什么赠金写着 12 个月到期？"
    answer: "Free Plan 本身最多运行 6 个月。若在 6 个月内升级到 Paid Plan，剩余赠金会继续用于适用账单，但所有赠金最晚在账号创建满 12 个月时到期。"
  - question: "Free Plan 到期后会自动转成付费账号吗？"
    answer: "通常不会。Free Plan 到期后账号会自动关闭。你需要主动升级才能恢复并继续使用；不过加入 Organizations、启用 Control Tower 等官方列出的操作会自动升级。"
  - question: "账号关闭后还能下载数据吗？"
    answer: "AWS 会保留内容 90 天，但要重新访问和下载数据，必须先升级到 Paid Plan 恢复账号。90 天内不升级，账号和资源会被永久删除，因此重要数据必须提前备份。"
  - question: "新版 AWS Free Tier 还有 EC2 免费一年吗？"
    answer: "对于 2025 年 7 月 15 日后注册的新账号，不应继续套用旧版 12 Months Free 教程。新版权益取决于 Free Plan / Paid Plan、赠金和当前 Free Tier 服务清单。创建 EC2 前应以控制台和当前定价页面为准。"
  - question: "赠金可以用于 Amazon Bedrock 大模型吗？"
    answer: "只有在服务、模型、地区和费用属于赠金适用范围时才会自动抵扣。Free Plan 可能无法访问部分 Bedrock 功能；升级 Paid Plan 后，模型调用属于按量计费，赠金耗尽后会从付款方式扣费。"
  - question: "中国大陆 AWS 区域可以领取这个新版赠金吗？"
    answer: "AWS 官方说明，新版 Free Tier 账号计划和赠金不适用于中国北京与宁夏区域，这些区域由独立运营方提供并使用单独规则。应查看 aws.amazon.cn 的当前免费层说明。"
  - question: "设置预算为 0 美元后会自动删除资源吗？"
    answer: "不会。预算默认只发送提醒，而且计费数据可能延迟。AWS Budgets 可以额外配置某些自动操作，但新手仍应在实验结束后手动检查并删除 EC2、磁盘、快照、公网 IP、数据库和其他关联资源。"
editorNote: "已按 2026-07-11 的 AWS Free Tier 页面、Free Tier FAQ、AWS Billing 新计划文档和用量监控文档完成核验。后续更新应重点复核初始赠金、任务赠金、Free Plan 时长、自动升级触发条件和可访问服务清单。"
order: 23
---

## 先看结论

AWS 已经更换了新用户免费制度。**2025 年 7 月 15 日以后创建的新账号，不应再按旧版“EC2 免费 12 个月”教程操作。**

新客户目前可以获得：

- 注册后立即获得 **US$100 AWS Credits**；
- 通过控制台中的 Explore AWS 任务，再赚最多 **US$100**；
- Free Plan 最长使用 **6 个月**，期间不会产生超额账单；
- 30 多项服务在规定的每月额度内长期免费；
- 注册仍然需要有效付款方式。

Free Plan 在 6 个月结束或赠金耗尽时自动关闭，而不是自动扣费。需要完整服务或继续运行资源时，才升级为 Paid Plan。

## Free Plan 与 Paid Plan 怎么选

| 项目 | Free Plan | Paid Plan |
| --- | --- | --- |
| 初始赠金 | US$100 | US$100 |
| 任务赠金 | 最多 US$100 | 最多 US$100 |
| 使用期限 | 最长 6 个月 | 账号持续有效 |
| 服务范围 | AWS 指定的部分服务 | 全部 AWS 服务 |
| 超出赠金 | 账号关闭，不产生用量账单 | 从付款方式按量扣费 |
| 其他促销赠金 | 不可叠加 | 可能符合资格 |
| 适合人群 | 学习、验证想法、短期测试 | 生产项目、完整服务和长期运行 |

新手默认选择 Free Plan 更安全。只有明确知道自己需要哪些服务，并且已经设置预算和资源清理流程时，才选择 Paid Plan。

## 最容易踩的坑

1. **以为免费计划不需要绑卡**：AWS 仍要求有效付款方式完成身份验证。
2. **照搬旧版 EC2 免费一年教程**：新版账号制度已经变化。
3. **只停止 EC2，不删除磁盘和公网 IP**：关联资源仍可能消耗赠金。
4. **加入 AWS Organizations**：Free Plan 可能自动升级，赠金资格也可能变化。
5. **把 Budgets 当作硬性限额**：预算默认只提醒，且数据可能延迟。
6. **把代码和数据库只放在 Free Plan**：账号到期会关闭，恢复和下载需要先升级。
7. **把 Bedrock 当成无限免费 API**：模型、地区、计划和额度都有单独限制。

## 完整操作顺序

1. 从 AWS Free Tier 官方页面创建全新账号。
2. 完成邮箱、手机号和付款方式验证。
3. 注册时选择 Free Plan。
4. 登录 Billing 控制台确认 US$100 赠金和剩余天数。
5. 在 Explore AWS 中完成赠金任务。
6. 启用 root MFA，并创建日常管理身份。
7. 开启 Free Tier 监控、预算和账单提醒。
8. 创建资源前查看服务定价、赠金适用范围和免费用量。
9. 实验结束后删除所有关联资源。
10. 到期前备份数据，再决定是否升级 Paid Plan。

## 官方来源

- [AWS Free Tier](https://aws.amazon.com/free/)
- [AWS Free Tier FAQs](https://aws.amazon.com/free/free-tier-faqs/)
- [Choosing an AWS Free Tier plan](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-plans.html)
- [Tracking your AWS Free Tier usage](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/tracking-free-tier-usage.html)
- [Managing your costs with AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html)
