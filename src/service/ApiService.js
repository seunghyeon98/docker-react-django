import { API_BASE_URL } from "../app-config";

// 클라이언트의 요청을 처리할 함수
// [api]     첫 번째, 매개변수는 작업
// [method]  두 번째, 매개변수는 전송 방식
// [request] 세 번째, 매개변수는 파라미터
export function call(api, method, request) {
  let options = {
    Headers: new Headers({
      "Content-Type": "application/json",
    }),
    url: API_BASE_URL + api,
    method: method,
  };

  // 만약 request가 있다면 실행할 구문
  if (request) {
    options.body = JSON.stringify(request);
  }

  // 요청
  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      // 만약 응답이 없다면
      if (!response.ok) {
        // reject 수행
        return Promise.reject(json);
      }
      // 응답이 있다면, json반환
      return json;
    })
  );
}
