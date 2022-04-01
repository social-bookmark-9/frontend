export const logger = msg => {
  if (process.env.NODE_ENV === "production") {
    return;
  }
  console.log(msg);
};

export const getToken = () => {
  const token = sessionStorage.getItem("accessToken");
  if (token) {
    return token;
  } else {
    return null;
  }
};

export const getReToken = () => {
  const token = sessionStorage.getItem("refreshToken");
  if (token) {
    return token;
  } else {
    return null;
  }
};
