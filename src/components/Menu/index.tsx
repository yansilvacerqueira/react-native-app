import { FlatList } from 'react-native';
import { Text } from '../shared/Text';
import { Product, Image, ProductDetails, Divider, AddCart } from './styles';
import { Product as ProductType, products } from '../../mocks/products';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';
import { useState } from 'react';

interface MenuProps {
  onAddToCart: (product: ProductType) => void;
}

export const Menu = ({ onAddToCart }: MenuProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleOpenModal = (product: ProductType) => {
    setIsModalVisible(true);
    setSelectedProduct(product);
  };

  return (
    <>
      <FlatList
        data={products}
        keyExtractor={(product) => product._id}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        ItemSeparatorComponent={Divider}
        renderItem={({ item: product }) => (
          <Product onPress={() => handleOpenModal(product)}>
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

            <AddCart onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddCart>
          </Product>
        )}
      />

      <ProductModal
        visible={isModalVisible}
        onClose={() => {}}
        onAddToCart={onAddToCart}
        selectedProduct={selectedProduct}
      />
    </>
  );
};
