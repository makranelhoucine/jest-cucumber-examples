import dev from './development';
import prd from './production';

const env =
  process.env.NODE_ENV && process.env.NODE_ENV !== 'production' ? dev : prd;

export default env;
