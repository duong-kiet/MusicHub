import React, { useState } from 'react';
import {Box, Button, Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ProgressBar from '../../../components/ui/ProgressBar';
import SelectGender from '../../../components/ui/SelectGender';
import { Link } from "react-router"; 
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function SignUp_Step2() {
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
                color="primary"
                focused
                sx={{ 
                  input: { color: "white"},
                  width: '100%'
                }} 
                placeholder="Nhập tên của bạn"
                type="text" 
                name="name"
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
                  color="primary"
                focused
                sx={{ 
                  input: { color: "white"},
                  width: '100%'
                }} 
                placeholder="Nhập mật khẩu của bạn"
                type="date" 
                name="datebirth"
                
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

              <SelectGender />
            </Box>

            <Button 
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