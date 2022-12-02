import { Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Result } from "../interfaces/result.interface";
interface Props {
  result: Result;
}
const CardResult = ({ result }: Props) => {
  return (
    <Stack
      h="330px"
      m="1.5rem"
      flexDir={"row"}
      borderRadius={"15px"}
      boxShadow="2xl"
      justifyContent={"flex-start"}
      p={3}
    >
      <Image
        borderRadius={"10px"}
        src={
          result.poster_path
            ? `https://image.tmdb.org/t/p/original${result.poster_path}`
            : "https://www.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg"
        }
        maxHeight={"25vh"}
        my="auto"
        mx="1rem"
      />
      <Divider orientation="vertical" m="1rem" />
      <Stack m="1rem" p="1rem">
        <Text fontWeight={"bold"}>{result.title}</Text>
        <Text>{result.release_date?.substring(0, 4) || "Sin título"}</Text>
        <Text>{`${result.overview?.slice(0, 88)}...`}</Text>
      </Stack>
    </Stack>
  );
};

export default CardResult;
