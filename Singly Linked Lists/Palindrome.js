function isPalindrome(list){
	if(!list.head){
		return false;
	}
	var compArr = [];
	var runner = list.head;
	while (runner){
		console.log(compArr);
		compArr.push(runner.val);
		runner = runner.next;
	}
	console.log(compArr);
	runner = list.head;
	for (var i = compArr.length -1; i >= Math.floor(compArr.length/2); i --){
		console.log("in here");
		if(runner.val == compArr[i]){
			console.log("sll val ", runner.val);
			console.log("arr val ", compArr[i]);
			runner = runner.next;
		}
		else{
			console.log("Not palindrome");
			return false;
		}
	}
	console.log("Is palindrome");
	return true;
}



function SLL() {
	this.head = null;
}

function Node(val) {
	this.val = val;
	this.next = null;
}

function addToList(list, val) {
    if (list.head == null) {
        list.head = new Node(val);
    } else {
        var runner = list.head;
        while (runner.next != null) {
            runner = runner.next;
        }
        runner.next = new Node(val);
    }
}

function printList(list, actionMsg = "", maxLoop = 100) {
    console.log(actionMsg);

	var node = list.head;

    if (!node)
        return;

	var count = 0;
    while (node.next != null) {
        console.log(node.val);
		node = node.next;
		count++;
		if (count > maxLoop)
			break;
    }
    console.log(node.val);
    
    console.log("==============");
}

var myList = new SLL();

addToList(myList, 5);
addToList(myList, 3);
addToList(myList, 1);
addToList(myList, 3);
addToList(myList, 5);

printList(myList, "Before check", 10);

isPalindrome(myList);



