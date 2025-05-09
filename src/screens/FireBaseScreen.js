import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Input, 
  FormControl, 
  Text, 
  Heading, 
  VStack, 
  useToast,
  Spinner
} from 'native-base';
import { ref, update } from 'firebase/database';
import { db } from '../firebaseConfig';

const FireBaseScreen = () => {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleUpdate = async () => {
    if (!userId.trim()) {
      showToast('El ID de usuario es requerido', 'warning');
      return;
    }

    if (!name.trim() || !email.trim()) {
      showToast('Nombre y email son obligatorios', 'warning');
      return;
    }

    setIsLoading(true);
    
    try {
      await update(ref(db, `users/${userId}`), {
        name: name.trim(),
        email: email.trim(),
        lastUpdated: new Date().toISOString()
      });
      
      showToast('Datos actualizados correctamente', 'success');
      setName('');
      setEmail('');
    } catch (error) {
      showToast('Error al actualizar los datos', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const showToast = (message, status) => {
    toast.show({
      description: message,
      status: status,
      duration: 3000,
      placement: 'top'
    });
  };

  return (
    <Box flex={1} p={4} bg="gray.50">
      <Heading size="xl" mb={6} textAlign="center">
        Actualizar Datos
      </Heading>
      
      <VStack space={4}>
        <FormControl isRequired>
          <FormControl.Label>ID de Usuario</FormControl.Label>
          <Input
            value={userId}
            onChangeText={setUserId}
            placeholder="Ej: usuario123"
            bg="white"
          />
        </FormControl>

        <FormControl isRequired>
          <FormControl.Label>Nombre</FormControl.Label>
          <Input
            value={name}
            onChangeText={setName}
            placeholder="Ej: Juan Pérez"
            bg="white"
          />
        </FormControl>

        <FormControl isRequired>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="Ej: juan@example.com"
            keyboardType="email-address"
            bg="white"
          />
        </FormControl>

        <Button
          onPress={handleUpdate}
          mt={4}
          colorScheme="blue"
          isLoading={isLoading}
          isLoadingText="Actualizando..."
        >
          Guardar Datos
        </Button>
      </VStack>
    </Box>
  );
};

export default FireBaseScreen;