import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import builtins from 'rollup-plugin-node-builtins';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import { terser } from 'rollup-plugin-terser';

// eslint-disable-next-line no-undef
const packageJson = require('./src/egde-components/package.json');

export default [
    {
        // "input" defines that the possible exports "egde-components"
        // will have are limited to the content of src/index.ts
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/' + packageJson.main,
                format: 'cjs',
                sourcemap: false,
            },
            {
                file: 'dist/' + packageJson.module,
                format: 'esm',
                sourcemap: false,
            },
        ],
        plugins: [
            builtins(),
            resolve({ browser: true }),
            generatePackageJson({
                inputFolder: 'src/egde-components/',
                outputFolder: 'dist',
                baseContents: packageJson,
            }),
            commonjs(),
            external(),
            typescript({
                tsconfig: './tsconfig.json',
            }),
            postcss(),
            terser(),
        ],
        external: ['react', 'react-dom'],
    },
    {
        input: 'dist/esm/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        external: [/\.css$/],
        plugins: [dts()],
    },
];
