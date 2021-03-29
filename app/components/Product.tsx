
// import react native
import React, { FC } from 'react';
import { Text, View, Image } from 'react-native';

// import global styles
import globalStyles from '../styles';

// define product props interface
interface ProductProps {
  title: string,
  image: string,
  price: string
}

// export Product component
const Product: FC<ProductProps> = ({title, image,  price}): JSX.Element => {
  return (
    <View style={globalStyles.productView}>
      <Image
          source={{uri: image}}
          style={globalStyles.productImage}
        />
      <View style={globalStyles.productTextView}>
        <Text style={globalStyles.productTitleText}>{ title.length > 10 ? title.substring(0, 14) + '...' : title }</Text>
        <Text style={globalStyles.productPriceText}>{ price }</Text>
      </View>
    </View>
  );
}
export default Product;

