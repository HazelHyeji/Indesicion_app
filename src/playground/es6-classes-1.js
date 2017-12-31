
//constructor is es 6 syntax for Class. memorize it
class Person {
    constructor(name = 'Anonymous', age = 0) { // you can set up default argument
        this.name = name;
        this.age = age;
    }
    getGretting() {
        //return 'Hi! ' + this.name;
        return `hi! ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}

//new instances
const me = new Person('Andrew Mead', 26);
console.log(me.getDescription());

const other = new Person();
console.log(other.getGretting());