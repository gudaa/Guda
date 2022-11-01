import { useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../lib/styles";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    return (
        <View style={styles.container}>
            <TextInput
                label="Email"
                mode="outlined"
                value={email}
                onChangeText={(emailDigitado) => setEmail(emailDigitado)}
            />
            <TextInput
                label="Senha"
                mode="outlined"
                value={password}
                onChangeText={(valor) => setPassword(valor)}
                secureTextEntry={true}
            />
            <Button>
    </Button>
        </View>
    );
};