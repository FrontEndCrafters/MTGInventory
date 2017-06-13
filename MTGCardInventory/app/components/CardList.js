import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import Card from './Card';
import Swipeout from 'react-native-swipeout';

class CardList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cardsArray: [],
      cardCount: '',
      cardTitle: '',
    }
  }

  componentWillMount() {
    this.getData();
  }


  render() {

    let cards = this.state.cardsArray.map((val, key) => {
      return <Card key={key} keyval={key} val={val} getDataMethod={()=> this.getData()} saveDataMethod={()=> this.saveData()} addCardMethod={ ()=>this.addCard(key) } removeCardMethod={ ()=>this.removeCard(key) } deleteMethod={ ()=>this.deleteCard(key) } />
    })
    return (
      <View style={styles.container}>
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
      this.saveData();
    }
  }

  deleteCard(key) {
    this.state.cardsArray.splice(key, 1);
    this.setState({ cardsArray: this.state.cardsArray });
    this.saveData();
    this.forceUpdate();
  }

  removeCard(key) {
    if(this.state.cardsArray[key].count > 0) {
      this.state.cardsArray[key].count--;
    }
    this.setState({ cardsArray: this.state.cardsArray });
    this.saveData();
  }

  addCard(key) {
    this.state.cardsArray[key].count++;
    this.setState({ cardsArray: this.state.cardsArray });
    this.saveData();
  }

  async saveData() {
    try {
      await AsyncStorage.setItem('storageCardsArray', JSON.stringify(this.state.cardsArray));
    } catch (error) {
      alert(error);
    }
  }

  async getData() {
    try {
      const value = await AsyncStorage.getItem('storageCardsArray');
      if (value !== null){
        // We have data!!
        this.setState({cardsArray: JSON.parse(value)})
      }
    } catch (error) {
      alert(error);
    }
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

export default CardList;
