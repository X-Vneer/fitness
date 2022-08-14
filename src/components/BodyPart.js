import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import { bodyPartContext } from "../Pages/Home";
import { useContext } from "react";

const BodyBar = ({ item, handleSearchByCatagories }) => {
  const [bodyPart, setBodyPart] = useContext(bodyPartContext);

  return (
    <Stack
      onClick={() => {
        setBodyPart(item);
        handleSearchByCatagories(item);
      }}
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card "
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        cursor: "pointer",
        gap: "20px",
        padding: " 10px",
        m: "10px",
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="20px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyBar;
