

export default function Certificate({ user }) {
 const today = new Date().toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

 
  const randomNumber = Math.floor(100000 + Math.random() * 900000);


  return (
    <div className="certificate bg-gradient-to-t from-blue-200 to-white">
      <div className="ml-[373px]"><img className="flex flex-end" src="/aevo.png"></img></div>
      <p className="text-[12px] ml-[440px] pb-[150px]">www.aevo-express.de</p>
      <h1 className="text-2xl">Teilnahmebescheinigung / Zertifikat</h1>
      <p className="text-[15px] mt-[30px]">Hiermit wird bescheinigt, dass</p>
      <p className="text-[15px] font-bold">
        {user.vorname} {user.name}
      </p>
      <p className="text-[15px]">erfolgreich am Kurs</p>
      <p className="text-[15px] font-bold">"Ausbildereignungsprüfung (AEVO) Vorbereitungskurs"</p>
      <p className="text-[15px] mb-[30px]">teilgenommen hat.</p>
      <p className="text-[15px] font-bold">Studieninhalte im Detail:</p>
      <p className="text-[15px] font-bold">Ausbildung planen und vorbereiten</p>
      <p className="text-[13px]">Ausbildungsvoraussetzungen prüfen und planen Vorteile und Nutzen der betrieblichen
Ausbildung, Strukturen des Berufsbildungssystems, Ausbildungsberufe für den Betrieb
auswählen, Prüfung des Betriebes auf Eignung, Aufgaben der Mitwirkenden abstimmen,
Ausbildungsplan prozessorientiert erstellen, Kooperationsbedarf mit relevanten Stellen, Kriterien
zur Auswahl von Auszubildenden, Berufsausbildungsvertrag vorbereiten</p>
<p className="text-[15px] font-bold">Ausbildung durchführen</p>
<p className="text-[13px]">Lernförderliche Bedingungen schaffen, Probezeit organisieren, gestalten, bewerten, Lern und
Arbeitsaufgaben entwickeln, Ausbildungsmethoden auswählen und einsetzen, Auszubildende
unterstützen und betreuen, Konfliktbewältigung und Förderung, Zusatzqualifikationen und
Verkürzung, Interkulturelle Kompetenzen fördern</p>
<p className="text-[15px] font-bold">Ausbildung abschließen und weiterentwickeln</p>
<p className="text-[13px]">Auszubildende auf Prüfungen vorbereiten, Anmeldung zu Prüfungen veranlassen, Leistungen
bewerten & Ergebnisse auswerten, Schriftliches Zeugnis erstellen, Beratung über betriebliche
Entwicklungswege, Berufliche Weiterbildungsmöglichkeiten</p>

<div className="flex justify-between mt-[40px] mb-[70px]">
<p className="text-[15px]">Geschäftsführung</p>
<img className="max-w-[180px]" src="/unterschrift.jpg"></img>
<p className="text-[15px]">Datum: {today}</p>
</div>


<div>
<p className="text-[12px]">AEVO Express</p>
<p className="text-[12px]">www.aevo-express.de</p>
<p className="text-[12px]">e-mail: aevoexpress@gmail.com</p>
</div>
<p className="text-[12px] mt-[20px]">{randomNumber}<br/><span className="text-[10px]"> Dieses Zertifikat bescheinigt die Teilnahme am Vorbereitungskurs für die AEVO-Prüfung. Es stellt keine offizielle Bestehensbescheinigung der AEVO-Prüfung dar. Die Teilnahme erfolgte auf eigene Verantwortung.</span></p>

    </div>
  );
}