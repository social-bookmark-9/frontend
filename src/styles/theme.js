const fontSizes = {
  font12: "12px",
  font13: "13px",
  font14: "14px",
  font16: "16px",
  font18: "18px",
  font20: "20px",
  font22: "22px",
  font24: "24px",
  font28: "28px",
  font34: "34px",
  font50: "50px",
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
  kakao: "#FEEB00",
  grayColor07: "#353C49",
  grayColor06: "#505866",
  grayColor05: "#B1B8C0",
  grayColor04: "#D1D6DA",
  grayColor03: "#d2d6da",
  grayColor02: "#f2f3f4",
  grayColor01: "#f2f4f6",
  fontColor05: "#353C49",
  fontColor04: "#505866",
  fontColor03: "#9198a0",
  fontColor02: "#B1B8C0",
  fontColor01: "#d1d6da",
  fontBlue: "#0A8ED0",
  fontPurple: "#7881F5",
  fontGreen: "#4EB0AB",
  pointBlue02: "#0A8ED0",
  pointBlue01: "#D6EAF4",
  pointPurple02: "#7881F5",
  pointPurple01: "#E7E8FA",
  pointGreen02: "#4EB0AB",
  pointGreen01: "#DAF8F1",
};

const deviceSizes = {
  mobile: 390,
  tablet: 1194,
  pc: 1920, // 컨텐츠 사이즈 1115
};

//참고 : https://wonit.tistory.com/367
// 참고: https://www.styled-components.com/docs/advanced#media-templates
const mediaQuery = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  pc: `screen and (max-width: ${deviceSizes.pc})`,
};

const theme = {
  fontSizes,
  fontWeight,
  colors,
  mediaQuery,
};

export default theme;
