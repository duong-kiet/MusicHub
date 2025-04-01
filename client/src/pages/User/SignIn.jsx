import React, { useEffect, useState } from 'react';
import {Box, Button, Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router-dom";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePassword = (password) => {
  return password != ""
};

export default function SignIn() {
  const navigate = useNavigate()
  const [message, setMessage] = useState('');
  
  const [email, setEmail] = useState("")
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [password, setPassword] = useState("")
  const [isValidPassword, setIsValidPassword] = useState(true)

  const handleSubmit = (email, password) => {
    if(!validateEmail(email) || email == "") {
      setIsValidEmail(false)
      setMessage("Invalid Email. Check again")
    } 
    if(!validatePassword(password) || password == "") {
      setIsValidPassword(false)
      setMessage("Invalid Password. Try again")
    }
    if(validateEmail(email)) {  
      setIsValidEmail(true)
    }
    if(validatePassword(password)) {
      setIsValidPassword(true)
    }
    if(isValidEmail && isValidPassword && validateEmail(email) && validatePassword(password)) {
      let signinData = { email: email, password: password }

      fetch("http://localhost:5000/api/v1/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signinData)
      })
      .then(res => res.json())
      .then(data => {
        if(data.message == "User deleted") {
          setIsValidEmail(false)
          setMessage("Invalid Email. User deleted")
        } else if(data.message == "Wrong password") {
          setIsValidPassword(false)
          setMessage("Wrong Password. Try again")
        } else if(data.message == "User not found") {
          setIsValidEmail(false)
          setMessage("Invalid Email. User not found")
        } else if(data.message == "User sign in successfully") {
          navigate("/dashboard");
        }
      })
    }
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
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
      }}
    >
      <Stack
        sx={{
          width: 700,
          bgcolor: '#1f2937',
          boxShadow: 24,
          borderRadius: '16px',
          marginTop: '36px',
          marginBottom: '60px',
          textAlign: 'center',
        }}
      >
        <Stack
          sx={{
            marginTop: '30px'
          }}
        >
          <Box>
            <img 
              src="../logo.png"
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
            Đăng nhập MusicHub
          </Typography>

          <Box
            component="form"
            sx={{textAlign: 'left', margin: '0 120px 40px'}}
          >
            <Box mb={3}>
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
                type="email" 
                onChange={() => handleChangeEmail(event)}
              />
            </Box>
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
                {...(isValidPassword ? {} : { error: "true", helperText: message })} 
                color="primary"
                focused
                sx={{ 
                  input: { color: "white"},
                  width: '100%'
                }} 
                placeholder="Nhập mật khẩu của bạn"
                type="password" 
                onChange={() => handleChangePassword(event)}
              />
            </Box>

            <Button 
              onClick={() => handleSubmit(email, password)}
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
              Đăng nhập ngay 
            </Button>
          </Box>

          <Link 
            to="/user/forgot-password"
            style={{
              color: 'white',
              fontSize: '22px',
              marginBottom: '40px'
            }}
          >
              Quên mật khẩu 
          </Link>

          <Typography
            sx={{
              color: '#a2b3b1',
              textAlign: 'center',
              marginBottom: '70px',
              fontSize: '18px'
            }}
          >
            Chưa có tài khoản 
            <Link 
              to="/user/signup"
              style={{
                color: 'white',
                fontSize: '18px',
                marginLeft: '10px'
              }}
            >
                Đăng ký MusicHub ngay 
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}