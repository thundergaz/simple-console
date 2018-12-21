const log = require('../index.js');
log.warn('npmber',222);
log.warn('string', 'abc');
log.warn('string only');
log.warn({name: 'object'});
log.warn({name: 'first object'},{name: 'second object'});