export const logger = msg => {
    if (process.env.NODE_ENV === 'production') {
      return;
    }
    console.log(msg);
    //현재 모드 확인법
    // console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
  };