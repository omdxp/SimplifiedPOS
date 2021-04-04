// import react native
import React, {FC, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

// import RequestsTest functions
import {addProduct} from '../functions';

// import styles
import globalStyles from '../../../styles';
import {Colors} from '../../../styles/colors';

// export RequestsTest UI
const RequestsTestUI: FC = (): JSX.Element => {
  // use result state
  const [result, setResult] = useState('');
  // on fetch press
  const fetchPress = async () => {
    try {
      const resp: Response = await addProduct();
      console.log('resp:', resp);
      setResult(JSON.stringify(resp));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View
      style={[
        globalStyles.mainView,
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.mainColor,
          margin: 10,
          padding: 10,
          borderRadius: 30,
        }}
        onPress={fetchPress}>
        <Text style={{fontSize: 50, color: Colors.white}}>Fetch</Text>
      </TouchableOpacity>
      <Text style={{alignSelf: 'flex-start', fontSize: 25}}>
        Result: {result}
      </Text>
    </View>
  );
};
export default RequestsTestUI;
