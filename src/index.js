module.exports = function reverse(n) {
    const numArr = String(n).split("");
    const rev = numArr.reverse().join("");

    if (rev.endsWith("-")) {
        return rev.slice(0, -1);
    } else {
        return rev;
    }
};
