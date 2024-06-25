function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    };

    this.getAge = function() {
        return this.age;
    };
}

var person1 = new Person("John", "Doe", 30);

var greeting = "Good Morning";
var formalGreeting = new String("Good Morning");

function displayGreeting() {
    alert("Greeting (shortcut): " + greeting);
    alert("Greeting (formal): " + formalGreeting);
}

function displayPersonInfo() {
    alert("Full Name: " + person1.getFullName());
    alert("Age: " + person1.getAge());
}
