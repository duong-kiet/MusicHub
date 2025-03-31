import React, { useState } from 'react';
import {Box, Button, Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ProgressBar from '../../../components/ui/ProgressBar';
import SelectGender from '../../../components/ui/SelectGender';
import { Link } from "react-router"; 
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useLocation, useNavigate } from "react-router-dom";

const validateName = (name) => {
  return name != ""
};

const validateDate = (date) => {
  return date != ""
};

export default function SignUp_Step2() {
  const navigate = useNavigate()
  const location = useLocation();
  const { email, password } = location.state || {};

  const [name, setName] = useState("")
  const [isValidName, setIsValidName] = useState(true)

  const [date, setDate] = useState("")
  const [isValidDate, setIsValidDate] = useState(true)

  const [gender, setGender] = useState("male")

  const handleSubmitComplete = (name, date, gender) => {
    if(!validateName(name) || name == "") {
      setIsValidName(false)
    } 
    if(!validateDate(date) || date == "") {
      setIsValidDate(false)
    }
    if(validateName(name)) {  
      setIsValidName(true)
    }
    if(validateDate(date)) {
      setIsValidDate(true)
    }
    if(isValidName && isValidDate && validateName(name) && validateDate(date)) {
      let registerData = {name: name, birthday: date, gender: gender, email: email, password: password }

      fetch("http://localhost:5000/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData)
      })
      .then(res => res.json())
      .then(data => {
        if(data.message == "User sign up successfully") {
          navigate("/dashboard");
        }
      })
    }
  }

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  }

  return (
    <Box 
      sx={{ 
        bgcolor: '#051425',
        display: 'flex', 
        pb: '60px',
        justifyContent: 'center'
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
          pb: '10px'
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

          <ProgressBar value={100}/>

          <Stack direction={'row'} sx={{marginLeft: '110px', marginTop: '20px', marginBottom: '40px', color: 'white'}}>
            <Box 
              sx={{marginRight: '20px', display: 'flex', alignItems: 'center', color: 'white'}}
              component={Link}
              to="/user/signup/step=1"
            >
              <ArrowBackIosNewIcon sx={{ fontSize: '28px' }}/>
            </Box>

            <Box sx={{}}>
              <Typography sx={{color: "#708b9e"}}>
                Bước 2 trên 2
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
            <Box mb={3}>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: '#3ee6ef',
                  mb: '6px'
                }}
              > 
                Họ và tên
              </Typography>

              <TextField 
                {...(isValidName ? {} : { error: "true", helperText: "Invalid Name. Check again" })}
                color="primary"
                focused
                sx={{ 
                  input: { color: "white"},
                  width: '100%'
                }} 
                placeholder="Nhập tên của bạn"
                type="text" 
                name="name"
                onChange={() => handleChangeName(event)}
              />
            </Box>


            <Box mb={3}>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: '#3ee6ef',
                  mb: '6px'
                }}
              > 
                Ngày tháng năm sinh 
              </Typography>

              <TextField 
                {...(isValidDate ? {} : { error: "true", helperText: "Invalid Date. Check again" })}
                color="primary"
                focused
                sx={{ 
                  input: { color: "white"},
                  width: '100%'
                }} 
                placeholder="Nhập mật khẩu của bạn"
                type="date" 
                name="datebirth"
                onChange={() => handleChangeDate(event)}
              />
            </Box>

            <Box mb={4}>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: '#3ee6ef',
                  mb: '6px'
                }}
              > 
                Giới tính
              </Typography>

              <SelectGender defaultGender={gender} setGender={setGender} />
            </Box>

            <Button 
              onClick={() => handleSubmitComplete(name, date, gender)}
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
              Hoàn tất 
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}