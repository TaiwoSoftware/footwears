import { Body } from "./bodyContent/Body"
import { Navbar } from "./Navbar"

const Home:React.FC = () => {
  return (
    <div className="font-customNunito">
        <Navbar />
        <Body />
    </div>
  )
}

export default Home