import React, { useContext } from 'react'
import choose1 from "../../assets/images/choose1.png"
import choose2 from "../../assets/images/choose2.png"
import choose3 from "../../assets/images/choose3.png"
import style from "./Choose.module.css"
import { FilterProducts } from './../../Context/FilterProducts';
function Choose() {
  let {language} = useContext(FilterProducts)
  return <>
    <div className=" p-5">

      <div className="container my-2">
        <div className="d-flex mb-5 align-items-center justify-content-between ">
          
          <h3>  {language ==  'ع' ? "Why Choose Us?":"لماذا تقوم باختيارنا؟"}</h3>
          

          <h5>
          {language ==  'ع' ? "I hope you love us":"انا اءمل ان تحبنا "}
          </h5>
        </div>
        <div className="row gy-4">
          <div className="col-md-4 ">
            <div className={`bg-light ${style.box}`}>
              <h2 className='h1 fw-bloder bg-opacity-50 text-secondary'>01</h2>
              <div className='text-center p-4'>
                <img src={choose1} className={` ${style.chooseImage}  mb-4`} alt="" />
                <h4>  {language == 'ع' ? "Find your dream properity" : "  اوجد عقار احلامك   "}</h4>
                <p className="text-muted my-3">    {language == 'ع' ? "We have many beautiful properties" : "  نحن نملك الكثير من العقارات الجميلة   "}</p>
                <button className="border-0 text-dark bg-opacity-25 p-2 fw-bolder bg-secondary">  {language == 'ع' ? "Learn More" : "  رؤية المزيد   "}</button>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`bg-light ${style.box}`}>
              <h2 className='h1 fw-bloder bg-opacity-50 text-secondary'>02</h2>
              <div className='text-center py-5 my-4'>
                <img src={choose2} className={`${style.chooseImage}  mb-4`} alt="" />
                <h4 className='mb-4 '>   {language == 'ع' ?"Buy or Rent Properties":"شراء و ايجار العقارات"}</h4>
                <button className="border-0 text-dark bg-opacity-25 p-2 fw-bolder bg-secondary">  {language == 'ع' ? "Learn More" : "  رؤية المزيد   "}</button>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`bg-light ${style.box}`}>
              <h2 className='h1 fw-bloder bg-opacity-50 text-secondary'>03</h2>
              <div className='text-center py-5 my-4'>
                <img src={choose3} className={`${style.chooseImage}  mb-4`} alt="" />
                <h4 className='mb-4'>    {language == 'ع' ?"List your own Property":"اعرض عقارك"}</h4>
                <button className="border-0 text-dark bg-opacity-25 p-2 fw-bolder bg-secondary">  {language == 'ع' ? "Learn More" : "  رؤية المزيد   "}</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Choose
//  <h4>List Your Own Property </h4>