import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare module '*.png' {
  const value: import('react-native').ImageSourcePropType;
  export default value;
}

declare module '*.jpg' {
  const value: import('react-native').ImageSourcePropType;
  export default value;
}

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

type RootStackParamList = {
  HomeTabs: undefined;
  ProductDetail: { productId: string };
  NotFound: undefined;
 
};

type HomeTabsParamList = {
  Home: undefined;
  Explore: undefined;
  Cart: undefined;
};

type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

type HomeTabScreenProps<T extends keyof HomeTabsParamList> =
  NativeStackScreenProps<HomeTabsParamList, T>;