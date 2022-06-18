let array = [1, 4, 7, 0];

let uno = "1";

console.log(uno.padStart(4, 0));
console.log(uno.repeat(8));

let s = "Chamaco";

for (let pos of s) {
    console.log(pos);
}

const max = (...nums) => {
    let max = nums[0];
    
    for (let x of nums) {
        max = (x > max) ? x : max;
    }
    
    return max;
};

console.log(`Maxium: ${max(19, 67, 32, 100, 356, 600, 999)}`);


