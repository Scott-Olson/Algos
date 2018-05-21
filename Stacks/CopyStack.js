
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
// function AddToStack(stack, val){
// 	var temp = new Node(val);
// 	temp.next = stack.top;
// 	stack.top = temp;
// 	return stack;
// }

Stack.prototype.AddToStack = function(val){
	if(this.top){
		var temp = new Node(val);
		temp.next = this.top;
		this.top = temp;
	}
	else{
		this.top = new Node(val);
	}
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
myStack.AddToStack(3);
myStack.AddToStack(5);
myStack.AddToStack(7);
myStack.AddToStack(9);
console.log(myStack);
traverse(myStack);
console.log("-=-=-=-=-=-=-=-");






