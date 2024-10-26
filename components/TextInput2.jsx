import React, { useState } from "react";
import { View, TextInput, Text } from 'react-native';
import styles from "../styles";


const TextInput2 = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <TextInput
                placeholder="Digite seu nome"
                onChangeText={text => setName(text)}
                value={name}
                style={styles.text}
            />
            <Text
                style={styles.text}>
                Bem vindo, {name}</Text>

        </View>
    )
}

export default TextInput2;