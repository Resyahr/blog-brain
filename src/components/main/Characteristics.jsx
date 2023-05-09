import data from "../../data.json";

function Characteristics() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-2">
        <h3 className="whitespace-nowrap text-primary font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
          Why Choose BrainBlog?
        </h3>
        <hr className="w-full text-divider" />
      </div>
      {data.mainData.map((item) => {
        return Object.values(item).map((item, index) => {
          const { title, description, image, alt } = item;
          const reverseRow = index % 2 === 1;
          return (
            <div key={index}>
              <div
                className={`my-12 sm:my-24 flex flex-col justify-around items-center gap-6 my ${
                  reverseRow ? "flex sm:flex-row-reverse" : "flex sm:flex-row"
                }`}
              >
                <div className="basis-1/2">
                  <h2 className="text-lg sm:text-xl font-bold text-accent">
                    {title}
                  </h2>
                  <p className="tracking-wider mt-6 text-sm sm:text-lg">
                    {description}
                  </p>
                </div>

                <img
                  src={image}
                  alt={alt}
                  className="max-w-[60%] sm:max-w-[40%]"
                />
              </div>
              <hr className="text-divider w-1/2 mx-auto" />
            </div>
          );
        });
      })}
    </>
  );
}

export default Characteristics;