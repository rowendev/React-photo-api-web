import React, { useState } from "react";
// mui
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import PictureCard from "../components/PictureCard";

const Exercise = () => {
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem",
        border: "1px solid black",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid rgba(79, 79, 79, 0.8)",
          padding: "1.5rem",
          justifyContent: "space-around",
        }}
      >
        {!isLoading && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              variant="filled"
              label="Email"
              type="email"
              placeholder="example@example.com"
            />
            <TextField
              variant="filled"
              label="Username"
              type="text"
              placeholder="Rowen"
            />
            <Button variant="contained" type="submit" onClick={formHandler}>
              submit
            </Button>
          </div>
        )}
        <Box sx={{ display: "flex" }}>{isLoading && <CircularProgress />}</Box>
      </form>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
              setIsLoading(checked === true ? false : true);
            }}
            size="small"
          />
        }
        label="is loading"
      />
      <ButtonGroup variant="contained">
        <Button startIcon={<SaveIcon />} size="small">
          save
        </Button>
        <Button startIcon={<DeleteIcon />} color="error" size="small">
          discard
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Exercise;
