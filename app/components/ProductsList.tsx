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
import {useDispatch} from 'react-redux';
import {addProductToCart} from '../redux/actions';

// define products list props interface
interface ProductsListProps {
  data: DataType;
}

// export ProductsList component
const ProductsList: FC<ProductsListProps> = ({data}): JSX.Element => {
  // use disptach
  const dispatch = useDispatch();

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
            dispatch(addProductToCart(item));
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
