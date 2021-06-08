import { auth, http, api } from "APIs/utilities/provider";
import i18n from "i18next";

const errorMessage =
  "Error !!! Please try again or contact Hieuropa team! Thank you";

const handleError = () => {
  const locale = i18n.language === "zh_CN" ? "cn" : i18n.language;
  alert(errorMessage);
  window.location.href = `/${locale}`;
};

const getAccessToken = async () => {
  return auth
    .post("/token")
    .then((res) => {
      const accessToken = res.data.access_token;
      localStorage.setItem("IMA_accessToken", accessToken);
    })
    .catch((err) => {
      console.log(err);
      handleError();
    });
};

const getPrice = async (_data) => {
  let price;
  const data = {
    dist: `/ima-services/v2/products/${_data.serviceId}/estimation-price`,
    options: {
      desiredDateAndTime: _data.selectedDateTime,
      location: {
        zipCode: _data.postCode,
      },
    },
  };
  await http
    .post("", data)
    .then((res) => {
      price = res.data.unitPrice;
    })
    .catch((err) => {
      console.log(err);
      handleError();
    });
  return price;
};

const createAccount = async (data) => {
  let account;
  const userData = {
    first_name: data.firstname,
    last_name: data.lastname,
    email: data.email,
    phone_number: data.phone,
    title: data.salutation,
    postal_code: data.zipCode,
    prospect_type: data.ownership,
  };
  await http
    .post("", {
      dist: "/ima-services/v2/accounts",
      options: data,
    })
    .then(async (res) => {
      const accountData = res.data;
      account = await createUser({
        ...userData,
        ...{ account_id: accountData.id },
      });
    })
    .catch(async (err) => {
      console.log(err.response);
      const errorMessage = err.response.data.message;
      if (errorMessage.includes("The email address is already used")) {
        account = await createUser(userData);
      }
    });
  return account;
};

const createDemand = async (data) => {
  let demand;
  await http
    .post("", {
      dist: "/ima-services/v2/demands",
      options: {
        desiredDateAndTime: data.selectedDateTime,
        product: {
          id: data.serviceId,
        },
        customer: {
          accountId: data.accountId,
          hasAcceptedConditionsOfUse: data.termsPolicyAccepted,
          hasWaivedHisRightOfWithdrawal: false,
          comments: "",
        },
        locations: [
          {
            address: data.address,
            zipCode: data.postCode,
            city: data.city,
            countryCode: "FRA",
          },
        ],
        contact: {
          lastname: data.lastName,
          firstname: data.firstName,
          phone: data.phoneNumber,
        },
      },
    })
    .then((res) => {
      demand = res.data;
    })
    .catch((err) => {
      console.log(err);
      handleError();
    });
  return demand;
};

const getPaymentToken = async (demandId) => {
  let paymentToken;
  await http
    .post("", {
      dist: `/ima-services/v2/demands/${demandId}/payment-page`,
      options: {
        currentPaymentToken: "",
      },
    })
    .then((res) => {
      paymentToken = res.data.paymentToken;
    })
    .catch((err) => {
      console.log(err);
      handleError();
    });
  return paymentToken;
};

const createUser = async (data) => {
  let user;
  await api
    .post("/api/web/ima-user", data)
    .then((res) => {
      user = res.data.data;
    })
    .catch((err) => {
      console.log(err);
      handleError();
    });
  return user;
};

const createQuotation = async (data) => {
  let quotation;
  await api
    .post("api/web/ima-quotation", data)
    .then((res) => {
      quotation = res.data;
      console.log("quotation : ", quotation);
    })
    .catch((err) => {
      console.log(err);
      handleError();
    });
  return quotation;
};

const createIntervention = async (data) => {
  let intervention;
  await api
    .post("/api/web/intervention", data)
    .then((res) => {
      intervention = res.data;
    })
    .catch((err) => {
      console.log(err);
      intervention = "error";
    });
  return intervention;
};

export const IMA = {
  getAccessToken,
  getPrice,
  createAccount,
  createDemand,
  getPaymentToken,
  createUser,
  createQuotation,
  createIntervention,
};
