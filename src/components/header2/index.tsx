import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const ImagePerfilLogado = require("../../assets/image/PerfilLogado.png");
const ImageSetinhaLogado = require("../../assets/image/SetinhaLogado.png");
const ImageLupa = require("../../assets/image/Lupa.png");
const ImageSininho = require("../../assets/image/Sininho.png");
const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Image source={ImagePerfilLogado} style={styles.imagePerfilLogado} />
      </View>
      <View style={styles.viewHeader}>
        <Text style={styles.text1Header}>Hiago</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            source={ImageSetinhaLogado}
            style={styles.imageSetinhaLogado}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={ImageLupa} style={styles.imageLupa} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={ImageSininho} style={styles.imageSininho} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
