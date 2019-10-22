// Dependencies
import React, { Component, Fragment } from 'react';
import { Grid, Row, Col } from 'react-native-easy-grid';
import {
    Text, Image, StyleSheet, ScrollView, View, TextInput,
    TouchableOpacity, TouchableHighlight, Keyboard
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// actions
import { CreateUser } from '../redux/reducers/auth/actions';

// styles
import { style } from '../styles/register';

const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 18);

const TitleComponent = () => (
    <View style={style.containerRegisterTitle}>
        <Text style={style.title}>Register</Text>
    </View>
);
const ButtonComponent = (props) => (
    <Col>
        <Row size={3}>
            <TouchableOpacity
                style={StyleSheet.flatten(props.open ? [style.buttonRegister, { height: 60 }] : [style.buttonRegister])}
                onPress={() => props.register()}
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
);

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenKeyboard: false,
            user: {
                name: '',
                identificationcard: '',
                birthdate: maxDate,
                city: '',
                username: '',
                password: ''
            },
            showDatePicker: false,
            loading: false,
        }
    }
    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    }
    componentDidUpdate(prevProps) {
        if (prevProps.Auth !== this.props.Auth) {
            const { Auth } = this.props;
            if (Auth.token.length > 0) {
                this.props.navigation.navigate('App');
            } else if (typeof Auth.message === 'object') {
                console.warn(Auth.message);
            } else if (typeof Auth.message === 'string' && Auth.message.length > 0) {
                console.warn(Auth.message);
            }
        }
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
    handlePickerDate(e, date) {
        const user = Object.assign({}, this.state.user);
        if (e.type !== undefined) {
            this.setState({ showDatePicker: false }, () => {
                if (e.type === "set") {
                    user['birthdate'] = date;
                    this.setState({ user });
                }
            })
        }
    }
    handleInput(value, type) {
        const user = Object.assign({}, this.state.user);
        if (type === 'identificationcard') {
            let filter = "";
            for (let i = 0; i < value.length; i++) {
                const element = value.charAt(i);
                if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(element)) {
                    filter = filter + element;
                }
            }
            user[type] = filter;
        } else {
            user[type] = value;
        }
        this.setState({ user });
    }
    register() {
        this.setState({
            loading: true,
        }, async () => {
            await this.props.CreateUser(this.state.user);
        })
    }
    render() {
        const date = `${this.state.user.birthdate.getDate() < 10 ? `0${this.state.user.birthdate.getDate()}` : this.state.user.birthdate.getDate()}/
        ${this.state.user.birthdate.getMonth() + 1 < 10 ? `0${this.state.user.birthdate.getMonth() + 1}` : this.state.user.birthdate.getMonth() + 1}/
        ${this.state.user.birthdate.getFullYear()}`.split("\n").join("").replace(/ /g, "");
        const input = [
            { label: 'Nombre', value: this.state.user.name, type: 'default', name: 'name' },
            { label: 'Identificacion', value: this.state.user.identificationcard, type: 'numeric', name: 'identificationcard' },
            { label: 'Fecha de Nacimiento', value: this.state.user.birthdate, type: 'date', name: 'birthdate' },
            { label: 'Ciudad', value: this.state.user.city, type: 'default', name: 'city' },
            { label: 'UserName', value: this.state.user.username, type: 'default', name: 'username' },
            { label: 'Password', value: this.state.user.password, type: 'default', security: true, name: 'password' }
        ];
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
                                                <View key={value.label} style={style.containerRegisterInput}>
                                                    <Text style={style.labelInput}>{value.label}</Text>
                                                    {
                                                        (['default', 'numeric'].includes(value.type)) ?
                                                            <TextInput
                                                                style={style.input}
                                                                value={value.value}
                                                                secureTextEntry={value.security || false}
                                                                keyboardType={value.type}
                                                                onChangeText={(text) => this.handleInput(text, value.name)}
                                                            />
                                                            :
                                                            <Fragment>
                                                                <TouchableOpacity
                                                                    style={style.inputDate}
                                                                    onPress={() => this.setState({ showDatePicker: true })}
                                                                >
                                                                    <Text style={style.inputDateText}>{date}</Text>
                                                                </TouchableOpacity>
                                                                {
                                                                    this.state.showDatePicker &&
                                                                    <DateTimePicker
                                                                        value={value.value}
                                                                        mode='date'
                                                                        is24Hour={true}
                                                                        display="spinner"
                                                                        maximumDate={maxDate}
                                                                        onChange={(e, date) => this.handlePickerDate(e, date)}
                                                                    />
                                                                }
                                                            </Fragment>
                                                    }
                                                </View>
                                            ))
                                        }
                                        {
                                            this.state.isOpenKeyboard && <ButtonComponent {...this.props} open={this.state.isOpenKeyboard} register={() => this.register()} />
                                        }
                                    </ScrollView>
                                </Row>
                            </Col>
                        </Row>
                        {
                            !this.state.isOpenKeyboard &&
                            <Row style={style.containerButtonRegister} size={1}>
                                <ButtonComponent {...this.props} register={() => this.register()} />
                            </Row>
                        }
                    </Col>
                </Row>
            </Grid>
        )
    }
}
Register.propTypes = {
    Auth: PropTypes.object.isRequired,
    CreateUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    Auth: state.Auth,
});

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            CreateUser,
        },
        dispatch,
    )
);
export default connect(mapStateToProps, mapDispatchToProps)(Register);