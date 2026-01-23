function fizz(n) {
  for (let i = 1; i <= n; i++) {
    let current=i
    if (i % 3 === 0 && i % 5 === 0) {
      current = "FizzBuzz";
    }
    else if (i % 3 == 0) {
      current = "Fizz";
    } 
    else if (i % 5 === 0) {
      current = "Buzz"
    } 
    console.log(current)
  }
}
console.log(fizz(15))
