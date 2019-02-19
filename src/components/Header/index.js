import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component {
    onHamburgerClick() {
        this.props.toggleDrawer();
    }

    render() {
        return (
           <View>
               <View>
                   <TouchableOpacity onPress={ this.onHamburgerClick }>
                    <Image />
                   </TouchableOpacity>
               </View>
           </View>
        );
    }
}

export default Header;