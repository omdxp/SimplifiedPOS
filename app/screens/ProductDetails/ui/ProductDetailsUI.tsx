
// import react native
import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

// import global styles
import globalStyles from '../../../styles';

// import ProductDetails functions
import {} from '../functions';

// export ProductDetails UI
export default function ProductDetailsUI() {
  return (
    <View style={globalStyles.mainView}>
      <Image
        source={require('../../../assets/images/test_product.jpg')}
        style={globalStyles.productDetailsImage}
      />
      <ScrollView style={globalStyles.productDetailsTextView}>
        <Text style={globalStyles.productDetailsTitleText}>Product name</Text>
        <Text style={globalStyles.productDetailsDescriptionText}>Product description</Text>
        <Text style={globalStyles.productDetailsPriceText}>$200</Text>
      </ScrollView>
    </View>
  );
}
