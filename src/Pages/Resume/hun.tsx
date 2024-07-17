import TitleSubText from "../../Components/TitleSubText";

const Hun = () => {
  return (
    <div className="felx flex-col justify-center px-16 p-2 gap-5">
      <h2 className="text-3xl text-gray-800 underline bg-primary">Tanulmányok</h2>
      <TitleSubText title="Eötvös Loránd Tudományegyetem (2022-)" subtext="Budapest 1117, Pázmány Péter sétány 1/C" />
      <div className="pl-2">
        <p>Informatikai Kar - Programtervező informatikus szak – 4. félév</p>
        <p>Szoftverfejlesztő specializáció</p>
      </div>
      <TitleSubText title="Budapesti Gazdasági Egyetem (2021-)" subtext="Budapest 1149, Buzogány u. 10-12." />
      <div className="pl-2">
        <p>Pénzügyi és Számviteli Kar - Gazdálkodási és menedzsment szak – 6. félév</p>
        <p>Digitális vállalkozás specializáció</p>
        <p>PSZK+ tehetséggondozási program – több tárgyat emelt szinten végeztem</p>{" "}
      </div>
      <TitleSubText title="Teleki Blanka Gimnázium (2016-2021)" subtext="Budapest 1149, Ajtósi Dürer sor 37" />
      <h2 className="text-3xl text-gray-800 underline bg-primary">Tapasztalat</h2>
      <TitleSubText title="Robox kft" subtext="Pomáz 2013, Mester utca 2" />
      <p>Raktározási feladatok: leltározás, csomag összekészítés, csomagolás, fuvarozás</p>
      <TitleSubText title="Medve Matek - Matematika Összeköt Egyesület" />
      <ul className="list-inside list-disc">
        <li className="list-item">Rendezvényszervezés, önkéntesség Medve Matek szabadtéri matekversenyeken </li>
        <li className="list-item">Belső használatú weblap fejlesztése csoportos projekt keretében</li>
        <li className="list-item">Tábori programok kitalálása, összeállítása projekt csapatokban</li>
        <li className="list-item">Tanárként/szervezőként Medve Matek táborokban</li>
      </ul>
      <h2 className="text-3xl text-gray-800 underline bg-primary">Nyelvismeret</h2>
      <p>Angol Középfok (B2)</p>
      <p> Gazdasági angol szaknyelv (B2)</p>
      <h2 className="text-3xl text-gray-800 underline bg-primary">Ismeretek, eredmények</h2>
      <ul className="list-inside">
        <li className="list-item">
          <h3 className="text-xl">ECDL Standard Bizonyítvány</h3>
          <ul className="list-disc list-inside">
            <li className="list-item">Számítógépes alapismeretek</li>
            <li>Online alapismeretek</li>
            <li>Szövegszerkesztés</li>
            <li>Táblázatkezelés</li>
            <li>Adatbázis-kezelés</li>
            <li>Prezentáció</li>
            <li>IT biztonság modulokat</li>
          </ul>
        </li>
        <li className="list-item text-xl">Alapvető SAP ismeretek</li>
        <li>
          <h3 className="text-xl">Cisco Networking Academy</h3>
          <p>IoT Fundamentals: Big Data & Analytics, Certificate of Course Completion</p>
        </li>
        <li>
          <h3 className="text-xl">Programozás</h3>
          <ul className="list-inside list-disc">
            <li>Ismerem: C#, C, Python, PHP, Kotlin, Haskell, SQL</li>
            <li> Magabiztosan használom: HTML, CSS, JavaScript, Java</li>
            <li> Frameworks, Libraries: React, Laravel, Java Ant</li>
          </ul>
        </li>
        <li>
          <h3 className="text-xl">Üzleti Szimulációs Verseny</h3>
          <ul className="list-inside list-disc">
            <li>Diák Menedzsment Bajnokság 2023 5. hely.</li>
            <li>Lámfalussy Sándor Üzleti Szimulációs Verseny 2022 - Középdöntő</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Hun;
