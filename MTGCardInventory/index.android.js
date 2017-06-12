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
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Card from './app/components/Card';

export default class MTGCardInventory extends Component {

  state = {
    cardsArray: [],
    cardCount: '',
    cardTitle: '',
  }

  render() {

    let cards = this.state.cardsArray.map((val, key) => {
      return <Card key={key} keyval={key} val={val} addCardMethod={ ()=>this.addCard(key) } removeCardMethod={ ()=>this.removeCard(key) } deleteMethod={ ()=>this.deleteCard(key) } />
    })
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>MTG Inventory</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {cards}
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.addNewCard.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <TextInput style={styles.textInput} onChangeText={(cardTitle) => this.setState({cardTitle})} value={this.state.cardTitle} placeholder='add a card..' placeholderTextColor='white' underlineColorAndroid='transparent'></TextInput>
          <TextInput style={styles.textInput} onChangeText={(cardCount) => this.setState({cardCount})} value={this.state.cardCount} placeholder='amount to add..' placeholderTextColor='white' underlineColorAndroid='transparent'></TextInput>

        </View>

      </View>
    );
  }

  addNewCard() {
    if(this.state.cardTitle) {
      this.state.cardsArray.push( {'card': this.state.cardTitle, 'count': this.state.cardCount} );
      this.setState({ cardsArray: this.state.cardsArray });
      this.setState({ cardTitle: '' });
      this.setState({ cardCount: '' });
    }
  }

  deleteCard(key) {
    this.state.cardsArray.splice(key, 1);
    this.setState({ cardsArray: this.state.cardsArray })
  }

  removeCard(key) {
    if(this.state.cardsArray[key].count > 0) {
      this.state.cardsArray[key].count--;
    }
    this.setState({ cardsArray: this.state.cardsArray });
  }

  addCard(key) {
    this.state.cardsArray[key].count++;
    this.setState({ cardsArray: this.state.cardsArray });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#29434e',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: '#29434e',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 10,
    backgroundColor: '#252525',
  }
});

AppRegistry.registerComponent('MTGCardInventory', () => MTGCardInventory);
