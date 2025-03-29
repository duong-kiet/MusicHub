import React, { useEffect, useState } from 'react';
import {Box, Button, Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from "react-router";

export default function ForgotPassword() {
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
          marginBottom: '140px',
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
            Reset your password
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
                color="primary"
                focused
                sx={{ 
                  input: { color: "white"},
                  width: '100%'
                }} 
                placeholder="Nhập email của bạn"
                type="email" 
              />
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
              Gửi link
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}