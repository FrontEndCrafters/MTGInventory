/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class MTGCardInventory extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.card}>
        <Text style={styles.cardTitle}>{this.props.val.card}</Text>
        <Text style={styles.cardTitle}>{this.props.val.count}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.cardDelete}>
          <Text style={styles.cardDeleteText}>D</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.removeCardMethod} style={styles.cardDelete}>
          <Text style={styles.cardDeleteText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.addCardMethod} style={styles.cardDelete}>
          <Text style={styles.cardDeleteText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    card: {
      position: 'relative',
      padding: 20,
      paddingRight: 100,
      borderBottomWidth: 2,
      borderBottomColor: '#ededed',
    },
    cardTitle: {
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: '#29434e',
    },
    cardDelete: {
      backgroundColor: '#2980b9',
      padding: 10,
      top: 10,
      bottom: 10,
      right: 10,
    },
    cardDeleteText: {
      color: 'white',
    }
});

AppRegistry.registerComponent('MTGCardInventory', () => MTGCardInventory);
