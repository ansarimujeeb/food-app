import React, { useState } from 'react'
import {useCart, useDispatchCart} from './ContextReducer';
import { useEffect } from 'react';
import { useRef } from 'react';

export default function Card(props) {
    let dispatch = useDispatchCart();
    let newData = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOption = Object.keys(options);

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState('');

    const handleAddTocart = async () => {
        let food = [];
        for (const item of newData) {
            if (item.id === props.foodItem._id) {
                food = item;
                break;
            }
        }

        if(food !== [] ) {
            if (food.size === size) {
                await dispatch({type: "UPDATE", id:props.foodItem._id, price: finalPrice, qty: qty});
                return
            } else if(food.size !== size){
                await dispatch({
                    type:"ADD", 
                    id:props.foodItem._id,
                    name:props.foodItem.name,
                    price:finalPrice,
                    qty:qty,
                    size:size,
                    img:props.foodItem.img
                })
                return
            }
        } else {
            await dispatch( {
                type:"ADD", 
                id:props.foodItem._id,
                name:props.foodItem.name,
                price:finalPrice,
                qty:qty,
                size:size,
                img:props.foodItem.img
            })
            return
        }
    }

    let finalPrice = qty * parseInt(options[size])
    useEffect( () => {
        setSize(priceRef.current.value);
    }, [])
    return (
        <>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img className="card-img-top" src={props.foodItem.img} alt="Card cap" style={{"height": "150px", objectFit:"fill" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    
                    <div className="Container w-100">
                        <select className="m-2 h-100 bg-success roundedd" onChange={(e)=>setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <select className="m-2 h-100 bg-success roundedd" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                            {
                                priceOption.map((data) => {
                                    return <option key={data} value={data}>{data}</option>
                                })
                            }
                        </select>
                        <div className="d-inline h-100 fs-5">
                            ₹ {finalPrice}/-
                        </div>
                    </div>
                    <hr></hr>
                    <div className='btn bg-success justify-center ms-2' onClick={handleAddTocart}>
                        Add to cart
                    </div>
                </div>
            </div>
        </>
    )
}
