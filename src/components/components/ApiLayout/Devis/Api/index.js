import axios from "axios";

const instance = axios.create({
    baseURL: "https://php.preprod.opunmaif.fr",//process.env.REACT_APP_WAKAM_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json"
    }
});
export default {
    getPrice: (data) =>
        instance({
            "method": "POST",
            "url": "/api/proxy/v1/wakam",
            "data": {
                "dist": "/MRH_CLASSIQUE_ET_TEMPO/getPrice",
                "options": {
                    "CodePostal": data.postCode,
                    "Commune": data.city,
                    "Nature": data.accomodationType,
                    "StatutOccupation": data.prospectType,
                    "TypeDeResidence": data.residenceType,
                    "NombreDePieces": data.rooms,
                    "Etage": data.floors,
                    "Surface": data.area,
                    "CapitalMobilier": data.capital,
                    "Franchise": "Franchise de Base",
                    "CapitalObjetsdeValeur": data.capitalObject !== undefined ? data.capitalObject : "0",
                    "Fractionnement": "Annuel",
                    "OptionVol": data.opVol !== undefined ? data.opVol : "Non",
                    "OptionAffairesNomades": data.opAffaires !== undefined ? data.opAffaires : "Non",
                    "OptionDommagesElectriques": data.opElectric !== undefined ? data.opElectric : "Non",
                    "OptionProtectionJuridique": data.opJuridique !== undefined ? data.opJuridique : "Non",
                    "OptionRemplacementANeufMobilier": data.opReplace !== undefined ? data.opReplace : "Non",
                    "OptionAssuranceScolaire": data.opSchool !== undefined ? data.opSchool : "Non",
                    "Dependance": data.opDependence !== undefined ? data.opDependence : "Non"
                }
            },
        }),
    getCitybyZipcode: (zipCode) =>
        instance({
            "method": "POST",
            "url": "/api/proxy/v1/wakam",
            "data": {
                "dist": "/MRH_CLASSIQUE_ET_TEMPO/getcitybyzipcode",
                "options": {
                    "zipCode": zipCode
                }
            }
        })
}