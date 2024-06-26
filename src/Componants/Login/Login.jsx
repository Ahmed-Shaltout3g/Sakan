import axios from "axios";
import Joi from "joi";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FilterProducts } from './../../Context/FilterProducts';
import style from "../../Componants/Register/Register.module.css"
import eye from "../../assets/images/eye.jpg"
import not from "../../assets/images/not.jpg"
export default function Login() {
    let { language } = useContext(FilterProducts)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    let navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: "",
        role: "User"
    })
    const [error, setError] = useState('')
    const [errorList, setErrorList] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [viewPassword, setViewPassword] = useState(true);

    function getUserInfoLogin(e) {
        let _user = { ...user }
        _user[e.target.name] = e.target.value;
        setUser(_user)
    }
    function LoginValidator() {
        let schema = Joi.object({
            email: Joi.string().email({ tlds: { allow: ["com", "net"] } }).required(),
            password: Joi.string().required(),
            role: Joi.string().required(),


        })
        return schema.validate(user, { abortEarly: false })
    }
    async function sendData() {
        await axios.post(`https://zunis-node-js.vercel.app/auth/signin`, user).then((response) => {
            localStorage.setItem('user', response.data.token);
            navigate("/");
        }).catch((error) => {
            setError(error.response.data.Error)
            console.log(error)
            setIsLoading(false);
        })
    }
    function submitLogin(e) {
        e.preventDefault()
        setIsLoading(true)
        setError("")
        setErrorList("")


        let validation = LoginValidator()
        if (validation.error) {
            setIsLoading(false)
            setError("")

            setErrorList(validation.error.details)
            console.log(errorList)
        } else {
            sendData()

        }


    }








    return <>
        <Helmet>
            <title> {language == 'ع' ? "Login Page - Sakan " : " تسجيل الدخول - سكن "} </title>
        </Helmet>
        <div className="d-flex justify-content-center align-items-center vh-100 w-100">
            <form onSubmit={submitLogin} action="" className={`  p-4`}>
                {errorList.length > 0 ? <ul>
                    {errorList.map((item, index) => <li className="text-danger" key={index}>{item.message}</li>)}

                </ul> : ""}
                <h3 className="mb-3 h4 ">  {language == 'ع' ? "Login " : " تسجيل الدخول"}</h3>
                <div className="form-group my-3">
                    <input onChange={getUserInfoLogin} name="email" type="text" placeholder={language == 'ع' ? "Email " : "البريد الاللكتروني "} className="w-100 p-2 " />
                    {false ? <input onChange={getUserInfoLogin} name="role" value={"User"} type="text" />
                        : ""}
                </div>

                <div className="form-group my-3">
                    <div className="position-relative">
                        <input onChange={getUserInfoLogin} name="password" type={viewPassword == false ? "text" : "password"} placeholder={language == 'ع' ? "Password " : " كلمة المرور"} className="w-100 p-2 " />
                        {viewPassword ? <img onClick={() => { setViewPassword(false) }} className={`${style.imgIcon}  `} src={not} alt="" style={language == 'ع' ? { right: "2%" } : { left: "2%" }} /> : <img onClick={() => { setViewPassword(true) }} className={`${style.imgIcon}`} src={eye} alt="" style={language == 'ع' ? { right: "2%" } : { left: "2%" }} />}
                    </div>

                </div>
                <div className=" mt-3">
                    {error ? <p className="text-danger">{error}</p> : ""}
                    <button type="submit" className="btn btn-primary rounded-0 w-100 "> {isLoading ? <div className="spinner-border " role="status">
                        <span className="visually-hidden  ">Loading...</span>
                    </div> : language == 'ع' ? "Login" : "دخول"}</button>
                </div>
                {language == 'ع' ? <p className="mt-3">  I have not Accout <Link to={'/register'}> Create Accout</Link>  </p> : <p className="mt-3">ليس لدي حساب <Link to={'/register'}>انشاء حساب</Link>  </p>}
            </form>
        </div>
    </>
}