/*  
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {

    let sum = 0, maxLenght = 0;
    let keyMap = {};

    nums = nums.map(num => num == 0 ? -1 : num);

    for (let i = 0; i < nums.length; i++) {

        sum += nums[i];

        if (sum === 0) {
            maxLenght = i + 1;
        }

        if (keyMap.hasOwnProperty(`${sum}`)) {
            let diff = i - keyMap[sum];
            maxLenght = diff > maxLenght ? diff : maxLenght

        } else {
            keyMap[sum] = i;
        }
    }

    return maxLenght;

};