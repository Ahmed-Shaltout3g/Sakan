import axios from "axios";
import { createContext, useEffect, useState } from "react"

export let FilterProducts = createContext(0)
function FilterProductsProvide(props) {
    const [price, setPrice] = useState(0);
    const [wordSearch, setWordSearch] = useState("");
    const [expired, setExpired] = useState(true)
    const [userData, setuserData] = useState(null)
    const [type, settype] = useState("home")
    const [messages, setMessages] = useState([]);


    function typeLanguage() {
        return localStorage.getItem('language') != null ? localStorage.getItem('language') : ('ع')
    }
    function putElement() {
        return localStorage.getItem('element') != null ? localStorage.getItem('element') : (null)
    }

    const [language, setLanguage] = useState(typeLanguage())
    const [element, setElement] = useState(putElement())

    useEffect(() => {
        localStorage.setItem('language', language)
        localStorage.setItem('element', element)
    }, [language, element])



    return <FilterProducts.Provider value={{ messages, setMessages, element, setElement, language, setLanguage, price, type, settype, userData, setuserData, expired, setExpired, wordSearch, setPrice, setWordSearch }}>
        {props.children}
    </FilterProducts.Provider>
}
export default FilterProductsProvide;