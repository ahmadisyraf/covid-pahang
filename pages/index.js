import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import State from '../components/State';
import Vax from '../components/Vax';
import Age from '../components/Age';
import { Grid, Box } from "@mui/material";
import { Title, Subtitle } from '@tremor/react';

function MetaHeader() {
  return (
    <Head>
      <title>Covid Pahang</title>
      <meta name="description" content="Data from Ministry of Health Malaysia" />
      <meta itemprop="name" content="COVID-19 cases in Pahang" />
      <meta itemprop="description" content="Data from Ministry of Health Malaysia" />
      <meta itemprop="image" content="https://images.unsplash.com/photo-1581267852726-c0bcbadc1aac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="COVID-19 cases in Pahang" />
      <meta name="twitter:description" content="Data from Ministry of Health Malaysia" />
      <meta name="twitter:image" content="https://images.unsplash.com/photo-1581267852726-c0bcbadc1aac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" />

    </Head>

  );
}

export default function Home() {
  return (
    <div>
      <MetaHeader />
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
    </div>
  )
}