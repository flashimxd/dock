import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';
import { BottomNav } from './commons';
import LoginForm from './LoginForm';

class App extends Component {
    render() {
        const { uiTheme } = styles;
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <View style={{ flex: 1 }}>
                    <LoginForm />
                </View>
            </ThemeProvider>
        );
    }
}

const styles = {
    uiTheme: {
        palette: {
            primaryColor: COLOR.teal500,
        },
        toolbar: {
            container: {
                height: 50,
            },
        },
    },
    drawerContainer: {
        flex: 1,
        width: 260,
        height: 900,
        elevation: 4,
        backgroundColor: 'white',
    }
};

export default App;
