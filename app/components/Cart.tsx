// import react native
import React, {FC, useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

// import components
import ProductItemComponent from '../components/ProductItem';

// import redux
import {useSelector, useDispatch} from 'react-redux';
import {CartState, ProductsState, RootState} from '../redux/interfaces';
import {deleteProductFromCart, updateProductQuantity} from '../redux/actions';

// import global styles
import globalStyles from '../styles';
import {Colors} from '../styles/colors';

// import data types
import {DataObject} from '../interfaces';

// define cart props interface
interface CartProps {
  onPayPress: (event: GestureResponderEvent) => void;
}

// export Cart component
const Cart: FC<CartProps> = ({onPayPress}): JSX.Element => {
  // use cart selector
  const cartState: CartState = useSelector(
    (state: RootState) => state.CartReducer,
  );

  // use products selector
  const productsState: ProductsState = useSelector(
    (state: RootState) => state.ProductsReducer,
  );

  // use dispatch
  const dispatch = useDispatch();

  // use pay disabled state
  const [payDisabled, setPayDisabled] = useState<boolean>(false);

  // use effect when cart state is changing to check if pay should be disabled
  useEffect(() => {
    cartState.productsList.length === 0
      ? setPayDisabled(true)
      : setPayDisabled(false);
  }, [cartState.productsList]);

  // delete product from cart function
  const deleteProductFromMyCart = (item: DataObject): void => {
    // get quantity of current product in products reducer
    const index: number = productsState.productsList.findIndex(
      (element: DataObject) => element.id === item.id,
    );
    dispatch(deleteProductFromCart(item));
    dispatch(
      updateProductQuantity({
        ...item,
        quantity: productsState.productsList[index].quantity + item.quantity,
      }),
    );
  };

  // calculate total price function
  const calculateTotalPrice = (): number => {
    // get prices from cart products
    let totalPrice: number = 0;
    cartState.productsList.forEach(element => {
      for (let i = 0; i < element.quantity; i++) {
        totalPrice += element.price;
      }
    });
    return totalPrice;
  };

  return (
    <View style={globalStyles.cartView}>
      <Text style={globalStyles.cartTitleText}>My Cart</Text>
      <FlatList
        data={cartState.productsList}
        renderItem={({item}) => (
          <ProductItemComponent
            name={item.title}
            quantity={item.quantity}
            onPress={() => {
              deleteProductFromMyCart(item);
            }}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View style={{borderWidth: 1, borderColor: Colors.lightGrey}} />
        )}
      />
      <Text style={globalStyles.cartTotalPriceText}>
        Total: ${calculateTotalPrice()}
      </Text>
      <TouchableOpacity
        delayPressIn={0}
        style={[
          globalStyles.cartPayButtonView,
          {backgroundColor: payDisabled ? Colors.lightGrey : Colors.mainColor},
        ]}
        onPress={onPayPress}
        disabled={payDisabled}>
        <Text style={globalStyles.cartPayButtonText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Cart;
