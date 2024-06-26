import male from "../../assets/images/male.png"
import female from "../../assets/images/female.png"
import aboutImage from "../../assets/images/aboutImage.jfif"
import style from "./about.module.css"
import about1 from "../../assets/images/about1.jfif"
import about2 from "../../assets/images/about2.jfif"
import facebook from "../../assets/images/facebook.png"
import whatsapp from "../../assets/images/whatsapp.png"
import instgram from "../../assets/images/instgram.png"
import about3 from "../../assets/images/about3.jfif"
import { Helmet } from "react-helmet"
import { useContext } from "react"
import { FilterProducts } from "../../Context/FilterProducts"


export default function About() {
    let { language } = useContext(FilterProducts)

    return <>
        <Helmet>
            <title>{language == 'ع' ? "About Us - Sakan" : " نبذة عننا - سكن   "}</title>
        </Helmet>
        <section>

            <div className={`w-100 ${style.background} d-flex pt-5 `} style={{ backgroundImage: `URL(${aboutImage})` }}>
                <div className="p-5 text-black">
                    <h3 className="h1 fw-bold">  {language == 'ع' ? "contact Us" : " تواصل معنا   "}</h3>
                    <p className="h3"> {language == 'ع' ? "For any Question" : "   لاي سؤال   "} </p>
                </div>
            </div>
            <div className="container py-5">
                <h3 className="text-center fw-bold mb-5">   {language == 'ع' ? "More About Us" : "  اعرف المزيد عننا"}</h3>
                <div className="row  g-3">
                    <div className={`col-sm-12 col-md-4 col-lg-4`}>
                        <img src={about1} alt="" className="w-100 " />
                    </div>
                    <div className={`col-sm-12 col-md-4 col-lg-4`}>
                        <img src={about2} alt="" className="w-100  mb-3 " />
                        <img src={about3} alt="" className="w-100  " />
                    </div>
                    <div className={`col-sm-12 col-md-4 col-lg-4`}>
                        <img src={about1} alt="" className="w-100 " />
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <h3 className="text-center mb-5"> {language == 'ع' ? "Our Value" : "   قيمنا    "}</h3>
                <div className="row g-3">
                    <div className="col-sm-12 col-md-4 col-lg-4  ">
                        <div className="bg-white text-center p-4">
                            <h3 className="fw-bold h2 mb-4">value1</h3>
                            <p>Lorem ipsum dolor sit amet, ullam nobis quia laborum incidunt explicabo! Commodi molestiae accusantium voluptates, pariatur, ullam quasi sequi possimus beatae aliquid obcaecati id. Possimus, consectetur vel excepturi aut itaque animi vero ab ex laudantium reiciendis, magni atque accusamus. Suscipit excepturi at ad sunt. Molestiae omnis autem facere ad sed qui, ducimus porro.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4  ">
                        <div className="bg-white text-center p-4">
                            <h3 className="fw-bold h2 mb-4">value2</h3>
                            <p>Lorem ipsum dolor sit amet, ullam nobis quia laborum incidunt explicabo! Commodi molestiae accusantium voluptates, pariatur, ullam quasi sequi possimus beatae aliquid obcaecati id. Possimus, consectetur vel excepturi aut itaque animi vero ab ex laudantium reiciendis, magni atque accusamus. Suscipit excepturi at ad sunt. Molestiae omnis autem facere ad sed qui, ducimus porro.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4  ">
                        <div className="bg-white text-center p-4">
                            <h3 className="fw-bold h2 mb-4">value3</h3>
                            <p>Lorem ipsum dolor sit amet, ullam nobis quia laborum incidunt explicabo! Commodi molestiae accusantium voluptates, pariatur, ullam quasi sequi possimus beatae aliquid obcaecati id. Possimus, consectetur vel excepturi aut itaque animi vero ab ex laudantium reiciendis, magni atque accusamus. Suscipit excepturi at ad sunt. Molestiae omnis autem facere ad sed qui, ducimus porro.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <h3 className="text-center h1 mb-5">  {language == 'ع' ? "Our team" : "  فريقنا   "} </h3>
                <div className="row g-3">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div>
                            <img src={female} className="w-100" alt="" />
                            <h3 className="text-center mt-4 mb-2 text-black fw-bold">Naira Ibrahim</h3>
                            <p className={` text-center fs-5 ${style.textSpecial}`}>UI/UX Designer</p>
                            <div className="d-flex justify-content-center fs-4">
                                <img className={`${style.imgSpecial}`} src={facebook} alt="" />
                                <img className={`${style.imgSpecial} mx-2`} src={whatsapp} alt="" />
                                <img className={`${style.imgSpecial}`} src={instgram} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div>
                            <img src={female} className="w-100" alt="" />
                            <h3 className="text-center mt-4 mb-2 text-black fw-bold">Mai Hafez</h3>
                            <p className={` text-center fs-5 ${style.textSpecial}`}>UI/UX Designer</p>
                            <div className="d-flex justify-content-center fs-4">
                                <img className={`${style.imgSpecial}`} src={facebook} alt="" />
                                <img className={`${style.imgSpecial} mx-2`} src={whatsapp} alt="" />
                                <img className={`${style.imgSpecial}`} src={instgram} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div>
                            <img src={male} className="w-100" alt="" />
                            <h3 className="text-center mt-4 mb-2 text-black fw-bold">Ahmed Shaltout</h3>
                            <p className={` text-center fs-5 ${style.textSpecial}`}>Backend Developer</p>
                            <div className="d-flex justify-content-center fs-4">
                                <img className={`${style.imgSpecial}`} src={facebook} alt="" />
                                <img className={`${style.imgSpecial} mx-2`} src={whatsapp} alt="" />
                                <img className={`${style.imgSpecial}`} src={instgram} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-3 justify-content-between g-3 pt-5">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div>
                            <img src={male} className="w-100" alt="" />
                            <h3 className="text-center mt-4 mb-2 text-black fw-bold">Ahmed Yasser</h3>
                            <p className={` text-center fs-5 ${style.textSpecial}`}>Frontend Developer</p>
                            <div className="d-flex justify-content-center fs-4">
                                <img className={`${style.imgSpecial}`} src={facebook} alt="" />
                                <img className={`${style.imgSpecial} mx-2`} src={whatsapp} alt="" />
                                <img className={`${style.imgSpecial}`} src={instgram} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div>
                            <img src={male} className="w-100" alt="" />
                            <h3 className="text-center mt-4 mb-2 text-black fw-bold">Ahmed Hassan</h3>
                            <p className={` text-center fs-5 ${style.textSpecial}`}>Frontend Developer</p>
                            <div className="d-flex justify-content-center fs-4">
                                <img className={`${style.imgSpecial}`} src={facebook} alt="" />
                                <img className={`${style.imgSpecial} mx-2`} src={whatsapp} alt="" />
                                <img className={`${style.imgSpecial}`} src={instgram} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}