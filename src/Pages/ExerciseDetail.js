import React, { useEffect, useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Details from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { fetchData, youtubeSearchOptions } from "../utils/fetchData";
import { useLocation } from "react-router-dom";

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const [exerciseVideos, setexerciseVideos] = useState([]);
  const [similarExercises, setSimilarExercises] = useState([]);

  useEffect(() => {
    location.state.exercise && setExerciseDetail(location.state.exercise);
    location.state.searchedExercises &&
      setSimilarExercises(location.state.searchedExercises);
  }, [id]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      if (exerciseDetail.name) {
        const exerciseVideosData = await fetchData(
          `${youtubeSearchUrl}/search?query=${exerciseDetail?.name}?exercise`,
          youtubeSearchOptions
        );
        setexerciseVideos(exerciseVideosData.contents);
      }
    };
    fetchExerciseData();
  }, [exerciseDetail.name, id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />

      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        similarExercises={similarExercises}
        targetMuscle={exerciseDetail.target}
        equipment={exerciseDetail.equipment}
      />
    </Box>
  );
}

export default ExerciseDetail;
