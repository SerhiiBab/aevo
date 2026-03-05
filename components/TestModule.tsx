import { useState } from "react";
import UserForm from "./UserForm";
import Quiz from "./Quiz";
import Certificate from "./Certificate";

export default function TestModule() {
  const [user, setUser] = useState(null);
  const [score, setScore] = useState(null);
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <div className="test-main">
      {!user && <UserForm onSave={setUser} />}

      {user && score === null && (
        <Quiz onFinish={setScore} />
      )}

      {score !== null && (
        <div>
          <h2>Ihre Ergebniss: {score}%</h2>

          {score > 80 && (
            <button className="bg-[#ebebeb] px-[15px] py-[10px] mt-[20px]" onClick={() => setShowCertificate(true)}>
              Zertifikat ansehen
            </button>
          )}
        </div>
      )}

      {showCertificate && (
        <Certificate user={user} />
      )}
    </div>
  );
}