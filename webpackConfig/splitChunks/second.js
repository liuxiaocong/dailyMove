import _ from 'lodash';

const name = _.join(['second', 'world'], '-');

export const log = () => {
  console.log(name);
};

export default {a : "1"}