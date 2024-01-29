import NarrativeBody from "./NarrativeBody"
import NarrativeCards from "./NarrativeCards"
import NarrativeHeader from "./NarrativeHeader"

const Narrative = () => {
  return (
    <div className="mt-2 bg-[#F6F6F6] rounded-[25px]">
        <NarrativeHeader/>
        <NarrativeBody/>
        <NarrativeCards/>
        </div>
  )
}

export default Narrative
