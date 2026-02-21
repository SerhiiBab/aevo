import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Nachricht');
      }

      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
    } catch (err) {
      setError('Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Bereit für Ihren Karrieresprung?
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Sichern Sie sich jetzt Ihren Platz in unserem nächsten Vorbereitungskurs.
              Haben Sie noch Fragen? Unser Team berät Sie gerne unverbindlich.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl text-slate-900 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  ✓
                </div>
                <h3 className="text-2xl font-bold mb-4">Vielen Dank!</h3>
                <p className="text-slate-600">
                  Ihre Nachricht wurde erfolgreich versendet. 
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-blue-600 font-semibold hover:underline"
                >
                  Neue Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Vorname
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                      placeholder="Max"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Nachname
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                      placeholder="Mustermann"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    E-Mail Adresse
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                    placeholder="max@beispiel.de"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Ihre Nachricht
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                    placeholder="Wann startet der nächste Kurs?"
                  ></textarea>
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full text-white font-bold py-4 rounded-xl transition-all transform ${
                    loading
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 hover:-translate-y-1'
                  }`}
                >
                  {loading ? 'Wird gesendet...' : 'Jetzt unverbindlich anfragen'}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  Durch das Absenden erklären Sie sich mit unserer{' '}
                  <a href="#" className="underline">
                    Datenschutzerklärung
                  </a>{' '}
                  einverstanden.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;