function solve(x1, y1, x2, y2, x, y) {
    x1 = +x1;
    x2 = +x2;
    y1 = +y1;
    y2 = +y2;
    x = +x;
    y = +y
    
    
    
    let firstCondition = (x === x1 || x === x2) && (y >= y1 && y <= y2);
    let secondCondition = (y === y1 || y === y2) && (x >= x1 && x <= x2);


    if (firstCondition || secondCondition) {
        console.log('Border');
    } else {
        console.log('Inside / Outside');
    }

  //  if (x > x1 && x < x2 && y > y1 && y < y2) {
    //    console.log('Inside')
  //  } else {
    //    console.log('Outside')
  //  }

}

solve(
    2,
    -3,
    12,
    3,
    12,
    -1

)