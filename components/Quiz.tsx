import { useState } from "react";

const questions = [
  {
    question: "1. Welche Aussage beschreibt das duale System korrekt?",
    answers: ["Ausbildung findet ausschließlich in der Berufsschule statt.", "Ausbildung findet ausschließlich im Betrieb statt.", "Ausbildung erfolgt sowohl im Betrieb als auch in der Berufsschule.", "Ausbildung erfolgt nur online."],
    correct: 2
  },
  {
    question: "2. Welche Aufgaben haben die Kammern im Ausbildungsprozess?",
    answers: ["Prüfung der Eignung des Betriebes", "Eintragung von Ausbildungsverträgen", "Durchführung der Zwischen- und Abschlussprüfungen", "Alle oben genannten"],
    correct: 3
  },
  {
    question: "3. Welches Gesetz regelt speziell die Ausbildung im Handwerk?",
    answers: ["BBiG", "HwO", "JArbSchG", "Arbeitszeitgesetz"],
    correct: 1
  },
  {
    question: "4. Ein minderjähriger Auszubildender arbeitet täglich 9 Stunden. Ist dies rechtlich zulässig nach JArbSchG?",
    answers: ["Ja, immer", "Ja, wenn er über 16 Jahre alt ist", "Nein, die tägliche Arbeitszeit darf 8 Stunden nicht überschreiten", "Nein, er darf nur 6 Stunden arbeiten"],
    correct: 2
  },
  {
    question: "5. Ihr Betrieb möchte einen Ausbildungsplatz für Kaufleute besetzen. Welche Schritte sind korrekt, um die Eignung des Betriebs zu prüfen?",
    answers: ["Persönliche und fachliche Eignung der Ausbilder prüfen", "Sachliche Ausstattung des Betriebs überprüfen", "Organisation der Ausbildung im Unternehmen planen", "Alles oben Genannte"],
    correct: 3
  },
  {
    question: "6. Welche Aussage beschreibt das Maslow’sche Bedürfnismodell korrekt im Kontext der Ausbildung?",
    answers: ["Motivation entsteht nur durch Geld und materielle Belohnungen", "Motivation hängt von einer Hierarchie der Bedürfnisse ab: von Grundbedürfnissen bis zu Selbstverwirklichung", "Motivation ist nur intrinsisch und unabhängig von äußeren Faktoren", "Motivation kann durch Druck und Angst gesteigert werden"],
    correct: 1
  },
  {
    question: "7. Herzberg unterscheidet in der Motivationstheorie zwischen:",
    answers: ["Hygienefaktoren und Motivatoren", "Kognitiven und affektiven Faktoren", "Praktischen und theoretischen Faktoren", "Instruktiven und operativen Faktoren"],
    correct: 0
  },
  {
    question: "8. Welcher Führungsstil ist in der Ausbildung besonders förderlich, um Lernende zu motivieren?",
    answers: ["Autoritär – klare Regeln, wenig Mitsprache", "Laissez-faire – völlige Freiheit, keine Anleitung", "Kooperativ / partizipativ – Lernende einbeziehen, unterstützen, Feedback geben", "Desinteressiert – Ausbilder mischt sich nicht ein"],
    correct: 2
  },
  {
    question: "9. Ein Auszubildender versteht eine Aufgabe nicht und macht Fehler. Welche Feedbackstrategie ist richtig?",
    answers: ["Laut schimpfen, um Aufmerksamkeit zu erzeugen", "Konstruktiv erklären, Fehler aufzeigen, Lösung gemeinsam erarbeiten", "Aufgabe ignorieren, der Auszubildende soll selbst darauf kommen", "Andere Lernende korrigieren lassen"],
    correct: 1
  },
  {
    question: "10. Welche Merkmale beschreiben SMART-Lernziele?",
    answers: ["Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert", "Spezifisch, Messbar, Akzeptiert, Realistisch, Terminiert", "Schnell, Motiviert, Ansprechend, Realistisch, Terminiert", "Standardisiert, Messbar, Aktiv, Realistisch, Terminiert"],
    correct: 1
  },
  {
    question: "11. Welches ist das Ziel der Probezeit?",
    answers: ["Den Auszubildenden vollständig auszubilden", "Die Eignung des Auszubildenden für den Beruf und Betrieb zu prüfen", "Eine Probeprüfung abzuhalten", "Vergütung auszusetzen"],
    correct: 1
  },
  {
    question: "12. Welche Methoden eignen sich, um Leistungen während der Probezeit zu beobachten und zu beurteilen?",
    answers: ["Regelmäßige praktische Aufgaben", "Beobachtung der Arbeitsweise und Sozialverhalten", "Feedbackgespräche", "Alle oben genannten"],
    correct: 3
  },
  {
    question: "13. Welche Maßnahmen helfen, Lernschwierigkeiten bei Auszubildenden zu erkennen?",
    answers: ["Regelmäßige Beobachtung der Arbeitsaufgaben", "Gespräch mit dem Auszubildenden über Lernprobleme", "Analyse von Zwischenprüfungsergebnissen", "Alle oben genannten"],
    correct: 3
  },
  {
    question: "14. Welche Fördermaßnahmen können zur Unterstützung von Auszubildenden eingesetzt werden?",
    answers: ["Zusatzaufgaben / Lernhilfen", "Individuelle Unterweisungen oder Coaching", "Praktische Übungen zur Übung von Schwachstellen", "Alle oben genannten"],
    correct: 3
  },
  {
    question: "15. Wie kann ein Ausbilder Konflikte im Ausbildungsbetrieb lösen?",
    answers: ["Konflikte ignorieren", "Offene Kommunikation und Mediationsgespräche", "Auszubildende alleine entscheiden lassen", "Konflikte sofort mit Sanktionen bestrafen"],
    correct: 1
  },
  {
    question: "16. Welches Ziel hat die Zwischenprüfung?",
    answers: ["Abschluss der Ausbildung dokumentieren", "Lernstand prüfen und rechtzeitig Förderbedarf erkennen", "Nur die Berufsschule bewerten", "Ausbildungsvergütung erhöhen"],
    correct: 1
  },
  {
    question: "17. Die Abschlussprüfung Teil 1 und 2 dient dazu,",
    answers: ["nur die theoretischen Kenntnisse zu prüfen", "praktische und theoretische Kompetenzen des Auszubildenden nach BBiG/HwO zu bewerten", "die Probezeit zu verlängern", "ausschließlich die Mitarbeit im Betrieb zu beurteilen"],
    correct: 1
  },
  {
    question: "18. Welche Beurteilungskriterien sind bei der Bewertung von Auszubildenden relevant?",
    answers: ["Fachliche Kompetenz", "Soziale Kompetenz", "Methodische Kompetenz", "Alle oben genannten"],
    correct: 3
  },
  {
    question: "19. Ein Ausbilder beurteilt einen Auszubildenden aufgrund seiner sympathischen Persönlichkeit positiver als seine tatsächliche Leistung zeigt. Welcher Beobachtungsfehler liegt hier vor?",
    answers: ["Halo-Effekt", "Mildefehler", "Strengefehle", "Sympathiefehler"],
    correct: 3
  },
  {
    question: "20. Beim Beurteilungsgespräch ist es besonders wichtig:",
    answers: ["Nur negative Punkte anzusprechen", "Konkrete Beispiele für Leistungen zu nennen", "Subjektive Eindrücke ohne Belege zu äußern", "Gespräch kurz und knapp zu halten, ohne Fragen"],
    correct: 1
  },
  {
    question: "21. Welche Bestandteile hat die schriftliche AEVO-Prüfung typischerweise?",
    answers: ["Multiple-Choice-Aufgaben", "Fallbeispiele / Situationsaufgaben", "Theoretische Fragen zu rechtlichen Grundlagen, Planung und Durchführung der Ausbildung", "Alle oben genannten"],
    correct: 3
  },
  {
    question: "22. Welche Strategie ist sinnvoll, um Multiple-Choice-Aufgaben zu bearbeiten?",
    answers: ["Jede Antwort sofort ankreuzen, ohne zu lesen", "Zuerst den Aufgabeninhalt genau lesen, Ausschlussverfahren nutzen und Zeit einteilen", "Nur die erste Antwort ankreuzen, die plausibel erscheint", "Antworten raten, ohne den Text zu lesen"],
    correct: 1
  },
  {
    question: "23. Welche Punkte sollte ein Prüfling beachten, um das Fachgespräch erfolgreich zu meistern?",
    answers: ["Fachliche Begründungen für Handlungen geben", "Fragen sachlich und strukturiert beantworten", "Unsicherheiten offen zugeben und Lösungen erläutern", "Alle oben genannten"],
    correct: 3
  },
  {
    question: "24. Welche Tipps für Zeitmanagement in der praktischen Prüfung sind sinnvoll?",
    answers: ["Unterweisung im Vorfeld genau planen", "Zeit für Begrüßung, Erklärung, Eigenübung und Feedback einteilen", "Nicht mehr als 15 Minuten überschreiten", "Alle oben genannten"],
    correct: 3
  },
  {
    question: "25. Während der Unterweisung zeigen die Auszubildenden Verständnisprobleme. Wie sollte der Prüfling reagieren?",
    answers: ["Geduldig nachfragen, Aufgaben ggf. Schritt für Schritt wiederholen", "Fehler sofort korrigieren und erklären, warum es falsch war", "Zusätzliche Übungsschritte einbauen, um Verständnis zu sichern", "Alle oben genannten"],
    correct: 3
  },
];

export default function Quiz({ onFinish }) {
  const [selected, setSelected] = useState({});

  const handleSelect = (qIndex, aIndex) => {
    setSelected({ ...selected, [qIndex]: aIndex });
  };

  const checkAnswers = () => {
    let correctCount = 0;

    questions.forEach((q, index) => {
      if (selected[index] === q.correct) {
        correctCount++;
      }
    });

    const percent = Math.round((correctCount / questions.length) * 100);
    onFinish(percent);
  };

  return (
    <div>
      {questions.map((q, qIndex) => (
        <div className="pb-[15px] flex flex-col" key={qIndex}>
          <h3 className="text-xl">{q.question}</h3>

          {q.answers.map((answer, aIndex) => (
            <label key={aIndex}>
              <input
                className="mr-[10px]" 
                type="radio"
                name={`question-${qIndex}`}
                onChange={() => handleSelect(qIndex, aIndex)}
              />
              {answer}
            </label>
          ))}
        </div>
      ))}

      <button className="ergebnis-taste bg-[#ebebeb] py-[10px] px-[15px]" onClick={checkAnswers}>
        Ergebnis anzeigen
      </button>
    </div>
  );
}