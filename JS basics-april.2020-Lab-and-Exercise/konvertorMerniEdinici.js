function mEdinici(input) {
    let size = Number(input[0]);
    let source = input[1].toLowerCase();
    let dest = input[2].toLowerCase();
    if (source == "km") { size = size / 0.001; }
    if (source == "mm") { size = size / 1000; }
    if (source == "cm") { size = size / 100; }
    if (source == "mi") { size = size / 0.000621371192; }
    if (source == "in") { size = size / 39.3700787; }
    if (source == "ft") { size = size / 3.2808399; }

    if (dest == "ft") { size = size * 3.2808399; }
    if (dest == "mm") { size = size * 1000; }
    if (dest == "cm") { size = size * 100; }
    if (dest == "mi") { size = size * 0.000621371192; }
    if (dest == "in") { size = size * 39.3700787; }
    if (dest == "km") { size = size * 0.001; }

    console.log(size + " " + dest);
}
mEdinici([12, "km", "ft"])