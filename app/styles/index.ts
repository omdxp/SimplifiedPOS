// import style sheet
import {StyleSheet} from 'react-native';
import {Colors} from './colors';

// export global styles
const globalStyles = StyleSheet.create({
  mainView: {
    padding: 10,
  },
  productView: {
    borderRadius: 20,
    width: 200,
  },
  productImage: {
    width: 200,
    height: 200,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  productTextView: {
    height: 70,
    backgroundColor: Colors.lightGrey,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  productTitleText: {
    textAlign: 'center',
    fontSize: 20,
  },
  productPriceText: {
    textAlign: 'center',
    fontSize: 17,
  },
});
export default globalStyles;
