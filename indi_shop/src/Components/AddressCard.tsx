import React from "react";
import { Flex, Box, Text, Button, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// @ts-ignore
export const AddressCard = ({ name, line1, line2, pincode, id }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Flex w="100%" mt="15px" borderRadius="8px" background={"#fdeced"}>
        <Box key={id} w={{ base: "58%", sm: "57%", md: "56%", lg: "64%" }}>
          <Text
            textAlign="left"
            fontWeight="semibold"
            pl="10px"
            fontSize={{ base: "12", sm: "15", md: "18", lg: "20" }}
          >
            {name}
          </Text>
          <Text
            textAlign="left"
            fontWeight="semibold"
            pl="10px"
            fontSize={{ base: "8", sm: "10", md: "15", lg: "18" }}
          >
            {line1}
          </Text>
          <Text
            textAlign="left"
            fontWeight="semibold"
            pl="10px"
            fontSize={{ base: "8", sm: "10", md: "15", lg: "18" }}
          >
            {line2}
          </Text>
          <Text
            textAlign="left"
            fontWeight="semibold"
            pl="10px"
            fontSize={{ base: "8", sm: "10", md: "15", lg: "18" }}
          >
            {pincode}
          </Text>
          <SimpleGrid w="100%" minChildWidth="30px" gap="2">
            <Button
              w="100%"
              mt="2"
              mb="2"
              ml="15px"
              bgColor="#f43397"
              color="white"
              fontWeight="normal"
              fontSize={{ base: "8", sm: "10", md: "13", lg: "15" }}
              onClick={() => navigate("/payment")}
            >
              Deliver to this Address
            </Button>
            <Button
              w="100%"
              mt="2"
              mb="2"
              ml="130px"
              bgColor="green"
              color="white"
              fontWeight="normal"
              fontSize={{ base: "5", sm: "8", md: "10", lg: "12" }}
            >
              Delete this Address
            </Button>
          </SimpleGrid>
        </Box>
      </Flex>
    </div>
  );
};
