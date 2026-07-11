---
title: "Oracle Cloud Free Tier：US$300 试用赠金与长期 Always Free"
category: "云服务 / 免费额度"
categorySlug: "cloud-credit"
relatedCategorySlugs:
  - "ai-tools"
summary: "Oracle Cloud Free Tier 提供最多 30 天的 US$300 试用赠金，并长期保留一组 Always Free 资源。注册需要真实身份、手机号和受支持银行卡；试用结束后不会自动扣费，未升级时付费资源会被回收，Always Free 资源可继续使用。"
status: "可领取"
contentStatus: "已完成"
difficulty: "中等"
estimatedTime: "约 15–30 分钟；部分地区可能因容量或支付验证失败"
audience: "个人开发者、学生、云服务器学习者、数据库与轻量应用部署用户"
dealType: "新用户试用赠金 / 长期免费云资源"
lastVerified: "2026-07-11"
originalPrice: "OCI 按资源实际使用量计费"
dealPrice: "符合条件的新用户可获得最多 US$300、有效期最多 30 天；Always Free 资源长期免费"
couponCode: "无需优惠码"
region: "面向提供商业 OCI 服务的多数地区；US$300 赠金仅在部分国家和地区提供，最终以注册页为准"
warning: "注册时必须选择 Home Region，之后通常不能自行更改；Always Free 计算和数据库主要只能在 Home Region 创建。Oracle 当前官方文档中的 Ampere A1 免费计算配额为每月 1,500 OCPU 小时和 9,000 GB 内存小时，对纯 Always Free 租户相当于总计 2 OCPU、12 GB 内存，不应继续引用旧教程中的 4 OCPU、24 GB。试用到期后，超过 Always Free 限额的资源会被回收；只有主动升级为 Pay As You Go 后，超额资源才会产生账单。"
officialUrl: "https://www.oracle.com/cloud/free/"
allBenefitsUrl: "https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm"
benefits:
  - name: "试用赠金"
    value: "最多 US$300，有效期最多 30 天"
    type: "core"
  - name: "AMD 免费虚拟机"
    value: "最多 2 台 VM.Standard.E2.1.Micro"
    type: "core"
  - name: "Arm 免费计算"
    value: "总计 2 OCPU、12 GB 内存"
    type: "core"
  - name: "块存储"
    value: "总计 200 GB，含启动盘与块存储"
    type: "core"
  - name: "Autonomous Database"
    value: "最多 2 个免费数据库实例"
    type: "core"
  - name: "出站流量"
    value: "每月 10 TB Always Free"
    type: "limited"
  - name: "Object Storage"
    value: "试用结束后合计 20 GB"
    type: "limited"
requirements:
  - label: "每人只能注册一个 Oracle Cloud Free Trial 或 Always Free 账号"
    level: "required"
  - label: "提供真实、长期有效的姓名、地址、手机号和账单资料"
    level: "required"
  - label: "准备受支持的信用卡，或可按信用卡方式使用的借记卡"
    level: "required"
  - label: "虚拟卡、一次性卡、预付卡和仅支持 PIN 的借记卡通常不被接受"
    level: "required"
  - label: "注册前确认 Home Region，并接受免费资源受当地容量限制"
    level: "required"
  - label: "重要代码、数据库和文件保留独立备份"
    level: "recommended"
preparation:
  - "一个从未注册过 Oracle Cloud 的本人邮箱"
  - "可接收短信或语音验证码的本人手机号"
  - "与注册姓名和地址一致的受支持银行卡"
  - "提前比较候选 Home Region 的距离、Always Free 支持范围和资源容量"
  - "准备一个密码管理器，并在注册后立即启用多因素认证"
  - "计划好试用期内要测试的资源，以及 30 天结束前的清理日期"
