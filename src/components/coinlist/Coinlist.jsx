import { Pagination } from '@material-ui/lab';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
// import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { unstable_HistoryRouter } from 'react-router-dom';
import { Coin } from '../../config/api';
import "./coinlist.css";

const currency = "INR";

export function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}

const Coinlist = () => {

    const [CoinList, setCoinList] = useState([])
    const [Search, setSearch] = useState("")
    const [page, setpage] = useState(1)
    const history = unstable_HistoryRouter

   const fetchCoinList= async () => {
     const {data}  = await axios.get(Coin("INR"));
     setCoinList(data)
   };

   useEffect(() => {
    fetchCoinList()
   }, []);
   
   const handleSearch = () => {
    return CoinList.filter(
        (coin) => 
        coin.name.toLowerCase().includes(Search) || 
        coin.symbol.toLowerCase().includes(Search)
        )
    }

  return (
      <div className="container1">
          <Typography
            variant='h4'
            style={{margin: 18, fontWeight: 600,}}>
                CryptoPrices By Market Cap
            </Typography>
     <TextField 
     label="Search For a Crypto Currency" 
     variant='outlined' 
     style={{ marginBottom: 20, width: "100%" }} 
     onChange={(e)=>setSearch(e.target.value)}
     />
     <Table>
         <TableHead style={{ backgroundColor: "#1d3eaa"}}>
                <TableRow>
                    {["Coin","Price","24 Change","Market Cap"].map((head)=>(
                        <TableCell
                        style={{
                            color:"white",
                            fontWeight: "500",
                            fontSize: "19px"
                        }}
                        key={head}
                        align={head==="Coin"? "" : "right"}
                        >
                            {head}
                        </TableCell>
                    ))}
                </TableRow>
         </TableHead>
         <TableBody>{handleSearch()
            .slice((page-1)*10,(page-1)*10+10)
            .map((row=>{
                const profit = row.price_change_percentage_24h > 0;
                return (
                    <TableRow key={row.name} className="row_background">
                        <TableCell
                            component="th"
                            scope="row"
                            style={{
                                display: "flex",
                                gap: 15,
                            }}
                        >
                            <img
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{marginBottom: 10}}
                            />
                            <div
                                style={{display:"flex",flexDirection:"column"}}
                            >
                                <span style={{fontSize:18,textTransform:"uppercase"}}>
                                    {row?.symbol}
                                </span>
                                <span style={{fontSize:14,color:"darkgrey"}}>
                                    {row?.name}
                                </span>
                            </div>

                        </TableCell>
                        <TableCell
                            className='currentprice'
                            align='right'
                            style={{color: "black",
                            fontWeight: 500,
                            fontSize: 17,
                        }}
                        >
                            ₹{numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                            className='profit'
                            align='right'
                            style={{color: profit > 0 ? "rgb(14,203,123":"red",
                            fontWeight: 500,
                            fontSize: 16,
                        }}
                        >
                            {profit && "+"}
                            {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell
                            className='marketcap'
                            align='right'
                            style={{color: "black",
                            fontWeight: 500,
                            fontSize: 17,
                        }}
                        >
                            ₹{numberWithCommas(row.market_cap.toString().slice(0,-8))}
                            Cr
                        </TableCell>
                        
                    </TableRow>
                )
         }))}</TableBody>
     </Table>
     <Pagination
        className='pagination'
        style={{
            padding: 20,
            width: "100%",
            display:"flex",
            justifyContent:"center",
            transition: '0.5s',
        }}
        count={(handleSearch()?.length/10).toFixed(0)}
        color= 'primary'
        onChange={(_, value) => {
            setpage(value);
            window.scroll(0,450);
        }}
        />
     </div>



  )
}

export default Coinlist