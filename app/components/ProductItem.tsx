// import react native
import React, {FC} from 'react';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';

// import global styles
import globalStyles from '../styles';

// define product item props interface
interface ProductItemProps {
  name: string;
  quantity: number;
  onPress: (event: GestureResponderEvent) => void;
}

// export ProductItem component
const ProductItem: FC<ProductItemProps> = ({
  name,
  quantity,
  onPress,
}): JSX.Element => {
  return (
    <TouchableOpacity
      delayPressIn={0}
      style={globalStyles.mainView}
      onPress={onPress}>
      <Text>{name.length > 7 ? name.substring(0, 20) + '...' : name}</Text>
      <Text style={{alignSelf: 'flex-end'}}>x ({quantity})</Text>
    </TouchableOpacity>
  );
};
export default ProductItem;
