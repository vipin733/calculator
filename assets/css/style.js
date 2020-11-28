import {StyleSheet } from 'react-native'
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
module.exports = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    color: '#000',
  },
  container: { 
    flex: 1, 
    paddingVertical: 100, 
    backgroundColor: "black" 
  },
  defultcolor: {
    color: '#000',
  },
  containerbox: {
    flex: 1,
    backgroundColor: '#ffffff',
    color: '#000',
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  scrollView: {
    backgroundColor: Colors.lighter,
  },
  
})
