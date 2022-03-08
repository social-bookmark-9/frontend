const fontSizes = {
  12: "12px",
  13: "13px",
  14: "14px",
  16: "16px",
  18: "18px",
  20: "20px",
  22: "22px",
  24: "24px",
  28: "28px",
  34: "34px",
  50: "50px",
};

const fontWeight = {
  extraBold: 800,
  semiBold: 600,
  regular: 400,
};

// 번호가 높을수록 진한 색
const colors = {
  black: "#000000",
  white: "#ffffff",
  gray06: "#353C49",
  gray05: "#505866",
  gray04: "#B1B8C0",
  gray03: "#d2d6da",
  gray02: "#f2f3f4",
  gray01: "#f2f4f6",
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
