import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type MuiSelectProps = {
  platform: string[];
  onChange: (selectedPlatform: string) => void; // Add onChange callback
};

export default function SelectLabels({ platform, onChange }: MuiSelectProps) {
  const [selectedPlatform, setSelectedPlatform] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;
    setSelectedPlatform(selectedValue);
    onChange(selectedValue); // Invoke the onChange callback with the selected value
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          value={selectedPlatform}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {platform.map((e, index) => {
            return (
              <MenuItem value={e} key={index}>
                {e}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
