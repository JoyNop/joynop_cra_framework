'use strict';

module.exports = (webpackEnv = 'production') => {
  return [require('./client')(webpackEnv), require('./server')(webpackEnv)];
};
