/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

function findSmallestIndex(arr, currentIndex = 0, smallestIndex = 0) {
    if (currentIndex === arr.length) {
        return smallestIndex;
    }

    if (arr[currentIndex] < arr[smallestIndex]) {
        smallestIndex = currentIndex;
    }

    return findSmallestIndex(arr, currentIndex + 1, smallestIndex);
}

function sort(nums, sorted = []) {
    if (nums.length === 0) {
        return sorted;
    }

    const smallestIndex = findSmallestIndex(nums);
    const smallest = nums[smallestIndex];

    nums.splice(smallestIndex, 1); // Remove the smallest element

    sorted.push(smallest);

    return sort(nums, sorted);
}

// Option 2:
function sort(nums, sorted = []) {
    // Base case: all numbers are in the sorted array
    if (nums.length == 0) {
        return sorted;
    }

    // Find the smallest number in the nums array
    let minIndex = 0;
    for (let i = 1 ; i < nums.length ; i++) {
        if (nums[i] < nums[minIndex]) {
            minIndex = i;
        }
    }

    // Add the smallest number to the end of the sorted array
    sorted.push(nums[minIndex]);

    // Remove the smallest number from the nums array
    nums.splice(minIndex, 1);

    // Recursively call sort with the new array
    return sort(nums, sorted);
}

// Examples:

console.log(sort([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7]
console.log(sort([0, 1, -3])); // [-3, 0, 1]
console.log(sort([])); // []

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = sort;
