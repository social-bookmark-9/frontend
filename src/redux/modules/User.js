const kakaoLogin = (code) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "GET",
      url:``
    })
      .then((res) => {
        console.log(res);

        const ACCESS_TOKEN = res.data.accessToken;

        localStorage.setItem("token", ACCESS_TOKEN);

        history.replace("/")

      }).catch(err => {
          console.log("소셜로그인 에러", err);
          window.alert("로그인 실패");
          history.replace("/login");
        })
  }
}