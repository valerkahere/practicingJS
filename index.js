
// task 1
let total = 0;
let count = 1;

let condition = count;
condition = condition - 11; // - 10

while (true) {
    condition = count; // 1, 2, 3, 4, 5, 6, 7, 8, 9
    condition = condition - 11; // -10, -9, -8, -7

    if (condition === 0) {
        console.log(`Total is: ${total}.`);
        break;
    }

    total = total + count; // 1, 3, 6

    count = count + 1;

    continue;
}

// how many iterations? each one adds 1 to count
// therefore adds 1 to total

// stops when condition is zero - condition

// loop breakdown:
// FIRST
// 1
// loc2: -10
// if -10 === 0
// loc0: 1
// loc1: 2

// SECOND
// loc2: 2
// loc0: 3
// loc1: 3

// THIRD
// loc2: 3
// loc0: 6
// loc1: 4
