import React, { useState } from 'react';
import {Box, Button, Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ProgressBar from '../../../components/ui/ProgressBar';
import { Link } from "react-router"; 
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const validatePassword = (password) => {
  return password != ""
};

export default function SignUp_Step1() {
  const [password, setPassword] = useState("")
  const [isValidPassword, setIsValidPassword] = useState(true)

  const handleSubmitPassword = (password) => {
    if(!validatePassword(password) || password == "") {
      setIsValidPassword(false)
    } else {
      setIsValidPassword(true)
    }
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  return (
    <Box 
      sx={{ 
        bgcolor: '#051425',
        display: 'flex', 
        justifyContent: 'center',
        height: '630px'
      }}
    >
      <Stack
        sx={{
          width: 700,
          bgcolor: '#1f2937',
          boxShadow: 24,
          borderRadius: '16px',
          marginTop: '36px',
          textAlign: 'center',
          marginBottom: '120px'
        }}
      >
        <Stack
          sx={{
            marginTop: '30px'
          }}
        >
          <Box>
            <img 
              src="../../logo.png"
              style={{
                width: "60px",
                objectFit: "cover",
                marginBottom: "10px",
              }}
            />
          </Box>

          <ProgressBar value={50}/>

          <Stack direction={'row'} sx={{marginLeft: '110px', marginTop: '20px', marginBottom: '40px', color: 'white'}}>
            <Box 
              sx={{marginRight: '20px', display: 'flex', alignItems: 'center', color: 'white'}}
              component={Link}
              to="/user/signup"
            >
              <ArrowBackIosNewIcon sx={{ fontSize: '28px' }}/>
            </Box>

            <Box sx={{}}>
              <Typography sx={{color: "#708b9e"}}>
                Bước 1 trên 2
              </Typography>
              <Typography>
                Tạo mật khẩu 
              </Typography>
            </Box>
          </Stack>
          <Box
            component="form"
            sx={{textAlign: 'left', margin: '0 120px 40px'}}
          >
            <Box mb={5}>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: '#3ee6ef',
                  mb: '6px'
                }}
              > 
                Mật khẩu
              </Typography>

              <TextField
               {...(isValidPassword ? {} : { error: "true", helperText: "Invalid Password. Check again" })}  
                color="primary"
                focused
                sx={{ 
                  input: { color: "white"},
                  width: '100%'
                }} 
                placeholder="Nhập mật khẩu của bạn"
                type="password" 
                name="password"
                onChange={() => handleChangePassword(event)}
                required
              />
            </Box>

            <Button 
              {...(validatePassword(password) ? { component: Link, to: "/user/signup/step=2" } : {})}
              onClick={() => handleSubmitPassword(password)}
              variant="contained"
              sx={{
                padding: '12px',
                fontWeight: '600',
                width: '100%',
                background: '#3ee6ef',
                borderRadius: '24px',
                color: '#1f2937'
              }}
            >
              Tiếp theo 
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}