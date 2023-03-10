
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, { flex: 1 }]}>

      <View style={[styles.container, styles.views, { flex: 1, backgroundColor: 'powderblue', }]}>
        <Banner name='calculator2'></Banner>
      </View>

      <View style={[styles.container, styles.views, { flex: 5, backgroundColor: 'yellowgreen', }]}>
        <Text>body</Text>
      </View>

      <View style={[styles.container, styles.views, { flex: 1, backgroundColor: 'gray', }]}>
        <Text>footer</Text>
      </View>

    </View>
  );
}
//crear componente para la imagen
function Banner(props) {
  return (
    <Image source={require(`./assets/images/${props.name}.png`)} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}>

    </Image>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  views: {
    width: '100%',
    height: '100%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5
  }
});
