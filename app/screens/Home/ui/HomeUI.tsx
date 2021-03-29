// import react native
import React, {FC} from 'react';
import {Text, View, FlatList} from 'react-native';

// import components
import ProductComponent from '../../../components/Product';
import ProductsList from '../../../components/ProductsList';

// import screens
import ProductDetailsScreen from '../../ProductDetails/ui/ProductDetailsUI';

// import navigation
import {useNavigation} from '@react-navigation/native';

// import global styles
import globalStyles from '../../../styles';

// import test data
import {DATA} from '../../../test_data';

// import Home functions
// import {} from '../functions';

// export Home UI
const HomeUI: FC = (): JSX.Element => {
  // use navigation
  const navigation = useNavigation();
  return (
    <View style={globalStyles.mainView}>
      <ProductsList data={DATA} />
      {/* <ProductDetailsScreen image={DATA[0].image} title={DATA[0].title} description={DATA[0].title} price={DATA[0].price} /> */}
    </View>
  );
};
export default HomeUI;
