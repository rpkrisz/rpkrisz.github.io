import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(./assets/heropic_2.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there! I'm Réthey-Prikkel Krisztián</h1>
          <div className="mb-5 text-start font-bold rounded-md text-primary text-lg  p-5 flex gap-3 flex-col">
            <p>
              I'm a passionate student with a unique blend of technical and business skills. I'm majoring in both
              Programming and Business, allowing me to bridge the gap between the creative problem-solving world of code
              and the strategic planning of the business landscape. This portfolio showcases my projects that
              demonstrate my ability to:
            </p>
            <ul className="list-inside list-disc">
              <li>
                Develop innovative software solutions: Explore my coding projects where I've built applications,
                websites, or tackled programming challenges.
              </li>
              <li>
                Apply business acumen to technology: See how I've combined my programming skills with business
                strategies in projects or coursework.
              </li>
            </ul>
            <p>
              I'm constantly learning and looking for new opportunities to leverage this unique skillset. Feel free to
              browse my portfolio and get in touch if you have any questions or projects that might be a good fit!
            </p>
          </div>
          <Link className="btn btn-primary text-black" to="/about">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
