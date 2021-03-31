// import react native
import React, {FC} from 'react';
import {FlatList} from 'react-native';

// import navigation
import {useNavigation} from '@react-navigation/native';

// import components
import ProductComponent from './Product';

// import data type
import {DataObject, DataType} from '../test_data';

// import redux
import {useSelector, useDispatch} from 'react-redux';
import {addProductToCart, updateProductQuantity} from '../redux/actions';
import {CartState, ProductsState} from '../redux/interfaces';

// define products list props interface
interface ProductsListProps {
  data: DataType;
}

// export ProductsList component
const ProductsList: FC<ProductsListProps> = ({data}): JSX.Element => {
  // use disptach
  const dispatch = useDispatch();

  // use cart selector
  const cartState: CartState = useSelector(state => state.CartReducer);

  // use products selector
  const productsState: ProductsState = useSelector(
    state => state.ProductsReducer,
  );

  // use navigation
  const navigation = useNavigation();

  // add product to cart function
  const addProductToMyCart = (item: DataObject): void => {
    // check if item is already in cart list
    const index: number = cartState.productsList.findIndex(
      element => element.title === item.title,
    );
    // check for quantity of current product in products reducer
    const productIndex: number = productsState.productsList.findIndex(
      element => element.title === item.title,
    );
    if (productsState.productsList[productIndex].quantity === 0) {
      return;
    } else {
      // add to cart
      if (index === -1) {
        dispatch(
          addProductToCart({
            ...item,
            quantity: 1,
          }),
        );
      } else {
        dispatch(addProductToCart(item));
      }
      // update product quantity
      dispatch(
        updateProductQuantity({
          ...item,
          quantity: item.quantity - 1,
        }),
      );
    }
  };

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
          quantity={item.quantity}
          onPress={() => {
            addProductToMyCart(item);
          }}
          onLongPress={() => {
            navigation.navigate('ProductDetails', {
              image: item.image,
              title: item.title,
              description: item.description,
              price: item.price,
              quantity: item.quantity,
            });
          }}
        />
      )}
    />
  );
};
export default ProductsList;
