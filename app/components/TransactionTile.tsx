// import react native
import React, {FC} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

// import global styles
import globalStyles from '../styles';
import {Colors} from '../styles/colors';

// define tansaction tile props interface
interface TransactionTileProps {
  id: string;
  productsQuantity: number;
  synchronized: boolean;
  refunded: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

// export TransactionTile component
const TransactionTile: FC<TransactionTileProps> = ({
  id,
  productsQuantity,
  synchronized,
  refunded,
  onPress,
}): JSX.Element => {
  return (
    <TouchableOpacity
      style={globalStyles.transactionTileView}
      onPress={onPress}>
      <Text style={globalStyles.transactionTileTitleText}>ID: {id}</Text>
      <Text style={globalStyles.transactionTileQuantityText}>
        Products Quantity: {productsQuantity}
      </Text>
      <View style={globalStyles.rowView}>
        <Text>Synchronized: </Text>
        <View
          style={[
            globalStyles.transactionTileIndicator,
            {backgroundColor: synchronized ? Colors.green : Colors.red},
          ]}
        />
      </View>
      <View style={globalStyles.rowView}>
        <Text>Refunded: </Text>
        <View
          style={[
            globalStyles.transactionTileIndicator,
            {backgroundColor: refunded ? Colors.green : Colors.red},
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};
export default TransactionTile;
