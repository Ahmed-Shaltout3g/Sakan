import { useEffect } from "react";
import Categories from "../Categories/Categories";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import Choose from './../Choose/Choose';
import { Helmet } from "react-helmet";
export default function Home() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <>

      <Hero />
      <Categories />
      <Products />
      <Choose />
      <Helmet>
        <title> الصفحة الرئيسية - سكن</title>
      </Helmet>
    </>
  );
}
