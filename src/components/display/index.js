import React from 'react'
import { View, Text }from 'react-native'
import styles from './style'

const Index = (props) => {
  let {amount, finalAmount, historyData} = props
  return (
    <View style={styles.container}>
      <Text style={styles.final}>{finalAmount}</Text>
      <Text style={styles.display}>{amount}</Text>
      {
        historyData ? <Text style={styles.history}>
          {historyData}{amount} {finalAmount ? `= ${finalAmount}`: ''}
        </Text> : <></>
      }
    </View>
  )
}

export default Index

