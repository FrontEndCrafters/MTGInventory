import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import { Container, Content, Button, Text } from 'native-base';


class Home extends Component{
  render(){
    return(
      <View>
        <Text>This is the home page</Text>
          <Button primary>
            <Text> Got to Profile Page </Text>
          </Button>
      </View>
    );
  }
}
export default Home;