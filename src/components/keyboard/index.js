import React from 'react'
import { View,} from 'react-native'
import KeyBoardKey from '../keys'
import styles from './style'

const Index = ({keys, onPress}) => {

    const _setData = value => {
        onPress(value)
    }

    return (
        <View>
            {
                keys.map((rows, rowIndex) => {
                    return (
                        <View  key={rowIndex} style={styles.container}>
                            {
                                rows.map((col, colIndex) => {
                                    return <KeyBoardKey key={colIndex}  onPress={value => _setData(value)} keyValue={col}/>
                                })
                            }
                        </View>
                    )
                })
            }
        </View>
    )
}

export default Index