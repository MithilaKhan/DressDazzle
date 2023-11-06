
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import HolidayFrame from "./HolidayFrame/HolidayFrame";
import Services from "./Services/Services";
import Trending from "./Trending/Trending";
import WinterOffer from "./WinterOffer/WinterOffer";

const HomePage =()=> {
  return (
    <main className="max-w-[1580px] mx-auto font-[Poppins] p-10">
     <Banner/> 
     <Trending/>
<WinterOffer/>
<Featured/>
<HolidayFrame/>
  <Services/>  
  
    </main>
  )
}
export default HomePage;