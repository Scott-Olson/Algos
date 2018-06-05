
function SLL(){
	this.head = null;
}

function Node(val){
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
// find the nth element from the end of the list

function knth(list, num){
	var counter =0;
	var runner = list.head;
	if(!list.head){
		return null;
	}
	if(num <= 0){
		return null;
	}
	while(runner){
	counter ++;
	runner = runner.next;
	}
	if( num > counter){
		return null;
	}
	runner = list.head;
	for(var i = 1; i<= counter - num; i++){
		runner = runner.next;
	}
	return runner.val;
}

var myList = new SLL();

addToList(myList, 1);
addToList(myList, 2);
addToList(myList, 3);
addToList(myList, 4);
addToList(myList, 5);
addToList(myList, 6);
addToList(myList, 7);
addToList(myList, 8);
addToList(myList, 9);


console.log(knth(myList, 1));




