import buble from 'rollup-plugin-buble'
import common from 'rollup-plugin-commonjs'
import node from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/slickCarousel.vue',
  external: [
    'jquery',
    'slick-carousel'
  ],
  output: [
    {
      format: 'esm',
      file: 'dist/slickCarousel.esm.js',
    },
    {
      format: 'umd',
      name: 'vueSlickCarousel',
      file: 'dist/slickCarousel.umd.js',
    },
    {
      format: 'cjs',
      file: 'dist/slickCarousel.cjs.js',
    },
  ],
  plugins: [common(), node(), vue(), buble()]
}
