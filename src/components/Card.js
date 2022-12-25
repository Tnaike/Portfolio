import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
      <div>
        <VStack>
          <Image src={imageSrc} alt="Project Image"></Image>
          <Heading as="h3">{title}</Heading>
          <Text noOfLines={2} fontSize='lg'>{description}</Text>
          <HStack>
            <Text fontSize='md'>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </VStack>
      </div>
  );
};

export default Card;
