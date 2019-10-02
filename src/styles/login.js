// dependencies
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    containerImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    titleImage: {
        width: 350,
        height: 100
    },
    containerLogin: {
        padding: 25
    },
    containerLoginTitle: {
        backgroundColor: "#bb9661",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40
    },
    title: {
        fontFamily: "futura-pt",
        fontWeight: "600",
        fontSize: 45,
        letterSpacing: 3.52,
        lineHeight: 50,
        textTransform: "uppercase",
        color: "#fff"
    },
    containerLoginInput: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        marginBottom: 20
    },
    labelInput: {
        fontFamily: "proxima-nova",
        fontWeight: "300",
        fontStyle: "normal",
        fontSize: 25,
        letterSpacing: 0.48,
        lineHeight: 25,
        textTransform: "none",
        color: "#9e9e9e"
    },
    input: {
        borderColor: "#ccc",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 2,
        padding: 12,
        fontFamily: "sans-serif",
        fontSize: 20
    },
    containerButtonLogin: {
        display: "flex",
        justifyContent: "center",
    },
    buttonLogin: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "70%",
        backgroundColor: "transparent",
        color: "#272727",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#272727",
    },
    textLogin: {
        fontSize: 20,
        fontWeight: "400",
        fontStyle: "normal",
        textTransform: "uppercase",
        letterSpacing: 1.6
    },
    textRegister: {
        fontSize: 15,
        fontWeight: "bold",
        letterSpacing: 1.6,
        color: 'blue'
    }
})