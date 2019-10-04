// Dependencies
import React, { Component, Fragment } from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';

// Routes
import Routes from './routes';

// ignore warnings
YellowBox.ignoreWarnings(['ViewPagerAndroid']);

// actions
import { LoadAuthToken } from './redux/reducers/auth/actions';

// load store
import storeFun from './redux/store';
const store = storeFun();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            store: {}
        }
    }
    async componentDidMount() {
        await LoadAuthToken(store.dispatch);
        this.setState({ loading: true, store: store.getState() })
    }
    render() {
        return (
            <Fragment>
                {
                    this.state.loading &&
                    <Provider store={store}>
                        <Routes screenProps={{ store: this.state.store }} />
                    </Provider>
                }
            </Fragment>
        )
    }
}
export default App;