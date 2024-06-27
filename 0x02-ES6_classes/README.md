# ES6 Classes

## Introduction

ES6 Classes are a simple sugar over the prototype-based inheritance. It is a new way to define classes in JavaScript. It is a new way to define objects and deal with inheritance.

## Syntax

```javascript
class ClassName {
  constructor() {
    // Constructor
  }

  method1() {
    // Method 1
  }

  method2() {
    // Method 2
  }
}
```

## Example

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends
Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog('Rex');
dog.speak();
```

## Output

```
Rex barks.
```