// import react native
import React, {FC, useEffect} from 'react';
import {View} from 'react-native';

// import components
import ProductsListComponent from '../../../components/ProductsList';
import CartComponent from '../../../components/Cart';

// import global styles
import globalStyles from '../../../styles';

// import redux
import {addProductToProducts} from '../../../redux/actions';
import {useDispatch} from 'react-redux';

// import test data
import {DATA} from '../../../test_data';

// import Home functions
// import {} from '../functions';

// export Home UI
const HomeUI: FC = (): JSX.Element => {
  // use dispatch
  const dispatch = useDispatch();
  // save products to products reducer at the begining
  useEffect(() => {
    DATA.forEach(element => dispatch(addProductToProducts(element)));
  }, []);
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
