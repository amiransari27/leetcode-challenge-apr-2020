/*  
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6

Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    let max_array_element;
    let acc_max_res = 0;
    let acc_max_sum = 0;

    nums.forEach(value => {

        if (max_array_element !== undefined) {
            if (max_array_element < value) {
                max_array_element = value
            }
        } else {
            max_array_element = value
        }

        acc_max_sum += value;

        if (acc_max_sum < 0) {
            acc_max_sum = 0
        }

        if (acc_max_res < acc_max_sum) {
            acc_max_res = acc_max_sum
        }

    });

    if (acc_max_res == 0) {
        acc_max_res = max_array_element
    }

    return acc_max_res;

};