export default defineAppConfig({
  pages: ['pages/index/index'],
  subpackages: [
    {
      root: 'packageCommon',
      name: 'packageCommon',
      pages: [
        'LiIcon/index', // 图标
      ],
    },
    {
      root: 'packageLayout',
      name: 'packageLayout',
      pages: [
        'LiDivider/index', // 分割线
        'LiGrid/index', // 分割线
      ],
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Liui',
    navigationBarTextStyle: 'black',
  },
  lazyCodeLoading: 'requiredComponents',
})
