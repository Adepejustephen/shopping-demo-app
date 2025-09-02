import { Product } from "@/types";

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'High-quality wireless headphones with noise cancellation and long battery life.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Smartphone',
    price: 699.99,
    description: 'Latest smartphone with high-resolution camera and fast processor.',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Laptop',
    price: 1299.99,
    description: 'Powerful laptop for work and gaming with high-performance specs.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Smartwatch',
    price: 249.99,
    description: 'Feature-rich smartwatch with health tracking and notifications.',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Wireless Earbuds',
    price: 129.99,
    description: 'Compact wireless earbuds with great sound quality and comfortable fit.',
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Tablet',
    price: 399.99,
    description: 'Versatile tablet with high-resolution display and long battery life.',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '7',
    name: 'Bluetooth Speaker',
    price: 79.99,
    description: 'Portable Bluetooth speaker with rich sound and water resistance.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '8',
    name: 'Digital Camera',
    price: 549.99,
    description: 'High-resolution digital camera for professional photography.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '9',
    name: 'Gaming Console',
    price: 499.99,
    description: 'Next-generation gaming console with immersive gaming experience.',
    image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '10',
    name: 'Fitness Tracker',
    price: 89.99,
    description: 'Advanced fitness tracker with heart rate monitoring and sleep tracking.',
    image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=1000&auto=format&fit=crop',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};