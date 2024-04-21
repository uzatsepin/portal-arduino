export enum EStatus {
  active = 'в наявності',
  outofstock = 'немає в наявності',
  soldout = 'продали',
  preorder = 'передзамовлення',
  small = 'Декілька штук'
}

export interface IProducts {
  id: number
  image: string
  name: string
  price: number
  oldPrice: number
  category: string
  discount: number | null
  status: EStatus
  seller: {
    id: number
    name: string
    rating: string | null
  }
}

export interface IQuestion {
  id: number
  question: string
  answer: string
}

export const products: IProducts[] = [
  {
    id: 1,
    image:
      'https://store.arduino.cc/cdn/shop/products/TPX00085_00.default_600x600.jpg?v=1621501568',
    name: 'Третья рука с лизной и подставкой для паяльника',
    price: 300,
    oldPrice: 350,
    category: 'accesories',
    discount: 10,
    status: EStatus.active,
    seller: {
      id: 1,
      name: 'Ардуино',
      rating: '4.5'
    }
  },
  {
    id: 2,
    image: 'https://store.arduino.cc/cdn/shop/products/TS000019_00_2.default.jpg?v=1627479892',
    name: 'Arduino Uno Rev3',
    price: 20,
    oldPrice: 25,
    category: 'boards',
    discount: 5,
    status: EStatus.outofstock,
    seller: {
      id: 1,
      name: 'Ардуино',
      rating: '4.5'
    }
  },
  {
    id: 3,
    image: 'https://store.arduino.cc/cdn/shop/products/TS000019_00_2.default.jpg?v=1627479892',
    name: 'Arduino Nano Every',
    price: 15,
    oldPrice: 18,
    category: 'boards',
    discount: 12,
    status: EStatus.soldout,
    seller: {
      id: 1,
      name: 'Ардуино',
      rating: '4.5'
    }
  },
  {
    id: 4,
    image: 'https://store.arduino.cc/cdn/shop/products/TS000022_00_2.default.jpg?v=1627479815',
    name: 'Arduino Nano 33 BLE',
    price: 30,
    oldPrice: 35,
    category: 'boards',
    discount: null,
    status: EStatus.preorder,
    seller: {
      id: 1,
      name: 'Ардуино',
      rating: '4.5'
    }
  },
  {
    id: 5,
    image: 'https://store.arduino.cc/cdn/shop/products/TSX00001_00_2.default.jpg?v=1629871605',
    name: 'Arduino MKR WiFi 1010',
    price: 25,
    oldPrice: 28,
    category: 'small',
    discount: null,
    status: EStatus.small,
    seller: {
      id: 1,
      name: 'Ардуино',
      rating: '4.5'
    }
  },
  {
    id: 6,
    image: 'https://store.arduino.cc/cdn/shop/products/TS000010_00_2.default.jpg?v=1627479815',
    name: 'Arduino Mega 2560 Rev3',
    price: 40,
    category: 'boards',
    oldPrice: 45,
    discount: 12,
    status: EStatus.active,
    seller: {
      id: 1,
      name: 'Ардуино',
      rating: '4.5'
    }
  }
]

export const questions: IQuestion[] = [
  {
    id: 1,
    question: 'Як зареєструватись на сайті?',
    answer:
      "Щоб зареєструватись на сайті, перейдіть на головну сторінку і натисніть кнопку 'Зареєструватись'. Потім введіть свої особисті дані, такі як ім'я, електронну адресу та пароль, і натисніть кнопку 'Зареєструватись'."
  },
  {
    id: 2,
    question: 'Як почати продавати?',
    answer:
      'Щоб почати продавати на сайті, увійдіть в особистий кабінет, перейдіть до розділу "Мої товари" або "Мої послуги" і натисніть кнопку "Додати новий товар" або "Додати нову послугу". Заповніть всю необхідну інформацію про ваш товар або послугу і натисніть кнопку "Опублікувати".'
  },
  {
    id: 3,
    question: 'Як написати статтю?',
    answer:
      ' Для написання статті, перейдіть до розділу "Блог" або "Статті" у вашому особистому кабінеті і натисніть кнопку "Створити нову статтю". Заповніть заголовок, текст та інші необхідні поля, а потім натисніть кнопку "Опублікувати".Як видалити свій аккаунт?'
  },
  {
    id: 4,
    question: 'Як видалити свій аккаунт?',
    answer:
      'Для видалення вашого аккаунта, зв"яжіться з адміністратором сайту або перейдіть до розділу "Налаштування облікового запису" у вашому особистому кабінеті і знайдіть опцію "Видалити акаунт". Після підтвердження вашого вибору ваш акаунт буде назавжди видалено.'
  }
]
