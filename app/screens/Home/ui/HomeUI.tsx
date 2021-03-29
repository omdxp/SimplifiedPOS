// import react native
import React, {FC} from 'react';
import {View} from 'react-native';

// import components
import ProductsListComponent from '../../../components/ProductsList';
import CartComponent from '../../../components/Cart';

// import global styles
import globalStyles from '../../../styles';

// import test data
import {DATA} from '../../../test_data';

// import Home functions
// import {} from '../functions';

// export Home UI
const HomeUI: FC = (): JSX.Element => {
  return (
    <View style={globalStyles.mainView}>
      <View style={globalStyles.rowView}>
        <View style={{flex: 3}}>
          <ProductsListComponent data={DATA} />
        </View>
        <View style={{flex: 1}}>
          <CartComponent />
        </View>
      </View>
    </View>
  );
};
export default HomeUI;
