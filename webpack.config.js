'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/script.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/js/dist'
  },
  watch: false,

  devtool: "source-map",

  module: {}
};
