import { Card, Title, BarChart, Subtitle } from "@tremor/react";

const Age = () => {

    const chartdata = [
        {
            "date": "2022-10-01",
            "state": "Pahang",
            "cases_child": 1,
            "cases_adolescent": 0,
            "cases_adult": 18,
            "cases_elderly": 10
        },
        {
            "date": "2022-10-02",
            "state": "Pahang",
            "cases_child": 1,
            "cases_adolescent": 3,
            "cases_adult": 17,
            "cases_elderly": 5
        },
        {
            "date": "2022-10-03",
            "state": "Pahang",
            "cases_child": 2,
            "cases_adolescent": 0,
            "cases_adult": 13,
            "cases_elderly": 4
        },
        {
            "date": "2022-10-04",
            "state": "Pahang",
            "cases_child": 2,
            "cases_adolescent": 2,
            "cases_adult": 22,
            "cases_elderly": 9
        },
        {
            "date": "2022-10-05",
            "state": "Pahang",
            "cases_child": 5,
            "cases_adolescent": 3,
            "cases_adult": 16,
            "cases_elderly": 1
        },
        {
            "date": "2022-10-06",
            "state": "Pahang",
            "cases_child": 3,
            "cases_adolescent": 0,
            "cases_adult": 22,
            "cases_elderly": 7
        },
        {
            "date": "2022-10-07",
            "state": "Pahang",
            "cases_child": 3,
            "cases_adolescent": 2,
            "cases_adult": 17,
            "cases_elderly": 4
        },
        {
            "date": "2022-10-08",
            "state": "Pahang",
            "cases_child": 4,
            "cases_adolescent": 2,
            "cases_adult": 25,
            "cases_elderly": 2
        },
        {
            "date": "2022-10-09",
            "state": "Pahang",
            "cases_child": 1,
            "cases_adolescent": 1,
            "cases_adult": 12,
            "cases_elderly": 2
        },
        {
            "date": "2022-10-10",
            "state": "Pahang",
            "cases_child": 0,
            "cases_adolescent": 1,
            "cases_adult": 16,
            "cases_elderly": 4
        },
        {
            "date": "2022-10-11",
            "state": "Pahang",
            "cases_child": 1,
            "cases_adolescent": 1,
            "cases_adult": 13,
            "cases_elderly": 3
        },
        {
            "date": "2022-10-12",
            "state": "Pahang",
            "cases_child": 5,
            "cases_adolescent": 4,
            "cases_adult": 19,
            "cases_elderly": 7
        },
        {
            "date": "2022-10-13",
            "state": "Pahang",
            "cases_child": 7,
            "cases_adolescent": 2,
            "cases_adult": 21,
            "cases_elderly": 10
        },
        {
            "date": "2022-10-14",
            "state": "Pahang",
            "cases_child": 5,
            "cases_adolescent": 2,
            "cases_adult": 28,
            "cases_elderly": 4
        },
        {
            "date": "2022-10-15",
            "state": "Pahang",
            "cases_child": 5,
            "cases_adolescent": 2,
            "cases_adult": 33,
            "cases_elderly": 10
        },
        {
            "date": "2022-10-16",
            "state": "Pahang",
            "cases_child": 3,
            "cases_adolescent": 1,
            "cases_adult": 13,
            "cases_elderly": 6
        },
        {
            "date": "2022-10-17",
            "state": "Pahang",
            "cases_child": 1,
            "cases_adolescent": 0,
            "cases_adult": 14,
            "cases_elderly": 2
        },
        {
            "date": "2022-10-18",
            "state": "Pahang",
            "cases_child": 3,
            "cases_adolescent": 1,
            "cases_adult": 20,
            "cases_elderly": 5
        },
        {
            "date": "2022-10-19",
            "state": "Pahang",
            "cases_child": 1,
            "cases_adolescent": 1,
            "cases_adult": 32,
            "cases_elderly": 8
        },
        {
            "date": "2022-10-20",
            "state": "Pahang",
            "cases_child": 2,
            "cases_adolescent": 0,
            "cases_adult": 36,
            "cases_elderly": 10
        },
        {
            "date": "2022-10-21",
            "state": "Pahang",
            "cases_child": 2,
            "cases_adolescent": 4,
            "cases_adult": 32,
            "cases_elderly": 8
        },
        {
            "date": "2022-10-22",
            "state": "Pahang",
            "cases_child": 3,
            "cases_adolescent": 1,
            "cases_adult": 28,
            "cases_elderly": 6
        },
        {
            "date": "2022-10-23",
            "state": "Pahang",
            "cases_child": 1,
            "cases_adolescent": 0,
            "cases_adult": 24,
            "cases_elderly": 5
        },
        {
            "date": "2022-10-24",
            "state": "Pahang",
            "cases_child": 3,
            "cases_adolescent": 0,
            "cases_adult": 19,
            "cases_elderly": 5
        },
        {
            "date": "2022-10-25",
            "state": "Pahang",
            "cases_child": 1,
            "cases_adolescent": 0,
            "cases_adult": 14,
            "cases_elderly": 3
        },
        {
            "date": "2022-10-26",
            "state": "Pahang",
            "cases_child": 6,
            "cases_adolescent": 1,
            "cases_adult": 27,
            "cases_elderly": 8
        },
        {
            "date": "2022-10-27",
            "state": "Pahang",
            "cases_child": 3,
            "cases_adolescent": 0,
            "cases_adult": 52,
            "cases_elderly": 13
        },
        {
            "date": "2022-10-28",
            "state": "Pahang",
            "cases_child": 5,
            "cases_adolescent": 3,
            "cases_adult": 47,
            "cases_elderly": 13
        },
        {
            "date": "2022-10-29",
            "state": "Pahang",
            "cases_child": 5,
            "cases_adolescent": 3,
            "cases_adult": 36,
            "cases_elderly": 7
        },
        {
            "date": "2022-10-30",
            "state": "Pahang",
            "cases_child": 3,
            "cases_adolescent": 0,
            "cases_adult": 33,
            "cases_elderly": 8
        },
        {
            "date": "2022-10-31",
            "state": "Pahang",
            "cases_child": 3,
            "cases_adolescent": 1,
            "cases_adult": 34,
            "cases_elderly": 5
        },
        {
            "date": "2022-11-01",
            "state": "Pahang",
            "cases_child": 5,
            "cases_adolescent": 4,
            "cases_adult": 55,
            "cases_elderly": 5
        },
        {
            "date": "2022-11-02",
            "state": "Pahang",
            "cases_child": 3,
            "cases_adolescent": 2,
            "cases_adult": 63,
            "cases_elderly": 11
        },
        {
            "date": "2022-11-03",
            "state": "Pahang",
            "cases_child": 2,
            "cases_adolescent": 5,
            "cases_adult": 64,
            "cases_elderly": 8
        }
    ];

    return (
        <div>
            <Card maxWidth="max-w-lg max-w-md max-w-sm" decoration="top" decorationColor="indigo" marginTop="mt-10">
                <Title>COVID-19 Cases based on age in Pahang (Oct - Nov)</Title>
                <Subtitle>
                    Data based on Ministry of Health Malaysia
                </Subtitle>
                <BarChart
                    data={chartdata}
                    dataKey="date"
                    categories={[
                        "cases_child",
                        "cases_adolescent",
                        "cases_adult",
                        "cases_elderly",
                    ]}
                    colors={["blue", "teal", "amber", "rose"]}
                    valueFormatter={undefined}
                    yAxisWidth="w-5"
                />
            </Card>
        </div>
    )
}

export default Age;