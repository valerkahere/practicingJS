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

for (let number = 1; number < 101; number++) {
    console.log(`Current number: ${number}`);
    
    // switch (number) {
    //     case (number % 3 === 0):
    //         console.log('Fizz');
    //         break;
    //     case (number % 5 === 0):
    //         console.log('Buzz');
    //         break;
    //     // case (number % 3 === 0 && number % 5 === 0):
    //     //     console.log('FizzBuzz');
    //     //     break;
    //     default:
    //         console.log(number);
    //         break;
    // }

    // let's try to use if else instead
    if (number % 3 === 0 && number % 5 === 0) {
        console.log('FizzBuzz');
        continue;
    }
    else if (number % 3 === 0) {
        console.log('Fizz');
        continue;
    } else if (number % 5 === 0) {
        console.log('Buzz');
        continue;
    } else {
        console.log(number);
        continue;
    }
}

// first 10:
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz