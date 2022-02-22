import React from 'react';
import { Container, Grid } from '@mui/material';
import chair from '../../../images/chair.png';
import Calendar from '../../Shared/Calendar/Calendar';


const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 300
}

const AppointmentHeader = ({ date, setDate }) => {

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '400px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;