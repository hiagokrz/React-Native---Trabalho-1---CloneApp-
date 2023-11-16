import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const ImagemPerfil = require("../../assets/image/HM.png");
const ImagemSetinha = require("../../assets/image/Setinha.png");
const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Image source={ImagemPerfil} style={styles.imagePerfil} />
      </View>
      <View style={styles.viewHeader}>
        <Text style={styles.text1Header}>Olá, Hiago</Text>
        <Text style={styles.text2Header}>ag ••07 c/c •••97-6</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={ImagemSetinha} style={styles.imageSetinha} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
