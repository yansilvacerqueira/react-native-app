import { Categories } from '../../components/Categories';
import { Header } from '../../components/Header';
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
      <MenuContainer />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
};
