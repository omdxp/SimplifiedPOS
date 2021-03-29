// define data object type
export type DataObject = {
  title: string;
  image: string;
  price: string;
};
// define data type
export type DataType = DataObject[];
// export sample data
export const DATA: DataType = [
  {
    title: 'Luke Skywalker',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81Dlml4kFPL._AC_SL1500_.jpg',
    price: '$25',
  },
  {
    title: 'GTA V',
    image:
      'https://frugalgaming.co.uk/wp-content/uploads/2019/05/gta5premiumbase2.jpg',
    price: '$50',
  },
  {
    title: 'Uncharted 4',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71hcX5qwKNL._AC_SX385_.jpg',
    price: '$40',
  },
  {
    title: 'Shadow of the Tomb Raider',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81KqDnL5jZL._SL1221_.jpg',
    price: '$60',
  },
  {
    title: 'Need For Speed Heat',
    image:
      'https://media.contentapi.ea.com/content/dam/need-for-speed/nfs-heat/common/nfsh-gamebox-keyart-1x1.jpg.adapt.crop1x1.767w.jpg',
    price: '$30',
  },
  {
    title: 'DOTA 2',
    image:
      'https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com//var/app/current/web/app/uploads/2020/06/dota-2-header.jpg',
    price: '$0',
  },
  {
    title: 'Sekiro: Shadow Die Twice',
    image: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg',
    price: '$20',
  },
];
