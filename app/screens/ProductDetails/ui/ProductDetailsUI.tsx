
// import react native
import React, { FC } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

// import global styles
import globalStyles from '../../../styles';

// import ProductDetails functions
import { } from '../functions';

// define product details props interface
interface ProductDetailsProps {
  image: string,
  title: string,
  description: string,
  price: string
}

// export ProductDetails UI
const ProductDetailsUI: FC<ProductDetailsProps> = ({image, title, description, price}):JSX.Element => {
  return (
    <View style={globalStyles.mainView}>
      <Image
        source={{uri: image}}
        style={globalStyles.productDetailsImage}
      />
      <ScrollView style={globalStyles.productDetailsTextView}>
        <Text style={globalStyles.productDetailsTitleText}>{ title }</Text>
        <Text style={globalStyles.productDetailsDescriptionText}>{ description }</Text>
        <Text style={globalStyles.productDetailsPriceText}>{ price }</Text>
      </ScrollView>
    </View>
  );
}
export default ProductDetailsUI;
