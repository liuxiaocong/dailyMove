import testA from './moduleA';

testA();

import('./moduleB').then(module => {
  module.default();
});