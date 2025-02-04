import {
    ClassificationMovies,
    LanguageMovies,
    OrderingMovies,
    PopularityMovies,
    StreamingMovies
} from "../types/filter.ts";

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

export const orderingMovies: OrderingMovies[] = [
    { id: 1, code: "title.desc", name: "Título"},
    { id: 2, code: "popularity.desc", name: "Popularidade" },
    { id: 3, code: "primary_release_date.desc", name: "Ano de lançamento" },
    { id: 4, code: "vote_count.desc", name: "Mais votado" }
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

export const popularityMovies: PopularityMovies[] = [
    { value: "80", name: "Alta (80+)" },
    { value: "79", name: "Baixa (menos de 80)" },
]

export const ratingMovies = Array.from({ length: 10 }, (_, index) => index);

export const streamingMovies: StreamingMovies[] = [
    { id: "8", name: "Netflix" },
    { id: "9", name: "Amazon Prime Video" },
    { id: "337", name: "Disney Plus" },
    { id: "15", name: "Hulu" },
    { id: "384", name: "HBO Max" },
    { id: "531", name: "Paramount+" },
    { id: "619", name: "Star+" },
    { id: "283", name: "Crunchyroll" },
    { id: "39", name: "NOW TV" },
    { id: "386", name: "Apple TV Plus" },
    { id: "350", name: "Apple iTunes" },
    { id: "521", name: "Globo Play" },
    { id: "307", name: "Claro Video" },
    { id: "167", name: "Sky Go" },
    { id: "29", name: "Google Play Movies" },
    { id: "3", name: "Google Play" },
    { id: "2", name: "Apple TV" },
    { id: "192", name: "YouTube" },
    { id: "7", name: "Vudu" },
    { id: "11", name: "Mubi" },
    { id: "68", name: "Microsoft Store" },
    { id: "179", name: "Telecine Play" },
    { id: "63", name: "Filmin" },
    { id: "190", name: "CuriosityStream" },
    { id: "96", name: "Canal+" },
    { id: "497", name: "Starz Play" },
    { id: "546", name: "Rakuten TV" },
    { id: "540", name: "Amazon Video" },
    { id: "100", name: "DirectTV" },
    { id: "582", name: "Peacock" },
    { id: "521", name: "Globo Play" },
    { id: "546", name: "Rakuten TV" },
    { id: "551", name: "Movistar Play" },
    { id: "554", name: "Claro Video" },
    { id: "559", name: "Looke" },
    { id: "573", name: "Pluto TV" },
    { id: "579", name: "HBO Go" },
    { id: "580", name: "HBO Now" },
    { id: "581", name: "HBO" },
    { id: "582", name: "Peacock" },
    { id: "583", name: "Paramount+" },
    { id: "584", name: "Discovery+" },
    { id: "585", name: "AMC+" },
    { id: "586", name: "Showtime" },
    { id: "587", name: "Starz" },
    { id: "588", name: "BET+" },
    { id: "589", name: "Acorn TV" },
    { id: "590", name: "BritBox" },
    { id: "591", name: "Criterion Channel" },
    { id: "592", name: "Fandor" },
    { id: "593", name: "Hallmark Movies Now" },
    { id: "594", name: "History Vault" },
    { id: "595", name: "IMDb TV" },
    { id: "596", name: "Lifetime Movie Club" },
    { id: "597", name: "Pantaya" },
    { id: "598", name: "Shudder" },
    { id: "599", name: "Sundance Now" },
    { id: "600", name: "TCM" },
    { id: "601", name: "Topic" },
    { id: "602", name: "UP Faith & Family" },
    { id: "603", name: "Viki" },
    { id: "604", name: "WWE Network" },
    { id: "605", name: "Youtube Premium" },
    { id: "606", name: "Zee5" },
    { id: "607", name: "DocuBay" },
    { id: "608", name: "Hoichoi" },
    { id: "609", name: "Sun Nxt" },
    { id: "610", name: "Aha" },
    { id: "611", name: "Discovery+" },
    { id: "612", name: "Hotstar" },
    { id: "613", name: "SonyLIV" },
    { id: "614", name: "Voot" },
    { id: "615", name: "ZeePlex" },
    { id: "616", name: "Eros Now" },
    { id: "617", name: "MX Player" },
    { id: "618", name: "Tata Sky" },
    { id: "619", name: "Star+" },
    { id: "620", name: "Lionsgate Play" },
    { id: "621", name: "Blim" },
    { id: "622", name: "Filmzie" },
    { id: "623", name: "Plex" },
    { id: "624", name: "Popcornflix" },
]