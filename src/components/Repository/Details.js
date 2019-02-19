import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { getRepoDetail } from '../../reducers/reducer';

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
            full_name,
            description,
            forks_count,
            stargazers_count
        } = repoInfo;

        return (
            <View>
                <Text>{name}</Text>
                <Text>{full_name}</Text>
                <Text>{description}</Text>
                <Text>Forks: {forks_count}</Text>
                <Text>Stars: {stargazers_count}</Text>
            </View>
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