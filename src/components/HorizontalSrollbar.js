import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import ExerciseCard from "./ExerciseCard";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

function HorizontalSrollbar({ data, handleSearchByCatagories, isBodyPart }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map(function (e) {
        return (
          <Box
            key={e.id || e}
            itemID={e.id || e}
            title={e.id || e}
            m="0 20px"
            width={isBodyPart ? "160px" : "fit-content"}
            height={isBodyPart ? "115px" : "fit-content"}
          >
            {isBodyPart ? (
              <BodyPart
                item={e}
                handleSearchByCatagories={handleSearchByCatagories}
              />
            ) : (
              <ExerciseCard exercise={e} />
            )}
          </Box>
        );
      })}
    </ScrollMenu>
  );
}

export default HorizontalSrollbar;
