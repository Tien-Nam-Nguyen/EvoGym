import NavBar from "@/scenes/navbar";
import OurClasses from '@/scenes/ourClasses'
import Home from "@/scenes/home"
import Footer from '@/scenes/footer'
import ContactUs from '@/scenes/contactUs'
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Benefits from "./scenes/benefits";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }

      if (window.scrollY !== 0) 
        setIsTopOfPage(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return <div className="app bg-gray-20">
      <NavBar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer />
    </div>
}

export default App
