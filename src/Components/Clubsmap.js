import React from 'react'
import "../Assets/Css/Clubsmap.css"
import { images } from "../Components/Images"
import {  Button, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
const clubs = [
    {
        name: "MI Club",
        img: images.clubone,
        btn: "View Portfolio",
    },
    {
        name: "PFC Club",
        img: images.clubtwo,
        btn: "View Portfolio",
    },
    {
        name: "GPJ Club",
        img: images.clubthree,
        btn: "View Portfolio",
    },
    {
        name: "MI Club",
        img: images.clubone,
        btn: "View Portfolio",
    },
    {
        name: "GPJ Club",
        img: images.clubthree,
        btn: "View Portfolio",
    },
    {
        name: "PFC Club",
        img: images.clubtwo,
        btn: "View Portfolio",
    },
    {
        name: "MI Club",
        img: images.clubone,
        btn: "View Portfolio",
    },
    {
        name: "PFC Club",
        img: images.clubtwo,
        btn: "View Portfolio",
    },
    {
        name: "GPJ Club",
        img: images.clubthree,
        btn: "View Portfolio",
    },
    {
        name: "MI Club",
        img: images.clubone,
        btn: "View Portfolio",
    },
    {
        name: "GPJ Club",
        img: images.clubthree,
        btn: "View Portfolio",
    },
    {
        name: "PFC Club",
        img: images.clubtwo,
        btn: "View Portfolio",
    },
]

export const Clubsmap = () => {

    return (
        <div style={{ margin: "0px 1%" }} className='maketheinrowmain'>

            {
                clubs.map(club =>

                    <Link className='clubmapremoveunderline' to="/Dashboard/game/editclub"><div  className='clubcardbg'>
                        <p className='clubname'>{club.name}</p>
                        <Image src={club.img} width="80%" />
                        <Link to="/dashboard/game/viewportfolio"><Button className='clubaddbutton'>{club.btn}</Button></Link>
                    </div>
                    </Link>
                )
            }
        </div>
    )
}
