import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Moment from 'moment';

import { getRepoDetail } from '../../reducers/reducer';

import style from '../../../style';

class Details extends Component {
    static navigationOptions = {
        title: 'Details'
    };

    componentDidMount() {
        const { name } = this.props.navigation.state.params;
        this.props.getRepoDetail('emmina', name)
    }

    render() {
        const { repoInfo, loadingInfo } = this.props;

        if (loadingInfo) return <Text>Loading...</Text>;
        console.log(repoInfo)

        const {
            name,
            updated_at,
            description,
            forks_count,
            stargazers_count
        } = repoInfo;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={style.container}>
                    <Text style={styles.title}>{name}</Text>
                    <View style={styles.details_body}>
                        <Text>About:</Text>
                        <Text style={styles.paragraphs}>{description}</Text>
                        <Text style={styles.paragraphs}>Forks: {forks_count}</Text>
                        <Text style={styles.paragraphs}>Stars: {stargazers_count}</Text>
                        <Text style={styles.paragraphs}>Last updated: {Moment(updated_at).format('d MMM YYYY hh:mm a')}</Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = ({ repoInfo, loadingInfo }) => ({
    repoInfo,
    loadingInfo
});

const mapDispatchToProps = {
    getRepoDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    details_body: {
        margin: 20
    },
    paragraphs: {
        paddingBottom: 16
    }
});