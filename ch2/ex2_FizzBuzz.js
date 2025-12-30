/* 
    fizz buzz - classics, use switch
    print numbers from  1 to 100

    nums divisible by 3 - Fizz
    nums divisible (% === 0) by 5 - Buzz
    THEN,
    nums divisible by 3 && 5 - FizzBuzz

    PRINT NUMBER IS DEFAULT CASE

    Note from Eloquent Javascript:
    (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)
*/

const fizzBuzz = function(n) {
    let answer = [];
        for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                answer.push('FizzBuzz');
            }
            else if (i % 3 === 0) {
                answer.push('Fizz');

            } else if (i % 5 === 0) {
                answer.push('Buzz');

            } else {
                answer.push(String(i));
            }
        }
    return answer;
};
console.log(fizzBuzz(15));