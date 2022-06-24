function reverse(n) {
    const numArr = String(n).split("");
    const rev = numArr.reverse().join("");

    if (rev.endsWith("-")) {
        console.log(rev.slice(0, -1));
    }
    console.log(numArr);
    console.log(rev);
}

reverse(-123);
