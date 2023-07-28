// Challenge 1

/**
 * firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = () => {
  console(parameter)
  console(parameter)
}

function hobby () {
  logTwice(`Hello, ${name} (${age}). I love ${hobby}!`)
}

hobby()
 * 
 */

// SOLUTION

const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
}

function hobbyFunc() {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

hobbyFunc();

// CHALLENGE 2

/**
 * // script.js

function add = a, b => { a + b }

function multiply = a, b => { a - b }

function internal() {
	const added = this.add(this.a, this.b)
	this.multiply(this.a, this.b)
	return this
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()
 * 
 */

// SOLUTION

function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function internal() {
    const added = this.add(this.internal.a, this.internal.b); // Changed 'this.a' and 'this.b' to 'this.internal.a' and 'this.internal.b'
    const multiplied = this.multiply(this.internal.a, this.internal.c); // Changed 'this.a' and 'this.b' to 'this.internal.a' and 'this.internal.c'
    return this;
  }
  
  const example1 = {
    internal: {
      a: 2,
      b: 4,
      c: 8,
    },
    add,
    multiply,
    calculate: internal,
  };
  
  const example2 = {
    internal: {
      a: 2,
      b: 2,
      c: 3,
    },
    add,
    multiply,
    calculate: internal,
  };
  
  example1.calculate();
  example2.calculate();
  