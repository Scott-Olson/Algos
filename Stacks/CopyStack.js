
// stack constructor
function Stack(){
	this.top = null;
}
// node constructor
function Node(val){
	this.val = val;
	this.next = null;
}
// add val to stack
function AddToStack(stack, val){
	var temp = new Node(val);
	temp.next = stack.top;
	stack.top = temp;
	return stack;
}
// remove node from stack
function removeStack(stack){
	if(stack.top){
		var temp = stack.top;
		stack.top = stack.top.next;
		console.log("removing --->", temp.val)
		return temp;
	}
	return null;
}
// function that prints entire stack in console
function traverse(stack){
	runner = stack.top;
	if(runner==null){
		console.log('-=-=-=-=-Empty stack-=-=-=-=-=-');
		return null;
	}
	while(runner){
		console.log("stack val",runner.val);
		runner = runner.next;
	}
	return stack;
}

// duplicates the stack, does not preserve the original stack
function dupeStack(stack){
	var tempStack = stack
	var midStack = new Stack();
	var copyStack = new Stack();
	while (tempStack.top){
		AddToStack(midStack, tempStack.top);
		removeStack(tempStack);
	}

	while (midStack.top){
		AddToStack(copyStack, midStack.top);
		removeStack(midStack);
	}
	traverse(stack);
	return copyStack;
}


// instantiation
var myStack = new Stack();
AddToStack(myStack, 3);
AddToStack(myStack, 5);
AddToStack(myStack, 7);
AddToStack(myStack, 9);
console.log(myStack);
traverse(myStack);
console.log("-=-=-=-=-=-=-=-");
var temp = dupeStack(myStack);
console.log("-=-=-=-=-=-=-=-");
traverse(temp);




