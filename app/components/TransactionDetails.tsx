// import react native
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

// import data types
import {Transaction} from '../redux/interfaces';

// import global styles
import globalStyles from '../styles';
import {Colors} from '../styles/colors';

// define transaction details props interface
interface TransactionDetailsProps {
  transaction?: Transaction;
}

// export type DataObject = {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   price: number;
//   quantity: number;
//   synchronized: boolean;
// };

// export TransactionDetails component
const TransactionDetails: FC<TransactionDetailsProps> = ({
  transaction,
}): JSX.Element => {
  // check if transaction is available
  if (transaction?.id) {
    return (
      <View
        style={[
          globalStyles.mainView,
          {borderLeftWidth: 1, borderLeftColor: Colors.mainColorDark},
        ]}>
        <Text style={{textAlign: 'center', fontSize: 30}}>
          ID: {transaction?.id}
        </Text>
        <Text style={{fontSize: 20}}>
          Products Quantity: {transaction?.productsList.length}
        </Text>
        <Text style={{fontSize: 20}}>
          This transaction is {transaction?.synchronized ? '' : 'not'}{' '}
          synchronized.
        </Text>
        <Text style={{fontSize: 20}}>
          This transaction is {transaction?.refunded ? '' : 'not'} refunded.
        </Text>
        <Text style={{fontSize: 20}}>Products List:</Text>
        <FlatList
          data={transaction?.productsList}
          renderItem={({item}) => (
            <View style={{margin: 10}}>
              <Text style={{fontSize: 18}}>Product ID: {item.id}</Text>
              <View style={globalStyles.rowView}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  {item.title}
                </Text>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                  ${item.price}
                </Text>
              </View>
              <Text style={{fontSize: 18}}>Quantity: {item.quantity}</Text>
            </View>
          )}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: Colors.lightGrey,
              }}
            />
          )}
        />
      </View>
    );
  }
  // return default view
  return <View />;
};
export default TransactionDetails;
