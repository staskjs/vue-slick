import buble from 'rollup-plugin-buble'
import common from 'rollup-plugin-commonjs'
import node from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/wrapper.js',
  output: [
    {
      file: 'dist/slickCarousel.umd.js',
      format: 'umd',
      name: 'slickCarousel.umd',
    }
  ],
  plugins: [common(), node(), vue(), buble()]
}
