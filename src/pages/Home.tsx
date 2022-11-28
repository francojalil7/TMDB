import { Box, Heading } from "@chakra-ui/react";
import Search from "../components/Search";
import Slider from "../components/Slider";
import useMovies from "../hooks/useMovies";

const Home = () => {
  const { movies } = useMovies();
  console.log("ENV", process.env.REACT_APP_API_KEY)
  return (
    <Box maxWidth={"1050px"} m="0 auto">
      <Search movies={movies}/>
      <Heading marginTop={"1rem"}>Lo más popular</Heading>
      <Slider movies={movies} />
    </Box>
  );
};

export default Home;