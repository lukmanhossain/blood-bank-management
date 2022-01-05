import React from 'react';
import Service from '../Service/Service';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const services = [




    {
        name: 'Organize Donors',
        description: 'This website is a platform for blood seekers & donars, where one can easily choose their desired blood groups from nearby locations.',
        img: "https://i.ibb.co/mG9R9dS/service1.png",
    },
    {
        name: 'Raise Awareness',
        description: 'This website is a platform for blood seekers & donars, where one can easily choose their desired blood groups from nearby locations.',
        img: 'https://i.ibb.co/fdTcxxw/service2.png',
    },
    {
        name: 'Collect Rare Blood',
        description: 'This website is a platform for blood seekers & donars, where one can easily choose their desired blood groups from nearby locations.',
        img: 'https://i.ibb.co/wSdfZbr/service3.png',
    },


]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Container >
                <Typography sx={{ fontweight: 700, my: 2, textAlign: 'center' }} className='text-title' variant="h4" component="div" >
                    Our Services
                </Typography>
                <Typography sx={{ fontweight: 600, mb: 4, textAlign: 'center' }} variant="h5" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={Service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box >
    );
};

export default Services;