import React, { useState } from 'react';
import {Box, Button, Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default function SignUp() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [message, setMessage] = useState('');
  
  const handleSubmitEmail = (email) => {
    if(!validateEmail(email) || email == "") {
      setIsValidEmail(false)
      setMessage("Invalid Email. Check again")
    } else {
      setIsValidEmail(true)
    }

    if(isValidEmail && validateEmail(email)) {
      fetch("http://localhost:5000/api/v1/user/validateGmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email})
      })
      .then(res => res.json())
      .then(data => {
        if(data.message == "User deleted") {
          setIsValidEmail(false)
          setMessage("Invalid Email. User deleted")
        } else if(data.message == "User existed") {
          setIsValidEmail(false)
          setMessage("Invalid Email. User existed")
        } else {
          navigate("/user/signup/step=1", { state: { email } });
        }
      })
    }
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
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
          marginBottom: '80px'
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

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#3ee6ef',
              textAlign: 'center',
              marginBottom: '70px'
            }}
          >
            Đăng ký MusicHub
          </Typography>

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
                Email 
              </Typography>

              <TextField 
                {...(isValidEmail ? {} : { error: "true", helperText: message })} 
                color="primary"
                focused
                sx={{ 
                  input: { color: "white"},
                  width: '100%'
                }} 
                placeholder="Nhập email của bạn"
                // value={email}
                type="email" 
                name="email"
                onChange={() => handleChangeEmail(event)}
              />
            </Box>

            <Button 
              onClick={() => handleSubmitEmail(email)}
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

          <Typography
            sx={{
              color: '#a2b3b1',
              textAlign: 'center',
              marginBottom: '70px',
              fontSize: '18px'
            }}
          >
            Đã có tài khoản 
            <Link 
              to="/user/signin"
              style={{
                color: 'white',
                fontSize: '18px',
                marginLeft: '10px'
              }}
            >
              Đăng nhập tại đây 
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}