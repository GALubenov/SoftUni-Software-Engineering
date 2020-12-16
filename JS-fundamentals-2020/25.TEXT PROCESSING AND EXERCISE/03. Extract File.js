function solve(input) {

    let file = input.split('\\').pop().split('.');
    let fileExtension = file.pop();
    let fileName = file;

    console.log(`File name: ${fileName.join('.')}\nFile extension: ${fileExtension}`);
}

solve('C:\\Internal\\training-internal\\Template.bak.pptx')
solve('C:\\Internal\\training-internal\\Template.pptx')
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')