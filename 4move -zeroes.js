/*  
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

Hint 1:
In-place means we should not be allocating any space for extra array. But we are allowed to modify the existing array. However, as a first step, try coming up with a solution that makes use of additional space. For this problem as well, first apply the idea discussed using an additional array and the in-place solution will pop up eventually.

Hint 2:
A two-pointer approach could be helpful here. The idea would be to have one pointer for iterating the array and another pointer that just works on the non-zero elements of the array.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let n = nums.length;

    //     for(let i=0; i < n; ){
    //         if (nums[i] == 0){
    //             for (let j = i ; j < n; j++){
    //                 nums[j] = nums[j+1];
    //             }
    //             nums[n-1] = 0;
    //             n--;
    //         }else{
    //             i++;
    //         }
    //     }

    // [0,1,2,0,0,5]
    let position = 0;
    for (let i = 0; i < n; i++) {

        if (nums[i] !== 0) {
            nums[position] = nums[i];
            position++;
        }
    }

    for (let j = position; j < n; j++) {
        nums[j] = 0
    }

};