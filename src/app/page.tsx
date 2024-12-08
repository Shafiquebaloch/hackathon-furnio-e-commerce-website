import Header from "./Component/Header";
import Hero from "./Component/hero";
import Browse from "./Component/Browse";
import OurProduct from "./Component/products";
import Inspiration from "./Component/inspiration";
import Furniture from "./Component/furniture"
import Footer from "./Component/footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Browse/>
      <OurProduct/>
      <Inspiration/>
      <Furniture/>
      {/* <Show/> */}
      <Footer/>
      
      
    </div>
  );
}
