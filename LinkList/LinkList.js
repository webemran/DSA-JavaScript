//for Node Create Node Have two values head and next 
class Node{
    constructor(data,next=null){
        this.value=data;
        this.next=next;
    }
}
// Create List 
class LinkList{
    constructor(value){ // constructor 
    let node=new Node(value);// call constructor Node
    this.head= this.tail=node; // Head and Tail Same value for first value only
    this.length=1; // Length for first value only

    }
    insert(value){ //Method for insurt Multiple values 
        let node=new Node(value); //Call Node Constructor for Node Head and tail 
        this.tail.next=node; // update Tail this tail means new insert value 
        this.tail=node; // update tail
        this.length++
    }
}


let list1= new LinkList(10);
list1.insert(20);
list1.insert(30);


console.log(list1);
