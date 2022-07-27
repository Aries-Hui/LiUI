// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'react',
        ts: true,
        'dynamic-import-node': true,
      },
    ],
  ],
  plugins: [
    [
      'import',
      {
        libraryName: '@icon-park/svg',
        libraryDirectory: 'es/icons',
        camel2DashComponentName: false,
      },
    ],
  ],
}
