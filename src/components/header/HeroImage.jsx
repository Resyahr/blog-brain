import data from "../../data.json"

function HeroImage() {
  return (
    <img className="min-w-[200px] max-w-[40%]" src={data?.heroImage} alt={data?.heroImageAlt} />
  )
}

export default HeroImage