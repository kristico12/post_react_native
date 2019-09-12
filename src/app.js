// Dependencies
import React from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';

// Routes
import { Routes } from './routes';

// ignore warnings
YellowBox.ignoreWarnings(['ViewPagerAndroid']);

// load store
import storeFun from './redux/store';
const store = storeFun();

function App() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}
export default App;