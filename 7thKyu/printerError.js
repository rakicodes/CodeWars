function printerError(s) {
    return `${s.split("").filter(x => !(x.charCodeAt(0) > 96 && x.charCodeAt(0) < 110) ).length}/${s.length}`
}