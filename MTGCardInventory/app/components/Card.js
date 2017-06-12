import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Swipeout from 'react-native-swipeout';

export default class MTGCardInventory extends Component {

  render() {

    var swipeoutBtns = [
      {
        text: 'Delete',
        backgroundColor: 'red'
      }
    ]

    return (
    <Swipeout right={swipeoutBtns} backgroundColor={'transparent'} autoClose={true} close={true} sensitivity={25} onOpen={ this.props.deleteMethod }>
      <View key={this.props.keyval} style={styles.card}>
        <View style={styles.cardDetails}>
          <Text style={styles.cardTitle}>{this.props.val.card}</Text>
          <Text style={styles.cardCount}>{this.props.val.count}</Text>
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
            <TouchableOpacity style={{width: 50, height: 50, backgroundColor: 'powderblue', alignItems: 'center',
      justifyContent: 'center'}} onPress={this.props.deleteMethod}>
            <Text style={styles.cardItemText}>D</Text>
          </TouchableOpacity>
            <TouchableOpacity style={{width: 50, height: 50, backgroundColor: 'skyblue', alignItems: 'center',
      justifyContent: 'center'}} onPress={this.props.removeCardMethod}>
            <Text style={styles.cardItemText}>-</Text>
          </TouchableOpacity>
            <TouchableOpacity style={{width: 50, height: 50, backgroundColor: 'steelblue', alignItems: 'center',
      justifyContent: 'center'}} onPress={this.props.addCardMethod}>
            <Text style={styles.cardItemText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
    card: {
      position: 'relative',
      padding: 20,
      borderBottomWidth: 2,
      borderBottomColor: '#ededed',
      flex: 1,
      flexDirection: 'row',
    },
    cardDetails: {
      flex: 1,
      flexDirection: 'column'
    },
    cardTitle: {
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: '#29434e',
      fontSize: 20
    },
    cardCount: {
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: '#29434e',
    },
    cardItemText: {
      color: 'white',
    }
});

AppRegistry.registerComponent('MTGCardInventory', () => MTGCardInventory);
