import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-material-ui';


class BottomNav extends Component {
    state = { active: 'dashboard' };
    render() {
        return (
            <BottomNavigation active={this.state.active}>
                <BottomNavigation.Action
                    key="dashboard"
                    icon="dashboard"
                    label="Dashboard"
                    onPress={() => this.setState({ active: 'dashboard' })}
                />
                <BottomNavigation.Action
                    key="message"
                    icon="message"
                    label="Messages"
                    onPress={() => this.setState({ active: 'message' })}
                />
                <BottomNavigation.Action
                    key="settings"
                    icon="settings"
                    label="Settings"
                    onPress={() => this.setState({ active: 'settings' })}
                />
            </BottomNavigation>
        );
    }
}

export { BottomNav };
