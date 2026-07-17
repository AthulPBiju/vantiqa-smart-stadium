import { useState } from "react";
import Panel from "../ui/Panel";
import toast from "react-hot-toast";

export default function AlertGenerator() {

  const [language, setLanguage] = useState("English");

  const alerts = {

    English:
      "Attention! Please use Gate D to reduce congestion.",

    Spanish:
      "¡Atención! Utilice la Puerta D para reducir la congestión.",

    French:
      "Attention ! Veuillez utiliser la porte D pour réduire la congestion.",

    Arabic:
      "يرجى استخدام البوابة D لتقليل الازدحام.",

    Hindi:
      "भीड़ कम करने के लिए कृपया गेट D का उपयोग करें।"

  };

  const generateAlert = () => {

    toast.success(`AI Alert generated in ${language}.`);

  };

  return (

    <Panel>

      <h2 className="text-2xl font-bold">
        AI Alert Generator
      </h2>

      <p className="text-slate-400 mt-2">
        Generate multilingual emergency announcements.
      </p>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="mt-6 w-full rounded-xl bg-slate-800 border border-slate-700 p-3"
      >

        {Object.keys(alerts).map((lang) => (

          <option key={lang} value={lang}>
            {lang}
          </option>

        ))}

      </select>

      <div className="mt-6 rounded-xl bg-cyan-900/20 border border-cyan-500 p-5">

        <p className="leading-8 text-slate-200">

          {alerts[language]}

        </p>

      </div>

      <button
        onClick={generateAlert}
        className="mt-6 w-full rounded-xl bg-cyan-600 hover:bg-cyan-500 py-3 font-semibold transition"
      >
        Generate Alert
      </button>

    </Panel>

  );

}