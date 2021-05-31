/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { WebView } from 'react-native-webview';
import AutoHeightWebView from 'react-native-autoheight-webview'
import { Dimensions } from 'react-native'


const App: () => Node = () => {


  return (
    <SafeAreaView style={{ flex:1 , backgroundColor: "#f2f2f2" }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ flex:1  }}>


          <WebView style={{ height:1000  }} source={{ uri: 'https://app.samy.reversedstudios.com' }}></WebView>


      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
