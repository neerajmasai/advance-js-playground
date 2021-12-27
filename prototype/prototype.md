# Prototype in JS Key Points ->
- Prototype basically means the blueprint or design on an object.
- Everything in Js is an Object, meaning every object will have a prototype.
- The root prototype of all objects is 'Object'.
- The prototype of 'Object' is null.
- Object prototype can be accessed using '__proto__'.
- Functions has a special property called 'prototype' to access the prototype of that function.
- We can create an Object by using 'Object.create(prototype)'
- We can set the prototype of an object explicitly using 'Object.setPrototypeOf(object1, object2)