function solve(num) {

    let arr = [];
    let loading = Math.floor(num / 10);

    if (!isLoading(num)) {
        console.log(`${num}% [${arr.join('')}]`);
        console.log('Still loading...');
    }

    if (comlete(num)) {
        console.log('100% Complete!');
        console.log(`[${arr.join('')}]`);
    }

    function isLoading(num) {
        let result = true;

        if (loading !== 10) {
            arr.unshift("%".repeat(loading));
            arr.push('.'.repeat(10 - loading));
            result = false;
        }

        return result;
    }

    function comlete(num) {
        return result = loading === 10 ? arr.push("%".repeat(loading)) : false;
    }
}

solve(10)