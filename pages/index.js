import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import State from '../components/State';
import Vax from '../components/Vax';
import Age from '../components/Age';
import { Grid, Box } from "@mui/material";
import { Title, Subtitle } from '@tremor/react';


export default function Home() {
  return (
    <Box sx={{ mx: 2, mt: 10 }}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <State />
        </Grid>
        <Grid item md={6} xs={12}>
          <Vax />
        </Grid>
      </Grid>
      <Age />
    </Box>
  )
}