export const CategoryMenuEnum = {
  BOOKS: {
    id: 1,
    icon: 'menu_book',
    url: '/',
    translateKey: 'menu.book',
  },
  MUGS: {
    id: 2,
    icon: 'coffee',
    url: '/',
    translateKey: 'menu.mugs',
  },
  PADS: {
    id: 3,
    icon: 'mouse',
    url: '/',
    translateKey: 'menu.pads',
  },
  TAGS: {
    id: 4,
    icon: 'luggage',
    url: '/',
    translateKey: 'menu.tags',
  },
} as const;
export type CategoryMenuEnum = keyof typeof CategoryMenuEnum;
