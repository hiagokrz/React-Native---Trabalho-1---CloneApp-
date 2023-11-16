import React from "react";
import { View, TextInput, Text, Image, TouchableOpacity } from "react-native";
import Header from "../../components/header";
import { styles } from "./styles";
import Footer from "../../components/footer";

const ImageCadeado = require("../../assets/image/Cadeado.png");
const ImageApagar = require("../../assets/image/Apagar.png");
const Home = () => {
  return (
    <View>
      <Header />
      <View style={styles.Container}>
        <View>
          <Text style={styles.text1}>senha de acesso</Text>
        </View>
        <View style={styles.divImgImpt}>
          <Image source={ImageCadeado} style={styles.imageCadeado} />
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.text2}>_________________________________</Text>
        </View>
        <View style={styles.divButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>0 ou 4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>1 ou 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>2 ou 6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>3 ou 8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>7 ou 9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={ImageApagar} style={styles.imageApagar} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonAcesso}>
            <Text style={styles.buttonTextAcesso}>acessar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.text1}>redefinir senha de acesso</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </View>
  );
};
export default Home;
