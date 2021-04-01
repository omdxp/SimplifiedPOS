// import react native
import React, {FC} from 'react';
import {Text, View, FlatList} from 'react-native';

// import Transactions functions
import {} from '../functions';

// import redux
import {useSelector} from 'react-redux';

// import global styles
import globalStyles from '../../../styles';
import {TransactionsState} from '../../../redux/interfaces';

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
        renderItem={({item}) => <Text>{item.id}</Text>}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};
export default TransactionsUI;
