import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 85,
    backgroundColor: '#71C0D7', // ヘッダーの背景色
    justifyContent: 'center',
    alignItems: 'flex-start', // 左寄せにする
    paddingTop: 30,
    paddingHorizontal: 30, // 左端に余白をつける
    borderBottomLeftRadius: 10, // 左下の角を丸める
    borderBottomRightRadius: 10, // 右下の角を丸める
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black', // ヘッダーの文字色
    fontStyle: 'italic',

  },
});

export default Header;