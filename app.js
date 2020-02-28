import React from "react";
import { StatusBar, View, Text } from "react-native";


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{ marginTop: 20 }}>
        <Text>Hello World</Text>
      </View>
    </>
  );
};

export default App;