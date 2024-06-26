import React, { useContext, useEffect, useState } from "react";
import style from "./Contact.module.css"
import contactImage from "../../assets/images/contactImage.jfif"
import { Helmet } from "react-helmet";
import { FilterProducts } from './../../Context/FilterProducts';
import Joi from "joi"
import axios from "axios";

function Contacts() {
    let { language } = useContext(FilterProducts)
    let [errorList, setErrorList] = useState([])
    const [error, setError] = useState('')
    const [reMessage, setmessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const [messageData, setmessageData] = useState(
        {
            fullName: "",
            email: "",
            phone: "",
            message: "",
        }
    )
    // set interval 
    useEffect(() => {
        if (reMessage) {
            const timeoutId = setTimeout(() => {
                setmessage('');
            }, 5000);

            return () => clearTimeout(timeoutId);
        }
    }, [reMessage]);

    function getmessageData(e) {
        let _messageData = { ...messageData }
        _messageData[e.target.name] = e.target.value;
        setmessageData(_messageData)
        console.log(messageData)
    }
    function validateRegister() {
        let schema = Joi.object({
            fullName: Joi.string().required().min(3).max(50),
            message: Joi.string().required().min(10).max(50),

            email: Joi
                .string()
                .email({ tlds: { allow: ["com", "net"] } })
                .required(),
            phone: Joi.string().regex(/^(?:\+?20|0)(?:1\d{9}|7\d{8}|8\d{8}|9\d{8})$/),

        })
        return (schema.validate(messageData, { abortEarly: false }))
    }
    async function sendData() {
        await axios.post(`https://zunis-node-js.vercel.app/message/messageToAdmin`, messageData,

            {
                "Content-Type": "application/json",
            },
        ).then((response) => {
            console.log(response.data)
            setmessage(response.data?.message)
            setIsLoading(false)
            setmessageData({
                fullName: "",
                email: "",
                phone: "",
                message: "",
            })
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

    return (
        <>
            <Helmet>
                <title>    {language == 'ع' ? "Contact us - sakan" : "تواصل معنا - سكن"}</title>
            </Helmet>
            <div className={`w-100 vh-100 ${style.background} d-flex pt-5 `} style={{ backgroundImage: `URL(${contactImage})` }}>
                <div className="p-5">
                    <h3 className="h1 fw-bold">  {language == 'ع' ? "contact Us" : " تواصل معنا   "}</h3>
                    <p className="h3"> {language == 'ع' ? "For any Question" : "   لاي سؤال   "} </p>
                </div>
            </div>
            <div className={`${style.bgContact} `}>
                <div className="container ">

                    <div className="row ">
                        <div className="col-md-6 py-4">
                            <h3 className="text-light h2 mb-5">
                                {language == 'ع' ? "Fore more details" : "لمزيد من المعلومات"}
                            </h3>
                            <div>
                                <h4 className="text-info">  {language == 'ع' ? "Email  " : " الالكتروني البريد"}</h4>
                                <h5 className="mb-2 text-light">Sakan@house.com</h5>
                                <h4 className="text-info">  {language == 'ع' ? "phone  " : " الهاتف "}</h4>
                                <h5 className="text-light">+2011577954437</h5>
                                <h5 className="text-light">+2012788445537</h5>
                                <h4 className="text-info">   {language == 'ع' ? "Address  " : " العنوان "}</h4>
                                <h5 className="mb-2 text-light">  {language == 'ع' ? "Tanta, Egypt  " : "   مصر , طنطا"}</h5>
                                <div className="socail-media my-4">
                                    <h3 className="text-light"> {language == 'ع' ? "Social media  " : " مواقع التواصل الاجتماعي  "}</h3>
                                    <div className="d-flex mt-3 align-items-center justify-content-start ">
                                        <i className="fa-brands fa-facebook text-primary fs-5 text-white "></i>
                                        <i class="fa-brands fa-instagram text-primary fs-5 text-white mx-3"></i>
                                        <i class="fa-brands fa-twitter text-primary fs-5 text-white "></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6      ">
                            <form onSubmit={submitForm} action="" className=" w-100">
                                {errorList.length > 0 ? <ul>
                                    {errorList.map((item, index) => <li className="text-danger" key={index}>{item.message}</li>)}

                                </ul> : ""}
                                <div className={`${style.bgLayer} px-md-5 pt-3  my-5 px-sm-2  `}>

                                    <h3 className="mb-4"> {language == 'ع' ? "What do you want?  " : " ماذا تريد ان تساءل؟  "}</h3>
                                    <div className="form-group ">
                                        <input onChange={getmessageData} value={messageData.fullName} name="fullName" required type="text" placeholder={language == 'ع' ? "Full Name  " : "    الاسم بالكامل  "} className={`w-100 p-2 ${style.inputContact}`} />
                                    </div>
                                    <div className="form-group my-3">
                                        <input onChange={getmessageData} value={messageData.email} name="email" required type="email" placeholder={language == 'ع' ? "Email  " : " البريد الالكتروني      "} className={`w-100 p-2 ${style.inputContact}`} />

                                    </div>
                                    <div className="form-group my-3">
                                        <input onChange={getmessageData} value={messageData.phone} name="phone" required type="Number" placeholder={language == 'ع' ? "Phone  " : " رقم الهاتف     "} className={`w-100 p-2 ${style.inputContact}`} />

                                    </div>
                                    <div className="form-group ">
                                        <textarea onChange={getmessageData} value={messageData.message} name="message" required className={`w-100 p-2 ${style.inputContact}`} placeholder={language == 'ع' ? "Message  " : "     رسالة  "} id="" cols="30" rows="5"></textarea>
                                    </div>
                                    {error ? <p className="text-danger">{error}</p> : ""}
                                    {reMessage ? <p className="text-success h4 fw-bolder  ">{reMessage}</p> : ""}

                                    <button className={` mt-2 ${style.btnContact} rounded-0  w-100  mb-5 border-0 p-3  text-white`}> {isLoading ? <div className="spinner-border " role="status">
                                        <span className="visually-hidden  ">Loading...</span>
                                    </div> : language == 'ع' ? "Send now  " : "   ارسل الان   "}</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <iframe className="border-0 w-100 vh-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.2011195004666!2d31.00483886028718!3d30.796993774659196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c951c828d9a3%3A0x1442acda87525e4f!2z2LfZhti32Kcg2KfZhNi62LHYqNmK2Yc!5e0!3m2!1sar!2seg!4v1708955936387!5m2!1sar!2seg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
}

export default Contacts;
