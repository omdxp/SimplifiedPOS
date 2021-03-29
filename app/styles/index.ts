// import style sheet
import {StyleSheet} from 'react-native';
import {Colors} from './colors';

// export global styles
const globalStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 10,
  },
  rowView: {
    flexDirection: 'row',
  },
  productView: {
    margin: 10,
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
  spaceView: {
    margin: 10,
  },
  productDetailsImage: {
    flex: 2,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  productDetailsTextView: {
    flex: 1,
  },
  productDetailsTitleText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 30,
  },
  productDetailsDescriptionText: {
    fontSize: 20,
  },
  productDetailsPriceText: {
    alignSelf: 'flex-end',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default globalStyles;
