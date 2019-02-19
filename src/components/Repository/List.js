import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import { listRepos } from '../../reducers/reducer';

import styles from '../../../style';

class List extends Component {
    componentDidMount() {
        this.props.listRepos('emmina');
    }

    renderItem = ({ item }) => (
        <TouchableOpacity
            style={style.item}
            onPress={() => this.props.navigation.navigate('Details', { name: item.name })}
        >
            <Text>{item.name}</Text>
        </TouchableOpacity>
    );

    render() {
        const { repos } = this.props;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <FlatList
                    data={repos}
                    renderItem={this.renderItem}
                />
            </SafeAreaView>
        );
    }
}

const style = StyleSheet.create({
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});

const mapStateToProps = state => {
    let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
    return {
        repos: storedRepositories
    };
};

const mapDispatchToProps = {
    listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(List);