import React, { useState, useEffect } from "react";
import moment from 'moment';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import "cross-fetch/polyfill";
import { GlobalStyle } from "../layout/global-style";
import { ProjectsSectionContainer, Header, CardDiv } from "./index";
import { fleurimondColors } from "../../utils/theme";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




export default function ProjectsSection(props) {
  const baseUrl = "https://setfive-public.s3.amazonaws.com/api.json";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const [chartData, setChartData] = useState(null);

  console.log("730: ", chartData?.filter(x => x.name === 'Taven 730' && x.reportDate !== undefined).map(x => {
    const newDateArray = [x.reportDate]
    console.log("New array: ", newDateArray);
    const sortedArray = newDateArray.sort((a, b) => {
      var date1 = a[1] + '-' + a[0] + '-' + a[2];
      var date2 = b[1] + '-' + b[0] + '-' + b[2];
      if (Date.parse(date1) > Date.parse(date2)) {
        return 1;
      } else if (Date.parse(date1) < Date.parse(date2)) {
        return -1;
      } else {
        return 0;
      }
    }
    )
    return sortedArray;
  }))
  const data = {
    labels:  chartData?.filter(x => x.name === 'Taven 730' && x.reportDate !== undefined).map(x => {
      const newDateArray = [x.reportDate]
      const sortedArray = newDateArray.sort((a, b) => {
        var date1 = a[1] + '-' + a[0] + '-' + a[2];
        var date2 = b[1] + '-' + b[0] + '-' + b[2];
        if (Date.parse(date1) > Date.parse(date2)) {
          return 1;
        } else if (Date.parse(date1) < Date.parse(date2)) {
          return -1;
        } else {
          return 0;
        }
      })
      return sortedArray;
    }),
    datasets: [
      {
        label: 'Taven 730 Revenue',
        data: chartData?.filter(x => x.name === 'Taven 730' && x.reportDate !== undefined).map(x => {
          return x.revenue;
        }),
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1
      },
      {
        label: 'ABC Pizza Revenue',
        data: chartData?.filter(x => x.name === 'ABC Pizza' && x.reportDate !== undefined).map(x => {
          return x.revenue;
        }),
        backgroundColor: [
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
      },
      {
        label: 'Taven 730 Average Tables Served',
        data: chartData?.filter(x => x.name === 'Taven 730' && x.reportDate !== undefined).map(x => {
          return x.totalTables / 2 * 10;
        }),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1
      },
      {
        label: 'ABC Pizza Average Tables Served',
        data: chartData?.filter(x => x.name === 'ABC Pizza' && x.reportDate !== undefined).map(x => {
          return x.totalTables / 2 * 10;
        }),
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',

        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',

        ],
        borderWidth: 1
      },
      {
        label: 'Taven 730 Revenue',
        data: chartData?.filter(x => x.name === 'Taven 730' && x.reportDate !== undefined).map(x => {
          return x.revenue;
        }),
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
      },
      {
        label: 'ABC Pizza Revenue',
        data: chartData?.filter(x => x.name === 'ABC Pizza' && x.reportDate !== undefined).map(x => {
          return x.revenue;
        }),
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1
      },
    ]
  };

  const options = {
    // Boolean - If we should show the scale at all
    showScale: true,
    // Boolean - Whether to show a dot for each point
    pointDot: true,
    showLines: true,
    title: {
      display: true,
      text: 'Chart.js Bar Chart'
    },
    legend: {
      display: true,
      labels: {
        boxWidth: 50,
        fontSize: 10,
        fontColor: `${fleurimondColors.palesasAqua}`,
        padding: 5,
      },
    },
  };


  useEffect(() => {
    const data = [];
    const chart = async () => {
      await fetch(`${proxyUrl}${baseUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        }
      }).then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            for (const dataObj of json) {
              if (dataObj['name'] === 'Taven 730' || dataObj['name'] === 'ABC Pizza') {
                data.push(dataObj)
                console.log("data: ", data);

              };
            }
            setChartData(data)
          });
        }
      }).catch((error) => {
        console.log(error);
      });
    }

    chart();
  }, [baseUrl, proxyUrl]);

  if (!chartData) {
    return "waiting for data"
  }
  return (
    <>
      <ProjectsSectionContainer>
        <GlobalStyle />

        <Header>Chart Info</Header>

        <Line height={200} options={options} data={data} />;
      </ProjectsSectionContainer>
    </>
  );
}