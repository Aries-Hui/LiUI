import path from 'path'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import RollupCopy from 'rollup-plugin-copy'
import RollupAlias from '@rollup/plugin-alias'
import RollupPostcss from 'rollup-plugin-postcss'
import RollupTerser from 'rollup-plugin-terser'
import Package from '../package.json'

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const resolveFile = (_path) => path.resolve(__dirname, '..', _path)

const externalPackages = [
  'react',
  'react-dom',
  '@tarojs/components',
  '@tarojs/runtime',
  '@tarojs/taro',
  '@tarojs/react',
]

export default {
  input: resolveFile(Package.source),
  output: [
    {
      file: resolveFile(Package.main),
      format: 'cjs',
      sourcemap: false,
    },
    {
      file: resolveFile(Package.module),
      format: 'es',
      sourcemap: false,
    },
    // {
    //   name: 'liui',
    //   file: resolveFile(Package.browser),
    //   format: 'umd',
    //   sourcemap: true,
    //   globals: {
    //     '@tarojs/components': 'components',
    //     require$$0: 'react',
    //   },
    // },
  ],
  external: externalPackages,
  plugins: [
    RollupNodeResolve({
      moduleDirectories: ['node_modules'],
      // browser: true,
    }),
    RollupCommonjs({
      include: /\/node_modules\//,
    }),
    RollupJson(),
    RollupTypescript({
      tsconfig: resolveFile('tsconfig.rollup.json'),
    }),
    RollupCopy({
      targets: [
        {
          src: resolveFile('packages/style'),
          dest: resolveFile('dist'),
        },
      ],
    }),
    RollupPostcss({
      // extensions: ['css', 'scss'],
      extract: resolveFile('dist/style/index.css'),
      minimize: true,
      // process: processSass,
    }),
    RollupTerser.terser(),
    RollupAlias({
      entries: [
        { find: '@/common', replacement: path.resolve(__dirname, '..', 'packages/common') },
        { find: '@/components', replacement: path.resolve(__dirname, '..', 'packages/components') },
        { find: '@/style', replacement: path.resolve(__dirname, '..', 'packages/style') },
        { find: '@/types', replacement: path.resolve(__dirname, '..', 'types') },
      ],
    }),
  ],
}
