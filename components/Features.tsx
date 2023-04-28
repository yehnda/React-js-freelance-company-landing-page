import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
  import {
    FcAbout,
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
  } from 'react-icons/fc';
  
  interface CardProps {
    heading: string;
    description: string;
    icon: ReactElement;
    href: string;
  }
  
  const Card = ({ heading, description, icon, href }: CardProps) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default function Features() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            Our values
          </Heading>
          <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            We aim at providing the best customer experience across the globe
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={'Customer support'}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={
                'We have a dedicated team around the clock ready to talk to you.'
              }
              href={'#'}
            />
            <Card
              heading={'Community'}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                'Get connected to like mided individauls and share ideas.'
              }
              href={'#'}
            />
            <Card
              heading={'Affordable'}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                'Get an azming website developed without breaking the bank.'
              }
              href={'#'}
            />
            <Card
              heading={'Professional Team'}
              icon={<Icon as={FcManager} w={10} h={10} />}
              description={
                'Our team of developers are prfoessionals and experienced in their craft.'
              }
              href={'#'}
            />
            <Card
              heading={'Discover'}
              icon={<Icon as={FcAbout} w={10} h={10} />}
              description={
                'Discover new opportunities ahead of your competitors.'
              }
              href={'#'}
            />
          </Flex>
        </Container>
      </Box>
    );
  }