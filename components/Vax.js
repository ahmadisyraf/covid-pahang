import { Card, Title, Subtitle, AreaChart, Block } from "@tremor/react";
import { Paper, Box } from "@mui/material";

const chartdata = [
    {
        "date": "2022-10-01",
        "state": "Pahang",
        "cases_unvax": 5,
        "cases_pvax": 0,
        "cases_fvax": 6,
        "cases_boost": 18
    },
    {
        "date": "2022-10-02",
        "state": "Pahang",
        "cases_unvax": 5,
        "cases_pvax": 0,
        "cases_fvax": 6,
        "cases_boost": 15
    },
    {
        "date": "2022-10-03",
        "state": "Pahang",
        "cases_unvax": 3,
        "cases_pvax": 0,
        "cases_fvax": 4,
        "cases_boost": 12
    },
    {
        "date": "2022-10-04",
        "state": "Pahang",
        "cases_unvax": 4,
        "cases_pvax": 1,
        "cases_fvax": 10,
        "cases_boost": 20
    },
    {
        "date": "2022-10-05",
        "state": "Pahang",
        "cases_unvax": 7,
        "cases_pvax": 0,
        "cases_fvax": 4,
        "cases_boost": 14
    },
    {
        "date": "2022-10-06",
        "state": "Pahang",
        "cases_unvax": 7,
        "cases_pvax": 0,
        "cases_fvax": 12,
        "cases_boost": 13
    },
    {
        "date": "2022-10-07",
        "state": "Pahang",
        "cases_unvax": 5,
        "cases_pvax": 0,
        "cases_fvax": 7,
        "cases_boost": 14
    },
    {
        "date": "2022-10-08",
        "state": "Pahang",
        "cases_unvax": 7,
        "cases_pvax": 0,
        "cases_fvax": 8,
        "cases_boost": 18
    },
    {
        "date": "2022-10-09",
        "state": "Pahang",
        "cases_unvax": 1,
        "cases_pvax": 1,
        "cases_fvax": 7,
        "cases_boost": 7
    },
    {
        "date": "2022-10-10",
        "state": "Pahang",
        "cases_unvax": 0,
        "cases_pvax": 0,
        "cases_fvax": 7,
        "cases_boost": 14
    },
    {
        "date": "2022-10-11",
        "state": "Pahang",
        "cases_unvax": 1,
        "cases_pvax": 0,
        "cases_fvax": 3,
        "cases_boost": 14
    },
    {
        "date": "2022-10-12",
        "state": "Pahang",
        "cases_unvax": 6,
        "cases_pvax": 0,
        "cases_fvax": 12,
        "cases_boost": 17
    },
    {
        "date": "2022-10-13",
        "state": "Pahang",
        "cases_unvax": 8,
        "cases_pvax": 0,
        "cases_fvax": 9,
        "cases_boost": 23
    },
    {
        "date": "2022-10-14",
        "state": "Pahang",
        "cases_unvax": 7,
        "cases_pvax": 0,
        "cases_fvax": 15,
        "cases_boost": 17
    },
    {
        "date": "2022-10-15",
        "state": "Pahang",
        "cases_unvax": 6,
        "cases_pvax": 1,
        "cases_fvax": 15,
        "cases_boost": 28
    },
    {
        "date": "2022-10-16",
        "state": "Pahang",
        "cases_unvax": 7,
        "cases_pvax": 0,
        "cases_fvax": 6,
        "cases_boost": 10
    },
    {
        "date": "2022-10-17",
        "state": "Pahang",
        "cases_unvax": 2,
        "cases_pvax": 0,
        "cases_fvax": 10,
        "cases_boost": 5
    },
    {
        "date": "2022-10-18",
        "state": "Pahang",
        "cases_unvax": 8,
        "cases_pvax": 0,
        "cases_fvax": 11,
        "cases_boost": 10
    },
    {
        "date": "2022-10-19",
        "state": "Pahang",
        "cases_unvax": 1,
        "cases_pvax": 1,
        "cases_fvax": 9,
        "cases_boost": 31
    },
    {
        "date": "2022-10-20",
        "state": "Pahang",
        "cases_unvax": 9,
        "cases_pvax": 0,
        "cases_fvax": 6,
        "cases_boost": 33
    },
    {
        "date": "2022-10-21",
        "state": "Pahang",
        "cases_unvax": 8,
        "cases_pvax": 0,
        "cases_fvax": 14,
        "cases_boost": 24
    },
    {
        "date": "2022-10-22",
        "state": "Pahang",
        "cases_unvax": 4,
        "cases_pvax": 0,
        "cases_fvax": 11,
        "cases_boost": 23
    },
    {
        "date": "2022-10-23",
        "state": "Pahang",
        "cases_unvax": 4,
        "cases_pvax": 0,
        "cases_fvax": 7,
        "cases_boost": 19
    },
    {
        "date": "2022-10-24",
        "state": "Pahang",
        "cases_unvax": 5,
        "cases_pvax": 1,
        "cases_fvax": 6,
        "cases_boost": 15
    },
    {
        "date": "2022-10-25",
        "state": "Pahang",
        "cases_unvax": 3,
        "cases_pvax": 1,
        "cases_fvax": 9,
        "cases_boost": 5
    },
    {
        "date": "2022-10-26",
        "state": "Pahang",
        "cases_unvax": 4,
        "cases_pvax": 0,
        "cases_fvax": 12,
        "cases_boost": 26
    },
    {
        "date": "2022-10-27",
        "state": "Pahang",
        "cases_unvax": 5,
        "cases_pvax": 0,
        "cases_fvax": 22,
        "cases_boost": 41
    },
    {
        "date": "2022-10-28",
        "state": "Pahang",
        "cases_unvax": 9,
        "cases_pvax": 0,
        "cases_fvax": 13,
        "cases_boost": 46
    },
    {
        "date": "2022-10-29",
        "state": "Pahang",
        "cases_unvax": 7,
        "cases_pvax": 0,
        "cases_fvax": 12,
        "cases_boost": 32
    },
    {
        "date": "2022-10-30",
        "state": "Pahang",
        "cases_unvax": 5,
        "cases_pvax": 0,
        "cases_fvax": 13,
        "cases_boost": 26
    },
    {
        "date": "2022-10-31",
        "state": "Pahang",
        "cases_unvax": 6,
        "cases_pvax": 0,
        "cases_fvax": 7,
        "cases_boost": 30
    },
    {
        "date": "2022-11-01",
        "state": "Pahang",
        "cases_unvax": 9,
        "cases_pvax": 2,
        "cases_fvax": 19,
        "cases_boost": 39
    },
    {
        "date": "2022-11-02",
        "state": "Pahang",
        "cases_unvax": 4,
        "cases_pvax": 0,
        "cases_fvax": 24,
        "cases_boost": 51
    },
    {
        "date": "2022-11-03",
        "state": "Pahang",
        "cases_unvax": 3,
        "cases_pvax": 0,
        "cases_fvax": 26,
        "cases_boost": 50
    }
]

const Vax = () => {
    return (
        <div>
            <Card maxWidth="max-w-lg max-w-md max-w-sm" decoration="top" decorationColor="indigo">
                    <Title>New COVID-19 cases based on vaccination in Pahang (Oct - Nov)</Title>
                    <Subtitle>
                        Data based on Ministry of Health Malaysia
                    </Subtitle>
                <AreaChart
                    data={chartdata}
                    categories={["cases_unvax", "cases_pvax", "cases_fvax", "cases_boost"]}
                    dataKey="date"
                    // height="h-72"
                    colors={["red", "indigo", "cyan", "blue",]}
                    valueFormatter={undefined}
                    // marginTop="mt-4"
                    yAxisWidth={"w-5"}
                />
            </Card>
        </div>
    );
}

export default Vax;