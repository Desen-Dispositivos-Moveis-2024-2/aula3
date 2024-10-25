// ScrollViewExample.js

import React from 'react';
import { ScrollView, Text } from 'react-native';
import styles from './styles';

const ScrollViewExample = () => {
    const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {items.map((item, index) => (
                <Text key={index} style={styles.text}>
                    {item}
                </Text>
            ))}
        </ScrollView>
    );
};

export default ScrollViewExample;
