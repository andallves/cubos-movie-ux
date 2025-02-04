import {ClassificationMovies, LanguageMovies, OrdenacaoMovies} from "../types/filter.ts";



export const languagesMovies: LanguageMovies[] = [
    { code: "en", name: "Inglês" },
    { code: "es", name: "Espanhol" },
    { code: "fr", name: "Francês" },
    { code: "zh", name: "Chinês" },
    { code: "hi", name: "Hindi"},
    { code: "ja", name: "Japonês" },
    { code: "ko", name: "Coreano" },
    { code: "de", name: "Alemão" },
    { code: "it", name: "Italiano" },
    { code: "pt", name: "Português" },
    { code: "ru", name: "Russo" },
    { code: "ar", name: "Árabe" },
    { code: "tr", name: "Turco" },
    { code: "th", name: "Tailandês" },
    { code: "sv", name: "Sueco" },
    { code: "pl", name: "Polonês" },
    { code: "nl", name: "Holandês" },
    { code: "da", name: "Dinamarquês" },
    { code: "no", name: "Norueguês" },
    { code: "fi", name: "Finlandês" },
    { code: "cs", name: "Tcheco" },
    { code: "el", name: "Grego" },
    { code: "he", name: "Hebraico" },
    { code: "vi", name: "Vietnamita" },
    { code: "ta", name: "Tâmil" },
    { code: "te", name: "Telugu" },
    { code: "bn", name: "Bengali" },
    { code: "ml", name: "Malaiala" },
    { code: "uk", name: "Ucraniano" },
];

export const ordenacao: OrdenacaoMovies[] = [
    { id: 1, code: "title.asc", name: "Título"},
    { id: 2, code: "popularity.asc", name: "Popularidade" },
    { id: 3, code: "primary_release_date.asc", name: "Ano de lançamento" },
    { id: 4, code: "vote_count.asc", name: "Mais votado" }
];

export const classificationMovies: ClassificationMovies[] = [
    { value: "", name:"Todos" },
    { value: "L", name: "Livre" },
    { value: "10", name: "12 anos" },
    { value: "12", name: "16 anos" },
    { value: "14", name: "12 anos" },
    { value: "16", name: "16 anos" },
    { value: "18", name: "18 anos" }
];