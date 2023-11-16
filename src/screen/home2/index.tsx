import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Header from "../../components/header2";
import { styles } from "./styles";
import Footer from "../../components/footer2";

const ImageOlho = require("../../assets/image/Olho.png");
const ImageSetinhaDeLado = require("../../assets/image/SetinhaDeLado.png");
const ImageCarrinho = require("../../assets/image/Carrinho.png");
const ImagePixLaranja = require("../../assets/image/PixLaranja.png");
const ImageCodigoDeBarras = require("../../assets/image/CodigoDeBarras.png");
const ImageTransferencias = require("../../assets/image/Transferencias.png");
const ImagePersonalizarAtalhos = require("../../assets/image/PersonalizarAtalhos.png");
const ImageExpandirPreto = require("../../assets/image/ExpandirPreto.png");
const ImageExpandirLaranja = require("../../assets/image/ExpandirLaranja.png");
const Home = () => {
  return (
    <View>
      <Header />
      <View>
        <View style={styles.View1}>
          <View style={styles.containerView1}>
            <View>
              <TouchableOpacity style={styles.caixaContainerView1}>
                <Image source={ImageOlho} style={styles.imageOlho} />
                <Text style={styles.textBranco1}>saldo em conta</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.textBranco2}>R$ • • • •</Text>
            </View>
            <View>
              <Text style={styles.textBranco3}>
                _____________________________________________
              </Text>
            </View>
            <View style={styles.caixaContainerView1}>
              <Text style={styles.textBranco1}>
                limite da conta disponível R$ • • • •
              </Text>
              <TouchableOpacity>
                <Image
                  source={ImageSetinhaDeLado}
                  style={styles.ImageSetinhaDeLado}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.View2}>
          <View>
            <TouchableOpacity style={styles.itensView2}>
              <Image source={ImageCarrinho} style={styles.imagesView2} />
              <Text>Itaú Shop</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.itensView2}>
              <Image source={ImagePixLaranja} style={styles.imagesView2} />
              <Text>Pix</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.itensView2}>
              <Image source={ImageCodigoDeBarras} style={styles.imagesView2} />
              <Text>pagar conta</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.itensView2}>
              <Image source={ImageTransferencias} style={styles.imagesView2} />
              <Text>fazer</Text>
              <Text>transf.</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.itensView2}>
              <Image
                source={ImagePersonalizarAtalhos}
                style={styles.imagesView2}
              />
              <Text>personalizar</Text>
              <Text>atalhos</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.View3}>
          <View style={styles.containerView3}>
            <View style={styles.caixaContainerView3}>
              <View>
                <Text style={styles.TextscontainerView3}>organize</Text>
                <Text style={styles.TextscontainerView3}>suas finanças</Text>
              </View>
              <View>
                <TouchableOpacity style={styles.expandirESetinha}>
                  <Text style={styles.text1Expandir}>expandir</Text>
                  <Image
                    source={ImageExpandirPreto}
                    style={styles.imageExpandir}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.TextsCinza}>
                _____________________________________________
              </Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.TextsAzul}>ver contratos</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container2View3}>
            <View style={styles.caixaContainerView3}>
              <View>
                <Text style={styles.TextscontainerView3}>crédito</Text>
              </View>
              <View>
                <TouchableOpacity style={styles.expandirESetinha}>
                  <Text style={styles.text2Expandir}>expandir</Text>
                  <Image
                    source={ImageExpandirLaranja}
                    style={styles.imageExpandir}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.TextsCinza}>
                _____________________________________________
              </Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.TextsAzul}>ver mais</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Footer />
    </View>
  );
};
export default Home;
