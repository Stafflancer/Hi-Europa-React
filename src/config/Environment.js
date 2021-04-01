let url = "http://hieuropa.loc/api/admin";

if(process.env.NODE_ENV == "production"){
    url = "https://php.preprod.opunmaif.fr/api/admin";
}
const API_URL = url;

export {
    API_URL
}

