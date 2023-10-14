import React from 'react'

export default function Card(props) {
    let options = props.options;
    let priceOption = Object.keys(options);
    return (
        <>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img className="card-img-top" src={props.imgSrc} alt="Card cap" style={{"height": "150px", objectFit:"fill" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodName}</h5>
                    
                    <div className="Container w-100">
                        <select className="m-2 h-100 roundedd">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <select className="m-2 h-100 roundedd">
                            {
                                priceOption.map((data) => {
                                    return <option key={data} value={data}>{data}</option>
                                })
                            }
                        </select>
                        <div className="d-inline h-100 fs-5">
                            Total Price {localStorage.getItem("authToken")}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
