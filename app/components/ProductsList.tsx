// import react native
import React, {FC, useReducer} from 'react';
import {FlatList} from 'react-native';

// import navigation
import {useNavigation} from '@react-navigation/native';

// import components
import ProductComponent from './Product';

// import data type
import {DataType} from '../test_data';

// import redux
import {useSelector, useDispatch} from 'react-redux';
import {addProductToCart} from '../redux/actions';
import {CartState} from '../redux/interfaces';

// define products list props interface
interface ProductsListProps {
  data: DataType;
}

// export ProductsList component
const ProductsList: FC<ProductsListProps> = ({data}): JSX.Element => {
  // use disptach
  const dispatch = useDispatch();

  // use cart selector
  const state: CartState = useSelector(state => state.CartReducer);

  // use navigation
  const navigation = useNavigation();

  return (
    <FlatList
      numColumns={4}
      initialNumToRender={4}
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => (
        <ProductComponent
          title={item.title}
          image={item.image}
          price={item.price}
          onPress={() => {
            const cartItem = item;
            // check if item is already in cart list
            const index: number = state.productsList.findIndex(
              element => element.title === cartItem.title,
            );
            if (index === -1) {
              cartItem.quantity = 1;
              dispatch(addProductToCart(cartItem));
            } else {
              dispatch(addProductToCart(cartItem));
            }
          }}
          onLongPress={() => {
            navigation.navigate('ProductDetails', {
              image: item.image,
              title: item.title,
              description: item.title,
              price: item.price,
            });
          }}
        />
      )}
    />
  );
};
export default ProductsList;
