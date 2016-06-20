// Angular-CLI build configuration
// This file lists all the node_modules files that will be used in a build
// Also see https://github.com/angular/angular-cli/wiki/3rd-party-libs

/* global require, module */

const Angular2App = require('angular-cli/lib/broccoli/angular2-app');
const compileSass = require('broccoli-sass');
const mergeTrees = require('broccoli-merge-trees');
const _ = require('lodash');
const glob = require('glob');
const compileCSS = require('broccoli-postcss');
const cssnext = require('postcss-cssnext');
const cssnano = require('cssnano');

var options =  {
  plugins: [
    {
      module: cssnext,
      options: {
        browsers: ['> 1%'],
        warnForDuplicates: false
      }
    },
    {
      module: cssnano,
      options: {
        safe: true,
        sourcemap: true
      }
    }
  ]
};

module.exports = function(defaults) {
  var appTree = new Angular2App(defaults, {
    sassCompiler: {
      includePaths: [
        'src/style'
      ]
    },
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(ts|js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      'jquery/dist/*',
      'angular2-materialize/dist/*',
      'materialize-css/dist/**/*'
    ]
  });
  var sass = mergeTrees(_.map(glob.sync('src/**/*.scss'), function(sassFile) {
    sassFile = sassFile.replace('src/', '');
    return compileSass(['src'], sassFile, sassFile.replace(/.scss$/, '.css'));
  }));
  var css = compileCSS(sass, options);
  return mergeTrees([appTree, sass, css], { overwrite: true });
};
// SCSS pre-compiler setup from: https://www.codementor.io/angularjs/tutorial/compiling-sass-postcss-with-angular-cli
