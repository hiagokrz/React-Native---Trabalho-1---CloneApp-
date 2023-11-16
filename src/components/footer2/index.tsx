import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const ImageHomeLaranja = require("../../assets/image/HomeLaranja.png");
const ImageExtrato = require("../../assets/image/Extrato.png");
const ImageTransferenciasPreto = require("../../assets/image/TransferenciasPreto.png");
const ImageProdutos = require("../../assets/image/Produtos.png");
const ImageAjudaPreto = require("../../assets/image/AjudaPreto.png");

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View>
        <TouchableOpacity>
          <Image source={ImageHomeLaranja} style={styles.imageHomeLaranja} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.viewFooter}>
          <Image source={ImageExtrato} style={styles.imageExtratoFooter} />
          <Text>extrato</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.viewFooter}>
          <Image
            source={ImageTransferenciasPreto}
            style={styles.imagesFooter}
          />
          <Text>transações</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.viewFooter}>
          <Image source={ImageProdutos} style={styles.imagesFooter} />
          <Text>produtos</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.viewFooter}>
          <Image source={ImageAjudaPreto} style={styles.imagesFooter} />
          <Text>ajuda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