steps:
  - title: "先确认自己属于新用户且支付方式可用"
    description: "Oracle Cloud Free Tier 原则上每人只允许一个免费账号。不要使用他人资料、批量账号、虚拟卡、单次卡或预付卡重复申请。Oracle 当前接受信用卡，以及能够按信用卡方式交易的部分借记卡；注册时可能产生临时预授权，通常由银行在 3–5 天内解除。"
    note: "官方资格和支付说明：[[OCI Cloud Free Tier FAQ|https://www.oracle.com/cloud/free/faq/]]"
  - title: "谨慎选择 Home Region"
    description: "注册页面会要求选择 Home Region。Always Free 计算实例、块存储和 Autonomous Database 主要需要在该区域创建，而 Home Region 之后通常不能自行更换。优先选择离主要用户较近、服务完整且当前有免费实例容量的区域，不要只按照教程随便选择。"
    note: "如果所选区域经常出现 Out of host capacity，免费实例可能暂时无法创建，但账号并不能因此直接迁移 Home Region。"
  - title: "从官方 Free Tier 页面开始注册"
    description: "打开 Oracle Cloud Free Tier 页面，确认页面仍显示 US$300 cloud credit、30 days 和 Always Free Services，再点击 Start for free。US$300 赠金只在部分国家和地区提供，最终权益以本人注册页面和控制台显示为准。"
    note: "官方入口：[[Oracle Cloud Free Tier|https://www.oracle.com/cloud/free/]]"
  - title: "填写真实的账号和账单资料"
    description: "使用本人长期邮箱，填写姓名、国家或地区、地址和手机号。账单姓名、地址和银行卡信息应尽量一致；不要使用缩写、随意英文名或与银行记录不符的信息，否则容易在支付验证阶段失败。"
  - title: "完成手机号和银行卡验证"
    description: "按页面接收验证码并提交银行卡。Oracle 使用银行卡验证身份，可能出现小额临时授权，但官方说明在你主动升级前不会因为普通 Free Tier 用量产生实际扣款。验证连续失败时不要反复更换大量卡片和账号，应先确认发卡行允许国际线上交易。"
  - title: "首次登录后确认赠金与试用到期日"
    description: "进入 OCI Console 后检查 Free Trial 横幅、Credits 或 Cost Analysis，记录赠金余额和试用到期日。试用会在 30 天到期或 US$300 用完时结束，以先发生者为准；未用完的余额不会继续保留。"
  - title: "立即启用 MFA 并保护租户管理员账号"
    description: "为主账号启用多因素认证，不要把密码、API Key、私钥或配置文件上传到公开仓库。日常项目尽量创建单独用户、组和最小权限策略，避免一直使用租户管理员身份。"
  - title: "创建资源时只选择 Always Free Eligible"
    description: "控制台会对符合长期免费条件的资源显示 Always Free Eligible。创建虚拟机、数据库、负载均衡器和存储前必须看到该标签，并再次确认区域、规格和数量。只看到某个产品名称并不代表所选规格一定免费。"
    note: "官方完整配额：[[Always Free Resources|https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm]]"
  - title: "按当前配额创建 AMD 或 Arm 虚拟机"
    description: "AMD 路线最多可使用 2 台 VM.Standard.E2.1.Micro，每台约 1 GB 内存。Arm 路线使用 VM.Standard.A1.Flex，当前官方文档对纯 Always Free 租户给出的总额度相当于 2 OCPU 和 12 GB 内存，可集中在 1 台，或拆分为最多 2 台。不要照搬旧教程中的 4 OCPU、24 GB。"
    note: "若出现 Out of host capacity，可尝试同一区域内其他可用域，或过一段时间再创建；这通常是容量不足，不代表账号失效。"
  - title: "把 200 GB 块存储作为总池计算"
    description: "Always Free 提供总计 200 GB 的启动盘和块存储，以及最多 5 个卷备份。每台计算实例默认会占用约 50 GB 启动盘，因此实例数量、启动盘和附加磁盘会共同消耗这 200 GB。删除虚拟机时还要确认是否同时删除启动盘，否则容量不会释放。"
  - title: "需要数据库时选择免费 Autonomous Database"
    description: "账号最多可创建 2 个 Always Free Autonomous AI Database，每个当前为 1 OCPU、20 GB 存储，可用于事务处理、数据仓库、JSON 或 APEX 开发。数据库也受 Home Region 和区域支持限制，创建页面没有 Always Free 标签时不要继续。"
  - title: "设置预算与费用通知"
    description: "在 Billing & Cost Management 中创建 Budget 和通知规则，试用期可以设置 US$1、US$50、US$200 等阈值。预算通知不等于自动停止资源；仍需定期查看 Cost Analysis，并在试用结束前手动删除不再需要的付费规格。"
  - title: "试用结束前把所有资源分成两类"
    description: "第一类是明确标记 Always Free、并且没有超过数量和规格上限的资源，可以保留。第二类是试用赠金创建的付费实例、额外存储、付费数据库或其他非免费服务，应在到期前导出数据并删除。未升级时，这些付费资源会在试用结束后被 Oracle 回收，数据通常无法恢复。"
  - title: "特别检查 Ampere A1 是否超过长期免费上限"
    description: "试用期间可能利用赠金创建超过长期免费上限的 A1 实例。Oracle 当前文档说明，试用结束时若 A1 总量高于纯 Always Free 租户允许的 2 OCPU、12 GB，现有 A1 实例可能全部被停用，并在 30 天后删除。到期前应主动缩减到免费范围。"
  - title: "避免因长期空闲导致实例或账号被回收"
    description: "Oracle 可能回收空闲 Always Free 计算实例。官方当前判断包括连续 7 天内 CPU、网络以及 A1 内存利用率都较低。FAQ 还说明账号连续闲置 30 天以上可能被视为废弃。需要长期保留时，应定期登录、更新系统并实际使用资源，同时保持独立备份。"
  - title: "只有确定需要时才升级 Pay As You Go"
    description: "试用到期后不升级，Always Free 资源仍可继续使用，也不会自动按量扣费。升级为 Pay As You Go 后仍然保留 Always Free 配额，但任何超出免费额度的资源都会正常计费，而且官方没有直接降回纯免费账号的选项。升级前应先清理全部不需要的资源。"
