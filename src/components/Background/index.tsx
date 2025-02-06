import {BackgroundStyled} from "./styles.ts";

export const Background = () => {
    return (
        <BackgroundStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3840 2160" preserveAspectRatio="none" fill="none">
            <path d="M0 0H3840V2160H0V0Z" fill="url(#paint0_linear_6775_791)" />
            <defs>
                <linearGradient id="paint0_linear_6775_791" x1="1920" y1="0" x2="1920" y2="2160" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#121113" />
                    <stop offset="0.494792" stopColor="#121113" stopOpacity="0.46" />
                    <stop offset="1" stopColor="#121113" />
                </linearGradient>
            </defs>
        </BackgroundStyled>
    )
}