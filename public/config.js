// 配置
window.Config = {

  // 站点名
  SiteName: '伍林堂互联网通信状态',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见说明
  ApiDomain: 'uptimestatus.vercel.app',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm784182076-fceacab368bd5508bde450f1',
    'm788523737-923862ec16a19f54b50eafac',
    'm788523739-1d9bc8047b9381a1b912fe8b',
    'm788523741-12c37ab03024ab3686987524',
    'm788523779-6c9c3b1cd18a43c3cda52ed0',
    'm788523724-f52ea841edd7130828004561',
    'm788523785-13ed70e1fa791f47bdb3c66f',
    'm788523787-10b6285753f7efb5d1bd188b',
    'm788523790-158b6abf4baff4597f10f6f0',
    'm788523794-17edbbbdc655221fb3418862',
    'm788523832-98bbeac32248b2619607a670',
    'm788523835-087a508f5d04bd52dd3715f0',
    'm788523840-675643586787da6369526eea',
    'm788523843-ded7ad36babf4c4674a11c83',
    'm788523849-114f06845a23702c92bb0b8c',
    'm788523852-e792228bbfffaa0cf949cfe9',
    'm788523870-ea5495d9462711438be46032',
    'm788523871-0d8ff6ef4cac9e2d784ea6f5',
    'm788523875-f5c1b1c1aa6b03e94f59c96a',
    'm788523878-7330cc8afe7c6ae68d89dc56',
    'm788523882-4e878cbcaeaed995b3cd2174',
    'm788524050-10dd3088462e6ea75d70c9c1',
    'm788524025-b0bc1675be0c71dd5a594473',
    'm788524008-6cf83fc9fd58ba1333b7be52',
    'm788524003-8225dc9c1a3fa9d7d7b99944',
    'm788524019-f5746a9ec4744d80c175ca22',
    'm788524049-7a65cbf2a97dd2d2f4d786e9',
    'm788524014-7cfb8decfcd1a0ed0db67c6f',
    'm788524010-9a8af270ade11c0f15d9d2bf',
    'm788524031-55e8238791661ce72ce850e3',
    'm788524028-9525da81eac4f3af14413617',
    'm788524133-f739e3fa98dee4f043dd7f1c',
    'm788524035-ff699f9af9d3d9cde1f4ff59',
    'm788524044-91d8c43d4275be716cb1ff61',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '官网',
      url: 'https://www.wulintang.cn/'
    },
    {
      text: '社区',
      url: 'https://www.han-zu.cn/'
    },
        {
      text: '开车',
      url: 'https://www.wulintang.cn/kaiche'
    }
  ]
};
