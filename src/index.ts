import postcss from 'rollup-plugin-postcss';
import images from '@rollup/plugin-image';

export default {
  input: 'src/index.ts',  // Asegúrate de que este archivo exista
  output: {
    file: 'dist/bundle.js',
    format: 'esm', // o 'cjs' según tu necesidad
  },
  plugins: [
    postcss({
      modules: true,
      use: ['sass'], // Si usas Sass, si no lo omites
      extract: true,
    }),
    images({
      include: ['**/*.png', '**/*.jpg'], 
    }),
  ],
};
