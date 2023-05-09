import { Link } from "react-router-dom";
import data from "../../data.json";

import { HeroCta, Title, HeroImage } from "./AllComponents";

function HeroContent() {
  return (
    <div className="flex flex-col gap-10 sm:gap-6 items-center justify-start sm:flex-row sm:justify-between sm:items-center mt-14 sm:h-[50vh] lg:h-[50vh] xl:h-[60vh]">
      <div className="sm:basis-1/2">
        <Title />
        <HeroCta Link={Link} data={data} />
      </div>
      <HeroImage />
    </div>
  );
}

export default HeroContent;