function createStack() {
    const items = [];
    return {
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        },
        listItems() {
            console.log(items);
        }
    };
}
  
const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.listItems());
stack.pop();
console.log(stack.listItems());
stack.items = [10, 100, 1000];
console.log(stack.listItems());