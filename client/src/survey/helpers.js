let index = 1;

let randomNum = () => 20 + Math.floor(80 * Math.random());

function getInitialData(val) {
    let numItems = val.length;
    let data = [];

    for (let i = 0; i < numItems; i++) {
        const surveyValues = Object.entries(val[i]).flat();
        data = getAppendedData(data, surveyValues);
    }
    return data;
}

function getAppendedData(data, val) {
    let ret = data.map(d => d);
    ret.push({
        id: "id-" + index,
        value: val[1],
        name: val[0]
    });
    index++;
    return ret;
}

function getTruncatedData(data) {
    let ret = data.map(d => d).slice(1);
    return ret;
}

function getUpdatedData(data) {
    let ret = data.map(d => ({ id: d.id, value: randomNum(), name: d.name }));
    return ret;
}

export { getInitialData, getAppendedData, getTruncatedData, getUpdatedData };