// dependencies
import AsyncStorage from "@react-native-community/async-storage";

const tokenAsy = async () => {
    try {
        return await AsyncStorage.getItem('@token');
    } catch (e) {
        return  '';
    }
};
const token = tokenAsy();
function header(url, type, data) {
    return new Request(url, {
        method: type,
        headers: {
            "Content-Type": "application/json",
            "x-access-token": token
        },
        body: JSON.stringify(data) || null,
    });
}
function Call(url, type, data) {
    return new Promise((resolve, reject) => {
        fetch(header(url, type, data))
            .then(res => res.json())
            .then(async result => {
                if (Object.hasOwnProperty('message')) {
                    const message = Object.hasOwnProperty('message');
                    if (message.includes('jwt')) {
                        await AsyncStorage.removeItem('@token');
                    }
                }
                resolve(result);
            })
            .catch((error) => reject(error))
    })
}

export default Call;