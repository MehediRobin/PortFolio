import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5 });
  }, []);
  return (
    <section className="bg-black w-full nav-height relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p
          id="hero"
          className="hero-title text-white">
          Content That Flows, Content That Sells
        </p>
      </div>
    </section>
  );
}

export default Hero;
