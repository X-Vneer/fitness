/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

import { createContext, useState } from "react";

export const ExercisesContext = createContext(null);
export const bodyPartContext = createContext("all");
export const SearchExercisesContext = createContext([]);

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <ExercisesContext.Provider value={useState([])}>
        <bodyPartContext.Provider value={useState("all")}>
          <SearchExercisesContext.Provider value={useState([])}>
            {/*  */}
            <SearchExercises />
            <Exercises />
            {/*  */}
          </SearchExercisesContext.Provider>
        </bodyPartContext.Provider>
      </ExercisesContext.Provider>
    </Box>
  );
};

export default Home;
