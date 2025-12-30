const roundTo = (n, step) => {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

//n & step: 55 / 2 = 27.5 = 5
// 

// n = 55
// step = 2
// remainder = 5
// 55 - 5 + (2) = 52

console.log(roundTo(55, 3));



/* 
target = 24
current = 1, 
history = '1'

current = target => return history
else current > target => return null
else return
    find(current + 5, history + 5) ?? (if left is null/undefined, return right)
    find(current * 3, history * 3)

    2) current = 6 still hasn't returned
        history = 1 + 5
    
    3) current = 11

    4) current = 16

    5) current = 21

    6) current = 26 - returns null

*/
let h = a => a % 3;
console.log(h(5));