# Data Manipulation in JS
## Maps
Maps are a new object type that allows you to store collections of key-value pairs. The key can be of any type, and it's not limited to just strings or integers. This makes maps a lot more flexible than objects, which only allow you to use strings as keys. Maps also maintain the order of the keys, which is not guaranteed with objects. This makes maps a lot more predictable and easier to work with.

Maps are created using the `Map` constructor, and you can add key-value pairs to a map using the `set` method. You can also get the value of a key using the `get` method, and check if a key exists in a map using the `has` method. You can also remove a key from a map using the `delete` method, and clear all keys from a map using the `clear` method.

## Sets

Sets are another new object type that allows you to store collections of unique values. Sets are similar to arrays, but they only allow you to store unique values. This means that you can't have duplicate values in a set. Sets are created using the `Set` constructor, and you can add values to a set using the `add` method. You can also check if a value exists in a set using the `has` method, and remove a value from a set using the `delete` method. You can also clear all values from a set using the `clear` method.

## WeakMaps

WeakMaps are a special type of map that allows you to store weak references to objects. This means that the keys in a WeakMap are weakly held, which means that they don't prevent the garbage collector from collecting them. This can be useful if you want to associate data with an object without preventing the object from being garbage collected. WeakMaps are created using the `WeakMap` constructor, and you can add key-value pairs to a WeakMap using the `set` method. You can also get the value of a key using the `get` method, and check if a key exists in a WeakMap using the `has` method. You can also remove a key from a WeakMap using the `delete` method.
