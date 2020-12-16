function sovle(input) {
  //  let formatedText = input[0].split(' ').filter(c => c.length > 0).join('').trim();
    let text = input[0];
    let pattern = /(?<string>([^\d]+))(?<digit>\d{1,2})/g;

    let matches = pattern.exec(text);
    let result = '';

    while (matches != null) {
        let string = (matches.groups.string).toUpperCase();
        let num = Number(matches.groups.digit);

        for (let i = 0; i < num; i++) {
            result += string ;
        }

        matches = pattern.exec(text);
    }

    let unique = new Set(result);
    console.log(`Unique symbols used: ${Array.from(unique).length}`);
    console.log(result);

}

sovle(['a 3'])
//sovle(['aSd2&5s@1'])
sovle([`e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12'aD<l&$W&)*yF1WLV9_GmTf(d0($!$'e/{D'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh'@gu#Z#p"Z<v13fI]':\Iz.17*W:\mwV''z-15g@hUYE{_$~}+X%*nytkW15`])