// Dependencies
import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { Text, Image, ScrollView, View, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// styles
import { style } from '../styles/login';

class Login extends Component {
   componentDidMount() {
        const { Auth } = this.props;
        if (Auth.token.length > 0) {
            this.props.navigation.navigate('App');
        }
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
                                    <TextInput style={style.input} />
                                </View>
                                <View style={style.containerLoginInput}>
                                    <Text style={style.labelInput}>password:</Text>
                                    <TextInput style={style.input} />
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
};
const mapStateToProps = state => ({
    Auth: state.Auth,
});
export default connect(mapStateToProps, null)(Login);