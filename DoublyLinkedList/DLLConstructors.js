//constructors
function DLL(){
	this.head = null;
}

function Node(val){
	this.val = val;
	this.next = null;
	this.prev = null;
}

function Traverse(list){
	var runner = list.head;
	while (runner){
		console.log("Current runner info: ", runner.val, " prev: ", runner.prev, " next: ", runner.next);
		runner = runner.next;
	}
}

function addToList(list, val){
	// checks is list is empty, adds to the list if it is
	if(!list.head){
		list.head = new Node(val);
	}
	else{
		// iterates through to find the end of the list
		var runner = list.head;
		while(runner.next){
			runner = runner.next;
		}
		// adds new node to the end of the list
		console.log("end found")
		runner.next = new Node(val);
		console.log("new node added")
		// sets the previous of the new node 
		runner.next.prev = runner;
	}
}

// delete a node that has the value provided

function deleteFromList(list, val){
	// check if list is empty
	if(!list.head){
		return null;
	}
	else{
		var runner = list.head;
		while(runner){
			// look for val in list
			if(runner.val == val){
				// if the list value is present on the first node, and there are values after 
				if(runner == list.head && runner.next){
					console.log("found 'er", runner);
					list.head = runner.next;
					list.head.prev = null;
					// return runner;
				}
				// if the list value is present on the first node but there are no values after
				else if(runner == list.head && !runner.next){
					console.log("found 'er", runner);
					list.head = runner.next;
				}
				// check if the value is at the end of the list
				else if(!runner.next){
					console.log("found 'er", runner);
					var temp = runner;
					runner.prev.next = null;
					// return temp;
				}
				// anywhere else in the list
				else{
					console.log("found 'er", runner);
					runner.prev.next = runner.next;
					runner.next.prev = runner.prev;
					// return runner;
				}
			}
			runner = runner.next;
		}

	}
}


var myList = new DLL();

addToList(myList, 3);
addToList(myList, 1);
addToList(myList, 2);
addToList(myList, 3);
addToList(myList, 4);
addToList(myList, 5);
addToList(myList, 3);

Traverse(myList);

deleteFromList(myList, 3);

Traverse(myList);







