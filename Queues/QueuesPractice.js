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
	return null;
}