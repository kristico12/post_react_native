// Dependencies
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { Text, Image, ScrollView, View, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// styles
import { style } from '../styles/login';

// actions
import { Login } from '../redux/reducers/auth/actions';

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: {
                username: '',
                password: ''
            }
        }
    }
    componentDidMount() {
        const { Auth } = this.props;
        if (Auth.token.length > 0) {
            this.props.navigation.navigate('App');
        }
    }
    onChangeText(text, name) {
        const auth = Object.assign({}, this.state.auth);
        auth[name] = text;
        this.setState({ auth });
    }
    async login() {
        await this.props.login()
    }

    render() {
        return (
            <Grid>
                <Row size={1} style={style.containerImage}>
                    <Image style={style.titleImage} source={require('../img/title.png')} />
                </Row>
                <Row size={3} style={style.containerLogin}>
                    <Col>
                        <Row size={3}>
                            <ScrollView>
                                <View style={style.containerLoginTitle}>
                                    <Text style={style.title}>login</Text>
                                </View>
                                <View style={style.containerLoginInput}>
                                    <Text style={style.labelInput}>username:</Text>
                                    <TextInput
                                        style={style.input}
                                        value={this.state.auth.username}
                                        onChangeText={(text) => this.onChangeText(text, 'username')}
                                    />
                                </View>
                                <View style={style.containerLoginInput}>
                                    <Text style={style.labelInput}>password:</Text>
                                    <TextInput
                                        style={style.input}
                                        value={this.state.auth.password}
                                        onChangeText={(text) => this.onChangeText(text, 'password')}
                                        secureTextEntry={true}
                                    />
                                </View>
                            </ScrollView>
                        </Row>
                        <Row style={style.containerButtonLogin} size={1}>
                            <Col>
                                <Row size={3}>
                                    <TouchableOpacity
                                        style={style.buttonLogin}
                                        onPress={() => props.navigation.navigate('Dasboard')}
                                    >
                                        <Text style={style.textLogin}>login</Text>
                                    </TouchableOpacity>
                                </Row>
                                <Row size={1} style={style.containerButtonLogin}>
                                    <TouchableHighlight
                                        underlayColor="#9e9e9e"
                                        onPress={() => props.navigation.navigate('Register')}
                                    >
                                        <Text style={style.textRegister}>no tiene una cuenta ?, registrese aqui</Text>
                                    </TouchableHighlight>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
Login.propTypes = {
    Auth: PropTypes.object.isRequired,
    Login: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    Auth: state.Auth,
});

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            Login,
        },
        dispatch,
    )
);
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);