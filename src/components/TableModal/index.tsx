import { Modal, Platform, Touchable, TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Form, Header, Input, ModalBox, Overlay } from './styles';
import { Close } from '../Icons/Close';
import { Button } from '../Button';
import { useState } from 'react';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export const TableModal = ({ visible, onClose, onSave }: TableModalProps) => {
  const [inputValue, setInputValue] = useState<string>();

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBox>
          <Header>
            <Text weight="600">Informe a mesa</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              onChangeText={setInputValue}
            />

            <Button
              onPress={() => {
                onSave(inputValue!);
                setInputValue('');
              }}
              disabled={!inputValue}
            >
              Salvar
            </Button>
          </Form>
        </ModalBox>
      </Overlay>
    </Modal>
  );
};
