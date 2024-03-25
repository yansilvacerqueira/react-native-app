import { FlatList, Modal, Platform, TouchableOpacity } from 'react-native';
import {
  CloseButton,
  Footer,
  FooterContainer,
  Header,
  Image,
  Ingredient,
  Ingredients,
  ModalBox,
  PriceContainer,
} from './styles';
import { Close } from '../Icons/Close';
import { Product } from '../../mocks/products';
import { Text } from '../shared/Text';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  selectedProduct: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductModal = ({
  visible,
  onClose,
  selectedProduct,
  onAddToCart,
}: ProductModalProps) => {
  const handleAddToCart = () => {
    onAddToCart(selectedProduct);
    onClose();
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: `http://192.168.0.125:8081/uploads/${selectedProduct.imagePath}`,
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>

        <ModalBox>
          <Header>
            <Text size={24} weight="600">
              {selectedProduct.name}
            </Text>

            <Text color="#666" style={{ marginTop: 8 }}>
              {selectedProduct.description}
            </Text>
          </Header>

          {selectedProduct.ingredients.length > 0 && (
            <Ingredients>
              <Text size={16} weight="600">
                Ingredientes
              </Text>

              <FlatList
                data={selectedProduct.ingredients}
                keyExtractor={({ _id }) => _id}
                style={{ marginTop: 16 }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Ingredient>
                    <Text>{item.icon}</Text>
                    <Text size={14} color="#666" style={{ marginLeft: 16 }}>
                      {item.name}
                    </Text>
                  </Ingredient>
                )}
              />

              <Text size={16} weight="600" style={{ marginTop: 16 }}>
                Preço
              </Text>

              <Text size={24} weight="600" style={{ marginTop: 8 }}>
                {formatCurrency(selectedProduct.price)}
              </Text>
            </Ingredients>
          )}
        </ModalBox>

        <Footer>
          <FooterContainer>
            <PriceContainer>
              <Text color="#666">Preço</Text>
              <Text size={24} weight="600" style={{ marginTop: 8 }}>
                {formatCurrency(selectedProduct.price)}
              </Text>
            </PriceContainer>

            <Button onPress={handleAddToCart}>Adicionar ao pedido</Button>
          </FooterContainer>
        </Footer>
      </Image>
    </Modal>
  );
};
