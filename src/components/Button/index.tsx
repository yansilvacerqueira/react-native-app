import { Text } from '../shared/Text';
import { Container } from './styles';

interface ButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
}

export const Button = ({ children, onPress, disabled }: ButtonProps) => {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text weight="600" color="#fff">
        {children}
      </Text>
    </Container>
  );
};
