import { useState } from "react";

export default function UserForm({ onSave }) {
  const [form, setForm] = useState({
    vorname: "",
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="test-main--inputs">
      <input
        name="vorname"
        placeholder="Vorname"
        onChange={handleChange}
      />
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <button className="start-taste" onClick={() => onSave(form)}>
        Start
      </button>
    </div>
  );
}