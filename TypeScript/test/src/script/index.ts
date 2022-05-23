// @ts-ignore
function twoSum(nums: any[], target: number): number[] {
    const map: any = {};
    const length = nums.length;

    if (!length) {
        return [];
    };

    for (let index = 0; index < length; index++) {
        if (map[target - nums[index]] !== undefined) {
            return [map[target - nums[index]], index];
        }

        map[nums[index]] = index;
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));

export const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
] as const;

const key: typeof COLORS[number];
