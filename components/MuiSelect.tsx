import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectLabels() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={10}>Youtube</MenuItem>
          <MenuItem value={20}>LinkedIn</MenuItem>
          <MenuItem value={30}>GitHub</MenuItem>
          <MenuItem value={10}>Medium</MenuItem>
          <MenuItem value={20}>Website</MenuItem>
          <MenuItem value={30}>Twitter</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
