import { React } from 'react';
import { Text, View } from 'react-native';

const View = () => {
  return (
    <View style={{
      flexDirection: "row",
      height: 100,
      padding: 20
    }}>
      <View style={{ backgroundColor: "blue", flex: 0.3 }}/>
      <View style={{ backgroundColor: "red", flex: 0.5 }}/>
      <Text>Momo en la Shell</Text>
      <Image source={require('@React-NAtive-DAI/assets/momo.jpg')}></Image>
    </View>
  );
}

export default View;