import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {Box, Button, Stack} from '@mui/material';

export default function SelectGender({defaultGender, setGender}) {
  const handleChangeGender = (event) => {
    setGender(event.target.value)
  }

  return (
    <FormControl>
      <RadioGroup
        value={defaultGender}
        name="gender"
        onChange={() => handleChangeGender(event)} 
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