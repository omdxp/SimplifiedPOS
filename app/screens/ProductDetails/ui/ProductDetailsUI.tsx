// import react native
import React, {FC} from 'react';
import {Text, View, Image, ScrollView, Route} from 'react-native';

// import global styles
import globalStyles from '../../../styles';

// import ProductDetails functions
import {} from '../functions';

// define product details props interface
interface ProductDetailsProps {
  image: string;
  title: string;
  description: string;
  price: string;
  quantity: number;
  created: string;
}

// export ProductDetails UI
const ProductDetailsUI: FC = ({route}: Route): JSX.Element => {
  const {
    image,
    title,
    description,
    price,
    quantity,
    created,
  }: ProductDetailsProps = route.params;
  return (
    <View style={globalStyles.mainView}>
      <Image source={{uri: image}} style={globalStyles.productDetailsImage} />
      <ScrollView style={globalStyles.productDetailsTextView}>
        <Text style={globalStyles.productDetailsTitleText}>{title}</Text>
        <Text style={globalStyles.productDetailsDescriptionText}>
          {description}
        </Text>
        <Text style={globalStyles.productDetailsDescriptionText}>
          Created at: {created}
        </Text>
        <Text style={globalStyles.productDetailsPriceText}>
          Quantity: {quantity}
        </Text>
        <Text style={globalStyles.productDetailsPriceText}>${price}</Text>
      </ScrollView>
    </View>
  );
};
export default ProductDetailsUI;