faq:
  - question: "Oracle Cloud Free Tier 会自动扣费吗？"
    answer: "不会。银行卡用于身份验证；只有你主动升级为 Pay As You Go 后，超出 Always Free 配额的资源才会开始计费。未升级时，试用赠金到期后的付费资源会被回收。"
  - question: "为什么注册时一定要银行卡？"
    answer: "Oracle 用银行卡验证身份并防止滥用。当前通常不接受虚拟卡、单次卡、预付卡或只能输入 PIN 的借记卡。银行可能显示临时预授权，但这不等于正式扣款。"
  - question: "现在还是 4 OCPU、24 GB 免费吗？"
    answer: "不要这样写。Oracle 2026 年官方 Always Free 文档当前显示，A1 每月免费额度为 1,500 OCPU 小时和 9,000 GB 内存小时，对纯 Always Free 租户相当于总计 2 OCPU、12 GB 内存。"
  - question: "可以免费创建几台服务器？"
    answer: "AMD E2.1.Micro 最多 2 台；A1 Flex 可把总计 2 OCPU、12 GB 内存集中到 1 台，或拆成最多 2 台。实际还受 200 GB 总块存储、Home Region 和实时容量限制。"
  - question: "为什么创建实例提示 Out of host capacity？"
    answer: "这通常表示所选 Home Region 或可用域暂时没有对应免费规格容量。可尝试同一区域其他可用域或稍后重试；纯免费账号不能因此直接换 Home Region。"
  - question: "US$300 用完后账号会被关闭吗？"
    answer: "标准 Free Trial 结束后账号仍可保留，并继续使用符合条件的 Always Free 资源。非 Always Free 的试用资源会被回收；特殊促销账号可能有不同处理，以控制台通知为准。"
  - question: "为什么试用结束后 A1 实例全部停了？"
    answer: "常见原因是试用期间创建的 A1 总规格超过纯 Always Free 租户的 2 OCPU、12 GB 上限。到期前没有缩减时，Oracle 可能停用全部相关 A1 实例，并在 30 天后删除。"
  - question: "免费虚拟机会永远保留吗？"
    answer: "不能保证。Always Free 没有固定到期日，但 Oracle 会回收长期低利用率实例，账号长期闲置也可能被判定为废弃。重要数据必须定期备份。"
  - question: "升级付费账号后还保留免费额度吗？"
    answer: "保留。付费账号仍可使用 Always Free 配额，但超出配额或选择非免费规格后会正常计费。升级后没有直接降回纯免费账号的选项。"
