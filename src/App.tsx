import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { ContactUs } from "./components/Contact-Us";
import { Hero } from "./components/Hero";
import useWindowDimensions from "./util/useWindowDimension";

function App() {
  const { width, height } = useWindowDimensions();
  return (
    <>
      < Navbar />
      <main className="
        bg-background
        flex
        flex-col
        justify-evenly
      ">
        < Hero width={width} height={height} />
        < About />
        < Products />
        < ContactUs />
      </main>
    </>
  )
}

export default App
