import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <FontAwesome6 name="coins" style={styles.headerCoin} />
      <Text style={styles.headerScore}>20</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: 'blue', // ヘッダーの背景色
    justifyContent: 'center',
    alignItems: 'flex-start', // 左寄せにする
    flexDirection: 'row', // 横並びにする
    paddingTop: 30,
    paddingHorizontal: 30, // 左端に余白をつける
    borderBottomLeftRadius: 10, // 左下の角を丸める
    borderBottomRightRadius: 10, // 右下の角を丸める
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white', // ヘッダーの文字色
    fontStyle: 'italic',
    marginRight: 'auto',
    marginTop: 30,
  },
  headerCoin: {
    fontSize: 24,
    color: 'yellow',
    marginTop: 40,
    marginRight: 5,
  },
  headerScore: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 5,
  },
});

export default Header;