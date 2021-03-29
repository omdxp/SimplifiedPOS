// import react native
import React, {FC} from 'react';
import {Text, View} from 'react-native';

// define product item props interface
interface ProductItemProps {
  name: string;
  quantity: number;
}

// export ProductItem component
const ProductItem: FC<ProductItemProps> = ({name, quantity}): JSX.Element => {
  return (
    <View>
      <Text>{name.length > 7 ? name.substring(0, 20) + '...' : name}</Text>
      <Text style={{alignSelf: 'flex-end'}}>x ({quantity})</Text>
    </View>
  );
};
export default ProductItem;
