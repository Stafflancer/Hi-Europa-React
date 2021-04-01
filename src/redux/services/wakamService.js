import {http} from "../../modules/http";

export const wakamService = {
  getWakam,
};

function getWakam(params) {
  let q = new URLSearchParams(params);
  return http.get('/wakam-service?' + q.toString()).then(res => {
    return res
  })
}
