import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import url from '@rollup/plugin-url';
import css from 'rollup-plugin-import-css';
import json from '@rollup/plugin-json';

// eslint-disable-next-line no-undef
const packageJson = require('./package.json');

export default [
    {
      inlineDynamicImports: true,
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            css(),
            // peerDepsExternal(),
            resolve(),
            // postcss({
            //     plugins: [],
            // }),
            commonjs(),
            json(),
            url({
              // by default, rollup-plugin-url will not handle font files
              include: ['**/*.woff', '**/*.woff2', '**/*.ttf'],
              // setting infinite limit will ensure that the files
              // are always bundled with the code, not copied to /dist
              limit: Infinity,
          }),
            typescript({ tsconfig: './tsconfig.json' }),
            terser(),
        ],
    },
    {
      input: "dist/esm/index.d.ts",
      output: [{ file: "dist/index.d.ts", format: "esm" }],
      plugins: [dts()],
      external: [/\.(css|less|scss)$/],
    },
    // {
    //     input: 'dist/esm/index.d.ts',
    //     output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    //     plugins: [dts()],
    // },
];
