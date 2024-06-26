import axios from "axios";
import { useContext, useEffect, useState } from "react";
import style from "./Products.module.css"
import fakeImage from "../../assets/images/Annotation 2024-02-21 205940.png"
import { Link } from "react-router-dom";
import { FilterProducts } from './../../Context/FilterProducts';
export default function Products() {

    let arr = [1, 2, 3];
    let {language} = useContext(FilterProducts)
    const [Products, setProducts] = useState([])

    async function getProducts() {
        const { data } = await axios.get('https://zunis-node-js.vercel.app/product/?page=1');
        setProducts(data.data)

    };
    useEffect(() => {
        getProducts();
    }, [Products.length]);



    return <>
        <div className="container py-5">
            <h3 className="text-center ">{language == 'ع' ? "Explore some Properties":"استكشف بعض العقارات"}</h3>
            <div className="row mt-5 g-0">
                {Products.length <= 0 ? arr.map((item, index) => <div key={index} className={`col-sm-12 col-md-6 col-lg-4 p-4 ${style.box}`} >
                    <img src={fakeImage} className="card-img-top rounded-0 w-100" alt="..." />
                    <div >
                        <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6 w-100"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>

                                <span className="placeholder col-4"></span>
                            </p>
                        </div>
                    </div>
                </div>) : Products.map((item, index) => <div key={index} className={`col-sm-12 col-md-6 col-lg-4 ${style.box2} p-4`} >
                    <Link to={`/productdetails/${item.categoryId.slug}/${item._id}`}>
                        <div className={`${style.boxImage}`}>
                            <img src={item.Images[0].secure_url} className="  w-100 " alt="" />
                        </div>
                    </Link>
                    <div >
                        <h3 className=" fw-bold mt-4 ">
                            {language == 'ع' ? `${item.price} EGP` : `${item.price} ج.م`}

                        </h3>
                        <p className="fw-bold fs-5">{item.title.slice(0, 55)}  </p>
                        <div className="d-flex">
                            <div className="d-flex">
                                <i className="fa-solid fa-bed  mx-2"></i>
                                <p className="fw-bold">{item.propertyDesc.bedrooms} </p>
                            </div>
                            <div className="d-flex">
                                <i className="fa-solid fa-toilet mx-2 "></i>
                                <p className="fw-bold">{item.propertyDesc.bathrooms}</p>
                            </div>
                        </div>
                        <p className="">
                            {language == 'ع' ? `Area : ${item.propertyDesc.size} m2` : `المساحة: ${item.propertyDesc.size} متر مربع `}</p>
                        <div className="d-flex ">
                            <i className="fa-solid fa-location-dot ms-2 "></i>
                            <p className="">{item.location}</p>
                        </div>
                        <div className="d-flex flex-wrap">
                            <Link to={`/productdetails/${item.categoryId.slug}/${item._id}`}>
                                <button className={` px-4 py-2 fw-bold m-2  rounded-1 ${style.contactButton} `}>

                                    {language == 'ع' ? `details` : 'التفاصيل'}
                                </button>
                            </Link>
                            <button type="button" className={` px-4 py-2 fw-bold m-2  rounded-1 ${style.contactButton} mx-2`} data-bs-toggle="modal" data-bs-target="#exampleModal">

                                {language == 'ع' ? `Phone` : 'اتصل'}
                            </button>
                            <button type="button" className={` px-4 py-2 fw-bold  m-2 rounded-1 ${style.contactButton} mx-2`} data-bs-toggle="modal" data-bs-target="#exampleModal">

                                {language == 'ع' ? `Mail` : 'الايميل'}
                            </button>

                            <div className="modal fade my-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog my-5">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <p>
                                                {language == 'ع' ? ` Phone : ${item.createdBy.phoneNumber}` : `رقم الهاتف: ${item.createdBy.phoneNumber}`}
                                            </p>
                                            <p>
                                                {language == 'ع' ? `Email : ${item.createdBy.email}` : `البريد الالكتروني : ${item.createdBy.email}`}


                                            </p>
                                        </div>
                                        <div className="modal-footer">
                                            <a href={`mailto:${item.createdBy.email}?subject=Subject line`}>
                                                <button type="button" className={` px-4 py-2 fw-bold  rounded-1 ${style.contactButton} mx-2`}>
                                                    {language == 'ع' ? `Send Messange` : `ارسل رسالة`}

                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    </>
}