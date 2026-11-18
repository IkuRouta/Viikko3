import React from 'react';
import { Appbar } from 'react-native-paper';
import { StackHeaderProps } from '@react-navigation/native-stack';

export default function CustomNavigationBar({
  navigation,
  back,
  options,
}: StackHeaderProps) {
  const title = options.title !== undefined ? options.title : 'Material desing and navigation';

  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate('SecondScreen' as never)}
        />
      )}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}