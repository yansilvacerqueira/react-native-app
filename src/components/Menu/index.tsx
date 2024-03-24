import { FlatList } from 'react-native';
import { Text } from '../Text';
import { Product, Image, ProductDetails, Divider, AddCart } from './styles';
import { products } from '../../mocks/products';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';

export const Menu = () => {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product._id}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      ItemSeparatorComponent={Divider}
      renderItem={({ item: product }) => (
        <Product>
          <Image
            source={{
              uri: `http://192.168.0.125:8081/uploads/${product.imagePath}`,
            }}
          />
          <ProductDetails>
            <Text weight="600">{product.name}</Text>
            <Text size={14} color="#666" style={{ marginVertical: 8 }}>
              {product.description}
            </Text>
            <Text size={14} weight="600">
              {formatCurrency(product.price)}
            </Text>
          </ProductDetails>

          <AddCart>
            <PlusCircle />
          </AddCart>
        </Product>
      )}
    />
  );
};
