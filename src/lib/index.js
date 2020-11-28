
const keys  = [
    ['C', '+/-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=','DEL']
]

 //_calculate for checking if input is valid or not 
const _calculate = history => {
    let splitData = history.split(/([+,*,%,/,-])/)
    let totalAmount = 0
    for (let index = 0; index < splitData.length; index++) {
        let previosIndex = -1
        if (index > 1) {
            previosIndex = index - 1 
        }
       
        let element = splitData[index]
        let previosElement =  splitData[previosIndex]

        let elementParse = parseFloat(element)
        if (index == 0) {
            totalAmount += elementParse
        }else if(isNaN(elementParse) && element == '%'){
            totalAmount = totalAmount/100
        }else if(!isNaN(elementParse) && isNaN(parseFloat(previosElement))){
            if (previosElement == '*') {
                totalAmount = totalAmount * elementParse
            }

            if (previosElement == '+') {
                if (totalAmount < 0) {
                    totalAmount = elementParse -  Math.abs(totalAmount)
                }else{
                    totalAmount = totalAmount + elementParse
                }
            }

            if (previosElement == '-') {
                totalAmount = totalAmount - elementParse
            }

            if (previosElement == '/') {
                totalAmount = totalAmount/elementParse
            }


            if (!Number.isInteger(totalAmount)) {
                totalAmount = parseFloat(totalAmount).toFixed(2)
            }
            
        }
        
    }

    return totalAmount
}

 //_checkValid for checking if input is valid or not 
const _checkValid = (history, input, currentInputValue) => {

    if (!currentInputValue  && !history && isNaN(parseFloat(input))) {
        return false
    }

    let splitHistory = history.split('')
    let lastElement  = splitHistory[splitHistory.length - 1]
    if (lastElement == '%' && input == '%') {
        return false
    }
    if (lastElement == '%' && !isNaN(parseFloat(input))) {
        return false
    }

    return true
}

 //_getHitoryLastSymble for checking if history input is valid or not
const _getHitoryLastSymble = (data, value) => {
    let charLength = data.length
    let lastTwoChar = data.substr(charLength - 2)
    let isValid = false
    lastTwoChar.split('').forEach(element => {
        if (parseInt(element) || element == '%' || element == '0') {
            isValid = true
        }
    })

    if (!isValid) {
        let calculatedHistory = `${data.substring(0, charLength - 2)}${value}`
        return calculatedHistory
    }
    return data  
}

export {_checkValid, _getHitoryLastSymble, keys}

export default _calculate
