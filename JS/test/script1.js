function getResult(nums, targets) {
    let result = [];

    for (let index = 0; index < nums.length; index++) {

        for (let index2 = 0; index2 < nums.length; index2++) {
            const value = nums[index] + nums[index2];
            const indexElement = targets.findIndex(item => item === value);

            if (indexElement >= 0) {
                result.push(value);
                nums.push(value);

                index = index2 = 0;
            }
        }
    }
    console.log(result.length);

    return result.length;
}

getResult([5, 7, 5], [12]);