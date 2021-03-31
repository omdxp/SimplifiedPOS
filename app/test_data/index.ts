// define data object type
export type DataObject = {
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  synchronized: boolean;
};
// define data type
export type DataType = DataObject[];
// export sample data
export const DATA: DataType = [
  {
    title: 'Luke Skywalker',
    description:
      "Luke Skywalker was released in 1977 for the debut of Star Wars. He came with a yellow lightsaber. In the Early Bird Set, he came with a double telescoping lightsaber. This extremely rare variant is highly sought after by collectors. This figure was included in the Early Bird Set, but made it's first carded appearance on the Star Wars 12-back card.",
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81Dlml4kFPL._AC_SL1500_.jpg',
    price: 25,
    quantity: 3,
    synchronized: true,
  },
  {
    title: 'GTA V',
    description:
      'Grand Theft Auto V (also known as Grand Theft Auto Five, GTA 5, GTA V, or GTAV[2]) is a video game developed by Rockstar North. It is the fifteenth installment in the Grand Theft Auto series and the successor of Grand Theft Auto IV. The original edition was released on September 17th, 2013 for the Xbox 360 and PlayStation 3. The Xbox One and PlayStation 4 versions were released on November 18th, 2014, and was later released on April 14th, 2015 for the PC. A further enhanced version for the PlayStation 5 and Xbox Series X was announced in 2020, and is expected to release in fall of 2021.',
    image:
      'https://frugalgaming.co.uk/wp-content/uploads/2019/05/gta5premiumbase2.jpg',
    price: 50,
    quantity: 5,
    synchronized: true,
  },
  {
    title: 'Uncharted 4',
    description:
      "Uncharted 4: A Thief's End is a 2016 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. It is the fourth main entry in the Uncharted series. Set several years after the events of Uncharted 3: Drake's Deception, players control Nathan Drake, a former treasure hunter coaxed out of retirement by his presumed-dead brother Samuel. With Nathan's longtime partner, Victor Sullivan, they search for clues for the location of Henry Avery's long-lost treasure. A Thief's End is played from a third-person perspective, and incorporates platformer elements. Players solve puzzles and use firearms, melee combat, and stealth to combat enemies. In the online multiplayer mode, up to ten players engage in co-operative and competitive modes.",
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71hcX5qwKNL._AC_SX385_.jpg',
    price: 40,
    quantity: 14,
    synchronized: true,
  },
  {
    title: 'Shadow of the Tomb Raider',
    description:
      "Shadow of the Tomb Raider is a 2018 action-adventure video game developed by Eidos-Montréal and published by Square Enix's European subsidiary. It continues the narrative from the 2015 game Rise of the Tomb Raider and is the twelfth mainline entry in the Tomb Raider series. The game was originally released worldwide for Microsoft Windows, PlayStation 4 and Xbox One. Versions for macOS and Linux, and Stadia, were released in November 2019. After release, the game was expanded upon with downloadable content in both a season pass and as standalone releases.",
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81KqDnL5jZL._SL1221_.jpg',
    price: 60,
    quantity: 10,
    synchronized: true,
  },
  {
    title: 'Need For Speed Heat',
    description:
      "Need for Speed Heat is a racing video game developed by Ghost Games and published by Electronic Arts for Microsoft Windows, PlayStation 4 and Xbox One. It is the twenty-fourth installment in the Need for Speed series and commemorates the series' 25th anniversary. It was released on November 8, 2019.",
    image:
      'https://media.contentapi.ea.com/content/dam/need-for-speed/nfs-heat/common/nfsh-gamebox-keyart-1x1.jpg.adapt.crop1x1.767w.jpg',
    price: 30,
    quantity: 7,
    synchronized: true,
  },
  {
    title: 'DOTA 2',
    description:
      "Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve. The game is a sequel to Defense of the Ancients (DotA), which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos. Dota 2 is played in matches between two teams of five players, with each team occupying and defending their own separate base on the map. Each of the ten players independently controls a powerful character, known as a 'hero', who all have unique abilities and differing styles of play. During a match players collect experience points and items for their heroes to successfully defeat the opposing team's heroes in player versus player combat. A team wins by being the first to destroy the other team's 'Ancient', a large structure located within their base.",
    image:
      'https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com//var/app/current/web/app/uploads/2020/06/dota-2-header.jpg',
    price: 0,
    quantity: 2,
    synchronized: true,
  },
  {
    title: 'Sekiro: Shadow Die Twice',
    description:
      'Sekiro: Shadows Die Twice is an action-adventure video game developed by FromSoftware and published by Activision. The game follows a shinobi known as Wolf as he attempts to take revenge on a samurai clan who attacked him and kidnapped his lord. It was released for Microsoft Windows, PlayStation 4, and Xbox One in March 2019 and for Stadia in October 2020.',
    image: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg',
    price: 20,
    quantity: 1,
    synchronized: true,
  },
];
