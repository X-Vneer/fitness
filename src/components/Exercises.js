import React, { useContext, useState } from "react";
import { Pagination, Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import {
  searchExercisesContext,
  isLoadingSearchExercises,
} from "../Pages/Home";
import Loader from "./Loader";

const Exercises = () => {
  const [exercises] = useContext(searchExercisesContext);
  const [isLoading] = useContext(isLoadingSearchExercises);

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  // i will slice a number of exercises for each paginate page
  const lastExer = currentPage * exercisesPerPage;
  const firstExer = lastExer - exercisesPerPage;
  const currentExer = exercises.slice(firstExer, lastExer);
  const paginate = (e, value) => {
    setCurrentPage(value);
  };
  return (
    <Box id="exercises">
      <Typography
        variant="h4"
        color="#FF2625"
        marginBottom="60px"
        marginLeft={2}
      >
        Showing Results
      </Typography>
      {isLoading && <Loader />}
      {!isLoading && !exercises.length && (
        <Typography marginBottom="60px" maxWidth="540px" marginX="auto">
          <Typography variant="h4" color="#FF2625">
            No Results!
          </Typography>
          sorry but we can not seem to have any results for this search.
        </Typography>
      )}
      <Stack
        direction="row"
        gap={{ lg: "110px", xs: "50px" }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExer.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
