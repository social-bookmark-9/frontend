import { useMediaQuery } from "react-responsive";

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1194.98 });
  return isDesktop ? children : null;
};

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 425.98, maxWidth: 1194 });
  return isTablet ? children : null;
}

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 425 });
  return isMobile ? children : null;
}