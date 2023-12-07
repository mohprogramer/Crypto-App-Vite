const converter = (data, type) => {
    const convertedData = data[type].map(item => {
        return {
            time: item[0],
            [type]: item[1]
        }
    })
    return convertedData
}

export {converter}