import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import { Card, Title, AreaChart, BarChar, LineChart, Subtitle } from "@tremor/react";

const chartdata = [
  {
    date: "2022-10-01",
    "new cases": 29,
  },
  {
    date: "2022-10-02",
    "new cases": 26,
  },
  {
    date: "2022-10-03",
    "new cases": 19,
  },
  {
    date: "2022-10-04",
    "new cases": 35,
  },
  {
    date: "2022-10-05",
    "new cases": 25,
  },
  {
    date: "2022-10-06",
    "new cases": 32,
  },
  {
    date: "2022-10-07",
    "new cases": 26,
  },
  {
    date: "2022-10-08",
    "new cases": 33,
  },
  {
    date: "2022-10-09",
    "new cases": 16,
  },
  {
    date: "2022-10-10",
    "new cases": 21,
  },
  {
    date: "2022-10-11",
    "new cases": 18,
  },
  {
    date: "2022-10-12",
    "new cases": 35,
  },
  {
    date: "2022-10-13",
    "new cases": 40,
  },
  {
    date: "2022-10-14",
    "new cases": 39,
  },
  {
    date: "2022-10-15",
    "new cases": 50,
  },
  {
    date: "2022-10-16",
    "new cases": 23,
  },
  {
    date: "2022-10-17",
    "new cases": 17,
  },
  {
    date: "2022-10-18",
    "new cases": 29,
  },
  {
    date: "2022-10-19",
    "new cases": 42,
  },
  {
    date: "2022-10-20",
    "new cases": 48,
  },
  {
    date: "2022-10-21",
    "new cases": 46,
  },
  {
    date: "2022-10-22",
    "new cases": 38,
  },
  {
    date: "2022-10-23",
    "new cases": 30,
  },
  {
    date: "2022-10-24",
    "new cases": 27,
  },
  {
    date: "2022-10-25",
    "new cases": 18,
  },
  {
    date: "2022-10-26",
    "new cases": 42,
  },
  {
    date: "2022-10-27",
    "new cases": 68,
  },
  {
    date: "2022-10-28",
    "new cases": 68,
  },
  {
    date: "2022-10-29",
    "new cases": 51,
  },
  {
    date: "2022-10-30",
    "new cases": 44,
  },
  {
    date: "2022-10-31",
    "new cases": 43,
  },
  {
    date: "2022-11-01",
    "new cases": 69,
  },
  {
    date: "2022-11-02",
    "new cases": 79,
  },
  {
    date: "2022-11-03",
    "new cases": 79,
  }
];

export default function Home() {
  return (
    <Card>
      <Title>New COVID-19 Cases in Pahang (Oct - Nov)</Title>
      <Subtitle>
        Data based on Malaysia Ministry of Health (MMOH)
      </Subtitle>
      <LineChart
        data={chartdata}
        dataKey="date"
        categories={["new cases"]}
        colors={["blue"]}
        valueFormatter={undefined}
        marginTop="mt-6"
        yAxisWidth="w-10"
      />
    </Card>
  )
}