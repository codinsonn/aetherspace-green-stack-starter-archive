import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useRouting } from 'expo-next-react-navigation';

/* --- Styles ---------------------------------------------------------------------------------- */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

/* --- <AuthorScreen/> --------------------------------------------------------------------------- */

const AuthorScreen = () => {
    const { goBack } = useRouting();
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>About the Author:</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>thorr@codinsonn.dev</Text>
            <Text
                style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    backgroundColor: 'black',
                    color: 'white',
                    margin: 20,
                }}
                onPress={goBack}
            >
                👈  Go Back
            </Text>
        </View>
    );
};

/* --- Exports --------------------------------------------------------------------------------- */

export default AuthorScreen;
