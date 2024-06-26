import { useContext, useState } from "react"
import fakeImage from "../../assets/images/Annotation 2024-02-21 205940.png"
import style from "./Categories.module.css"
import axios from "axios"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { FilterProducts } from "../../Context/FilterProducts"

export default function Categories() {
    let {language} = useContext(FilterProducts)
    //get categories
    const [categories, setCategories] = useState([])
    let arr = [1, 2, 3];
    async function getCategory() {
        const { data } = await axios.get('https://zunis-node-js.vercel.app/category');
        setCategories(data.categories);
    };
    useEffect(() => {
        getCategory();
        console.log(categories)
    }, [categories.length]);
    return <>
  
        <div className="container py-5">
            <h3 className="text-center ">      {language == 'ع' ? "Search for properites for sale and rent in Egypt" : "  ابحث عن عقارات للبيع و للايجار في مصر   "} </h3>
            <div className="row mt-5 g-3 justify-content-center">
                {categories.length <= 0 ? arr.map((item, index) => <div key={index} className="  col-sm-12 col-md-6 col-lg-3">
                    <div className={`card  p-3`} aria-hidden="true">
                        <div className="d-flex justify-content-center mx-auto">
                            <img src={fakeImage} className={`card-img-top rounded-0 ${style.fakeImage}`} alt="..." />

                        </div>

                        <div className="card-body">

                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6 w-100"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                            </p>
                        </div>
                    </div>
                </div>) : categories.map((item, index) => <div key={index} className="col-sm-12 col-md-6 col-lg-3 " >
                    <Link to={`/getproducts/${item.slug}/${item._id}`} className={`bg-light ${style.box} mx-auto  p-3 d-flex justify-content-center`}>
                        <div className="">
                            <div className={` mx-auto ${style.boxImage}`}>
                                <img src={item.image.secure_url} className="  w-100" alt="" />
                            </div>
                            <h3 className="text-center fw-bold mt-4 h5">{item.name}</h3>
                            <p className="fs-6 text-center">{item.products.length} {language == 'ع' ? "Item" : "  عنصر   "}</p>
                        </div>
                    </Link>
                </div>)}
            </div>
        </div>
    </>
}
