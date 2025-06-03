export class Node {
    constructor (){
        const val = null
        const nextNode = null;
    }

    get getVal(){
        return this.val;
    }

    get getNext(){
        return this.nextNode;
    }

    set setVal(newVal){
        this.val = newVal;
    }

    set setNext(newnext){
        this.nextNode = newnext;
    }
}
