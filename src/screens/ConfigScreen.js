import React from "react";
import { Checkbox, Stack, Icon, Box, Center } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";  // Ya estaba incluido

const ConfigScreen = () => {
  return (
    <Center flex={1} px="3">
      <Box alignItems="center">
        <Stack
          direction={{
            base: "column",
            md: "row"
          }}
          space={3}
          alignItems="flex-start"
        >
          <Checkbox
            value="orange"
            colorScheme="orange"
            size="md"
            icon={<Icon as={<MaterialCommunityIcons name="bacteria" />} />}
            defaultIsChecked
          >
            Darts
          </Checkbox>
          <Checkbox
            value="dark"
            colorScheme="dark"
            size="md"
            icon={<Icon as={<MaterialCommunityIcons name="bat" />} />}
            defaultIsChecked
          >
            Movie
          </Checkbox>
          <Checkbox
            colorScheme="red"
            value="red"
            size="md"
            icon={<Icon as={<MaterialCommunityIcons name="campfire" />} />}
            defaultIsChecked
          >
            Camping
          </Checkbox>
          <Checkbox
            value="blue"
            colorScheme="blue"
            size="md"
            icon={<Icon as={<MaterialCommunityIcons name="chess-knight" />} />}
            defaultIsChecked
          >
            Chess
          </Checkbox>
          <Checkbox
            value="health"
            colorScheme="pink"
            size="md"
            icon={<Icon as={<FontAwesome6 name="heart-pulse" />} />}
            defaultIsChecked
          >
            Health
          </Checkbox>
          <Checkbox
            value="science"
            colorScheme="cyan"
            size="md"
            icon={<Icon as={<MaterialCommunityIcons name="atom" />} />}
            defaultIsChecked
          >
            Science
          </Checkbox>
        </Stack>
      </Box>
    </Center>
  );
};

export default ConfigScreen;
