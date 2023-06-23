import { Box, Flex, Input, Button, HStack } from '@chakra-ui/react';

const Banner = () => {
  return (
    <Flex
    bgImage="url('https://media.istockphoto.com/id/681265846/photo/woman-bodybuilder-lifting-dumbbell-isolated-over-black-background-black-and-white.jpg?s=612x612&w=0&k=20&c=y38lq6EF4I4O1-N5WznwW4uROrTf63O462qJc129DiY=')"
    bgSize="cover"
      bgPosition="center"
      height="100vh"
      width="100%"
    >
      <Box width="60%" p="5" textAlign="center">
      <HStack spacing='24px' >
  <Box as='i' color='white'>
  REVEALING
  </Box>
  <Box  as='i' color="white">
  EXCELLENCE.
  </Box>
  <Box  as='i' color='white'>
  HIGHLIGHTING
  </Box>
  </HStack>
  <Box  as='i' color="white">
  CHARACTER.
  </Box>
      </Box>

      <Box
        position="absolute"
        bottom="0"
        right="0"
        bg="#ec6d2f"
        p="4"
        width={['100%', '40%']}
      >
        <Flex direction={['column', 'row']} justifyContent="flex-end">
          <Input placeholder="First Name" mb={[4, 0]} mr={[0, 2]} />
          <Input placeholder="Last Name" mb={[4, 0]} mr={[0, 2]} />
        </Flex>
        <Input placeholder="Email" mt="4" />
        <Button mt="4">Subscribe</Button>
      </Box>
    </Flex>
  );
};

export default Banner;
