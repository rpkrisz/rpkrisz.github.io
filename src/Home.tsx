import HobbyCard from "./Components/hobbyCard";

export default function Home() {
  return (
    <>
      <h1 className="my-3">Főoldal</h1>
      <div className="flex flex-col gap-3 ">
        <p>
          Réthey-Prikkel Krisztián vagyok, egy ambiciózus és lelkes egyetemista, aki párhuzamosan informatikai és üzleti
          területen fejleszti képességeit és tapasztalatait. Jelenleg a Budapesti Gazdasági Egyetemen vagyok hallgató,
          ahol gazdálkodási és menedzsment területen mélyülök el, digitális vállalkozásra specializálódva már 6. féléve.
          Emellett az Eötvös Loránd Tudományegyetemen informatikai karán tanulok, ahol a programtervező informatikus
          szakot választottam, és már a 4. félévben járok.
        </p>
        <p>
          Az informatikai és üzleti világban is jártas vagyok, széles körű ismeretekkel rendelkezem a programozás terén,
          de a gazdasági folyamatokkal és a különféle menedzsment helyzetekkel is jól elboldogulok, akár idegen nyelven
          is.
        </p>
        <p>
          Kreativitásom, kitartásom és problémamegoldó készségem segítségével bármilyen kihívást el tudok fogadni és
          megoldani. Szenvedélyem az innováció és a fejlődés, és hosszú távon egy olyan csapat része szeretnék lenni,
          ahol lehetőségem van ezeket az értékeket kamatoztatni és fejleszteni.
        </p>
      </div>
      <div>
        <h1>Kedvec sportjaim</h1>
        <div className="flex flex-row justify-between gap-10">
          <HobbyCard
            title="Úszás"
            text="Már másfél éves korom óta rendszeresen úsztam életem eslső tíz évében és mostanában kezdtem újra vissza
              járni a medencéhez."
            imageSrc="./assets/Uszas.png"
          />
          <HobbyCard
            title="Thai Box"
            text="Még az álltalános koromban az úszást váltva, a thai box lett a rendszeres mozgás az életemben, és az óta
              is kisebb-naygyobb kihagyásokkal."
            imageSrc="./assets/ThaiBox.png"
          />

          <HobbyCard
            title="Hegyi Kerékpár"
            text="Az elmúlt lassan hat évben gyakran járunk a hegyen biciklivel nincs is job érzés mint a fárasztó
              feltekerés után lehe szágúldani a hogyoldalon."
            imageSrc="./assets/MountainBikeing.svg"
          />
          <HobbyCard
            title="Kajak"
            text="Évek óta egyik kedvenc nyári időtőltésem a Dunakanyarban evezni, a tükör sima víz pedig az egyik
              legmegnyugtatóbb dolog a világon."
            imageSrc="./assets/Kajak.png"
          />
        </div>
      </div>
    </>
  );
}
