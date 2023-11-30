function twoSum(nums: number[], target: number): number[] | undefined {
    const map = new Map<number, {index :number}>();

    for(let i = 0; i < nums.length; i++) {
        const num = target - nums[i];
        const isStored =  map.has(num);
        if(isStored) {
            return [map.get(num)!.index, i]
        }
        map.set(nums[i], {index: i});
    }
};