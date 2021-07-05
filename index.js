const findMatching = (drivers, name) => {
    return drivers.filter(n => n.toLowerCase() === name.toLowerCase());
}

const fuzzyMatch = (drivers, name) => {
   return drivers.filter(n => n[0] === name[0])
}

const matchName = (drivers, name) => {
    return drivers.filter(n => n.name === name)
}
