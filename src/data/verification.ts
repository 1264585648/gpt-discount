export type VerificationItem = {
  slug: string;
  name: string;
  type: 'material' | 'platform';
  summary: string;
  items: string[];
  officialUrl?: string;
};

export const verificationItems: VerificationItem[] = [
  {
    slug: 'education-email',
    name: '教育邮箱',
    type: 'material',
    summary: '学校正式分配并能正常收信的邮箱。',
    items: [
      '先在产品账号中添加并验证邮箱',
      '不要求必须是 .edu 后缀',
      '不要使用购买、借用或共享邮箱',
    ],
  },
  {
    slug: 'student-documents',
    name: '在读证明',
    type: 'material',
    summary: '用于证明你当前仍在学校就读。',
    items: [
      '姓名清晰可见',
      '学校名称清晰可见',
      '包含当前学期、学年或有效日期',
      '可用学生证、课表、成绩单或在读证明',
    ],
  },
  {
    slug: 'github-education',
    name: 'GitHub Education',
    type: 'platform',
    summary: 'GitHub 自有的学生认证系统。',
    items: [
      '验证学校邮箱',
      '选择学校并填写毕业时间',
      '按要求上传当前在读证明',
      '通过后进入 Student Developer Pack 领取',
    ],
    officialUrl: 'https://github.com/settings/education/benefits',
  },
  {
    slug: 'sheerid',
    name: 'SheerID',
    type: 'platform',
    summary: '很多品牌使用的第三方身份认证。',
    items: [
      '从品牌优惠页进入 SheerID',
      '选择学校并填写真实信息',
      '自动验证失败时上传在读证明',
      '验证结果通常回传到原品牌页面',
    ],
    officialUrl: 'https://www.sheerid.com/shoppers/studentdeals/',
  },
  {
    slug: 'unidays',
    name: 'UNiDAYS',
    type: 'platform',
    summary: '学生优惠账号与学校身份验证平台。',
    items: [
      '注册 UNiDAYS 账号',
      '使用学校邮箱或学校登录验证',
      '验证后从 UNiDAYS 跳转品牌领取',
    ],
    officialUrl: 'https://www.myunidays.com/',
  },
  {
    slug: 'student-beans',
    name: 'Student Beans',
    type: 'platform',
    summary: '提供学生折扣码和品牌跳转。',
    items: [
      '注册账号并选择学校',
      '完成邮箱或资料验证',
      '领取折扣码或跳转品牌页面',
    ],
    officialUrl: 'https://www.studentbeans.com/',
  },
  {
    slug: 'id-me',
    name: 'ID.me',
    type: 'platform',
    summary: '部分美国品牌使用的身份验证平台。',
    items: [
      '从品牌页面进入 ID.me',
      '登录或注册 ID.me 账号',
      '选择学生身份并提交要求的资料',
    ],
    officialUrl: 'https://www.id.me/',
  },
];
