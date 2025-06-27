import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: {
    tsconfig: './tsconfig.build.json',
    compilerOptions: {
      jsx: 'react-jsx',
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
      moduleResolution: 'node',
    },
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'styled-components'],
  banner: {
    js: '"use client";',
  },
}); 