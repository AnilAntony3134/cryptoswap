import { LinearProgress, Typography } from '@mui/material'
import { padding } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Coin, SingleCoin } from '../../config/api'
import "./dash.css"
import Chart from './Chart'
import Graph from './Chart'

export function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}
const currency = "INR"
  
const Dash = () => {

  const [coinlist,setCoinlist] = useState([])
  const [days,setDays] = useState(1);
  const [currentcoinid,setCurrentcoinid] = useState("bitcoin")
  const [currentcoin,setCurrentcoin] = useState();

const fetchsinglecoin =  async () => {
        const { data } = await axios.get(SingleCoin("bitcoin"))
        setCurrentcoin(data)
}

console.log(currentcoin);

useEffect(() => { 
        fetchsinglecoin()
//   return () => {
    
//     fetchcoins()
//   }
}, [])

console.log(currentcoin)

const profit = currentcoin?.market_data.price_change_percentage_24h[currency.toLowerCase()] > 0;

if (!currentcoin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className='container2'>
        <div className="header1">
       
        <Typography
            variant='h4'
            style={{ fontWeight: 600, alignItems: 'center'}}
            >
                ₹{numberWithCommas(currentcoin?.market_data.current_price[currency.toLowerCase()])}
                <span 
                 style={{
                        color: profit > 0 ? "rgb(14,203,123":"red",
                        fontWeight: 600,
                        fontSize: 14,
                        backgroundColor: profit > 0 ?"lightgreen":"rgb(240, 29, 106, 0.4)",
                        padding: 10,
                        margin: 10,
                        borderRadius: 10
                       }}>
                         {profit && "+"}
                         {currentcoin?.market_data.price_change_percentage_24h.toFixed(2)}% 
                </span>
            </Typography>
            <Typography
            variant='h5'
            style={{ fontWeight: 600, alignItems: 'right'}}
            >
                 {currentcoin?.name}  ({currentcoin?.symbol}) 
                
            </Typography>
        </div>
        {/* <Chart coin={currentcoin} /> */}
       </div>
  )
}

export default Dash