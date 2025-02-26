import React from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function FormControlMessagePage({
  selectedSpeaker,
  handleSpeakerChange,
  speakers,
}: {
  selectedSpeaker: string;
  handleSpeakerChange: (event: SelectChangeEvent<string>) => void;
  speakers: string[];
}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mb: 2,
        }}
      >
        <FormControl sx={{ mb: 2 }}>
          <InputLabel id="speaker-select-label">Speaker</InputLabel>
          <Select
            labelId="speaker-select-label"
            id="speaker-select"
            value={selectedSpeaker}
            label="Speaker"
            onChange={handleSpeakerChange}
          >
            <MenuItem value="All">All Speakers</MenuItem>
            {speakers.map((speaker) => (
              <MenuItem key={speaker} value={speaker}>
                {speaker}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default FormControlMessagePage;
