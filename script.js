// function addHello(arr) {
//     arr.push("Hello");
//     return arr;
//    }
//    let myExample = ["This", "is", "an", "example"];
//    let newExample = addHello(myExample);
//    console.log(newExample);


// function sumInput() {
//     let sum = 0;
//     let input;
//     while ((input = prompt("Число? (Отмена для выхода)")) !== null) {
//      sum += parseFloat(input);
//     }
//     return sum;
//    }
//    alert("Сумма: " + sumInput());


function sumInput() {
    let sum = 0;
    let input;
    while (true) {
        if (!Number.isNaN(parseInt(userInput)) && !Number.isNaN(+userInput)) {
            sum += +input;
            input = prompt("Число?")
        }
        else {
            break
        }

        return sum;
    }
}
alert("Сумма: " + sumInput());
