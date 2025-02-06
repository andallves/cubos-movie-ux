import {IMovieCustomDataService} from "./IMovieCustomDataService.ts";
import {languagesMovies} from "../../utils/filter-input-values.ts";

export const movieCustomDataService: IMovieCustomDataService = {
    formatCountryCodeToName(countryId: string): string {
        const languageMovie = languagesMovies.find((language) => language.id === countryId);
        return languageMovie?.name ?? countryId;
    },

    formatData(data: string): string {
        const [ano, mes, dia] = data.split("-");
        return `${dia}/${mes}/${ano}`;
    },

    formatNumber(number: number): string {
        if (number >= 1e6) {
            return `${(number / 1e6).toFixed(2)}M`;
        } else if (number >= 1e3) {
            return `${(number / 1e3).toFixed(2)}K`;
        }
        return number.toString();
    },

    formatPorcentageMovieRating(voteAverage: number): number {
        return  Math.round(voteAverage * 10);
    },

    formatStatusToPortugues(status: string): string {
        const statusInPortuques: Record<string, string> = {
            "Released": "Lançado",
            "Post Production": "Pós-produção",
            "In Production": "Em produção",
            "Planned": "Planejado",
            "Rumored": "Rumor",
            "Canceled": "Cancelado",
        };

        return statusInPortuques[status] || status;
    },

    formatTime(timeInMinutes: number): string {
        const hours = Math.floor(timeInMinutes / 60);
        const restMinutes = timeInMinutes % 60;

        return hours > 0
            ? `${hours}h ${restMinutes.toString().padStart(2, '0')}m`
            : `${restMinutes}m`;
    }
}