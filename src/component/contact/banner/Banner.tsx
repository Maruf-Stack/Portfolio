'use client';
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import me from '../../../../assets/me.png';
import Typewriter from 'typewriter-effect';

const Banner = () => {
  const downloadLink =
    'https://drive.google.com/uc?export=download&id=13g31JYXVzrpbPqAL87Y1-tg9aqu8MGzF'; // Modified link to force download

  //typewrite

  return (
    <Box
      id="banner"
      sx={{
        // mt: { xs: 4, sm: 6, md: 10, lg: 12 },

        width: '100%',

        '@media(min-width:768px)': {
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
        },
        height: '91vh',
      }}
      className="animate__animated animate__fadeIn"
    >
      <Box
        sx={{
          '@media(min-width:767px)': {
            width: '50%',
          },
          width: '100%',
        }}
      >
        <Typography
          sx={{
            color: 'text.primary',
            fontSize: '25px',
            lineHeight: '40px',
            '@media(min-width:900px)': {
              fontSize: '30px',
              lineHeight: '45px',
            },
          }}
        >
          Hi, I&apos;m Maruf
        </Typography>
        <Typography
          sx={{
            color: 'text.primary',
            fontSize: '35px',
            lineHeight: '55px',
            '@media(min-width:900px)': {
              fontSize: '40px',
              lineHeight: '60px',
              mt: '5px',
            },
            fontWeight: '700',
          }}
          component="h5"
        >
          FULL STACK WEB<br></br>{' '}
          <Typography
            sx={{
              color: 'primary.main',
              fontSize: '35px',
              lineHeight: '55px',
              '@media(min-width:900px)': {
                fontSize: '40px',
                lineHeight: '60px',
              },
              fontWeight: '700',
            }}
            component="p"
          >
            <Typewriter
              options={{
                strings: ['Developer', 'Engineer'],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: '16px',
            color: 'text.secondary',
            mt: '10px',
          }}
        >
          Hi,this is Maruf.Im a full stack web developer.I can create
          application with fullstack technologies. I have a couple of years
          coding experience.Im a fully dedicated to my work.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            '@media(min-width:900px)': { mt: '30px', gap: '20px' },
            mt: '20px',
            gap: '10px',
          }}
        >
          <Button
            component="a"
            href="https://drive.google.com/file/d/13g31JYXVzrpbPqAL87Y1-tg9aqu8MGzF/view?usp=drive_link"
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security measure for opening new tabs
            sx={{
              backgroundColor: 'primary.main',
              color: 'text.primary',
              fontWeight: 600,
              px: '20px',
            }}
          >
            View Resume
          </Button>
          <Button
            component="a"
            href={downloadLink}
            download
            sx={{
              backgroundColor: 'primary.main',
              color: 'text.primary',
              fontWeight: 600,
              px: '20px',
            }}
          >
            Download Resume
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          '@media(min-width:767px)': {
            width: '50%',
          },
          width: '100%',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src={me}
          height={300}
          width={350}
          alt="me"
          style={{ borderRadius: '10px' }}
        ></Image>
      </Box>
    </Box>
  );
};

export default Banner;
