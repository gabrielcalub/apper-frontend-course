class Stack {
    constructor() {
        this.items = [];
    }

    // Method that adds values to the stack
    push(value) {
        if (typeof value === 'string') {
            this.items.push(value);
        } else if (Array.isArray(value)) {
            // Iterate through the array and push only strings
            value.forEach(item => {
                if (typeof item === 'string') {
                    this.items.push(item);
                }
            });
        } else {
            console.error('Error: Stack accepts strings or arrays of strings only.');
        }
    }

    // Method that removes and returns the top value from the stack
    pop() {
        if (this.isEmpty()) {
            console.error('Stack is currently empty.');
            return;
        }
        return this.items.pop();
    }

    // Method that checks and prints only string values in the stack
    check() {
        console.log(this.items);
    }

    // Method that checks if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
}

// Example usage:
const stack = new Stack();

stack.push("Milk")
stack.push("Eggs")
stack.check()  // [“Milk”, “Eggs”]
stack.pop()
stack.check()  // [“Milk”]
stack.pop()
stack.check()  // []
stack.push(["Ice Cream", 10, [], "Cellphone"])
stack.check()  // ["Ice Cream", "Cellphone"]
stack.pop()
stack.check()  // [“Cellphone”]
stack.pop()
stack.check()  // []
stack.pop()    // “Stack 
