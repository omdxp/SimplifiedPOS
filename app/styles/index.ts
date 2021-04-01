// import style sheet
import {StyleSheet} from 'react-native';
import {Colors} from './colors';

// export global styles
const globalStyles = StyleSheet.create({
  // shared styles
  mainView: {
    flex: 1,
    padding: 10,
  },
  rowView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spaceView: {
    margin: 10,
  },
  // product styles
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
    backgroundColor: Colors.white,
  },
  productTextView: {
    height: 70,
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
  // product details styles
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
  // cart styles
  cartView: {
    padding: 5,
    backgroundColor: Colors.white,
    height: '100%',
    borderRadius: 30,
  },
  cartTitleText: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
  cartPayButtonView: {
    width: '100%',
    alignSelf: 'flex-end',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  cartPayButtonText: {
    fontSize: 30,
    color: Colors.white,
  },
  cartTotalPriceText: {
    fontSize: 25,
    color: Colors.black,
  },
  // transaction tile styles
  transactionTileView: {
    margin: 10,
  },
  transactionTileTitleText: {
    fontSize: 20,
  },
  transactionTileQuantityText: {
    fontSize: 18,
  },
  transactionTileIndicator: {
    height: 20,
    width: 20,
    borderRadius: 20,
  },
});
export default globalStyles;
