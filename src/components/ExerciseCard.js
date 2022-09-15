import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

import { searchExercisesContext } from "../Pages/Home";

const ExerciseCard = ({ exercise }) => {
  const [searchedExercises] = useContext(searchExercisesContext);
  return (
    <Link
      onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
      to={`/exercise/${exercise.id}`}
      state={{ exercise, searchedExercises }}
      className="exercise-card"
    >
      <img src={exercise.gifUrl} alt={`${exercise.name}`} loading="lazy" />
      <Stack direction="row">
        <Button
          variant="contained"
          color="error"
          sx={{
            ml: "20px",
            color: "#fff",
            background: "#444444",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{
            ml: "20px",
            color: "#fff",
            background: "#a90202",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        sx={{
          ml: "20px",
          color: "#000",
          fontWeight: "bold",
          textTransform: "capitalize",
          fontSize: "20px",
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
