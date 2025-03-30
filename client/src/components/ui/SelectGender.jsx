import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {Box, Button, Stack} from '@mui/material';
import FormLabel from '@mui/material/FormLabel';

export default function SelectGender() {
  return (
    <FormControl>
      <RadioGroup
        defaultValue="male"
        name="radio-buttons-group"
        sx={{color: 'white'}}
      >
        <Stack direction="row">
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </Stack>
      </RadioGroup>
    </FormControl>
  );
}