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

import CardList from './app/components/CardList';
import Home from './app/components/Home';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';


export default class MTGCardInventory extends Component {


  render() {

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>MTG Inventory</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <CardList />
        </Content>
      </Container>
    );
  }

};

AppRegistry.registerComponent('MTGCardInventory', () => MTGCardInventory);
