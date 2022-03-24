import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-navigation';
import photo from './assets/icon.png';
import Avatar from './components/Avatar';
import SocialNetworks from './components/SocialNetworks';
import CardItem from './components/CardItem/index';

const App = () => {
  return (
    <SafeAreaView style={styles.page}>
        <Avatar photo={photo} name="Lucas Lucena" role="Backend Developer"/>
        <SocialNetworks />
      
      <CardItem title="Perfil Pessoal">
          <Text style={{color: '#939393'}}>- Extremamente paciente, comunicativo, atencioso e curioso. Objetivo contribuir com a
          empresa de forma a agregar como um integrante competente e disposto a aprender novas tecnologias e a resolver desafios novos.</Text>
      </CardItem>

      <CardItem title="Tecnologias">
          <Text style={{color: '#939393'}}>- Java, Python, JavaScript, C, MySQL</Text>
      </CardItem>

      <CardItem title="Experiência">
          <Text style={{color: '#395353'}}>TecLine, Assistente Técnico</Text>
          <Text style={{color: '#281d70'}}>MAR 2021 - ATUAL</Text>
          <Text style={{color: '#939393'}}>- Manutenção em computadores e notebooks</Text>
          <Text style={{color: '#395353'}}>Contágil Contabilidade, Dev</Text>
          <Text style={{color: '#281d70'}}>JAN 2022 - ATUAL</Text>
          <Text style={{color: '#939393'}}>- Automações com Python</Text>
          <Text style={{color: '#939393'}}>- Análise de dados (Pandas)</Text>
          <Text style={{color: '#395353'}}>UEPB, Monitor</Text>
          <Text style={{color: '#281d70'}}>DEZ 2021 - ABR 2022</Text>
          <Text style={{color: '#939393'}}>- Linguagem de Programação II (Java)</Text>
      </CardItem>

      <CardItem title="Formação">
          <Text style={{color: '#395353'}}>Universidade Estadual da Paraíba</Text>
          <Text style={{color: '#281d70'}}>JAN 2020 - DEZ 2024</Text>
          <Text style={{color: '#939393'}}>- Bacharelado em Ciência da Computação</Text>
          <Text style={{color: '#395353'}}>CEPED</Text>
          <Text style={{color: '#281d70'}}>2020 - 2020</Text>
          <Text style={{color: '#939393'}}>- Gastronomia (Técnico)</Text>
      </CardItem>     
    </SafeAreaView>
  );
}

export default App;