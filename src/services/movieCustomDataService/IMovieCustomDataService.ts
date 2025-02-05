export interface IMovieCustomDataService {
    formatData: (data: string) => string;
    formatTime: (timeInMinutes: number) => string;
    formatCountryCodeToName: (countryCode: string) =>  string;
    formatNumber: (number: number) => string;
    formatStatusToPortugues: (status: string) => string;
    formatPorcentageMovieRating: (voteAverage: number) => number;
}