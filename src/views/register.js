// Dependencies
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { Text, Image, StyleSheet, ScrollView, View, TextInput, TouchableOpacity, TouchableHighlight, Keyboard } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const TitleComponent = () => (
    <View style={style.containerRegisterTitle}>
        <Text style={style.title}>Register</Text>
    </View>
)
const ButtonComponent = (props) => (
    <Col>
        <Row size={3}>
            <TouchableOpacity
                style={StyleSheet.flatten(props.open ? [style.buttonRegister, { height: 60 }] : [style.buttonRegister])}
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
)

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenKeyboard: false,
            user: {
                name: '',
                identificationcard: '',
                birthdate: new Date(),
                city: '',
                username: '',
                password: ''
            }
        }
    }
    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow() {
        this.setState({ isOpenKeyboard: true })
    }

    _keyboardDidHide() {
        this.setState({ isOpenKeyboard: false })
    }
    render() {
        const input = [
            { name: 'Nombre', value: this.state.user.name, type: 'text' },
            { name: 'Identificacion', value: this.state.user.identificationcard, type: 'number' },
            { name: 'Fecha de Nacimiento', value: this.state.user.birthdate, type: 'date' },
            { name: 'Ciudad', value: this.state.user.city, type: 'text' },
            { name: 'UserName', value: this.state.user.username, type: 'text' },
            { name: 'Password', value: this.state.user.password, type: 'password' }
        ]
        return (
            <Grid>
                <Row size={1} style={style.containerImage}>
                    <Image style={style.titleImage} source={require('../img/title.png')} />
                </Row>
                <Row size={3} style={style.containerRegister}>
                    <Col>
                        <Row size={this.state.isOpenKeyboard ? 4 : 3}>
                            <Col>
                                {
                                    !this.state.isOpenKeyboard &&
                                    <Row size={1}>
                                        <TitleComponent />
                                    </Row>
                                }
                                <Row size={this.state.isOpenKeyboard ? 4 : 3}>
                                    <ScrollView>
                                        {
                                            this.state.isOpenKeyboard && <TitleComponent />
                                        }
                                        {
                                            input.map(value => (
                                                <View key={value.name} style={style.containerRegisterInput}>
                                                    <Text style={style.labelInput}>{value.name}</Text>
                                                    {
                                                        (['text', 'number', 'password'].includes(value.type)) ?
                                                            <TextInput style={style.input} value={value.value} />
                                                            :
                                                            <DateTimePicker
                                                                value={value.value}
                                                                mode='date'
                                                                is24Hour={true}
                                                                display="default"
                                                                //onChange={this.setDate}
                                                            />
                                                    }
                                                </View>
                                            ))
                                        }
                                        {
                                            this.state.isOpenKeyboard && <ButtonComponent {...this.props} open={this.state.isOpenKeyboard} />
                                        }
                                    </ScrollView>
                                </Row>
                            </Col>
                        </Row>
                        {
                            !this.state.isOpenKeyboard &&
                            <Row style={style.containerButtonRegister} size={1}>
                                <ButtonComponent {...this.props} />
                            </Row>
                        }
                    </Col>
                </Row>
            </Grid>
        )
    }
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