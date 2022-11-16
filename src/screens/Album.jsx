import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export const Album = () => (
  <ScrollView>
    <View>
      <View>
        <Text style={styles.titulo}>Albuns:</Text>
      </View>
      <View style={styles.div}>
        <Image
          source={{
            uri: "https://m.media-amazon.com/images/I/61yp8mw1rDL._AC_SL1400_.jpg",
          }}
          style={styles.imagem}
        />
        <Image
          source={{
            uri: "https://m.media-amazon.com/images/I/718V6LNMT9L._AC_SX425_.jpg",
          }}
          style={styles.imagem}
        />
        <Image
          source={{
            uri: "https://m.media-amazon.com/images/I/916R9qiMCOL._AC_SL1500_.jpg",
          }}
          style={styles.imagem}
        />
        <Image
          source={{
            uri: "https://akamai.sscdn.co/tb/letras-blog/wp-content/uploads/2020/10/a4bbd5f-imagine-dragons-smoke-and-mirrors.jpg",
          }}
          style={styles.imagem}
        />
      </View>
    </View>
  </ScrollView>
);
const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    margin: 24,
    fontSize: "60px",
  },
  imagem: {
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  div: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
