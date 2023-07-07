import React from 'react'
import "../Assets/Css/Leaguemap.css"
import {  Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const leagues = [
    {
        name: "Crypto Amateur Learners League",
        categorytitle:"Category",
        category:"Ameture",
        fundstitle:"Funds",
        funds:"$10,000",
        membership:"Membership Type",
        memtype:"Free",
        btn: "Edit",
    },
    {
        name: "Crypto Super League ",
        categorytitle:"Category",
        category:"Ameture",
        fundstitle:"Funds",
        funds:"$10,000",
        membership:"Membership Type",
        memtype:"Subscription",
        btn: "Edit",
    },
    {
        name: "Crypto Expert League ",
        categorytitle:"Category",
        category:"Ameture",
        fundstitle:"Funds",
        funds:"$10,000",
        membership:"Membership Type",
        memtype:"Free",
        btn: "Edit",
    },
    
]

const Leaguemap = () => {
  return (
    <div style={{ margin: "0px 1%" }} className='makeinrowleaague mt-5'>

    {
        leagues.map(league =>

            <div className='leaguecardbg'>
                <p className='clubname'>{league.name}</p>
                <div className='makecatfundmeminrow mt-4'>
                    <p className='categorytitle'>{league.categorytitle}</p>
                    <p className='categoryitself'>{league.category}</p>
                </div>
                <div className='makecatfundmeminrow mt-2'>
                    <p className='categorytitle'>{league.fundstitle}</p>
                    <p className='categoryitself'>{league.funds}</p>
                </div>
                <div className='makecatfundmeminrow mt-2'>
                    <p className='categorytitle'>{league.membership}</p>
                    <p className='categoryitself'>{league.memtype}</p>
                </div>
                <div className='makeaddleaguebuttonstretch mt-3'>
                <Link className='addleaguebutton' to="/Dashboard/game/editleague">{league.btn}</Link>
                </div>
            </div>

        )
    }
</div>
  )
}

export default Leaguemap