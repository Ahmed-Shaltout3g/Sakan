import { useContext } from "react"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { FilterProducts } from './../../Context/FilterProducts';

export default function Notfound() {
    let {language }= useContext(FilterProducts)
    return <>
        <Helmet>
            
            {language =='ع' ? "Not found page - Sakan":"صفحة غير موجودة - سكن"}
        </Helmet>
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        {language =='ع' ?
        <h3 className="h5">Sorry, we did not this page <Link className="text-black" to={'/'}>  Click here </Link>    to Go Home page</h3>
        :<h3 className="h5">عذراً، لم نتمكن من العثور على الصفحة المطلوبة، <Link className="text-black" to={'/'}> انقر هنا </Link> للرجوع الي الصفحة الرئيسية   </h3>}
            
        </div>
    </>
}