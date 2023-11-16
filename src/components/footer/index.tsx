import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const ImagemPix = require("../../assets/image/Pix.png");
const ImagemItoken = require("../../assets/image/iToken.png");
const ImagemAjuda = require("../../assets/image/Ajuda.png");

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View>
        <TouchableOpacity>
          <Image source={ImagemPix} style={styles.imagePix} />
        </TouchableOpacity>
        <Text style={styles.text1Footer}>Pix</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={ImagemItoken} style={styles.imageItoken} />
        </TouchableOpacity>
        <Text style={styles.text2Footer}>iToken</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={ImagemAjuda} style={styles.imageAjuda} />
        </TouchableOpacity>
        <Text style={styles.text3Footer}>Ajuda</Text>
      </View>
    </View>
  );
};

export default Footer;
