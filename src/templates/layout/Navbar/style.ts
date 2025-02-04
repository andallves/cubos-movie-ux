import styled, {css} from "styled-components";

export const NavbarContainer = styled.nav`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.xsmall};
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-bottom: .1rem solid rgba(241, 230, 253, 0.19);
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    color:${theme.colors.gray10};
    cursor: pointer;
  `}
`;

export const Imagem = styled.img`
  ${({ theme }) => css`
    width: 16rem;
    height: 3.6rem;
    fill: ${theme.colors.gray10};
  `}
`;

export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray10};
    text-align: center;
    font-family: ${theme.fonts.family.secondary};
    font-size: ${theme.fonts.sizes.small};
    font-style: normal;
    font-weight: ${theme.fonts.types.bold};
    line-height: normal;
  `}
`;

export const ButtonTheme = styled.button`
  ${() => css`
    display: flex;
    min-height: 4.4rem;
    padding: 1.2rem 2rem;
    align-items: self-start;
    gap: 1.2rem;

    border-radius: 0.2rem;
    background: rgba(183, 68, 247, 0.08);
    backdrop-filter: blur(0.2rem);
    cursor: pointer;
  `}
`;

export const SunIcon = styled.img`
  ${() => css`
    display: flex;
    padding: 3px;
    align-items: flex-start;
    gap: 10px;
  `}
`;
