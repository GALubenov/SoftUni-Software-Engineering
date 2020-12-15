function demo(args) {
        let i = 0;
        let smallest = Number.MAX_SAFE_INTEGER;
        let biggest = Number.MIN_SAFE_INTEGER;

        while (true) {
                let command = args[i];
                if (command === "END") {
                  break;
                }
                let num = Number (command);
                if (num < smallest){
                        smallest = num;
                        
                }
                if (num > biggest){
                        biggest = num;
                        
                }
                i++;
        }
        console.log(`Min. number: ${smallest}`);
        console.log(`Max. number: ${biggest}`);
}
demo([2,55,100,3, 20, 305, 1, 50, "END"]);