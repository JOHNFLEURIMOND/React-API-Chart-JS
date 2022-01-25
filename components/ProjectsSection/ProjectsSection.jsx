import React, { useState, useEffect } from "react";
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
  const [chartData, setChartData] = useState([]);

  const data = {
    labels: chartData?.data?.map(x => x.name),
    datasets: [{
      label: `Restaurant Data`,
      data: chartData?.data?.map(x => x.revenue),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  const options = {
    // Boolean - If we should show the scale at all
    showScale: true,
    // Boolean - Whether to show a dot for each point
    pointDot: true,
    showLines: false,
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
            console.log("API data: ", json);
            for (const dataObj of json) {
              if (dataObj['name'] === 'Taven 730' || dataObj['name'] === 'ABC Pizza' ) {
                data.push(dataObj)
                console.log("Name Data: ", data);
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
  console.log("Chart Data: ", chartData);

  return (
    <>
      <ProjectsSectionContainer>
        <GlobalStyle />

        <Header>Chart Info</Header>

        <Line height={900} options={options} data={data} />;
      </ProjectsSectionContainer>
    </>
  );
}
