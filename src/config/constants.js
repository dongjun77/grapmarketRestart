export const API_URL =
  process.env.NODE_ENV === "production" //cloud환경에서 실행시
    ? "https://chun-market-server.herokuapp.com"
    : "http://localhost:8080"; //localhost환경에서 실행시
