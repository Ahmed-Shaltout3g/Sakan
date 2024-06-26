import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import Joi from "joi"
import { Helmet } from "react-helmet"
import { FilterProducts } from './../../Context/FilterProducts';
import style from "./Register.module.css"
import eye from "../../assets/images/eye.jpg"
import not from "../../assets/images/not.jpg"
export default function Register() {
    let { language } = useContext(FilterProducts)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [viewPassword, setViewPassword] = useState(true);
    let navigate = useNavigate()
    let [errorList, setErrorList] = useState([])
    const [error, setError] = useState('')
    const [reMessage, setmessage] = useState('')


    const [user, setUser] = useState(
        {
            fullName: "",
            email: "",
            password: "",
            cpassword: "",
            phoneNumber: "",
            typeOfUser: "",
            role: "User",
        }
    )


    const [isLoading, setIsLoading] = useState(false)
    function getUser(e) {
        let _user = { ...user }
        _user[e.target.name] = e.target.value;
        setUser(_user)
        console.log(user)
    }
    function validateRegister() {
        let schema = Joi.object({
            fullName: Joi.string().required().min(3).max(50),

            email: Joi
                .string()
                .email({ tlds: { allow: ["com", "net"] } })
                .required(),
            password: Joi.string().required(),
            cpassword: Joi.string().valid(Joi.ref("password")).required(),
            typeOfUser: Joi.string().valid("owner of real estate", "marketing company", "other").required(),
            phoneNumber: Joi.string().regex(/^(?:\+?20|0)(?:1\d{9}|7\d{8}|8\d{8}|9\d{8})$/),
            role: Joi.string().valid("Admin", "User").required(),

        })
        return (schema.validate(user, { abortEarly: false }))
    }
    async function sendData() {
        await axios.post(`https://zunis-node-js.vercel.app/auth/signup`, user,

            {
                "Content-Type": "application/json",
            },
        ).then((response) => {
            console.log(response.data)
            setmessage(response.data?.message)
            setIsLoading(false)

        }).catch((error) => {
            console.log(error.response.data.Error);
            setError(error.response.data?.Error);
            setIsLoading(false)

        });
    }
    function submitForm(e) {
        e.preventDefault()
        setIsLoading(true)
        setmessage("")
        setError("");


        let validation = validateRegister()
        if (validation.error) {
            setIsLoading(false)
            setmessage("")
            setError("");


            setErrorList(validation.error.details)
        } else {
            console.log('true')
            sendData()
        }
    }

    return <>
        <Helmet>

            {language == 'ع' ? `Sign up - Sakan` : `انشاء حساب - سكن`}
        </Helmet>
        <div className="py-5">
            <div className="d-flex w-100 justify-content-center py-5">
                <form onSubmit={submitForm} action="" className={` p-4 `}>
                    {errorList.length > 0 ? <ul>
                        {errorList.map((item, index) => <li className="text-danger" key={index}>{item.message}</li>)}

                    </ul> : ""}

                    <h3 className="mb-3 h4 ">{language == 'ع' ? `Sign up` : `انشاء حساب `}</h3>
                    <div className="form-group my-3">
                        <input onChange={getUser} type="text" placeholder={language == 'ع' ? `full Name` : `الاسم بالكامل`} className="w-100 p-2 " name="fullName" />
                    </div>
                    <div className="form-group my-3">
                        <input onChange={getUser} type="text" placeholder={language == 'ع' ? `Email` : `البريد الالكتروني`} className="w-100 p-2 " name="email" />
                    </div>
                    <div className="form-group my-3 ">
                        <div className="position-relative">
                            <input onChange={getUser} type={viewPassword == false ? "text" : "password"} name="password" placeholder={language == 'ع' ? `Password` : `كلمة المرور`} className="w-100 p-2 " />
                            {viewPassword ? <img onClick={() => { setViewPassword(false) }} className={`${style.imgIcon}  `} src={not} alt="" style={language == 'ع' ? { right: "2%" } : { left: "2%" }} /> : <img onClick={() => { setViewPassword(true) }} className={`${style.imgIcon}`} src={eye} alt="" style={language == 'ع' ? { right: "2%" } : { left: "2%" }} />}
                        </div>


                    </div>
                    <div className="form-group my-3 ">
                        <div >
                            <input onChange={getUser} type={viewPassword == false ? "text" : "password"} name="cpassword" placeholder={language == 'ع' ? `Confirm Password` : `تاكيد كلمة المرور`} className="w-100 p-2 " />
                        </div>

                    </div>
                    <div className="form-group my-3">
                        <input onChange={getUser} type="text" name="phoneNumber" placeholder={language == 'ع' ? `Phone number` : `رقم الهاتف`} className="w-100 p-2 " />
                    </div>
                    <select onChange={(getUser)} className="w-100 p-1 " name="typeOfUser">
                        <option value="">{language == 'ع' ? `-- Type of Account --` : `-- نوع الحساب --`}</option>
                        <option value="owner of real estate">{language == 'ع' ? `owner of property` : `صاحب عقار `}</option>
                        <option value="marketing company"> {language == 'ع' ? `Marketing Company` : `شركة تسويق عقاري `}</option>
                        <option value="other"> {language == 'ع' ? `Other` : `شيء اخر `}</option>
                    </select>


                    <div className=" mt-3">
                        {error ? <p className="text-danger">{error}</p> : ""}
                        <button type="submit" className="btn btn-primary rounded-0 w-100 ">  {isLoading ? <div className="spinner-border " role="status">
                            <span className="visually-hidden  ">Loading...</span>
                        </div> : language == 'ع' ? "Register" : 'انشاء حساب'} </button>
                    </div>
                    {reMessage ? <p className="text-primary">{reMessage}</p> : ""}
                    {language == 'ع' ? <p className="mt-3">   I have Accout<Link to={'/login'}>  Login</Link>  </p> : <p className="mt-3"> لدي حساب بالفعل<Link to={'/login'}> تسجيل الدخول</Link>  </p>}


                </form>
            </div>
        </div>
    </>
}