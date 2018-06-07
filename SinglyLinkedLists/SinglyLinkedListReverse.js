// Reverse a singly linked list, head should become last element. 

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

function findEndNode(list){
	runner = list.head;
	while (runner.next) {
		runner = runner.next;
	}
	return runner;
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
    
    console.log("========================================");
}

function reverseLL(list) {
	if (!list.head || !list.head.next)
		return list;

	var runner = list.head;
	var endNode = findEndNode(list);
	var nextNode = null;
	var lastInserted = null;

	var i = 1; // debug
	while (runner.next) {
		console.log("iterate: ", i, " - runner: ", runner); // debug

		nextNode = runner.next;
		runner.next = lastInserted;
		endNode.next = runner;
		lastInserted = runner;
		runner = nextNode;

		console.log("nextNode: ", nextNode, " - runner: ", runner, " - lastInserted: ", lastInserted); // debug
		i++; // debug

		if (runner === endNode)
			break;
	}

	list.head = endNode;
}

var myList = new SLL();

addToList(myList, 1);
addToList(myList, 2);
addToList(myList, 3);
addToList(myList, 4);
addToList(myList, 5);

printList(myList, "Before Reverse", 10);

reverseLL(myList);

printList(myList, "After Reverse", 10);

console.log("complete");