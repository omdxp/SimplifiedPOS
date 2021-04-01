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

// export TransactionDetails component
const TransactionDetails: FC<TransactionDetailsProps> = ({
  transaction,
}): JSX.Element => {
  // this function calculate the quantity of all products
  const calculateProductsQuantity = (): number => {
    let quantity: number = 0;
    transaction?.productsList.forEach(
      element => (quantity += element.quantity),
    );
    return quantity;
  };

  // this function calculate the total price of all products in this transaction
  const calculateTotalPrice = (): number => {
    let totalPrice: number = 0;
    transaction?.productsList.forEach(element => {
      for (let i = 0; i < element.quantity; i++) {
        totalPrice += element.price;
      }
    });
    return totalPrice;
  };

  // check if transaction is available
  if (transaction?.id) {
    return (
      <View
        style={[globalStyles.mainView, globalStyles.transactionDetailsView]}>
        <Text style={globalStyles.transactionDetailsTitleText}>
          ID: {transaction?.id}
        </Text>
        <Text style={globalStyles.transactionDetailsNormalText}>
          Products Quantity: {calculateProductsQuantity()}
        </Text>
        <Text style={globalStyles.transactionDetailsNormalText}>
          This transaction is {transaction?.synchronized ? '' : 'not'}{' '}
          synchronized.
        </Text>
        <Text style={globalStyles.transactionDetailsNormalText}>
          This transaction is {transaction?.refunded ? '' : 'not'} refunded.
        </Text>
        <Text style={globalStyles.transactionDetailsNormalText}>
          Products List:
        </Text>
        <FlatList
          data={transaction?.productsList}
          renderItem={({item}) => (
            <View style={globalStyles.transactionDetailsProductView}>
              <Text style={globalStyles.transactionDetailsProductText}>
                Product ID: {item.id}
              </Text>
              <View style={globalStyles.rowView}>
                <Text
                  style={[
                    globalStyles.transactionDetailsNormalText,
                    {fontWeight: 'bold'},
                  ]}>
                  {item.title}
                </Text>
                <Text style={globalStyles.transactionDetailsProductPriceText}>
                  ${item.price}
                </Text>
              </View>
              <Text style={globalStyles.transactionDetailsProductText}>
                Quantity: {item.quantity}
              </Text>
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
        <Text style={globalStyles.transactionDetailsProductPriceText}>
          Total price: ${calculateTotalPrice()}
        </Text>
      </View>
    );
  }
  // return default view
  return <View />;
};
export default TransactionDetails;
