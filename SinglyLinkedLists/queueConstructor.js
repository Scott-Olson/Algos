function SLL(){
	this.head = null;
}

function Node(val){
	this.val = val;
	this.next = null;
}

function SLQ(){
	this.head = null;
	this.tail = null;
}

function removeFromQueue(list){
	var temp = 0;
	if (list.head == null){
		return false;
	}
	else if(list.head == list.tail){
		temp = list.head;
		list.head = null;
		list.tail = null;
		return list
	}
	else{
		list.head = list.head.next;
		console.log("removing node")
		return list;
	}
}

function addToQueue(list, val){
	if(list.head == null){
		list.head = new Node(val);
		list.tail = list.head;
		console.log(list)
		return list;
	}
	else if(list.head == list.tail){
		list.head.next = new Node(val);
		list.tail = list.head.next;
		console.log(list)
		return list
	}

	else{
		list.tail.next = new Node(val);
		list.tail = list.tail.next
		console.log(list);
		return list;
		
	}
}

function insertByValue(list, insertValue, insertBefore){
	var runner = list.head;
	if(list.head.val = insertBefore){
		var temp = new Node(insertValue);
		temp.next = list.head;
		list.head = temp;
		console.log('-/-/-')
		return list;
	}
	while(runner){
		if(runner.next.val == insertBefore){
			var temp = new Node(insertValue);
			temp.next = runner.next;
			runner.next = temp;
			console.log('in here, adding this node', temp)
			return list
		}
		else{
			runner = runner.next;
		}

	}
	console.log('value not in list')
	return null;
}


function insertByIndex(list, insertValue, insertIndex){
	var runner = list.head;
	var indexCount = 0;
	var adjusted = insertIndex -1;
	if(insertIndex == 0){
		var temp = new Node(insertValue);
		temp.next = list.head;
		list.head = temp;
		console.log('-/-/-')
		return list;
	}
	while(runner){
			console.log('----')
			indexCount += 1
			runner = runner.next
		if(indexCount == adjusted){
			var temp = new Node(insertValue);
			temp.next = runner.next;
			runner.next = temp;
			console.log('inserted', temp);
			return list;
		}
	}
	return null
}




function traverseSLQ(list){
	runner = list.head;
	while(runner){
		console.log("queue val",runner.val);
		runner = runner.next;
	}
	return list;
}


mySLQ = new SLQ();
addToQueue(mySLQ,15);
addToQueue(mySLQ,25);
addToQueue(mySLQ,35);
addToQueue(mySLQ,45);
addToQueue(mySLQ,55);
traverseSLQ(mySLQ);
// removeFromQueue(mySLQ);
// removeFromQueue(mySLQ);
console.log("-=-=-=-=-");
insertByValue(mySLQ, 8, 15);
console.log("-=-=-=-=-");
traverseSLQ(mySLQ);
console.log('<><><><><><>');
insertByIndex(mySLQ, 4, 0);
console.log('<><><><><><>');
traverseSLQ(mySLQ);






