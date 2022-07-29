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
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  lazyCodeLoading: 'requiredComponents',
})
