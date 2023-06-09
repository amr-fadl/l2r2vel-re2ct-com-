import React from 'react'
import { Card, Col } from 'react-bootstrap'
import prod1 from "../../images/prod1.png";
import favoff from "../../images/fav-off.png";
import rate from "../../images/rate.png";
import { Link } from 'react-router-dom';
const ProductCard = ({data,grid}) => {

    return (
        <div className={grid}>
            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "345px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
                }}>
                <Link to={`/products/${data.id}`} style={{ textDecoration: 'none' }}>
                    <Card.Img style={{ height: "228px", width: "100%", objectFit:'contain',mixBlendMode:'multiply' }} src={data.images[0]} />
                </Link>
                <div className="d-flex justify-content-end mx-2">
                    <img
                        src={favoff}
                        alt=""
                        className="text-center"
                        style={{
                            height: "24px",
                            width: "26px",
                        }}
                    />
                </div>
                <Card.Body>
                    <Card.Title>
                        <div className="card-title">
                            {data.name}
                        </div>
                    </Card.Title>
                        <div className="d-flex justify-content-between ">
                            <div className="d-flex">
                                <img
                                    className=""
                                    src={rate}
                                    alt=""
                                    height="16px"
                                    width="16px"
                                />
                                <div className="card-rate mx-2">{data.ratings_qty}</div>
                            </div>
                            <div className="d-flex">
                                <div className="card-price">{data.price}</div>
                                <div className="card-currency mx-1">جنيه</div>
                            </div>
                        </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard
