import { useContext, useEffect, useState } from "react";
import style from "./Filter.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { FilterProducts } from "../../Context/FilterProducts";
import { Helmet } from "react-helmet";
export default function Filter() {
  // variables    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  let { price, wordSearch, setPrice, setWordSearch, type, settype, language } = useContext(FilterProducts)
  const [searched, setsearched] = useState([]);
  let [isLoading, setIsLoading] = useState(false)
  //function search    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  async function searchProduct() {
    setIsLoading(true)
    let { data } = await axios.get(
      `https://zunis-node-js.vercel.app/product/${type}?page=1&price[lt]=${price}&search=${wordSearch}`
    );
    setsearched(data.data);
    setIsLoading(false)
  }
  // use  effect    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  useEffect(() => {
    window.scroll(0, 0);
    searchProduct();
  }, []);

  // render  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  return (
    <>
      <Helmet>
        <title> {language == 'ع' ? "Filter - Sakan   " : "    بحث عن شيء معين - سكن  "}</title>
      </Helmet>
      {/*  F I L T E R     N A V    H E R E >>>>>>>>>>>>>>> */}
      <div className="container py-5 ">
        <div className={` my-5`}>
          <div className="container ">
            <div className="row ">
              <div className="col-sm-12 col-md-6 col-lg-6 py-2">
                <input
                  type="text"
                  value={wordSearch}
                  placeholder={language == 'ع' ? "Enter Location" : "     ادخل الموقع"}
                  className="p-2 w-100 "
                  onChange={(e) => { setWordSearch(e.target.value) }}
                />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 py-2">
                <div className="d-flex flex-nowrap">
                  <select
                    name="type"
                    className="py-1  w-100 mx-1"
                    onChange={(e) => {
                      settype(e.target.value);
                    }}
                    value={type}
                  >
                    <option value={"....."}>
                      <a className="dropdown-item" href="#">
                        {language == 'ع' ? `Type property` : `نوع العقار`}

                      </a>
                    </option>
                    <option value={"home"}>
                      <a className="dropdown-item" href="#">

                        {language == 'ع' ? `Homes` : `منازل`}
                      </a>
                    </option>
                    <option value={"appartment"}>
                      <a className="dropdown-item" href="#">

                        {language == 'ع' ? `Appartments` : `شقق`}
                      </a>
                    </option>
                    <option value={"land"}>
                      <a className="dropdown-item" href="#">

                        {language == 'ع' ? `Lands` : `اراضي`}
                      </a>
                    </option>
                  </select>
                  <select
                    name="price"
                    className="py-1  w-100 mx-1"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    value={price}
                  >
                    <option value={"....."}>

                      {language == 'ع' ? `Price in EGP` : `السعر (ج.م)`}
                    </option>
                    <option value={"1000000"}>
                      {language == 'ع' ? "less than 1 million " : "  اقل من مليون جنية"}
                    </option>
                    <option value={"2000000"}>
                      {language == 'ع' ? "less than 2 millions " : "  اقل من 2 مليون جنية"}
                    </option>
                    <option value={"3000000"}>
                      {language == 'ع' ? "less than 3 millions " : "  اقل من 3 مليون جنية"}
                    </option>
                    <option value={"4000000"}>
                      {language == 'ع' ? "less than 4 millions " : "  اقل من 4 مليون جنية"}
                    </option>
                    <option value={"5000000"}>
                      {language == 'ع' ? "less than 5 millions " : "  اقل من 5 مليون جنية"}
                    </option>
                    <option value={"6000000"}>
                      {language == 'ع' ? "less than 6 millions " : "  اقل من 6 مليون جنية"}
                    </option>
                  </select>
                  <button
                    onClick={searchProduct}
                    className=" btn mx-1 btn-danger px-4">
                    {isLoading ? <i className="fa fa-spinner fa-spin"></i> :  language == 'ع' ? "Search " : "     بحث"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* L O O P    H E R E  >>>>>>>>>>>>>>>>>>>>>>> */}
        <div className="row mt-5 g-0">
          {!Array.isArray(searched) ? (
            <div className="vh-100 d-flex align-items-center  justify-content-center ">
              <h3 className="h5">                    {language == 'ع' ? "No Items  " : "     لا يوجد عناصر مطابقة لبحثك"}</h3>
            </div>
          ) : searched.map((item, index) => (
            <div
              key={index}
              className={`col-sm-12 col-md-4 col-lg-4 ${style.box2} p-4`}
            >
              <Link
                to={`/productdetails/${item.categoryId.slug}/${item._id}`}
              >
                <div className={`${style.boxImage}`}>
                  <img
                    src={item.Images[0].secure_url}
                    className="  w-100 "
                    alt=""
                  />
                </div>
              </Link>
              <div>
                <h3 className=" fw-bold mt-4 "> {language == 'ع' ? `${item.price} EGP` : `${item.price} ج.م `}</h3>
                <p className="fw-bold fs-5">{item.title.slice(0, 55)} </p>
                <div className="d-flex">
                  <div className="d-flex">
                    <i className="fa-solid fa-bed  mx-1"></i>
                    <p className="fw-bold">{item.propertyDesc.bedrooms} </p>
                  </div>
                  <div className="d-flex">
                    <i className="fa-solid fa-toilet mx-1 "></i>
                    <p className="fw-bold">{item.propertyDesc.bathrooms}</p>
                  </div>
                </div>
                <p className="">
                  {language == 'ع' ? `Area : {item.propertyDesc.size} m2` : `المساحة: ${item.propertyDesc.size} متر مربع`}

                </p>
                <div className="d-flex ">
                  <i className="fa-solid fa-location-dot ms-2 "></i>
                  <p className="">{item.location}</p>
                </div>
                <div className="d-flex">
                  <Link
                    to={`/productdetails/${item.categoryId.slug}/${item._id}`}
                  >
                    <button
                      className={` px-4 py-2 fw-bold  rounded-1 ${style.contactButton} `}
                    >
                      {language == 'ع' ? `details` : 'التفاصيل'}

                    </button>
                  </Link>
                  <button
                    className={` px-4 py-2 fw-bold  rounded-1 ${style.contactButton} mx-1`}
                  >
                    {language == 'ع' ? `Call` : 'اتصل'}


                  </button>
                  <button
                    className={` px-4 py-2 fw-bold  rounded-1 ${style.contactButton} `}
                  >
                    {language == 'ع' ? `Mail` : 'الايميل'}

                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
