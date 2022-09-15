/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

import { createContext, useState } from "react";

export const ExercisesContext = createContext(null);
export const bodyPartContext = createContext("all");
export const searchExercisesContext = createContext([]);
export const isLoadingSearchExercises = createContext(true);

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <ExercisesContext.Provider value={useState([])}>
        <bodyPartContext.Provider value={useState("all")}>
          <searchExercisesContext.Provider value={useState([])}>
            <isLoadingSearchExercises.Provider value={useState(true)}>
              {/*  */}
              <SearchExercises />
              <Exercises />
              {/*  */}
            </isLoadingSearchExercises.Provider>
          </searchExercisesContext.Provider>
        </bodyPartContext.Provider>
      </ExercisesContext.Provider>
    </Box>
  );
};

export default Home;
