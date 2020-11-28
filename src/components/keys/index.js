import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './style'

const Index = ({onPress, keyValue}) => {
   
    return (
        <TouchableOpacity onPress={() => onPress(keyValue)} 
            style={styles.container}>
            <Text style={styles.text}>{keyValue}</Text>
        </TouchableOpacity>
    )
}

export default Index
