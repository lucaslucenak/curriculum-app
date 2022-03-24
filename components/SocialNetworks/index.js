import * as React from 'react';
import { View, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

const SocialNetworks = () => {
  const handleSocialNetwork = network => {
    switch (network) {
      case 'linkedin':
         Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/lucas-lucena-6588271a3/')
         break
      case 'github':
         Alert.alert('Meu Github', 'https://github.com/lucaslucenak')
         break
      case 'instagran':
         Alert.alert('Meu Instagram', 'https://www.instagram.com/lucaslucenak/')
         break
    }
  }
  
  return (
    <View style={styles.networks}>
      <TouchableOpacity onPress={() => handleSocialNetwork('github')} style={styles.icons}>
        <Icon name="github" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSocialNetwork('instagram')} style={styles.icons}>
        <Icon name="instagram" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSocialNetwork('linkedin')}>
        <Icon name="linkedin" size={30} />
      </TouchableOpacity>
    </View>
  )
}

export default SocialNetworks;