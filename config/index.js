const path = require('path')

const config = {
  projectName: 'LiUI',
  date: '2022-7-13',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: 'dist-taro',
  plugins: [
    [
      '@tarojs/plugin-html',
      {
        modifyElements(inline, block) {
          // 行内元素添加 <span>， 行内元素删除 <code>
          block.push('code')
          inline.splice(inline.indexOf('code'), 1)
        },
      },
    ],
  ],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    // 依赖预编译配置
    prebundle: {
      enable: false,
    },
  },
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    optimizeMainPackage: {
      enable: true,
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  rn: {
    appName: 'taroDemo',
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      },
    },
  },
  alias: {
    '@/common': path.resolve(__dirname, '..', 'packages/common'),
    '@/components': path.resolve(__dirname, '..', 'packages/components'),
    '@/style': path.resolve(__dirname, '..', 'packages/style'),
    '@/types': path.resolve(__dirname, '..', 'types'),
  },
}

module.exports = (merge) => {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
