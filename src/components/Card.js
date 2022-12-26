import { Heading, HStack, Image, Text, VStack, Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  return (
    <div>
      <VStack bg='white' borderRadius='12'>
        <Image
          src={imageSrc}
          alt='Project Image'
          borderRadius='12'
          boxSize='100%'
        ></Image>
        <Box p={15} w='100%' color='black'>
          <Heading as='h3' size='md' mb={4}>
            {title}
          </Heading>
          <Text noOfLines={2} fontSize='md' mb={4} color='gray.500'>
            {description}
          </Text>
          <HStack>
            <Text fontSize='md' fontWeight='semibold'>
              See more
            </Text>
            <FontAwesomeIcon icon={faArrowRight} size='1x' />
          </HStack>
        </Box>
      </VStack>
    </div>
  );
};

export default Card;
