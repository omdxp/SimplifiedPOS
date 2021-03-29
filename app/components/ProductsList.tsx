// import react native
import React, {FC} from 'react';
import {Text, View, FlatList} from 'react-native';

// import navigation
import {useNavigation} from '@react-navigation/native';

// import components
import ProductComponent from './Product';

// import data type
import {DataType} from '../test_data';

// define products list props interface
interface ProductsListProps {
  data: DataType;
}

// export ProductsList component
const ProductsList: FC<ProductsListProps> = ({data}): JSX.Element => {
  // use navigation
  const navigation = useNavigation();
  return (
    <FlatList
      numColumns={5}
      initialNumToRender={5}
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => (
        <ProductComponent
          title={item.title}
          image={item.image}
          price={item.price}
          onPress={() => {
            console.log('Pressed!');
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
