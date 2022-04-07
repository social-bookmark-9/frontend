import { useMediaQuery } from "react-responsive";

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1195 });
  return isDesktop ? children : null;
};
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1194 });
  return isTablet ? children : null;
};
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 321, maxWidth: 767 });
  return isMobile ? children : null;
};
export const Extension = ({ children }) => {
  const isExtension = useMediaQuery({ maxWidth: 320 });
  return isExtension ? children : null;
};
