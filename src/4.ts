class Key {
    private signature: number
    constructor() {
        this.signature = Math.random()
    }
    getSignature():number{
        return this.signature
    }
}
class Person {
    constructor(private key: Key){}
    getKey(): Key{
        return this.key
    }
}
class House {
public tenants: Person[] 
    constructor(public door:boolean, public key: Key){
        this.tenants = []
    }
    comeIn(person: Person): Person[] | void {
if (this.door === true) {
    this.tenants.push(person)
    return this.tenants
} else {
    console.log("The door is closed")
}
    }
    openDoor(key: Key): void{}
}
class MyHouse extends House {
    constructor(door:boolean, key: Key){
        super(door, key)
        this.tenants = []  
    }
    openDoor(key: Key): void{
        if (key.getSignature() === this.key.getSignature()) {
        this.door = true    
        } else {
            console.log("incorrect key");
            
        }
        
            }
}
const key = new Key();

const house = new MyHouse(false, key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};