import styled from 'styled-components/native';

// KeyboardAvoidingView is a component that adjusts the view
// when the keyboard is open
export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.View`
  width: 90%;
  background: #fafafa;
  border-radius: 8px;
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.View`
  margin-top: 32px;
`;

export const Input = styled.TextInput`
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
`;
