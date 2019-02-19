import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { getUser } from '../../reducers/reducer';

class Profile extends Component {
    static navigationOptions = {
        title: 'Profile'
    };

    componentDidMount() {
        this.props.getUser('emmina');
    }

    render() {
        const { user, loadingProfile } = this.props;

        if (loadingProfile) return <Text>Loading...</Text>;

        const { name, login } = user;
        
        return (
            <View>
                <Text>Name: {name}</Text>
                <Text>Login: {login}</Text>
            </View>
        );
    }
}

const mapStateToProps = ({ user, loadingProfile }) => ({
    user,
    loadingProfile
});

const mapDispatchToProps = {
    getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);