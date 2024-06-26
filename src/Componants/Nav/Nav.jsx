import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import style from "./Nav.module.css"
import { useContext, useEffect, useState } from 'react';
import { FilterProducts } from "../../Context/FilterProducts";

export default function Nav() {
    let { setExpired, expired, userData, setuserData, messages, language, setLanguage } = useContext(FilterProducts)
    let [read, setRead] = useState(false);

    let navigate = useNavigate()
    function logOut() {
        localStorage.removeItem('user')
        navigate('/login')
    }
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
            setScrollTop(window.pageYOffset);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollTop > 50) {
            document.querySelector('nav').classList.add('bg-white')
        } else {
            document.querySelector('nav').classList.remove('bg-white')

        }
    }, [scrollTop]);
    useEffect(() => {
        if (language == 'Eng') {
            document.querySelector('body').style.cssText = "  direction: rtl !important "
            document.querySelector('ul').classList.replace('ms-auto', 'me-auto')
        }
        else {
            document.querySelector('body').style.cssText = "  direction: ltr !important "
            document.querySelector('ul').classList.replace('me-auto', 'ms-auto')
        }

    }, [language])
    function changeMessageNumber() {
        setRead(true)
    }


    return <>
        <nav className={`navbar position-fixed start-0 end-0 navbar-expand-lg py-1 `}>
            <div className="container">
                <Link className="navbar-brand fs-1 fw-bold" to="/">
                    <img src={logo} className="w-100" alt="" />
                </Link>
                <button className={`bg-white border-0 ${style.menuButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item  px-1">
                            <Link className={`nav-link ${style.linkHover}  fs-5 fw-bold `} aria-current="page" to="/">{language == 'ع' ? "Home" : "الصفحة الرئيسية "}</Link>
                        </li>
                        <li className={`nav-item  px-1 pt-1 ${style.wSM100}`}>
                            <div className={`dropdown  fs-5   w-100`}>
                                <button className={`border-0 w-100 text-start py-2 bg-transparent dropdown-toggle fw-bold ${style.linkHover}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {language == 'ع' ? "Properties" : " عقارات "}
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link to={'/getproducts/appartment/65d8c2138bfd8107356010e2'} className="dropdown-item">{language == 'ع' ? "Appartments" : " شقق "}</Link></li>
                                    <li><Link to={'/getproducts/home/65d8c1c01269fe7a10558011'} className="dropdown-item">{language == 'ع' ? "Homes" : " بيوت "} </Link></li>
                                    <li><Link to={'/getproducts/land/65d8c23b1269fe7a1055818b'} className="dropdown-item">{language == 'ع' ? "Lands" : " اراضي "}  </Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item  px-1">
                            <Link className={`nav-link ${style.linkHover}  fs-5 fw-bold`} aria-current="page" to="/about">  {language == 'ع' ? "About" : " نبذة عننا "}   </Link>
                        </li>
                        <li className="nav-item  px-1">
                            <Link className={`nav-link ${style.linkHover}  fs-5 fw-bold`} aria-current="page" to="/contact">{language == 'ع' ? "Contact Us" : " تواصل معنا "} </Link>
                        </li>

                        <li className="nav-item  px-1">
                            {localStorage.getItem("user") != null ? <Link className={`nav-link ${style.linkHover}  fs-5 fw-bold`} aria-current="page" to="/myad">  {language == 'ع' ? "My Ads" : " اعلاناتي  "} </Link> : ""}
                        </li>
                        <li className="nav-item  px-1">
                            {localStorage.getItem('user') == null ? <Link className={`nav-link ${style.linkHover}  fs-5 fw-bold`} aria-current="page" to="/login">   {language == 'ع' ? "Login" : " تسجيل الدخول  "}   </Link> : <Link onClick={logOut} className={`nav-link ${style.linkHover}  fs-5 fw-bold`}>  {language == 'ع' ? "LogOut" : " خروج  "}   </Link>}
                        </li>
                        <li className="nav-item mt-2  px-1">
                            {localStorage.getItem('user') != null ? <Link onClick={changeMessageNumber} to="/message" class="navbar-icon mx-2 navbar-cart-icon">
                                <i className="fa-solid fa-message"></i>
                                <div className="cart-items fw-bolder">{messages ? messages.length : 0}</div>
                            </Link> : ""}
                        </li>
                        {language == 'ع' ? <li onClick={() => { setLanguage('Eng') }} className={`nav-item  px-1`}>
                            <p className={`nav-link ${style.linkHover}  fs-5 fw-bold `} aria-current="page" > {language} </p>
                        </li> : <li onClick={() => { setLanguage('ع') }} className="nav-item  px-1">
                            <p className={`nav-link ${style.linkHover}  fs-5 fw-bold `} aria-current="page" > {language} </p>
                        </li>}
                    </ul>
                </div>
            </div>
        </nav>
    </>
}