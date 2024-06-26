import { Link, useNavigate } from "react-router-dom"
import style from "../../Componants/GetProduts/GetProducts.module.css"
import { useContext, useEffect, useState } from "react";
import { FilterProducts } from './../../Context/FilterProducts';
import axios from "axios";
import fakeImage from "../../assets/images/Annotation 2024-02-21 205940.png"

export default function MyAd() {
    let { setElement } = useContext(FilterProducts)
    const [myAdv, setAdv] = useState(null);
    let { setExpired, expired, userData, setuserData, language } = useContext(FilterProducts)
    let [isLoading, setIsLoading] = useState(false)
    let navigate = useNavigate()
    async function getMyAdv() {
        try {
            let { data } = await axios.get(`https://zunis-node-js.vercel.app/product/?createdBy=${userData._id}`)
            setAdv(data.data)
        } catch (error) {
            console.log(error);
        }
    }
    async function deleteProperty(ItemId) {
        setIsLoading(true)
        await axios.delete(`https://zunis-node-js.vercel.app/product/delete?productId=${ItemId}`, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "token": `Ahmed__${localStorage.getItem("user")}`
            },
        })
            .then(response => {
                console.log(response.data);
                setIsLoading(false)
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false)
            });
    }
    function updateProperty(itemId, item) {
        setElement(item);
        navigate(`/updateProperty/${itemId}`)
    }
    useEffect(() => {
        getMyAdv()
        window.scroll(0, 0)
    }, [])
    useEffect(() => {
        getMyAdv()
    }, [myAdv])
    return <>
        <div className="container py-5 ">
            <div className="row g-3 justify-content-between my-5 alert alert-light ">
                <h3 className="text-primary col-sm-12 col-md-12 col-lg-6 fw-bold">My Properties</h3>
                <div className=" d-flex justify-content-center col-sm-12 col-md-12 col-lg-6">
                    <Link className="d-flex justify-content-center nav-link " to={`/myzone/65d8c2138bfd8107356010e2`}>
                        <button className={` px-4 py-2 fw-bold  rounded-1 btn btn-primary mx-2`}>  {language == 'ع' ? "AddAppartment" : "اضف شقة"}</button>
                    </Link>
                    <Link className="d-flex justify-content-center nav-link  mx-2" to={`/myzone/65d8c1c01269fe7a10558011`}>
                        <button className={` px-4 py-2 fw-bold  rounded-1 btn btn-primary mx-2`}> {language == 'ع' ? "AddHome" : "اضف بيت"}</button>
                    </Link>
                    <Link className="d-flex justify-content-center nav-link " to={`/myzone/65d8c23b1269fe7a1055818b`}>
                        <button className={` px-4 py-2 fw-bold  rounded-1 btn btn-primary mx-2`}>   {language == 'ع' ? "AddLand" : "اضفة قطعة ارض"}</button>
                    </Link>
                </div>
            </div>
            {myAdv == null ? <h3>  {language == 'ع' ? "No Ads yet" : "لا توج اعلانات مضافة"}</h3> :
                <div className="row py-5">
                    {myAdv?.map((item, index) => <div key={index} className={`col-sm-12 col-md-4 col-lg-4 ${style.box2} p-4`} >
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
                                {language == 'ع' ? `Area: ${item.propertyDesc.size} m2` : `المساحة: ${item.propertyDesc.size} متر مربع `}

                            </p>

                            <div className="d-flex ">
                                <i className="fa-solid fa-location-dot ms-2 "></i>
                                <p className="">{item.location}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button onClick={() => updateProperty(item._id, item)} className="btn btn-primary mx-2 w-50">Update Property</button>
                                <button onClick={() => deleteProperty(item._id)} className="btn btn-danger mx-2 w-50">{isLoading ? <i className="fa fa-spin fa-spinner"></i> : "Delete Property"}</button>
                            </div>
                        </div>
                    </div>)}
                </div>}
        </div>




    </>
}