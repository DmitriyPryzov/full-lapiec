function sortByProperty(arr, property) {
    const res = {};
    for (let i = 0; i < arr.length; i++) {

        if (arr[i][property] in res == false) {
            res[arr[i][property]] = [];
        }
        res[arr[i][property]].push(arr[i]);
    }
    return res;
}

export default sortByProperty;