editorNote: "已按 2026-07-11 的 Oracle Cloud Free Tier 页面、OCI Free Tier FAQ 和 Always Free 官方文档完成核验。后续更新时重点复核 A1 OCPU/内存额度、Home Region 限制、支付方式、空闲实例回收规则和 US$300 可用国家。"
order: 24
---

## 先看结论

Oracle Cloud Free Tier 由两部分组成：

1. **Free Trial**：新用户在符合条件的地区可获得最多 US$300，最多使用 30 天。
2. **Always Free**：一组没有固定到期日的计算、数据库、存储和网络资源。

试用结束后，如果不升级付费账号，Oracle 不会自动从银行卡扣取云资源费用。符合配额的 Always Free 资源可以继续运行；通过赠金创建的付费资源则会被回收。

## 当前最值得关注的免费配额

| 资源 | 当前官方免费范围 |
| --- | --- |
| AMD Compute | 最多 2 台 VM.Standard.E2.1.Micro，每台约 1 GB 内存 |
| Arm Compute | 总计 2 OCPU、12 GB 内存，最多拆为 2 台 |
| Block Volume | 启动盘和块存储合计 200 GB，另含 5 个卷备份 |
| Autonomous Database | 最多 2 个，每个 1 OCPU、20 GB |
| Object Storage | 试用结束后 Standard / Infrequent / Archive 合计 20 GB |
| 出站流量 | 每月 10 TB |
| Load Balancer | 1 个 10 Mbps Flexible Load Balancer |

这些资源大多要求创建在账号的 Home Region，并受实时容量限制。

## 最容易踩的四个坑

### 1. Home Region 选错

Home Region 决定 Always Free 计算和数据库主要部署在哪里，注册后通常不能自行修改。选区前应考虑延迟、服务支持和免费实例容量。

### 2. 继续引用旧 A1 配额

旧教程普遍写 4 OCPU、24 GB，但当前 Oracle 官方文档对纯 Always Free 租户给出的等效上限是 **2 OCPU、12 GB**。教程和站点必须使用当前官方口径。

### 3. 试用资源与 Always Free 资源混在一起

赠金期间可以创建更大的付费规格，但试用结束后这些资源会被回收。只有创建页面明确标记 Always Free Eligible，并且没有超过配额的资源才能长期保留。

### 4. 以为不收费就不会回收

Always Free 没有固定到期日，但长期低利用率的计算实例可能被 Oracle 回收。账号连续闲置也可能被判定为废弃，重要数据不能只保存在免费实例里。

## 试用结束前检查清单

- 删除所有不准备付费保留的非 Always Free 资源。
- 将 Ampere A1 总规格缩减到 2 OCPU、12 GB 以内。
- 检查启动盘和块存储合计是否不超过 200 GB。
- 导出数据库、对象存储和应用配置。
- 确认关键资源仍显示 Always Free Eligible。
- 保存 SSH 私钥、代码和数据库的独立备份。

## 官方来源

- [Oracle Cloud Free Tier](https://www.oracle.com/cloud/free/)
- [OCI Cloud Free Tier FAQ](https://www.oracle.com/cloud/free/faq/)
- [OCI Free Tier Documentation](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier.htm)
- [Always Free Resources](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm)
