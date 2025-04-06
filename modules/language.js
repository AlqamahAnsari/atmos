const translations = {
  en: {
    placeholder: "Enter city",
    search: "Search",
    loading: "Loading..."
  },
  es: {
    placeholder: "Ingrese ciudad",
    search: "Buscar",
    loading: "Cargando..."
  },
  fr: {
    placeholder: "Entrez la ville",
    search: "Chercher",
    loading: "Chargement..."
  }
};

export function applyLanguage(lang) {
  document.getElementById("cityInput").placeholder = translations[lang].placeholder;
  document.getElementById("searchBtn").textContent = translations[lang].search;
  document.getElementById("loading").textContent = translations[lang].loading;
}

export function setupLanguageSelector() {
  const selector = document.getElementById("languageSelector");
  selector.addEventListener("change", () => {
    const lang = selector.value;
    applyLanguage(lang);
  });
  applyLanguage(selector.value);
}

export function getCurrentLanguage() {
  return document.getElementById("languageSelector").value;
}
