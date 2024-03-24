import { FlatList } from 'react-native';
import { categories } from '../../mocks/categories';
import { Text } from '../Text';
import { Category, Icon } from './styles';
import { useState } from 'react';

export const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = (categoryId: string) => {
    const category = selectedCategory === categoryId ? '' : categoryId;
    setSelectedCategory(category);
  };

  return (
    <FlatList
      horizontal
      data={categories}
      contentContainerStyle={{ paddingRight: 16 }}
      keyExtractor={(category) => category._id}
      renderItem={({ item }) => {
        const isSelected = selectedCategory === item._id;

        return (
          <Category onPress={() => handleSelectCategory(item._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{item.icon}</Text>
            </Icon>
            <Text opacity={isSelected ? 1 : 0.5} size={14} weight="600">
              {item.name}
            </Text>
          </Category>
        );
      }}
    />
  );
};
