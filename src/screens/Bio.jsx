import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export const Bio = () => (
  <ScrollView>
    <View>
        <Text style={styles.titulo}>Aqui é a Biografia: Imagine Dragons, uma banda de indie rock/alternative rock fundada em Utah, e que atualmente residem em Las Vegas. A banda entrou em um estúdio pela primeira vez em 2009. Logo no ano seguinte lançaram dois EPs: Imagine Dragons e Hell and Silence.
       Membros atuaisDan Reynolds - vocal, guitarra, baixo, bateria (2008–presente)Ben McKee - baixo, backing vocal, teclado (2009–presente)Wayne Sermon - guitarra, cello, backing vocal (2009–presente)Dan Platzman - bateria, viola, backing vocal (2011–presente)
        </Text>
        <Text style={styles.titulo}>Membros atuaisDan Reynolds - vocal, guitarra, baixo, bateria (2008–presente)Ben McKee - baixo, backing vocal, teclado (2009–presente)Wayne Sermon - guitarra, cello, backing vocal (2009–presente)Dan Platzman - bateria, viola, backing vocal (2011–presente)
        </Text>
        <Image
        source={{
          uri: "https://tracklist.com.br/wp-content/uploads/2021/03/imagine-dragons-e1615583453439.jpg",
        }}
        style={styles.imagem}
      />
    </View>
  </ScrollView>
)
const styles = StyleSheet.create({
    titulo: {
      textAlign: "center",
      margin: 24,
      fontSize: "20px",
    },
    imagem: {
        width: 500,
        height: 300,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
      },
  });