import { Text, View } from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/font';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text style={{color: colors.primary, fontSize: font.size.xlg}}>Hello World</Text>
      <AntDesign name="stepforward" size={25}/>
    </View>
  );
}
  




export default App;
