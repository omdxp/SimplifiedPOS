// import react native
import React, {FC} from 'react';
import {View} from 'react-native';

// import components
import ProductsList from '../../../components/ProductsList';

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
      <ProductsList data={DATA} />
    </View>
  );
};
export default HomeUI;
