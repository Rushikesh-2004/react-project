
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

export default function PCard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        const data = await response.json();
        const userData = data.results[0];
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Card sx={{ display: 'flex', maxWidth: 800, margin: 'auto', marginTop: 4, borderRadius: 2, boxShadow: 3 }}>
      <Box sx={{ width: 150, height: 150, margin: 2 }}>
        <CardMedia
          component="img"
          sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 1 }}
          image={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
      </Box>
      <CardContent sx={{ flex: 1, backgroundColor: '#f0f0f0', borderRadius: 1 }}>
        <Typography variant="h5" component="div" align="center" sx={{ color: '#3f51b5' }}>
          {user.name.first} {user.name.last}
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ marginTop: 1 }}>
          Gender: {user.gender}
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ marginTop: 1 }}>
          Phone Number: {user.phone}
        </Typography>
      </CardContent>
    </Card>
  );
}





