// define data object type
export type DataObject = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  synchronized: boolean;
  created: string;
};

// define data type
export type DataType = DataObject[];

// define transaction interface
export interface Transaction {
  id: string;
  productsList: DataType;
  synchronized: boolean;
  refunded: boolean;
}
