import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
  input: './custom.js',
  output: {
    file: './custom.min.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    uglify({}, minify),
    buble({
      exclude: ['node_modules/**']
    })
  ]
}
