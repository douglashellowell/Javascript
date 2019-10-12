let num = Math.floor(Math.random()* 10)

console.log(num)

let guess = prompt("Guess a number between 0 and 9", 0)
console.log(guess)
if(guess == num){
    alert(`WELL DONE ${num} is correct!` )
} else {
    alert("Hard luck")
}