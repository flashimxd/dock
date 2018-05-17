import React from 'react';
import { View } from 'react-native';
import { Card, Divider } from 'react-native-material-ui';
import { Input, Header } from './commons';

const LoginForm = () => (
    <View style={{ flex: 1 }}>
        <Card>
            <Header headerText="Login" />
            <Divider />
            <Input
                placeholder="user@mail.com"
                label="Email"
            />
            <Divider />
            <Input
                placeholder="Password"
                label="Password"
            />
            <Divider />
        </Card>
    </View>
    
);

export default LoginForm;
