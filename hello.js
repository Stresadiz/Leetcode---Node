function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
function testFnWithOptional(name) {
    if (name !== undefined) {
        console.log(`Welcome ${name}`);
    }
    else {
        console.log("No name ? :/");
    }
}
testFnWithOptional("Henry");
testFnWithOptional();
