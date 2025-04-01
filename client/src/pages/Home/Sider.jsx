import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import { Link } from "react-router";

export default function Sider() {
  const [show, setShow] = useState(false)

  const handleClickShow = () => {
    setShow(true)
  }

  const handleClickHide = () => {
    setShow(false)
  }

  return (
    <Box marginTop={4} sx={{ marginLeft: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Stack direction={'row'} gap={1} sx={{ color: '#3ee6ef' }}>
          <LibraryBooksIcon sx={{ fontSize: '28px' }} />
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '20px'
            }}
          >
            Thư viện
          </Typography>
        </Stack>

        <AddIcon sx={{ fontSize: '30px', color: '#3ee6ef' }} onClick={() => handleClickShow()}/>
      </Box>

      <Box mt={4} p={2} bgcolor="#111827" sx={{ borderRadius: '10px', position: 'relative' }}>
        <Typography
          sx={{
            fontWeight: 700,
            color: 'lightblue',
            marginBottom: '18px'
          }}
        >
          Tạo danh sách phát của bạn
        </Typography>

        <Button
          onClick={() => handleClickShow()}
          sx={{
            padding: '6px 10px',
            backgroundColor: '#1976D2',
            color: 'white',
            fontSize: '12px',
            fontWeight: '600',
            borderRadius: '24px'
          }}
        >
          Tạo danh sách phát
        </Button>

        <Box p={2}
          sx={{
            borderRadius: '10px',
            position: 'absolute', 
            right: '-260px', 
            top: '2px', 
            bgcolor: '#69bfff', 
            color: "#111827",
            display: show ? 'block' : 'none'
          }}>
          <Typography
            sx={{
              fontWeight: 700,
              marginBottom: '18px'
            }}
          >
            Đăng nhập để tạo playlist
          </Typography>

          <Stack direction="row-reverse" gap={1}>
            <Button
              component={Link}
              to="/user/signin"
              sx={{
                padding: '6px 10px',
                backgroundColor: 'white',
                fontSize: '12px',
                fontWeight: '600',
                borderRadius: '24px',
                color: "#111827"
              }}
            >
              Đăng nhập
            </Button>

            <Button
              onClick={() => handleClickHide()}
              sx={{
                padding: '6px 10px',
                fontSize: '12px',
                fontWeight: '600',
                borderRadius: '24px',
                color: "#111827"
              }}
            >
              Để sau
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}