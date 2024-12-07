
import twoSum from './twosumv1.js';


// Test cases
const testTwoSum = () => {
    const testCases = [
        { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
        { nums: [3, 2, 4], target: 6, expected: [1, 2] },
        { nums: [3, 3], target: 6, expected: [0, 1] },
    ];

    testCases.forEach(({ nums, target, expected }, index) => {
        const result = twoSum(nums, target);
        console.assert(
            JSON.stringify(result) === JSON.stringify(expected),
            `Test case ${index + 1} failed: expected ${expected} but got ${result}`
        );
    });

    console.log("All test cases passed!");
};

testTwoSum();