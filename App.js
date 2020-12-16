import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Init app!</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
