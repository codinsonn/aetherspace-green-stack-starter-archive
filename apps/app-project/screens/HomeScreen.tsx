import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/* --- Styles ---------------------------------------------------------------------------------- */

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

/* --- <HomeScreen/> --------------------------------------------------------------------------- */

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Open up apps/app-project/screens/HomeScreen.tsx to start working on your app 🎉</Text>
            <StatusBar style="auto" />
        </View>
    );
};

/* --- Exports --------------------------------------------------------------------------------- */

export default HomeScreen;
