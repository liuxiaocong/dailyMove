import _ from 'lodash';
import second, { log } from './second';

const name = _.join(['hello', 'world'], '-');
log(name);
console.log(second);
