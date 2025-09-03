interface CategoryItem {
  id: number;
  icon: string;
  url: string;
  translateKey: string;
  image: string;
}

interface CategoryMenuEnumType {
  BOOKS: CategoryItem;
  MUGS: CategoryItem;
  PADS: CategoryItem;
  TAGS: CategoryItem;
}
export const CategoryMenuEnum: CategoryMenuEnumType = {
  BOOKS: {
    id: 1,
    icon: 'menu_book',
    url: '/',
    translateKey: 'menu.book',
    image: 'assets/images/products/books/book-luv2code-1000.png',
  },
  MUGS: {
    id: 2,
    icon: 'coffee',
    url: '/',
    translateKey: 'menu.mugs',
    image: 'assets/images/products/coffeemugs/coffeemug-luv2code-1000.png',
  },
  PADS: {
    id: 3,
    icon: 'mouse',
    url: '/',
    translateKey: 'menu.pads',
    image: 'assets/images/products/luggagetags/luggagetag-luv2code-1000.png',
  },
  TAGS: {
    id: 4,
    icon: 'luggage',
    url: '/',
    translateKey: 'menu.tags',
    image: 'assets/images/products/mousepads/mousepad-luv2code-1000.png',
  },
} as const;
