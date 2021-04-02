// import react native
import React, {FC, useState} from 'react';
import {Text, View, FlatList} from 'react-native';

// import Transactions functions
import {} from '../functions';

// import redux
import {useSelector} from 'react-redux';
import {RootState, TransactionsState} from '../../../redux/interfaces';

// import components
import TransactionTileComponent from '../../../components/TransactionTile';
import TransactionDetailsComponent from '../../../components/TransactionDetails';

// import global styles
import globalStyles from '../../../styles';
import {Colors} from '../../../styles/colors';

// import data types
import {Transaction} from '../../../interfaces';

// export Transactions UI
const TransactionsUI: FC = (): JSX.Element => {
  // use selected transaction state
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction>();
  // use transactions selector
  const transactionsState: TransactionsState = useSelector(
    (state: RootState) => state.TransactionsReducer,
  );
  return (
    <View style={globalStyles.mainView}>
      <View
        style={[
          globalStyles.rowView,
          {height: '100%', alignItems: 'flex-start'},
        ]}>
        <FlatList
          style={{flex: 1}}
          data={transactionsState.transactions}
          renderItem={({item}) => (
            <TransactionTileComponent
              id={item.id}
              productsQuantity={item.productsList.length}
              synchronized={item.synchronized}
              refunded={item.refunded}
              onPress={() => setSelectedTransaction(item)}
            />
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.lightGrey,
              }}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
        <View style={{flex: 3}}>
          <TransactionDetailsComponent transaction={selectedTransaction} />
        </View>
      </View>
    </View>
  );
};
export default TransactionsUI;
