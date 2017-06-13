import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import { Container, Content, Button, Text } from 'native-base';


class Profile extends Component{
  render(){
    return(
      <View>
        <Text>This is the Profile page</Text>
          <Button primary>
            <Text> Got to Home Page </Text>
          </Button>
      </View>
    );
  }
}
export default Profile;