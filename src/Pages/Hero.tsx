import {Link} from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/assets/Logo_orange/horizontal-logo.png"
          alt="Logo"
          className="lg:size-24 zero:size-28 lg:fixed top-0 left-6 xs"
        />
        <img
          src="/assets/headshot.jpeg"
          alt="Headshot image about me."
          className="max-w-md h-full rounded-xl shadow-2xl shadow-gray-500"
        />
        <div>
          <h1 className="text-5xl font-bold text-primary m-2">
            Hello,
            <br /> I'm Krisztián Réthey-Prikkel!
          </h1>{" "}
          <h1 className="text-5xl font-bold text-primary m-2">
            Hello,
            <br /> I'm Krisztián Réthey-Prikkel!
          </h1>
          <div className="text-start font-bold rounded-md text-lg flex flex-col gap-3 py-3 m-2">
            <p>
              A passionate student with a unique blend of technical and business skills. I'm majoring in both
              Programming and Business, allowing me to bridge the gap between the creative problem-solving world of code
              and the strategic planning of the business landscape. This website showcases my abilities and projects.
            </p>
            <Link className="btn btn-accent text-black self-center mt-5" to="/projects">
              Look around
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
