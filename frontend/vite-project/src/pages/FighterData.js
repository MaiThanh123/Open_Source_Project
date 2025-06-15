import jones from '../assets/image/fighter/jones.png';
import volka from '../assets/image/fighter/volka.png';

const fighterData = {
  Flyweight: {
    champion: {
      name: 'Alexandre Pantoja',
      record: '29-4-1',
      image: volka,
    },
    contenders: Array.from({ length: 10 }, (_, i) => ({
      name: `Flyweight Contender ${i + 1}`,
      record: `${22 - i}-${i}-0`,
    })),
  },
  Bantamweight: {
    champion: {
      name: 'Merab Dvalishvili',
      record: '29-4-1',
      image: volka,
    },
    contenders: Array.from({ length: 10 }, (_, i) => ({
      name: `Bantamweight Contender ${i + 1}`,
      record: `${22 - i}-${i}-0`,
    })),
  },
  Featherweight: {
    champion: {
      name: 'Alexander Volkanovski',
      record: '29-4-1',
      image: volka,
    },
    contenders: Array.from({ length: 10 }, (_, i) => ({
      name: `Featherweight Contender ${i + 1}`,
      record: `${22 - i}-${i}-0`,
    })),
  },
  Lightweight: {
    champion: {
      name: 'Islam Makhachev',
      record: '29-4-1',
      image: volka,
    },
    contenders: Array.from({ length: 10 }, (_, i) => ({
      name: `Lightweight Contender ${i + 1}`,
      record: `${22 - i}-${i}-0`,
    })),
  },
  Welterweight: {
    champion: {
      name: 'Jack Della Maddalena',
      record: '29-4-1',
      image: volka,
    },
    contenders: Array.from({ length: 10 }, (_, i) => ({
      name: `Welterweight Contender ${i + 1}`,
      record: `${22 - i}-${i}-0`,
    })),
  },
  Middleweight: {
    champion: {
      name: 'Dricus Du Plessis',
      record: '24-3-0',
      image: 'https://via.placeholder.com/50',
    },
    contenders: Array.from({ length: 10 }, (_, i) => ({
      name: `Middleweight Contender ${i + 1}`,
      record: `${21 - i}-${i}-0`,
    })),
  },
  Cruiser: {
    champion: {
      name: 'Magomed Ankalaev',
      record: '29-4-1',
      image: volka,
    },
    contenders: Array.from({ length: 10 }, (_, i) => ({
      name: `Cruiser Contender ${i + 1}`,
      record: `${22 - i}-${i}-0`,
    })),
  },
  Heavyweight: {
    champion: {
      name: 'Jon Jones',
      record: '27-1-0',
      image: jones,
    },
    contenders: Array.from({ length: 10 }, (_, i) => ({
      name: `Heavyweight Contender ${i + 1}`,
      record: `${20 - i}-${i}-0`,
    })),
  },
};

export default fighterData;