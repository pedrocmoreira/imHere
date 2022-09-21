import { Text, TextInput, View, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { Participant } from '../../components/Participant';

import {
  styles
} from './styles';

export function Home() {

  const participants = [ 'Pedro', 'Teste1', 'Teste2', 'Teste3', 'Teste5', 'Teste6', 'Teste7', 'Teste8', 'Teste9', 'Teste10'];

  function handleAddParticipant() {
    if(participants.includes('Pedro')){
      return Alert.alert("Participante existe", "Já existe um participante com esse nome na lista")
    }
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado', 'O participante foi removido')
      },
      { 
        text: 'Não',
        style: 'cancel'
      }
    ]);

    console.log(`Você clicou em remover o participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor={'#6B6B6B'}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={ ({item}) => (
          <Participant
          key={item}
          name={item}
          onRemove={() => handleRemoveParticipant(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
}