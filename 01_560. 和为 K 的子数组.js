/**
 *
 * @param { number[] }nums
 * @param {number} k
 */
let subarraySum = function (nums, k) {

    //  1. 定义一个哈希表，用来存储每个元素位置的前缀和
    let prevSumMap = new Map();
    // 初始化哈希表中的第一个元素: 前缀和为 0 的情况默认出现 1 次
    prevSumMap.set(0, 1);

    // 2. 定义用来记录当前前缀和的变量 sum
    let sum = 0;
    // count 表示: 和为 k 的子数组的总数
    let count = 0;

    // 3. 遍历数组，统计截止每个元素的前缀和
    // [1, 2, 3, 4, 5, 6]
    for (let i = 0; i < nums.length; i++) {
        // 统计以每个元素结尾的，前缀和
        sum += nums[i];

        // prevSumMap.get(sum - k) 表示以当前遍历位置 i 结尾的、和为 k 的子数组数量
        if (prevSumMap.has(sum - k)) {
            count += prevSumMap.get(sum - k);
        }

        // 将每个前缀和都加入哈希表中
        prevSumMap.set(sum, (prevSumMap.get(sum) || 0) + 1);
    }

    return count;

}

subarraySum([1, 2, 3, 4, 5, 6], 2);