## In a simple way, let your node command line print out a colored log.


## Install

```console
$ npm install simple-color-console
```
- 错误 message...
- 成功 message...
- 警告 message...
- 信息 message...

## Usage

```js
const log = require('simple-color-console');

log.error('message...');
log.success('message...');
log.warn('message...');
log.info('message...');
log.info(object);
```