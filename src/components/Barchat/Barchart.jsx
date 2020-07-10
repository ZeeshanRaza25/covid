// import React, { useEffect, useState } from 'react';
// import { Bar, Line } from 'react-chartjs-2';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';

// // const data = {
// //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// //   datasets: [
// //     {
// //       label: 'Covid-19 dataset',
// //       backgroundColor: 'rgba(255,99,132,0.2)',
// //       borderColor: 'rgba(255,99,132,1)',
// //       borderWidth: 1,
// //       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
// //       hoverBorderColor: 'rgba(255,99,132,1)',
// //       data: [65, 59, 80, 81, 56, 55, 40]
// //     }
// //   ]
// // };
// // const data = {
// //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// //   datasets: [
// //     {
// //       label: 'My First dataset',
// //       fill: false,
// //       lineTension: 0.1,
// //       backgroundColor: 'rgba(75,192,192,0.4)',
// //       borderColor: 'rgba(75,192,192,1)',
// //       borderCapStyle: 'butt',
// //       borderDash: [],
// //       borderDashOffset: 0.0,
// //       borderJoinStyle: 'miter',
// //       pointBorderColor: 'rgba(75,192,192,1)',
// //       pointBackgroundColor: '#fff',
// //       pointBorderWidth: 1,
// //       pointHoverRadius: 5,
// //       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
// //       pointHoverBorderColor: 'rgba(220,220,220,1)',
// //       pointHoverBorderWidth: 2,
// //       pointRadius: 1,
// //       pointHitRadius: 10,
// //       data: [65, 59, 80, 81, 56, 55, 40]
// //     }
// //   ]
// // };
// const Barchart = () => {
//   let [daily, setdaily] = useState([])
//   const [result, setResult] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [isData, setData] = useState(false);
//   const [isFetching, setFetching] = useState(false);
//   let [death, setdeath] = useState(0);
//   let [recovered, setrecovered] = useState(0);
//   let [total, settotal] = useState(0);
//   let [tested, settested] = useState(0);
//   let [source, setsource] = useState("");
//   let [activecases, setactive] = useState(0);

//   useEffect(() => {

//     async function fetchData() {
//       setFetching(true);
//       try {
//         setFetching(true);
//         const response = await fetch(
//           `https://api.apify.com/v2/datasets/9eUGCilmJ8HDf60mL/items?format=json&clean=1`
//         );
//         const json = await response.json();
//         console.log("barchart =>", json);
//         setResult(json);
//         setFetching(false);
//       } catch (error) {
//         setLoading("null");
//       }
//     }
//     fetchData();
//   }, [isData]);

//   const linedata = {
//     labels: daily.map(({ lastUpdatedAtSource }) => lastUpdatedAtSource),
//     datasets: [
//       {
//         label: 'Death',
//         fill: false,
//         lineTension: 0.1,
//         backgroundColor: '#b83032',
//         borderColor: '#b83032',
//         data: daily.map(({ deceased }) => deceased)
//       },
//       {
//         label: 'Recovered',
//         fill: false,
//         lineTension: 0.1,
//         backgroundColor: '#2d8a34',
//         borderColor: '#2d8a34',
//         data: daily.map(({ recovered }) => recovered)
//       },
//       {
//         label: 'Infected',
//         fill: false,
//         lineTension: 0.1,
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//         data: daily.map(({ infected }) => infected)
//       }
//     ]
//   };
//   return (
//     <Grid container alignItems="center" alignContent="center" justify="center">
//       <Grid item xs={12} sm={9}>
//         <Typography variant="h4" component="h3" align="center">
//           Line chart
//         </Typography>
//         <Line data={linedata} />
//         {/* <Bar
//           data={data}
//           options={{
//             maintainAspectRatio: true
//           }}
//         /> */}
//       </Grid>
//     </Grid>
//   );
// };
// export default Barchart;
import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";
// import styles from "./Chart.module.css";

// async componentDidMount() {
//   const fetchedData = await fetchData();
//   this.setState({ data: fetchedData });
// }
// handleCountryChange = async (country) => {
//   const fetchedData = await fetchData(country);
//   this.setState({ data: fetchedData, country: country });
// };
// { data: { confirmed, recovered, deaths }, country }

const LinChart = () => {
  const [dailyData, setDailyData] = useState([]);
  const [confirmed, setConfirmed] = useState([]);
  const [data, setData] = useState([]);
  const [deaths, setDeaths] = useState([]);


  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetch('https://covid19.mathdro.id/api/daily'));
      const response = await fetch(`https://covid19.mathdro.id/api/daily`);
      const data = await response.json();
      setData(data);
      data.map((dailyData) => setConfirmed(dailyData.confirmed.total));
      // data.map((dailyData) => console.log(dailyData.recovered.total));
      data.map((dailyData) => console.log(dailyData.deaths.total));
      data.map((dailyData) => console.log(dailyData.reportDate))
    };
    fetchAPI();
  }, []);
  return (
    <div>
      <Line
        data={{
          labels: data.map(({ lastUpdatedAtSource }) => lastUpdatedAtSource),
          datasets: [
            {
              data: confirmed,
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: deaths,
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            },
          ],
        }}
      />
    </div>
  );
};

export default LinChart;