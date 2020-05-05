/*  
Given an array of strings, group anagrams together.

Example:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

Note:
All inputs will be in lowercase.
The order of your output does not matter.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let strMap = {};

    strs.forEach(str => {
        let sortedStr = (str.split('')).sort().join('')
        if (strMap[sortedStr]) {
            strMap[sortedStr] = [...strMap[sortedStr], str];
        } else {
            strMap[sortedStr] = [str]
        }
    });

    return Object.values(strMap)
};

