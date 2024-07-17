import TitleSubText from "../../Components/TitleSubText";

const En = () => {
  return (
    <div className="felx flex-col justify-center px-16 p-2 gap-5">
      <h2 className="text-3xl text-gray-800 underline bg-primary">Education</h2>
      <TitleSubText title="Eötvös Loránd Tudományegyetem (2022-)" subtext="Budapest 1117, Pázmány Péter sétány 1/C" />
      <div className="pl-2">
        <p>Faculty of Informatics - Computer Science – 4th semester</p>
        <p>Software developer specialization</p>
      </div>
      <TitleSubText title="Budapesti Gazdasági Egyetem (2021-)" subtext="Budapest 1149, Buzogány u. 10-12." />
      <div className="pl-2">
        <p>Faculty of Finance and Accountancy - Business Administration and Management – 6th semester</p>
        <p>Digital Business specialization</p>
        <p>PSZK+ talent management program - I completed several subjects at an advanced level</p>
      </div>
      <TitleSubText title="Teleki Blanka Gimnázium (2016-2021)" subtext="Budapest 1149, Ajtósi Dürer sor 37" />
      <h2 className="text-3xl text-gray-800 underline bg-primary">Experience</h2>
      <TitleSubText title="Robox kft" subtext="Pomáz 2013, Mester utca 2" />
      <p>Warehouse tasks: stock-taking; packing; cartering</p>
      <TitleSubText title="Medve Matek - Matematika Összeköt Egyesület" />
      <ul className="list-inside list-disc">
        <li className="list-item">Event organization, volunteering at Medve Matek outdoor math competitions</li>
        <li className="list-item">Development of a website for internal use as part of a group project</li>
        <li className="list-item">Designing and compiling camp programs in project teams</li>
        <li className="list-item">As a teacher/organizer in Medve Matek camps</li>
      </ul>
      <h2 className="text-3xl text-gray-800 underline bg-primary">Languages</h2>
      <p>English Intermediate (B2)</p>
      <p>English Economic (B2)</p>
      <h2 className="text-3xl text-gray-800 underline bg-primary">Other skills, Achievements</h2>
      <ul className="list-inside">
        <li className="list-item">
          <h3 className="text-xl">ECDL Standard Certificate</h3>
          <ul className="list-disc list-inside">
            <li>Concepts of Information and Communication Technology</li>
            <li>Documents</li>
            <li>Spreadsheets</li>
            <li>Presentation</li>
            <li>Web</li>
            <li>Browsing and Communication</li>
            <li>Using Databases</li>
            <li>IT-Security</li>
          </ul>
        </li>
        <li className="list-item text-xl">Basic knowledge of SAP</li>
        <li>
          <h3 className="text-xl">Cisco Networking Academy</h3>
          <p>IoT Fundamentals: Big Data & Analytics, Certificate of Course Completion</p>
        </li>
        <li>
          <h3 className="text-xl">Programming</h3>
          <ul className="list-inside list-disc">
            <li>Familiar level: C#, C, Python, PHP, Kotlin, Haskell, SQL</li>
            <li>Confident level: HTML, CSS, JavaScript, Java</li>
            <li>Frameworks, Libraries: React, Laravel, Java Ant</li>
          </ul>
        </li>
        <li>
          <h3 className="text-xl">Business simulation competition</h3>
          <ul className="list-inside list-disc">
            <li>Diák Menedzsment Bajnokság 2023 5th place.</li>
            <li>Lámfalussy Sándor Üzleti Szimulációs Verseny 2022 - Semi-final</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default En;
