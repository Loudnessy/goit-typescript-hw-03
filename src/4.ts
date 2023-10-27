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
        return key
    }
}
class House {

    constructor(public door:boolean, public key: Key){}
    comeIn(person: Person): Person[] | void {
        const tenants: Person[] = []
if (this.door === true) {
    tenants.push(person)
    return tenants
} else {
    console.log("The door is closed")
}
    }
    openDoor(key: Key): void{}
}
class MyHouse extends House {
    constructor(door:boolean, key: Key ){
        super(door, key)
    }
    openDoor(key: Key): void{
        if (key === this.key) {
        this.door === true    
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