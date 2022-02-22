import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from './../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        id: 1,
        img: fluoride,
        name: "Get ready for online class",
        description: "Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        img: cavity,
        name: "Get ready for online class",
        description: "Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        img: whitening,
        name: "Get ready for online class",
        description: "Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ color: 'text.disabled', m: 2 }} gutterBottom variant="h6" color="text.secondary" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 'bold', m: 2 }} gutterBottom variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service key={service.name} service={service}></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;