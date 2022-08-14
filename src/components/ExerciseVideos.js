import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box
      sx={{
        marginTop: { lg: "200px", xs: "50px" },
        p: "20px",
      }}
    >
      <Typography variant="h4" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{
          flexDirection: { sm: "row" },
          gap: { lg: "100px", md: "60px", xs: "20px" },
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {exerciseVideos?.slice(0, 5)?.map((item, index) => {
          if (item.video) {
            return (
              <a
                key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  style={{ borderTopLeftRadius: "20px" }}
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />
                <Box>
                  <Typography
                    sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                    fontWeight={600}
                    color="#000"
                  >
                    {item.video.title}
                  </Typography>
                  <Typography fontSize="14px" color="#000">
                    {item.video.channelName}
                  </Typography>
                </Box>
              </a>
            );
          }
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
