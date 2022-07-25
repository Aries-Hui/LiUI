const path = require('path')
const { Project, upload } = require('miniprogram-ci')

const { version, description } = require('../package.json')
const { appid: appId } = require('../project.config.json')

// 项目对象定义
const project = new Project({
  appid: appId,
  type: 'miniProgram',
  projectPath: path.join(__dirname, '../'),
  privateKeyPath: './key/private.key',
  ignores: [
    '.github',
    '.husky',
    'config',
    'key',
    'coverage',
    'scripts',
    'README.md',
    'yarn.lock',
    'package-lock.json',
    'node_modules/**/*',
    'src/**/*',
    'packages/**/*',
  ],
})

/** 上传 */
const uploadResult = async () => {
  await upload({
    project,
    version,
    desc: description,
    setting: {
      urlCheck: true,
      es6: false,
      enhance: false,
      compileHotReLoad: false,
      postcss: false,
      minified: true,
      minifyWXSS: true,
      minifyWXML: true,
      uglifyFileName: true,
    },
    onProgressUpdate: console.log,
  })
}

uploadResult()
  .then((res) => {
    console.log('success====', res)
    process.exit(0)
  })
  .catch((err) => {
    console.warn('error=====', err)
    process.exit(1)
  })
