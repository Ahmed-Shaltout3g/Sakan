import { Link } from "react-router-dom"

import logo from "../../assets/images/logo.png"
import { useContext } from "react"
import { FilterProducts } from './../../Context/FilterProducts';

export default function Footer() {
    let {language} = useContext(FilterProducts)
    return <>

        <div className="bg-light py-5">
            <div className="container my-2  text-dark">
                <div className="row gy-4 ">
                    <div className="col-md-3">
                        <div className=" text-center">
                            <Link to={'/'}>
                                <img src={logo} style={{width:'100px'}} alt="" />
                            </Link>
                            <p className="my-4">   {language == 'ع' ?`copyright 2024`:'جميع الحقوق محفوظة 2024'}</p>
                            <div className="d-flex my-4 justify-content-center">
                                <i className="fa-brands fa-facebook text-primary fs-4  text-black"></i>
                                <i className="fa-brands fa-instagram text-primary fs-4 mx-3 text-black"></i>
                                <i className="fa-brands fa-twitter text-primary fs-4  text-black"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div >
                            <h4 className="fw-bolder text-center mb-4"> {language == 'ع' ?`Explore`:'استكشف'}</h4>
                            <Link className="text-muted  text-center nav-link my-2" onClick={() => { window.scroll(0, 0) }} to={`/getproducts/home/65d8c1c01269fe7a10558011`}> {language == 'ع' ?`Homes`:'منازل'}</Link>
                            <Link className="text-muted  text-center nav-link my-2" onClick={() => { window.scroll(0, 0) }} to={`/getproducts/appartment/65d8c2138bfd8107356010e2`}>   {language == 'ع' ?`Appartments`:'شقق'}</Link>
                            <Link className="text-muted  text-center nav-link my-2" onClick={() => { window.scroll(0, 0) }} to={`/getproducts/land/65d8c23b1269fe7a1055818b`}>   {language == 'ع' ?`Lands`:'اراضي'}</Link>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div>
                            <h4 className="fw-bolder mb-4"> {language == 'ع' ?`Resources`:'المصادر'}</h4>
                            <p className="text-muted"> {language == 'ع' ?`Videos`:'فيديوهات'}</p>
                            <p className="text-muted">  {language == 'ع' ?`Members's story`:'قصص الاعضاء'}</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div>
                            <h4 className="fw-bolder mb-4">  {language == 'ع' ?`About Us`:'عننا'}</h4>
                            <p className="text-muted">
                                {language == 'ع' ? "It is a commercial company that sells, rents, leases and manages a portfolio of real estate. The real estate company's investment portfolio can consist of any land or property (commercial, industrial, operational, residential).":"هي شركة تجارية تقوم ببيع وتأجير وإستئجار وإدارة محفظة من العقارات. يمكن أن تتكون المحفظة الإستثمارية للشركة العقارية من أي أرض أو عقار (تجاري، صناعي، تشغيلي، سكني). "}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}