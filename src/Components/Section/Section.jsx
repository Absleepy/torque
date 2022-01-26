import React from 'react'
import styled from '@emotion/styled';
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { ThemeProvider } from "@mui/material";
import img from '../../assets/images/detailImg.png';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.columnsStyle
}));
const StartBtn = styled(Button)(({ theme }) => ({
    ...theme.buttons.startBtn,
}));
const Section = ({ theme, flexDirection }) => {
    return (
        <Container sx={{ py: 1, display: "flex", flexDirection: { md: flexDirection, xs: "column" } }}>
            <ThemeProvider theme={theme}><Grid xs={12} md={6}>
                <Item>
                    <Typography variant="h3"
                        component="div"
                        align='left'
                        sx={{ fontWeight: '700', fontSize: { md: '2.83rem', xs: "1.7rem" } }}
                    >Superfast Payment Processing</Typography>
                    <Typography variant="h7"
                        component="div"
                        align='left'
                        color="#616B9C"
                        sx={{ fontWeight: '700', my: 5, }}
                    >An all-in-one solution to help you run your truck repair shop better. From creating appointments to getting paid, Torque has you covered.</Typography>
                    <div style={{ textAlign: 'left' }}><StartBtn >Start Free Trail</StartBtn></div>
                </Item>
            </Grid>
            </ThemeProvider>
            <ThemeProvider theme={theme}>

                <Grid xs={12} md={6}> <Item>
                    <img src={img} width="100%" alt="Car" />
                </Item></Grid>
            </ThemeProvider>
        </Container >
    )
}

export default Section
