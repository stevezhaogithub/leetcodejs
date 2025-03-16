/**
 *
 * @param { number[] }nums
 * @param {number} k
 */
let subarraySum = function (nums, k) {
    // 1. 使用哈希表保存前缀和及其出现的次数
    const sumMap = new Map();
    // 2. 初始化空子数组时，前缀和 0 出现 1 次
    sumMap.set(0, 1);

    // 3. 当前前缀和
    let sum = 0;
    let count = 0;  // 出现次数

    // 遍历数组
    for (let i = 0; i < nums.length; i++) {
        // 计算当前前缀和
        sum += nums[i];

        // 如果存在 sum - k, 其值即为
        if (sumMap.has(sum - k)) {
            count += sumMap.get(sum - k);
        }

        // 更新当前前缀和的计数
        sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
    }
    return count;
}