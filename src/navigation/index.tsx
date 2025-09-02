import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, Text, View } from 'react-native';
import { Explore } from './screens/Explore';
import { Home } from './screens/Home';
import { NotFound } from './screens/NotFound';
import { ProductListScreen } from './screens/ProductListScreen';
import { ProductDetailScreen } from './screens/ProductDetailScreen';
import { ShoppingCartScreen } from './screens/ShoppingCartScreen';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useCart } from '@/context/CartContext';

// Simple white background component
function WhiteBackground() {
  return <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} />;
}

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: ProductListScreen,
      options: {
        headerShown: false,
        title: 'Products',
        tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color="#007BFF" />,
      },
    },
    // Explore: {
    //   screen: Explore,
    //   options: {
    //     headerShown: false,
    //     tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color="#007BFF" />,
    //   },
    // },
    Cart: {
      screen: ShoppingCartScreen,
      options: ({ navigation }) => {
        const { getCartCount } = useCart();
        const count = getCartCount();
        return {
          headerShown: false,
          title: 'Cart',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="cart.fill" color="#007BFF" />,
          tabBarBadge: count > 0 ? count : undefined,
        };
      },
    },
  },
  screenOptions: {
    headerShown: false,
    tabBarButton: HapticTab,
    tabBarBackground: WhiteBackground,
    tabBarStyle: {
      backgroundColor: '#FFFFFF',
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        headerShown: false,
      },
    },
    ProductDetail: {
      screen: ProductDetailScreen,
      options: {
        title: 'Product Details',
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTintColor: '#000000',
      },
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTintColor: '#000000',
      },
      linking: {
        path: '*',
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
