import React from 'react'
import "../Assets/Css/Clubsmap.css"
import { images } from "../Components/Images"
import {  Button, Image } from "react-bootstrap";

const clubs = [
    {
        name: "MI Club",
        img: images.clubone,
        btn: "Add Portfolio",
    },
    {
        name: "PFC Club",
        img: images.clubtwo,
        btn: "Add Portfolio",
    },
    {
        name: "GPJ Club",
        img: images.clubthree,
        btn: "Add Portfolio",
    },
    {
        name: "MI Club",
        img: images.clubone,
        btn: "Add Portfolio",
    },
    {
        name: "GPJ Club",
        img: images.clubthree,
        btn: "Add Portfolio",
    },
    {
        name: "PFC Club",
        img: images.clubtwo,
        btn: "Add Portfolio",
    },
    {
        name: "MI Club",
        img: images.clubone,
        btn: "Add Portfolio",
    },
    {
        name: "PFC Club",
        img: images.clubtwo,
        btn: "Add Portfolio",
    },
    {
        name: "GPJ Club",
        img: images.clubthree,
        btn: "Add Portfolio",
    },
    {
        name: "MI Club",
        img: images.clubone,
        btn: "Add Portfolio",
    },
    {
        name: "GPJ Club",
        img: images.clubthree,
        btn: "Add Portfolio",
    },
    {
        name: "PFC Club",
        img: images.clubtwo,
        btn: "Add Portfolio",
    },
]

export const Clubsmap = () => {

    return (
        <div style={{ margin: "0px 1%" }} className='maketheinrowmain'>

            {
                clubs.map(club =>

                    <div className='clubcardbg'>
                        <p className='clubname'>{club.name}</p>
                        <Image src={club.img} width="80%" />
                        <Button className='clubaddbutton'>{club.btn}</Button>
                    </div>

                )
            }
        </div>
    )
}
