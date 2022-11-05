import { Card, Title, AreaChart, BarChar, LineChart, Subtitle } from "@tremor/react";
import { Paper, Box } from "@mui/material";

const chartdata = [
    {
        date: "2022-10-01",
        "cases_new": 29,
    },
    {
        date: "2022-10-02",
        "cases_new": 26,
    },
    {
        date: "2022-10-03",
        "cases_new": 19,
    },
    {
        date: "2022-10-04",
        "cases_new": 35,
    },
    {
        date: "2022-10-05",
        "cases_new": 25,
    },
    {
        date: "2022-10-06",
        "cases_new": 32,
    },
    {
        date: "2022-10-07",
        "cases_new": 26,
    },
    {
        date: "2022-10-08",
        "cases_new": 33,
    },
    {
        date: "2022-10-09",
        "cases_new": 16,
    },
    {
        date: "2022-10-10",
        "cases_new": 21,
    },
    {
        date: "2022-10-11",
        "cases_new": 18,
    },
    {
        date: "2022-10-12",
        "cases_new": 35,
    },
    {
        date: "2022-10-13",
        "cases_new": 40,
    },
    {
        date: "2022-10-14",
        "cases_new": 39,
    },
    {
        date: "2022-10-15",
        "cases_new": 50,
    },
    {
        date: "2022-10-16",
        "cases_new": 23,
    },
    {
        date: "2022-10-17",
        "cases_new": 17,
    },
    {
        date: "2022-10-18",
        "cases_new": 29,
    },
    {
        date: "2022-10-19",
        "cases_new": 42,
    },
    {
        date: "2022-10-20",
        "cases_new": 48,
    },
    {
        date: "2022-10-21",
        "cases_new": 46,
    },
    {
        date: "2022-10-22",
        "cases_new": 38,
    },
    {
        date: "2022-10-23",
        "cases_new": 30,
    },
    {
        date: "2022-10-24",
        "cases_new": 27,
    },
    {
        date: "2022-10-25",
        "cases_new": 18,
    },
    {
        date: "2022-10-26",
        "cases_new": 42,
    },
    {
        date: "2022-10-27",
        "cases_new": 68,
    },
    {
        date: "2022-10-28",
        "cases_new": 68,
    },
    {
        date: "2022-10-29",
        "cases_new": 51,
    },
    {
        date: "2022-10-30",
        "cases_new": 44,
    },
    {
        date: "2022-10-31",
        "cases_new": 43,
    },
    {
        date: "2022-11-01",
        "cases_new": 69,
    },
    {
        date: "2022-11-02",
        "cases_new": 79,
    },
    {
        date: "2022-11-03",
        "cases_new": 79,
    }
];

const State = () => {
    return (
        <div>
            <Card maxWidth="max-w-lg max-w-md max-w-sm" decoration="top" decorationColor="indigo">
                <Title>New COVID-19 Cases in Pahang (Oct - Nov)</Title>
                <Subtitle>
                    Data based on Ministry of Health Malaysia
                </Subtitle>
                <LineChart
                    data={chartdata}
                    dataKey="date"
                    categories={["cases_new"]}
                    colors={["blue"]}
                    valueFormatter={undefined}
                    // marginTop="mt-6"
                    yAxisWidth="w-5"
                />
            </Card>
        </div>
    )
}

export default State;