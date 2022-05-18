import { CircularProgress, LinearProgress } from "@mui/material";
import axios from "axios";
import { LineElement } from "chart.js";
import React, { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";
// import { Doughnut, Bar, Line, Pie } from 'react-chartjs-2';
import { HistoricalChart } from "../../config/api";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


const currency = "INR";
const Chart = ({ coin }) => {
  const [historicaldata, sethistoricaldata] = useState();
  const [days, setdays] = useState(1);

  const fetchcharts = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    sethistoricaldata(data.prices);
  };

  useEffect(() => {
    fetchcharts()
  }, [days]);

  {
    !historicaldata ? (
      <CircularProgress style={{ backgroundColor: "gold" }} />
    ) : (
      <>
        {/* <Line
          data={{
            labels: historicaldata.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: historicaldata.map((coin) => coin[1]),
                label: `Price ( Past ${days} Days ) in ${currency}`,
                borderColor: "#EEBC1D",
              },
            ],
          }}
        /> */}

{/* <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart> */}


      </>
    );
  }
};

export default Chart;
