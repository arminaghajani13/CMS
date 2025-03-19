import React from 'react'
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
export default function Features() {

    const featureDetail = [
        { id: 1, title: 'Revanue', price: '2.65', amount: '11.4', isGrowing: true },
        { id: 1, title: 'Sales', price: '14.9', amount: '5.99', isGrowing: false },
        { id: 1, title: 'Cost', price: '9.87', amount: '34.2', isGrowing: true },
    ]

    return (
        <div className='grid grid-cols-3 gap-4 mx-4'>
            {
                featureDetail.map((item, indexItem) =>
                    <div key={indexItem} className="featureCard">
                        <div className="title">
                            {item.title}
                        </div>
                        <div className="container">
                            <span className='price'>${item.price}</span>
                            <span className='amount'>
                                {item.isGrowing ? "" : "-"} {item.amount}
                            </span>
                            <span className='icon'>
                                {item.isGrowing ? (<><FaArrowUp /></>) : (<><FaArrowDown /></>)}

                            </span>
                        </div>
                    </div>
                )}

        </div>
    )
}
