import { css } from "styled-components";

const renderPrimaryButton = css`
  ${({ theme: { colors } }) => {
    return css`
      background-color: ${colors.green2};
      border: none;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      :disabled {
        background-color: ${({ theme }) => theme.colors.green4};
      }
      :hover {
        background-color: ${({ theme }) => theme.colors.green3};
      }
    `;
  }}
`;
const renderSecondaryButton = css<{ textColor?: string }>`
  ${({ theme: { colors } }) => {
    return css`
      background-color: ${colors.secondary};
      border: 1px solid ${colors.green2};
      :disabled {
        background-color: ${({ theme }) => theme.colors.gray1};
      }
      :hover {
        background-color: ${({ theme }) => theme.colors.gray2};
      }
    `;
  }}
`;
export const THEMES = {
  primary: renderPrimaryButton,
  secondary: renderSecondaryButton,
};
