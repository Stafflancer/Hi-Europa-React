import {http} from "../../modules/http";

export const imaService = {
  getIma,
};

function getIma(params) {
  let q = new URLSearchParams(params);
  return http.get('/ima-service?' + q.toString()).then(res => {
    return res
  })
}
