
import React, {useState} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View
} from 'react-native'

import KeyBoard from '../components/keyboard'
import  styles from '../../assets/css/style'
import Display from '../components/display'
import amountCalculate, {_checkValid, _getHitoryLastSymble, keys} from '../lib'

const Index  = () => {

    const [ inputValue, setInputValue] = useState('')
    const [ finalAmount, setFinalAmount] = useState('')
    const [ history, setHistory] = useState('')

    //_calculateFinalAmount for calculating final amount
    const _calculateFinalAmount = (history) => {
        if (history) {
            let calculateAmount =  amountCalculate(history)
            setFinalAmount(calculateAmount)
        }else{
            setInputValue('')
        }
    }

    //_resetData for reset value
    const _resetData = () => {
        setInputValue('')
        setFinalAmount('')
        setHistory('')
    }

    //_deleteData for deleting digits
    const _deleteData = () => {
        if (!inputValue) {
            return
        }

        let splitInputValue = inputValue.split("")
        splitInputValue.pop()
        let final = splitInputValue.join('')
        setInputValue(final)
        let data = `${history}${final}`
        _calculateFinalAmount(data)
    }

    
    //_calculateAmount for checking digit key  and operator and calling function
    const _calculateAmount = (value) => {
        let final = inputValue
        let hostoryData = history

        let isValid = _checkValid(hostoryData, value, inputValue)
        
        if (!isValid) {
            return
        }

        if (parseInt(value) || value === '.' || value === '0') {
            final = `${inputValue}${value}`
            hostoryData = `${history}${final}`
            setInputValue(final)
        }else{
            let data = `${history}${final}${value}`
            let oldData = _getHitoryLastSymble(data, value)
            hostoryData = oldData
            setHistory(oldData)
            setInputValue('')
        }
        _calculateFinalAmount(hostoryData)
    }

    const acc = value => {
        console.log(value)
    }

    //_calculate for checking key type and calling function
    const _calculate = value => {
        switch (value) {
            case '=':
                _calculateFinalAmount()
                break
            case 'C':
                _resetData(value)
                break
            case 'DEL':
                _deleteData()
                break
            case '+/-':
                acc(value)
                break
            default:
                _calculateAmount(value)
        }
    }

    
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.container}>
                        <View style={{flex:1, justifyContent: "flex-end"}}>
                            <Display amount={inputValue} finalAmount={finalAmount} historyData={history}/>
                        </View>
                        <KeyBoard onPress={value => _calculate(value)} keys={keys}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}



export default Index
