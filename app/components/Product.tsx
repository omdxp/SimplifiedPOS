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
import {Colors} from '../styles/colors';

// define product props interface
interface ProductProps {
  title: string;
  image: string;
  price: string;
  quantity: number;
  productOutOfStock: boolean;
  onPress: (event: GestureResponderEvent) => void;
  onLongPress: (event: GestureResponderEvent) => void;
}

// export Product component
const Product: FC<ProductProps> = ({
  title,
  image,
  price,
  quantity,
  productOutOfStock,
  onPress,
  onLongPress,
}): JSX.Element => {
  return (
    <TouchableOpacity
      delayPressIn={0}
      style={globalStyles.productView}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Image source={{uri: image}} style={globalStyles.productImage} />
      <View
        style={[
          globalStyles.productTextView,
          {
            backgroundColor: productOutOfStock
              ? Colors.lightGrey
              : Colors.mainColor,
          },
        ]}>
        <Text style={globalStyles.productTitleText}>
          {title.length > 10 ? title.substring(0, 14) + '...' : title}
        </Text>
        <Text style={globalStyles.productPriceText}>
          {price} x ({quantity})
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Product;
