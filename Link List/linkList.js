class Node{//Crate Node
    constructor(value,nextNode=null){
        this.value=value;
        this.nextNode=nextNode;
    }
}

class LinkList{ //
    constructor(value){ //create List 
        let node=new Node(value);//create node
        this.head=this.tail=node; // head and tail point
        this.length=1; //set length
    }

    Append(data){ //insert in last
        let node=new Node(data); //create new Node
        this.tail.nextNode=node;// current Node
        this.tail=node; // current node tail new Node [current node value=6 nextNode=[vale=20,nextNode=null]]
        this.length++; //lenght+1
    }
    Prepend(data){//insert at first possition
        let node=new Node(data); // Cerate New Node
        node.nextNode=this.head; // new node NextNode=current head
        this.head=node; //update head point new node
        this.length++; // length+1
    }
    insertAnyPosition(data,n){//Insert at any position
        if(n==1){//for first position
            this.Prepend(data);//call prepend function
            return;
        }
        else if(n==this.length+1){ //for last position
            this.append(data); //call append function
            return
        }
        let node=new Node(data);// Create a Node
        let previousNode=this.find(n-1); //find previous node
        const temp=previousNode.nextNode; //store previous node value to temp
        previousNode.nextNode=node;//previous node next node = new node
        node.nextNode=temp; // new node nextnode=temp
        this.length++;//length +1
    }   

    Update(data,n){
        this.find(n).value=data;
    }

    Delete(n){ //Delete First Node
        if(n==1){
            this.head=this.find(1).nextNode;
            this.length--;
            return;
        }
        else if(n==this.length){ //Delete Last Node
            let lat=this.find(n-1); //find previous Node
            this.tail=lat; // tail=previous Node
            lat.nextNode=null //next Node=null
            this.length-- //length-1
            return;
        }
        //Delete 2nd Node to lastNode-1 Node
        let previousNode=this.find(n-1); //find previous Node
        const temp=previousNode.nextNode.nextNode; //copy previous Node next Node ->next Node to temp variable
        previousNode.nextNode=temp; //past temp value to previousNode.nextNode 
        this.length--; //length -1
    }
    find(n){
        let copyHead=this.head; //copyHead to this.head
        for(let i=1;i<n;i++){ 
            copyHead=copyHead.nextNode; //find Previous Node Next Point Node //6->10->9->20->40->x
        }
        return copyHead //return previous Node
    }
    Print(){
        let copyHead=this.head;
        while(copyHead){
            console.log(copyHead.value);
            copyHead=copyHead.nextNode;
        }
        return copyHead;
    }
}

let obj=new LinkList(10);
obj.Append(20);
obj.Append(40);
obj.Prepend(5);
obj.Update(6,1);
obj.insertAnyPosition(9,3);
obj.Delete(5);
obj.Delete(2)
obj.Print();
console.log(obj);