function sortir() {
    let angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log("Sebelumnya : ".concat(angka));
    let asc = angka.sort();
    console.log("Ascending : ".concat(asc));
    let dsc = angka.reverse();
    console.log("Descending : ".concat(dsc));
    let fil = angka.filter(num => {
        return num > 10;
    });
    console.log("Filter > 10 : ".concat(fil));
}

sortir();