// import react native
import React, {FC, useEffect} from 'react';
import {View} from 'react-native';

// import components
import ProductsListComponent from '../../../components/ProductsList';
import CartComponent from '../../../components/Cart';

// import global styles
import globalStyles from '../../../styles';

// import redux
import {
  addProductFromApi,
  addTransactionToTransactions,
  deleteProductFromCart,
} from '../../../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import {CartState, ProductsState, RootState} from '../../../redux/interfaces';

// import data types
import {Transaction} from '../../../interfaces';

// import test data
import {DATA} from '../../../test_data';

// import Home functions
// import {} from '../functions';

// export Home UI
const HomeUI: FC = (): JSX.Element => {
  // save products to products reducer at the begining
  useEffect(() => {
    // TODO: get data from real api
    DATA.forEach(element => dispatch(addProductFromApi(element)));
  }, []);
  // use dispatch
  const dispatch = useDispatch();
  // use products selector
  const productState: ProductsState = useSelector(
    (state: RootState) => state.ProductsReducer,
  );
  // use cart selector
  const cartState: CartState = useSelector(
    (state: RootState) => state.CartReducer,
  );
  return (
    <View style={globalStyles.mainView}>
      <View style={globalStyles.rowView}>
        <View style={{flex: 3}}>
          <ProductsListComponent data={productState.productsList} />
        </View>
        <View style={{flex: 1}}>
          <CartComponent
            onPayPress={() => {
              const transaction: Transaction = {
                id: Date.now().toString(),
                productsList: cartState.productsList,
                synchronized: false,
                refunded: false,
              };
              // adding transaction to reducer
              dispatch(addTransactionToTransactions(transaction));
              // deleting cart items
              cartState.productsList.forEach(element => {
                dispatch(deleteProductFromCart(element));
              });
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default HomeUI;
