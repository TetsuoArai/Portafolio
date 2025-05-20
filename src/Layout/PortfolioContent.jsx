import { lazy } from "react";
import Particles from "../Components/Particle";
import { name } from "../Constant/Name";
import { MySkills } from "../Components/MySkills";
import { ButtonsContact } from "../Components/ButtonsContact";
import MyProjects from "../Components/MyProjects";

const Lanyard = lazy(() => import("../Components/Lanyard"));

export const PortfolioContent = () => {
  return (
    <>
      <div className="z-10 relative hidden xl:block">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]}/>
      </div>
      <section
        id="start"
        className="relative xl:absolute top-0 left-0 w-full overflow-hidden h-screen"
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
          className={"h-full absolute"}
        />

        <h1 className="absolute top-1/2 left-[49%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white text-[35px] lg:text-[100px] z-10">
          {name.map(({ letter, color }, i) => (
            <span
              key={i}
              className={`text-[25px] xs-[45px] sm:text-[60px] md:text-[75px] text-[#FFFFFF] drop-shadow-[0_0_15px_#ffffff] transition-all duration-500 ease-in-out mx-2`}
              style={{
                filter: `drop-shadow(0 0 15px ${color})`,
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        <ButtonsContact />
      </section>

      <MyProjects />

      <MySkills />
    </>
  );
};