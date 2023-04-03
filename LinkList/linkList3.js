class Node{
    constructor(value, next=null){
        this.value=value;
        this.nextNode=next;
    }
}

class linkList3{
    constructor(data){
        let node=new Node(data);
        this.head=this.tail=node;
        this.length=1;
    }
    insertFirst(data){ //Insert First Position
        let node=new Node(data);
        node.nextNode=this.head;
        this.head=node;
        this.length++;
    }
    insertLast(data){ //Insert Last Position
        let node=new Node(data);
        this.tail.nextNode=node;
        this.tail=node;
        this.length++;
    }

    insertAnyPosition(value,n){ //Insert Any Position
        if(n==1){
            this.insertFirst(value);
            return;
        }
        else if(n==this.length+1){
            this.insertLast(value);
            return;
        }
        let node=new Node(value);//For insert others Positions
        let prevNode=this.findNode(n-1);
        const temp=prevNode.nextNode;
        prevNode.nextNode=node;
        node.nextNode=temp;
        this.length++;
    }
    Update(data,n){
       // let node=this.findNode(n)
       // node.value=data;
       this.findNode(n).value=data;
    }

    Delete(n){
        if(n==1){
           // let nextNodeFind=this.findNode(1);
           // this.head=nextNodeFind.nextNode
            this.head=this.findNode(1).nextNode
            this.length--;
            return;
        }
        let prevNode=this.findNode(n-1);
        prevNode.nextNode=prevNode.nextNode.nextNode
        //let temp=this.findNode(n).nextNode;
        //this.findNode(n-1).nextNode=temp;
        this.length--;
    }

    Print(){
        let data=this.head;
        while(data){
            console.log(data.value);
            data=data.nextNode;
        }
    }
    findNode(n){ //Previour Position Find
        let data=this.head;
        for(let i=1;i<n;i++){
            data=data.nextNode;
        }
        return data;
    }

}

let list4=new linkList3(10);
list4.insertLast(20);
list4.insertLast(30);
list4.insertAnyPosition(-40,1);
list4.Update(500,1);
list4.insertAnyPosition(-50,4);
list4.Print();
list4.Delete(2);
console.log(list4);