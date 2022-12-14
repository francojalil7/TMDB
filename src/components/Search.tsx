import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Movie } from "../interfaces/movie.interface";
import "../App.css";
import { SearchIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
interface Props {
  movies: Movie[];
}
const Search = ({ movies }: Props) => {
  const [index, setIndex] = useState(0);
  const [valueSearch, setValueSearch] = useState("");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {  },
  } = useForm();

  useEffect(() => {
    function getRandomInt(max: number) {
      return Math.floor(Math.random() * max);
    }
    setIndex(getRandomInt(20));
  }, []);

  const search = handleSubmit((data) => {
    navigate(`/result/${data.search}`);
  });

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      navigate(`/result/${valueSearch}`);
    }
  };
  return (
    <Stack
      h={{ base: "51vh", md: "33vh", lg: "35vh" }}
      maxWidth={"1100px"}
      backgroundImage={`https://image.tmdb.org/t/p/original${movies[index]?.backdrop_path}`}
      backgroundRepeat="no-repeat"
      backgroundSize={"auto"}
      backgroundPosition="center"
      p="1rem"
      justifyContent={"center"}
    >
      <Heading color="white">Bienvenidos</Heading>
      <Text fontSize={"2rem"} color="white">
        Millones de películas, programas de televisión y personas por descubrir.
        Explora ahora.
      </Text>
      <InputGroup
        size="md"
        maxWidth={"700px"}
        bgColor="white"
        color={"white"}
        borderRadius="50px"
      >
        <Input
          pr="4.5rem"
          placeholder="Search..."
          {...register("search")}
          color="black"
          borderRadius="50px"
          _placeholder={{ color: "black" }}
          onKeyDown={onKeyDown}
          onChange={(e) => {
            setValueSearch(e.currentTarget.value);
          }}
          value={valueSearch}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={search}>
            <SearchIcon color={"black"} />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
};
export default Search;
