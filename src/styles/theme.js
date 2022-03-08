const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "20px",
  xl: "24px",
};

const fontWeight = {
  extraBold: 800,
  semiBold: 600,
  regular: 400,
};

const colors = {
  black: "#000000",
  white: "#ffffff",
};

const deviceSizes = {
  mobile: 390, //컨텐츠가 들어갈 사이즈는 360
  tablet: 798, //컨텐츠가 들어갈 사이즈는 768
  pc: 1080, //컨텐츠가 들어갈 사이즈는 1050
};

//참고 : https://wonit.tistory.com/367
// 참고: https://www.styled-components.com/docs/advanced#media-templates
const mediaQuery = {
  mobile: `screen and (max-width: ${deviceSizes.pc - 1}px)`,
  // mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  // tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  // pc: `screen and (max-width: ${deviceSizes.laptop})`,
};

const theme = {
  fontSizes,
  fontWeight,
  colors,
  mediaQuery,
};

export default theme;
