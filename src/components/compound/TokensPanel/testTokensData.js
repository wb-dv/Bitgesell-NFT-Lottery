export const levels = {
  common: 'Common',
  special: 'Special',
  rare: 'Rare',
  unique: 'Unique',
  legendary: 'Legendary',
};

export const pts = {
  Common: 56,
  Special: 147,
  Rare: 147,
  Unique: 56,
  Legendary: 56,
};

export const genId = () => Math.random() * Date.now();

export const placeholderTokensInfo = {
  nfts: [
    [
      { count: 0, id: genId(), level: levels.common, is_full: false, index: 0 },
      { count: 0, id: genId(), level: levels.common, is_full: false, index: 1 },
      { count: 0, id: genId(), level: levels.common, is_full: false, index: 2 },
      { count: 0, id: genId(), level: levels.common, is_full: false, index: 3 },
      { count: 0, id: genId(), level: levels.common, is_full: false, index: 4 },
      { count: 0, id: genId(), level: levels.common, is_full: false, index: 5 },
      { count: 0, id: genId(), level: levels.common, is_full: false, index: 6 },
      { count: 0, id: genId(), level: levels.common, is_full: false, index: 7 },
    ],
    [
      { count: 0, id: genId(), level: levels.special, is_full: false, index: 8 },
      { count: 0, id: genId(), level: levels.special, is_full: false, index: 9 },
      { count: 0, id: genId(), level: levels.special, is_full: false, index: 10 },
      { count: 0, id: genId(), level: levels.special, is_full: false, index: 11 },
      { count: 0, id: genId(), level: levels.special, is_full: false, index: 12 },
      { count: 0, id: genId(), level: levels.special, is_full: false, index: 13 },
      { count: 0, id: genId(), level: levels.special, is_full: false, index: 14 },
      { count: 0, id: genId(), level: levels.special, is_full: false, index: 15 },
      { count: 0, id: genId(), level: levels.special, is_full: false, index: 16 },
      { count: 0, id: genId(), level: levels.special, is_full: false, index: 17 },
      { count: 0, id: genId(), level: levels.special, is_full: false, index: 18 },
      { count: 0, id: genId(), level: levels.special, is_full: false, index: 19 },
      { count: 0, id: genId(), level: levels.special, is_full: false, index: 20 },
      { count: 0, id: genId(), level: levels.special, is_full: false, index: 21 },
      { count: 0, id: genId(), level: levels.special, is_full: false, index: 22 },
    ],
    [
      { count: 0, id: genId(), level: levels.rare, is_full: false, index: 23 },
      { count: 0, id: genId(), level: levels.rare, is_full: false, index: 24 },
      { count: 0, id: genId(), level: levels.rare, is_full: false, index: 25 },
      { count: 0, id: genId(), level: levels.rare, is_full: false, index: 26 },
      { count: 0, id: genId(), level: levels.rare, is_full: false, index: 27 },
      { count: 0, id: genId(), level: levels.rare, is_full: false, index: 28 },
      { count: 0, id: genId(), level: levels.rare, is_full: false, index: 29 },
      { count: 0, id: genId(), level: levels.rare, is_full: false, index: 30 },
      { count: 0, id: genId(), level: levels.rare, is_full: false, index: 31 },
      { count: 0, id: genId(), level: levels.rare, is_full: false, index: 32 },
    ],
    [
      { count: 0, id: genId(), level: levels.unique, index: 33 },
      { count: 0, id: genId(), level: levels.unique, index: 34 },
      { count: 0, id: genId(), level: levels.unique, index: 35 },
      { count: 0, id: genId(), level: levels.unique, index: 36 },
    ],
    [{ count: 0, id: genId(), level: levels.legendary, index: 37 }],
  ],
  sum_pts: 0,
  pts_by_grade: {
    Legendary: 0,
    Special: 0,
    Rare: 0,
    Common: 0,
    Unique: 0,
  },
};
