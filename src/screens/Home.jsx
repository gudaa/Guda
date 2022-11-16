import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
export const Home = () => (
  <ScrollView>
    <View>
      <Text style={styles.titulo}>🔥Seja Bem vindo meu Chegado 🔥</Text>
      <Text style={styles.description}>
        <h3>🐉Imagine Dragons🐉</h3>
      </Text>
      <View style={styles.top}>
        <Image
          source={{
            uri: "https://i.scdn.co/image/ab6761610000e5eb920dc1f617550de8388f368e",
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
  description: {
    textAlign: "center",
    margin: 16,
    fontSize: 18,
  },
  imagem: {
    width: 705,
    height: 559,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
