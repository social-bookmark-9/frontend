// 카카오
const KAKAO_CLIENT_ID = "edadf77518d984adf45220af320217c9";
const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";

export const KAKAO_AUTH_URL = `
  https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code
`;

// 구글
export const TEST_ID = "658977310896-knr13gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
export const GOOGLE_CLIENT_ID = "288158753583-9058js8upkodamvu49f1f0atsn0v54fv.apps.googleusercontent.com"