import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/system';

const ProfileCardWrapper = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: 'auto',
  marginTop: theme.spacing(5),
}));

interface ProfileProps {
  name: string;
  photoURL: string;
}

export default function Profile({ name, photoURL }: ProfileProps) {
  return (
    <ProfileCardWrapper>
      <CardMedia
        component="img"
        height="140"
        image={photoURL}
        alt={`${name} profile`}
      />
      <CardContent>
        <Avatar
          alt={name}
          src={photoURL}
          sx={{ width: 56, height: 56, marginBottom: 2 }}
        />
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </ProfileCardWrapper>
  );
}
