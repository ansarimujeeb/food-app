import React from 'react'

export default function Card() {
    return (
        <>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card.</p>
                    <div className="Container w-100">
                        <select className="m-2 h-100 roundedd">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <select className="m-2 h-100 roundedd">
                            <option value="half"> Half </option>
                            <option value="full"> Full </option>
                        </select>
                        <div className="d-inline h-100 fs-5">
                            Total Price
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
