import Button from "./Button";
export const HeroSection = () => {
  return (
    <section className="max-w-7xl w-full h-full mx-auto px-8 md:px-4">
      <div className="flex flex-col bg-[url('/39.png')] bg-cover object-cover bg-center bg-no-repeat w-full h-full">
        <div className="relative">
          <p className="text-base">Original & Natural</p>
          <img
            src="/Underline.svg"
            alt="underline"
            className="absolute bottom-0 left-0"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold text-color">
            Agriculture
            <span className="relative">
              Matter
              <img
                src="/leaf.svg"
                alt="leaf"
                className="absolute top-0 right-0"
              />
            </span>
          </h2>
          <h2 className="text-4xl font-bold">Good production</h2>
        </div>
        <p className="text-lg font-normal">
          Dissuade ecstatic and properly saw entirely sir why laughter endeavor.
          In on my jointure horrible margaret suitable he speedily.
        </p>
        <Button text={"Discover More"} />
      </div>
    </section>
  );
};