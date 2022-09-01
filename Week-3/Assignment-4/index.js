function createStack() {
    const items = [];
    return {
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        },
        status() {
            console.log(items);
        }
    };
}
  
const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.status());
stack.pop();
console.log(stack.status());
stack.items = [10, 100, 1000];
console.log(stack.status());