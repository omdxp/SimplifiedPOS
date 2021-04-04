// write your RequestsTest functions here
export const addProduct = async () => {
  return await fetch('http://localhost:5000/add-product', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({
    //   firstParam: 'My first param value.',
    //   secondParam: 'My second param value.',
    // }),
  });
};
