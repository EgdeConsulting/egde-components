//import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import builtins from 'rollup-plugin-node-builtins';
//import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import { terser } from 'rollup-plugin-terser';

// eslint-disable-next-line no-undef
const packageJson = require('./src/egde-components/package.json');

export default [
    {
        input: 'src/index.ts',
        // preserveModules: true,
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: false,
                name: 'egde-components',
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: false,
            },
        ],
        plugins: [
            builtins(),
            resolve({ browser: true }),
            generatePackageJson({
                inputFolder: './src/egde-components/',
                outputFolder: './dist',
                baseContents: {
                    main: 'cjs/index.ts',
                    module: 'esm/index.ts',
                },
            }),
            commonjs(),
            // babel({
            //     exclude: 'node_modules/**',
            //     presets: ['@babel/preset-react'],
            //     extensions: ['.js', '.ts', '.jsx', '.tsx'],
            // }),
            external(),
            typescript({
                tsconfig: './tsconfig.json',
            }),
            postcss(),
            terser(),
        ],
    },
    {
        input: 'dist/esm/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        external: [/\.css$/],
        plugins: [dts()],
    },
];
