// import react native
import React, {FC} from 'react';
import {Text, View, FlatList} from 'react-native';

// import Transactions functions
import {} from '../functions';

// import redux
import {useSelector} from 'react-redux';
import {TransactionsState} from '../../../redux/interfaces';

// import components
import TransactionTileComponent from '../../../components/TransactionTile';
import TransactionDetailsComponent from '../../../components/TransactionDetails';

// import global styles
import globalStyles from '../../../styles';
import {Colors} from '../../../styles/colors';

// export Transactions UI
const TransactionsUI: FC = (): JSX.Element => {
  // use transactions selector
  const transactionsState: TransactionsState = useSelector(
    state => state.TransactionsReducer,
  );
  return (
    <View style={globalStyles.mainView}>
      <FlatList
        data={transactionsState.transactions}
        renderItem={({item}) => (
          <TransactionTileComponent
            id={item.id}
            productsQuantity={item.productsList.length}
            synchronized={item.synchronized}
            refunded={item.refunded}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{borderBottomWidth: 1, borderBottomColor: Colors.lightGrey}}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};
export default TransactionsUI;
