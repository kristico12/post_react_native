// Dependencies
import React from 'react';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { Text, Image, StyleSheet, ScrollView, View, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';

function Register(props) {
    const input = [
        'nombre',
        'ciudad',
        'username',
        'password',
    ]
    return (
        <Grid>
            <Row size={1} style={style.containerImage}>
                <Image style={style.titleImage} source={require('../img/title.png')} />
            </Row>
            <Row size={3} style={style.containerRegister}>
                <Col>
                    <Row size={3}>
                        <Col>
                            <Row size={1}>
                                <View style={style.containerRegisterTitle}>
                                    <Text style={style.title}>Register</Text>
                                </View>
                            </Row>
                            <Row size={3}>
                                <ScrollView>
                                    {
                                        input.map(value => (
                                            <View key={value} style={style.containerRegisterInput}>
                                                <Text style={style.labelInput}>{value}</Text>
                                                <TextInput style={style.input} />
                                            </View>
                                        ))
                                    }
                                </ScrollView>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={style.containerButtonRegister} size={1}>
                        <Col>
                            <Row size={3}>
                                <TouchableOpacity
                                    style={style.buttonRegister}
                                    onPress={() => props.navigation.navigate('Dasboard')}
                                >
                                    <Text style={style.textRegister}>Register</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row size={1} style={style.containerButtonRegister}>
                                <TouchableHighlight
                                    underlayColor="#9e9e9e"
                                    onPress={() => props.navigation.navigate('Login')}
                                >
                                    <Text style={style.textLogin}>Ya tiene Cuenta?, Inicia Session</Text>
                                </TouchableHighlight>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>
    )
}
const style = StyleSheet.create({
    containerImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    titleImage: {
        width: 350,
        height: 100
    },
    containerRegister: {
        padding: 25
    },
    containerRegisterTitle: {
        backgroundColor: "#bb9661",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40,
        width: "100%"
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
    containerRegisterInput: {
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
    containerButtonRegister: {
        display: "flex",
        justifyContent: "center",
    },
    buttonRegister: {
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
    textRegister: {
        fontSize: 20,
        fontWeight: "400",
        fontStyle: "normal",
        textTransform: "uppercase",
        letterSpacing: 1.6
    },
    textLogin: {
        fontSize: 15,
        fontWeight: "bold",
        letterSpacing: 1.6,
        color: 'blue'
    }
})
export default Register;