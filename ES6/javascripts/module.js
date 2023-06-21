
import logger from './module/logger.js';// có thể sử dụng cách import như trong file index.js
//import logger from './module/index.js'

import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from './module/constant.js'; // có thể dùng cách khác để lấy ra tất cả các constant mà ko cần phải dùng đến destructuring
import * as constant from './module/constant.js'
//import mà ko có cú pháp Destructuring thì đó là import default, ngược lại không phải là import default
console.log(constant)
logger('Message.....', TYPE_LOG)