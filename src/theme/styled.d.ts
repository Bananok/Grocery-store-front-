import "styled-components";
import { COLORS } from "../styles";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof COLORS;
  }
}
