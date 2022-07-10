function alphaSeq (str) {
    return str.toLowerCase()
              .split("")
              .sort()
              .map(letter => letter.toUpperCase()+letter.repeat(letter.charCodeAt(0)-96-1))
              .join(",")
}