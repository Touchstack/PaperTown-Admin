import { Header, LeftSection, RightSection} from "./components"

const DashBoard = () => {
  return (
    <div className="mt-2 bg-[#F6F6F6] rounded-[25px]">
      <Header />
      <div className="flex lg:flex-row flex-col items-center justify-center">
      <LeftSection />
      <RightSection />
      </div>
    </div>
  )
}

export default DashBoard
