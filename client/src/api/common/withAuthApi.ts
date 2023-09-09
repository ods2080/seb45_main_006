import axios from "axios";

// import { getRefreshToken } from "@api/common/refreshToken";
// import { isValidToken } from "@util/token-helper";
import { getItemFromStorage } from "@util/localstorage-helper";

let apiEndpoint = "";
if (import.meta.env.VITE_APP_API_ENDPOINT && typeof import.meta.env.VITE_APP_API_ENDPOINT === "string") {
    apiEndpoint = import.meta.env.VITE_APP_API_ENDPOINT;
}

// const refreshToken = getItemFromStorage("refreshToken");
const accessToken = getItemFromStorage("accessToken");

export const withAuthApi = axios.create({
    baseURL: apiEndpoint,
    headers: {
        Authorization: `bearer ${accessToken}`,
        "Content-Type": "application/json",
    },
});

// 토큰 관련 정책
// 1. 회원가입, 로그인, 비밀번호 찾기, 닉네임 중복 검사 - access token 없이 요청
//    - 그 외 요청 access token이 있을 경우 담아서 요청
// 2. 만료된 access token을 보낼 경우
//    - 백엔드에서 DB에 저장된 refresh token으로 access token을 발급
// 3. TODO: 로컬스토리지에 저장된 access token과 응답으로 받은 access token이 다른 경우 업데이트

// // 요청 전 interceptor에서 토큰 확인
// withAuthApi.interceptors.request.use(async (config) => {
//     if (!config.headers) return config;

//     // 1. accessToken이 존재하고 유효하면 accessToken 사용
//     if (accessToken !== null && isValidToken(accessToken)) {
//         config.headers.Authorization = `Bearer ${accessToken}`;
//         return config;
//     }

//     // 2. accessToken이 유효하지 않을 때
//     //    refreshToken이 존재하고 유효하면 refreshToken으로 새로운 accessToken 요청
//     if (refreshToken !== null && isValidToken(refreshToken)) {
//         accessToken = await getRefreshToken(refreshToken);

//         // 요청에 실패하면 accessToken null 이므로 에러
//         if (!accessToken) {
//             return Promise.reject("토큰이 유효하지 않습니다.");
//         }

//         config.headers.Authorization = `Bearer ${accessToken}`;
//         return config;
//     }

//     // accessToken과 refreshToken이 모두 유효하지 않으면 에러
//     return Promise.reject("토큰이 유효하지 않습니다.");
// });
