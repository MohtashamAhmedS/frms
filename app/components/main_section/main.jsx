export default function Main() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* LEFT SHAPE */}
      <div className="absolute left-0 top-[10vh] z-0 w-[16vw]">
        <img src="/shapeA.png" alt="shape" className="w-full" />
      </div>

      {/* TEXT */}
      <div className="relative z-10 text-center max-w-5xl px-10">
        {/* TOP RIGHT IMAGE */}
        <img
          src="/hero-arrow1.png"
          alt=""
          className="absolute -top-20 left-0 "
        />

        <h1 className="text-5xl font-medium tracking-tight">
          At FRMS, where ideas action, we design and develop high-performing,
          inspiring websites that turn your vision into a powerful digital
          presence.
        </h1>

        {/* BOTTOM RIGHT IMAGE */}
        <img
          src="/hero-arrow2.png"
          alt=""
          className="absolute -bottom-2 right-2 "
        />
      </div>

      {/* RIGHT SHAPE */}
      <div className="absolute right-0 bottom-[5vh] z-0 w-[16vw]">
        <img src="/shapeb.png" alt="shape" className="w-full" />
      </div>

      <div className="absolute right-[20vw] top-[16vh] z-0 ">
        <img src="/hero-star.png" alt="shape" className="w-full" />
      </div>
    </section>
  );
}
