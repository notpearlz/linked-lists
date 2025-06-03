import { Node } from "./node.js";

export class LinkedList {
    constructor(){
        this.list = [];
    }


    get head(){
        return this.list[0];
    }

    get size(){
        return this.list.length;
    }
   
    get tail(){
        return this.list[this.list.length-1];
    }

    at(index){
        return this.list[index];
    }

    pop(){
        this.list.pop();
    }

    contains(value){
        //search algorithim
        // return true or false
        for(let i = 0; i < this.list.length; i++){
            if(this.list[i].getVal === value) {
                return true;
            }
        }
        return false;
    }

    find(value){
        //search algorithim
        // return index
        for(let i = 0; i < this.list.length; i++){
            if(this.list[i].getVal === value) {
                return i;
            }
        }
        return null;

    }

    //Represent list as string
    // e.g.: ( value ) -> ( value ) -> ( value ) -> null
    toString(){
        //search algorithim
        // add it to a string
        var string = "";


        for(let i = 0; i < this.list.length; i++){
            const val = this.list[i].getVal
            if(val !== null){
                string += `(${val}) -> `;
            }
        }
        string += "null";
        return string;
        
    }
    // add a node to the end of the lsit
    append (value){
        const newNode = new Node();
        newNode.setVal = value

        this.list.push(newNode);
    }

    prepend (value){
        const newNode = new Node();
        newNode.setVal = value

        this.list.unshift(newNode);
    }
}