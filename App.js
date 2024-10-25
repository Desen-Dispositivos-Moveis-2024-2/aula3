import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ScrollViewExample from './ScrollViewExample';

export default function App () {
    return (
        <View style={styles.container}>
            <ScrollViewExample>


            </ScrollViewExample>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
