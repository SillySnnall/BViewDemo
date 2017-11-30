/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    你要什么
                </Text>
                <View>
                    <Text>
                        你要什么
                    </Text>
                </View>
                <View style={styles.textstryle}>
                    <Text style={styles.text1}>
                        你要什么
                    </Text>
                    <Text style={styles.text2}>
                        你要什么
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },

    textstryle: {
        backgroundColor: 'green',
        height: 200,
        flexDirection:'row'
    },

    text1:{
      backgroundColor:'yellow',
        width:200
    },
    text2:{
      backgroundColor:'blue',
        width:200
    }

});
