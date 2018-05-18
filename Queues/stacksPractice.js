function Stack(){
	this.top = null;
}

function Node(val){
	this.val = val;
	this.next = null;
}

function AddToStack(stack, val){
	var temp = new Node(val);
	temp.next = stack.top;
	stack.top = temp;
	return stack;
}

function removeStack(stack){
	if(stack.top){
		var temp = stack.top;
		stack.top = stack.top.next;
		return temp;
	}
	return false;
}

function traverse(stack){
	runner = stack.top;
	while(runner){
		console.log("stack val",runner.val);
		runner = runner.next;
	}
	return stack;
}

var myStack = new Stack();
AddToStack(myStack, 3);
AddToStack(myStack, 5);
AddToStack(myStack, 7);
AddToStack(myStack, 9);
console.log(myStack);
traverse(myStack);
console.log("-=-=-=-=-=-=-=-")
removeStack(myStack);
traverse(myStack);