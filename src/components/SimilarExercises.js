import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalSrollbar from "./HorizontalSrollbar";
const SimilarExercises = ({ similarExercises, equipment, targetMuscle }) => {
  const [SEFSTM, setSEFSTM] = useState([]);
  const [SEUSE, setSEUSE] = useState([]);
  useEffect(() => {
    let SEFSTM =
      (targetMuscle &&
        similarExercises.filter((e) => e.target === targetMuscle)) ||
      [];
    let SEUSE =
      (targetMuscle &&
        similarExercises.filter(
          (e) => e.equipment === equipment && e.target === targetMuscle
        )) ||
      [];
    setSEFSTM(SEFSTM);
    setSEUSE(SEUSE);
  }, [equipment, targetMuscle]);
  return (
    <Box
      id="exercises"
      sx={{ mt: { md: "80px", xs: "20px" }, position: "relative" }}
    >
      <Typography variant="h4" p="15px">
        Exercises that target the{" "}
        <Typography color="red" component="span" fontSize="inherit">
          same muscle group
        </Typography>
      </Typography>
      <div style={{ position: "relative", marginBottom: "50px" }}>
        <Stack
          direction="row"
          sx={{ p: "5", position: "relative", mt: "50px" }}
        ></Stack>
        {SEFSTM && <HorizontalSrollbar data={SEFSTM} />}
      </div>
      <div style={{ position: "relative", marginBottom: "50px" }}>
        <Typography variant="h4" p="15px">
          Exercises that uses the{" "}
          <Typography color="red" component="span" fontSize="inherit">
            same equipment
          </Typography>
        </Typography>
        <Stack
          direction="row"
          sx={{ p: "5", position: "relative", mt: "50px" }}
        ></Stack>
        {SEUSE && <HorizontalSrollbar data={SEUSE} />}
      </div>
    </Box>
  );
};

export default SimilarExercises;
