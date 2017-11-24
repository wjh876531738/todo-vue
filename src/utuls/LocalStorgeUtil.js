appendToList (key, value, reverse=False) {
    let localData = JSON.pares(localStorage.getItem(key)) || []
    reverse ? localData.unshift(value) : localData.push(value)

    localStorage.setItem(key, localData)
    return localData
}
deleteFromList (key, index) {
}