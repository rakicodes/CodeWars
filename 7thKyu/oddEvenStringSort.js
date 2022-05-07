function sortMyString(S) {
    return `${S.split("").filter((x,i) => i%2===0).join("")} ${S.split("").filter((x,i) => i%2===1).join("")}`;
}