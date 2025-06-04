export class Node {
    constructor (){
        this._val = null
        this._next = null;
    }

    get val(){
        return this._val;
    }

    get next(){
        return this._next;
    }

    set val(newVal){
        this._val = newVal;
    }

    set next(newnext){
        this._next = newnext;
    }
}
