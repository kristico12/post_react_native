function header(url, type, data) {
    const myRequest = new Request(url, {
        method: type,
        headers: {
            "Content-Type": "application/json",
            "x-access-token": ""
        },
        body: JSON.stringify(data) || null,
    })
    return myRequest;
}
function Call(url, type, data) {
    return new Promise((resolve, reject) => {
        fetch(header(url, type, data))
            .then(res => res.json())
            .then(result => {
                resolve(result);
            })
            .catch((error) => reject(error))
    })
}

export default Call;