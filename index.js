// File: index.js

import {makeObject, default as obj} from './my-mod.js';

obj.name = "Droid";

console.log( "My name is", obj.name );

let robbie = makeObject();
robbie.hello();

let b9 = makeObject({ name: 'B9' });
b9.hello();