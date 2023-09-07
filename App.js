import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Home from './src/views/Home/Home';


export default function App () {

  return (
    <SafeAreaView style={styles.container}>
<Home/>
      </SafeAreaView>
  );

  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
  }
}) 


