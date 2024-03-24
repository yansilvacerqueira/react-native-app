import { Button } from '../../components/Button';
import { Categories } from '../../components/Categories';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import {
  Container,
  CategorieContainer,
  FooterContainer,
  MenuContainer,
  Footer,
} from './styles';

export const Main = () => {
  return (
    <Container>
      <Header />

      <CategorieContainer>
        <Categories />
      </CategorieContainer>

      <MenuContainer>
        <Menu />
      </MenuContainer>

      <Footer>
        <FooterContainer>
          <Button onPress={() => alert('test')} disabled>
            Ver carrinho
          </Button>
        </FooterContainer>
      </Footer>
    </Container>
  );
};
