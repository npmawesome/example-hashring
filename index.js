/**
 * example-hashring
 * http://npmawesome.com/posts/hashring
 *
 * Copyright(c) 2014 npmawesome.com
 *
 * MIT Licensed
 */

'use strict';

var HashRing = require('hashring');

var ring = new HashRing({
  '127.0.0.1:11211': { vnodes: 50 },
  '127.0.0.2:11211': { vnodes: 200 },
  '127.0.0.3:11211': { vnodes: 100 }
});

console.log(ring.get('npmawesome'));
console.log(ring.get('http://...'));
console.log(ring.range('http://...', 2));
