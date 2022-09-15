import React, { useState, useEffect, useRef, useContext } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, options } from "../utils/fetchData";
import {
  ExercisesContext,
  searchExercisesContext,
  isLoadingSearchExercises,
} from "../Pages/Home";

import HorizontalSrollbar from "./HorizontalSrollbar";

const SearchExercises = () => {
  const [exercisesData, setExercisesData] = useContext(ExercisesContext);
  const [, setIsLoading] = useContext(isLoadingSearchExercises);
  const [, setExercises] = useContext(searchExercisesContext);

  const [search, setSearch] = useState("");
  const searchButton = useRef(null);

  // eslint-disable-next-line no-unused-vars
  const bodyParts = [
    "all",
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ];

  //

  const handleSearch = function () {
    searchButton.current.style.cssText = "pointer-events: none;";
    if (search) {
      const searchExercises = exercisesData.filter(function (exercise) {
        return (
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
        );
      });

      setExercises(searchExercises);
      console.log(searchExercises);
    }
    setSearch("");
    searchButton.current.style.cssText = "";
  };

  //

  const handleSearchByCatagories = function (cat) {
    if (cat !== "all") {
      const searchExercises = exercisesData.filter(function (exercise) {
        return exercise.bodyPart.toLowerCase().includes(cat);
      });
      setExercises(searchExercises);
    } else {
      setExercises(exercisesData);
    }
  };

  const handleChange = function (e) {
    setSearch(e.target.value.toLowerCase());
  };
  //
  useEffect(() => {
    let isCancelled = false;
    const fetchExercisesData = async () => {
      if (!isCancelled) {
        const exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          options
        );
        if (exercisesData) {
          setExercisesData(exercisesData);
          setExercises(exercisesData);
        }
        setIsLoading(false);
      }
    };
    fetchExercisesData();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          },
        }}
        mt="70px"
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises you <br /> Should Know
      </Typography>
      <Box
        position="relative"
        mb="72px"
        display="flex"
        alignItems="center"
        padding="10px"
      >
        <TextField
          sx={{
            input: {
              fontWeight: "400",
              border: "none",
              borderRadius: "4px",
              py: "10px",
              lineHeight: 1,
            },
            label: {
              top: "-5px",
            },
            width: {
              xs: "50vw",
              sm: "70vw",
              lg: "1000px",
            },
          }}
          value={search}
          onChange={handleChange}
          type="text"
          label="Search Exercises"
          color="error"
        />
        <Button
          ref={searchButton}
          onClick={handleSearch}
          disableElevation
          variant="contained"
          aria-label="search button"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            px: {
              xs: "20px",
              sm: "30px",
            },
            alignSelf: "stretch",
          }}
          color="error"
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalSrollbar
          data={bodyParts}
          handleSearchByCatagories={handleSearchByCatagories}
          isBodyPart={true}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
