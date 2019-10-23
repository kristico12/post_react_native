// Dependencies
import React, { Fragment, Component } from 'react';
import { View, StyleSheet, Text, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";

// dispacher
import { GetUser } from '../redux/reducers/user/actions';
import { ClearAuth } from '../redux/reducers/auth/actions';

class Profile extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            user: {}
        }
    }
    async componentDidMount() {
        await this.props.GetUser();
    }
    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.User !== this.props.User) {
            const { data, message } = this.props.User;
            if (message.length > 0 ) {
                if (message.includes('jwt')) {
                    await this.props.ClearAuth();
                    this.props.navigation.navigate('Auth');
                } else {
                    ToastAndroid.showWithGravity(message, ToastAndroid.TOP);
                }
            } else {
                this.setState({user: data})
            }
        }
    }

    render() {
        return (
            <Fragment>
                <View style={styles.container}>
                    <Text>menu2</Text>
                </View>
            </Fragment>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
Profile.propTypes = {
    User: PropTypes.object.isRequired,
    GetUser: PropTypes.func.isRequired,
    ClearAuth: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    User: state.User,
});
const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            GetUser,
            ClearAuth
        },
        dispatch,
    )
);
export default connect(mapStateToProps, mapDispatchToProps)(Profile);