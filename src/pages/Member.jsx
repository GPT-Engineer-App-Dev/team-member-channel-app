import { Box, Heading, Text } from "@chakra-ui/react";

const Member = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Member Management</Heading>
      <Text>Welcome to the Member page. Here you can add, remove, or update team members.</Text>
    </Box>
  );
};

export default Member;