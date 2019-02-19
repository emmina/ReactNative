import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { getUser } from '../../reducers/reducer';

import style from '../../../style';

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

        const { name, login, avatar_url, followers, following, public_repos } = user;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={style.container}>
                    <View style={styles.header_container}>
                        <Image
                            style={styles.image}
                            source={{ uri: avatar_url }}
                        />
                        <Text style={styles.name}>{name}</Text>
                        <Text h4>{login}</Text>
                    </View>
                    <View style={styles.body_container}>
                        <Text style={styles.info}>Repositories: {public_repos}</Text>
                        <Text style={styles.info}>Followers: {followers}</Text>
                        <Text style={styles.info}>Following: {following}</Text>
                    </View>

                </View>
            </SafeAreaView>

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

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200
    },
    header_container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    username: {
        fontSize: 20,
    },
    body_container: {
        marginLeft: 20
    },
    info: {
        padding: 16
    }
});