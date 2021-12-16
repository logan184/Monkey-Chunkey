import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: "",
      displayText: "",
    }
  }
  render(){
  return (
    <View>
      <SafeAreaProvider>
     <Header
  centerComponent={{ text: 'Monkey Chunky', style: { color: '#fff' } }}
  containerStyle={{
    backgroundColor: '#3D6DCC',
    justifyContent: 'space-around',
  }}
/>
</SafeAreaProvider>
<View style = {styles.contentContainer}>
<TextInput
        style={styles.input}
        onChangeText={(text) =>{
          this.setState({
            text: text
          });
        }}
        value={this.state.text}
      />
</View>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },

  input: {
    borderWidth: 1,
    height: 45,
    width: "100%",
    textAlign: "center",
  },


  contentContainer: {
    flex: 0.2,
    marginTop: 200,
   // justifyContent: "center",
   // alignItems: "center",
  },
});
