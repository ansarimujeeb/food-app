import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import axios from "axios";

export default function Home() {
    const [serverUrl] = useState('http://localhost:5000/api/food-data');
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);
    const [search, setSearch] = useState('');

    const loadData = () => {
        axios
        .post(serverUrl)
        .then((response) => {
            console.log('from AXIOS');
            console.log(response.data);
            setFoodItem(response.data[0]);
            setFoodCat(response.data[1]);
        });
    }

    useEffect(() => {
        loadData();        
    },[]);

    return (
        <>
            <Navbar></Navbar>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                        <form className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                            {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900×700/?fruit" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?cake" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='container'>
                {
                   foodCat !== [] ?
                   foodCat.map((data) => {
                        return (
                            <div className='row mb-3' key={data._id}>
                                <div key={data._id} className='fs-3 m-3'> {data.CategoryName} </div>
                                <hr />
                                { 
                                    foodItem !== [] ? 
                                        foodItem.filter((item) => (item.CategoryName === data.CategoryName) && ( item.name.toLowerCase().includes( search.toLocaleLowerCase()) ) )
                                        .map((filterItems) => {
                                            return (
                                                <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                                    <Card  foodItem = {filterItems}
                                                    options = {filterItems.options[0]}
                                                    />
                                                </div>
                                            )
                                        })
                                    : "No such Food"
                                }
                            </div>
                        )
                   })
                   :"" 
                }
            </div>

            <Footer></Footer>
        </>
    )
}
