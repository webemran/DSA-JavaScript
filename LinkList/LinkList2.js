class Node{
    constructor(data,next=null){
        this.value=data;
        this.nextNode=next;
    }
}

class LinkList2{
    constructor(value){
        let node=new Node(value);
        this.head=this.tail=node;
        this.length=1;
    }
    Append(data){
        let node=new Node(data);
        this.tail.nextNode=node;
        this.tail=node;
        this.length++;
    }
    prePennd(data){
        let node=new Node(data);
        node.nextNode=this.head;
        this.head=node;
        this.length++;
    }
    AppendAnyPosition(value,n){
        let node=new Node(value);
        let prevNode=this.findNode(n-1);
        console.log(prevNode.nextNode);
        const temp=prevNode.nextNode;
        prevNode.nextNode=node;
        node.nextNode=temp;
        this.length++;
    }


    findNode(n){
        let data=this.head;
        for(let i=1;i<n;i++){
            data=data.nextNode;
        }
        return data;
    }

}


let list2=new LinkList2(10);
list2.prePennd(30);
list2.Append(20);
list2.AppendAnyPosition(-20,2);
console.log(list2);