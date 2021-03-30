// import react native
import React, {FC} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

// import global styles
import globalStyles from '../styles';

// define product props interface
interface ProductProps {
  title: string;
  image: string;
  price: string;
  quantity: number;
  onPress: (event: GestureResponderEvent) => void;
  onLongPress: (event: GestureResponderEvent) => void;
}

// export Product component
const Product: FC<ProductProps> = ({
  title,
  image,
  price,
  quantity,
  onPress,
  onLongPress,
}): JSX.Element => {
  return (
    <TouchableOpacity
      style={globalStyles.productView}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Image source={{uri: image}} style={globalStyles.productImage} />
      <View style={globalStyles.productTextView}>
        <Text style={globalStyles.productTitleText}>
          {title.length > 10 ? title.substring(0, 14) + '...' : title}
        </Text>
        <Text style={globalStyles.productPriceText}>
          {price} x {quantity}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Product;
