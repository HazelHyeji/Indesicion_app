
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
    getDescription() {
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); //To access Person!!!
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription(); //to bring the method from parent class!

        if (this.hasMajor()) {
            description += `Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, major, home) {
        super(name, age);
        this.home = home;
    }
    getGretting() {
        let gretting = super.getGretting();

        if (this.home) {
            gretting += ` ${this.name}'s home is ${this.home}`
        }
        return gretting;
    }
}


//new instances
const me = new Traveler('Andrew Mead', 26, 'Computer Science', 'Florid');
console.log(me.getGretting());

const other = new Traveler(undefined, undefined, "Nowhere");
console.log(other.getGretting()); 