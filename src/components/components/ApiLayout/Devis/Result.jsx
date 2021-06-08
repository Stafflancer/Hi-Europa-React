import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import checkIcon from "assets/img/icons/check.svg";
import arrowDownIcon from "assets/img/icons/arrow_down.svg";
import minusIcon from "assets/img/icons/minus.svg";
import plusIcon from "assets/img/icons/plus.svg";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import handler from "./Slider/handler";
import Marker from "./Slider/marker";
import Api from "./Api";
import axios from 'axios';
import Promise from 'bluebird';
import ToggleButton from "../ToggleButton";
import { useTranslation } from "react-i18next";
import { useWindowDimensions } from "../../../../modules/apiLayout/resize";
import debounce from "lodash.debounce";
import ReactLoading from "react-loading";

const Result = (props) => {
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const locale = i18n.language === "zh_CN" ? "cn" : i18n.language;
  const detailSection = useRef();
  const [loading, setLoading] = useState(false);
  const [isEstimated, setEstimated] = useState(false);
  const [isValidEstimatedValue, setValidEstimatedValid] = useState(true);
  const [state, setState] = useState({
    userData: props.userInfo,
    franchise: 300,
    insuredExpensive: 0,
    insuredCheap: 0,
    opPrice: 0,
    opReplaceValue: { selected: false, price: props.initPrice.opReplaceValue },
    opProtectionValueables: {
      selected: false,
      price: props.initPrice.opProtectionValueables,
    },
    opElectricalDamage: {
      selected: false,
      price: props.initPrice.opElectricalDamage,
    },
    opVol: { selected: false, price: props.initPrice.opVol },
    opAffaires: { selected: false, price: props.initPrice.opAffaires },
    opProtectionJuridical: {
      selected: false,
      price: props.initPrice.opProtectionJuridical,
    },
    opInsuranceSchool: {
      selected: false,
      price: props.initPrice.opInsuranceSchool,
    },
    opDependence: { selected: false, price: props.initPrice.opDependence },
    showInfo: false,
    showDetail: false,
    showMore: false,
    guaranteeTitle: "",
    guaranteeComment: "",
    guaranteeOptions: "",
    price: props.initPrice.price,
    moreContent: "",
    moreTitle: "",
    cardClass: "",
  });
  const estimatedValue =
    parseFloat(state.insuredCheap) + parseFloat(state.insuredExpensive);
  const { height, width } = useWindowDimensions();
  let capitalMin = 0;
  let capitalMax = 0;
  let capitalDefault = 0;
  let marks = "";
  let showLabel = width > 1200 ? "show" : "hidden";
  switch (props.userInfo.rooms) {
    case 1:
      capitalMin = 6000;
      capitalMax = 17000;
      capitalDefault = 11500;
      marks = {
        8000: <Marker value="8000€" showLabel="show" />,
        10000: <Marker value="10000€" showLabel={showLabel} />,
        12000: <Marker value="12000€" showLabel={showLabel} />,
        14000: <Marker value="14000€" showLabel={showLabel} />,
        16000: <Marker value="16000€" showLabel="show" />,
      };
      break;
    case 2:
      capitalMin = 9000;
      capitalMax = 27000;
      capitalDefault = 18000;
      marks = {
        10000: <Marker value="10000€" showLabel="show" />,
        13000: <Marker value="13000€" showLabel={showLabel} />,
        16000: <Marker value="16000€" showLabel={showLabel} />,
        19000: <Marker value="19000€" showLabel={showLabel} />,
        22000: <Marker value="22000€" showLabel={showLabel} />,
        25000: <Marker value="25000€" showLabel="show" />,
      };
      break;
    case 3:
      capitalMin = 15000;
      capitalMax = 45000;
      capitalDefault = 30000;
      marks = {
        17000: <Marker value="17000€" showLabel="show" />,
        22000: <Marker value="22000€" showLabel={showLabel} />,
        27000: <Marker value="27000€" showLabel={showLabel} />,
        32000: <Marker value="32000€" showLabel={showLabel} />,
        37000: <Marker value="37000€" showLabel={showLabel} />,
        42000: <Marker value="42000€" showLabel="show" />,
      };
      break;
    case 4:
      capitalMin = 21000;
      capitalMax = 62000;
      capitalDefault = 41000;
      marks = {
        23000: <Marker value="23000€" showLabel="show" />,
        29000: <Marker value="29000€" showLabel={showLabel} />,
        35000: <Marker value="35000€" showLabel={showLabel} />,
        41000: <Marker value="41000€" showLabel={showLabel} />,
        47000: <Marker value="47000€" showLabel={showLabel} />,
        53000: <Marker value="53000€" showLabel={showLabel} />,
        59000: <Marker value="59000€" showLabel="show" />,
      };
      break;
    case 5:
      capitalMin = 26000;
      capitalMax = 77000;
      capitalDefault = 51000;
      marks = {
        26000: <Marker value="26000€" showLabel="show" />,
        36000: <Marker value="36000€" showLabel={showLabel} />,
        46000: <Marker value="46000€" showLabel={showLabel} />,
        56000: <Marker value="56000€" showLabel={showLabel} />,
        66000: <Marker value="66000€" showLabel={showLabel} />,
        76000: <Marker value="76000€" showLabel="show" />,
      };
      break;
    case 6:
      capitalMin = 31000;
      capitalMax = 93000;
      capitalDefault = 62000;
      marks = {
        32000: <Marker value="32000€" showLabel="show" />,
        44000: <Marker value="44000€" showLabel={showLabel} />,
        56000: <Marker value="56000€" showLabel={showLabel} />,
        68000: <Marker value="68000€" showLabel={showLabel} />,
        80000: <Marker value="80000€" showLabel={showLabel} />,
        92000: <Marker value="92000€" showLabel="show" />,
      };
      break;
    case 7:
      capitalMin = 36000;
      capitalMax = 107000;
      capitalDefault = 71000;
      marks = {
        40000: <Marker value="40000€" showLabel="show" />,
        52000: <Marker value="52000€" showLabel={showLabel} />,
        64000: <Marker value="64000€" showLabel={showLabel} />,
        76000: <Marker value="76000€" showLabel={showLabel} />,
        88000: <Marker value="88000€" showLabel={showLabel} />,
        100000: <Marker value="100000€" showLabel="show" />,
      };
      break;
    case 8:
      capitalMin = 40000;
      capitalMax = 119000;
      capitalDefault = 79000;
      marks = {
        42000: <Marker value="42000€" showLabel="show" />,
        57000: <Marker value="57000€" showLabel={showLabel} />,
        72000: <Marker value="72000€" showLabel={showLabel} />,
        87000: <Marker value="87000€" showLabel={showLabel} />,
        102000: <Marker value="102000€" showLabel={showLabel} />,
        117000: <Marker value="117000€" showLabel="show" />,
      };
      break;
    case 9:
      capitalMin = 43000;
      capitalMax = 128000;
      capitalDefault = 85000;
      marks = {
        45000: <Marker value="45000€" showLabel="show" />,
        65000: <Marker value="65000€" showLabel={showLabel} />,
        85000: <Marker value="85000€" showLabel={showLabel} />,
        105000: <Marker value="105000€" showLabel={showLabel} />,
        125000: <Marker value="125000€" showLabel="show" />,
      };
      break;
    case 10:
      capitalMin = 46000;
      capitalMax = 138000;
      capitalDefault = 92000;
      marks = {
        50000: <Marker value="50000€" showLabel="show" />,
        70000: <Marker value="70000€" showLabel={showLabel} />,
        90000: <Marker value="90000€" showLabel={showLabel} />,
        110000: <Marker value="110000€" showLabel={showLabel} />,
        130000: <Marker value="130000€" showLabel="show" />,
      };
      break;
  }

  const handleFranchise = (e) => {
    setState((state) => ({ ...state, franchise: e.target.value }));

    props.update("franchise", e.target.value);
  };
  const handleSelected = (type) => {
    let curValue = state[type].selected;
    let curPrice = state[type].price;
    let opPrice = state.opPrice;

    if (curValue) 
    {
      setState((state) => ({ ...state, opPrice: opPrice - curPrice }));
    } 
    else 
    {
      setState((state) => ({ ...state, opPrice: opPrice + curPrice }));
    }

    setState((state) => ({
      ...state,
      [type]: { selected: !curValue, price: curPrice },
    }));

    if (type === "opReplaceValue") 
    {
      props.update("furniture2Yr", !state.opReplaceValue.selected);
    }

    if (type === "opProtectionValueables") 
    {
      props.update("protectValuables", !state.opProtectionValueables.selected);
    }

    if (type === "opElectricalDamage") 
    {
      props.update("insureDamage", !state.opElectricalDamage.selected);
    }

    if (type === "opVol") 
    {
      props.update("insureVandal", !state.opVol.selected);
    }

    if (type === "opAffaires") 
    {
      props.update("insureMobile", !state.opAffaires.selected);
    }

    if (type === "opProtectionJuridical") 
    {
      props.update("judicialProtection", !state.opProtectionJuridical.selected);
    }

    if (type === "opInsuranceSchool") 
    {
      props.update("schoolInsurance", !state.opInsuranceSchool.selected);
    }

    if (type === "opDependence") 
    {
      props.update("dependence", !state.opDependence.selected);
    }
  };
  const handleSubmit = (monthlyCost) => {
    props.update("monthlyCost", monthlyCost);

    var formData = new URLSearchParams();
    //const formData = new FormData();
    formData.append('franchise', props.userInfo.franchise ? props.userInfo.franchise : 300);
    formData.append('furniture_capital', props.userInfo.insuredPropVal ? props.userInfo.insuredPropVal : 0);
    formData.append('furniture_two_years_old', props.userInfo.furniture2Yr ? 1 : 0);

    if (props.userInfo.protectValuables)
    {
      formData.append('total_value_furniture_400', props.userInfo.insuredCheaps ? props.userInfo.insuredCheaps : 0);
      formData.append('total_value_furniture_1800', props.userInfo.insuredExpensives ? props.userInfo.insuredExpensives : 0);
      formData.append('estimated_coverage', props.userInfo.estFurnitureInsurance ? props.userInfo.estFurnitureInsurance : 0);
    }
    else
    {
      formData.append('total_value_furniture_400', 0);
      formData.append('total_value_furniture_1800', 0);
      formData.append('estimated_coverage', 0);
    }
    
    formData.append('option_glass', props.userInfo.insureDamage ? 1 : 0);
    formData.append('option_thief', props.userInfo.insureVandal ? 1 : 0);
    formData.append('option_mobile', props.userInfo.insureMobile ? 1 : 0);
    formData.append('judicial_protection', props.userInfo.judicialProtection ? 1 : 0);
    formData.append('school_insurance', props.userInfo.schoolInsurance ? 1 : 0);
    formData.append('dependencies', props.userInfo.dependence ? 1 : 0);
    formData.append('cost_month', monthlyCost);
    
    Promise.coroutine(function * () {
      var res = yield axios.put(process.env.REACT_APP_PROD_API_BASE_URL + '/api/web/quotation/' + props.userInfo.quoteId, formData);
      console.dir(res);
    })().catch(function(errs) {
      console.log(errs);
    });

    history.push(`/${locale}${t("slug./api/souscription")}`);
  };
  const minusInsured = (type) => {
    let insuredCheap = state.insuredCheap;
    let insuredExpensive = state.insuredExpensive;
    if (type == "cheap") {
      //} && insuredCheap > 400) {
      if (insuredCheap >= 400) 
      {
        setState((state) => ({
          ...state,
          insuredCheap: parseFloat(insuredCheap) - 400,
        }));

        props.update("insuredCheaps", parseFloat(insuredCheap) - 400);
      } 
      else 
      {
        setState((state) => ({ ...state, insuredCheap: 0 }));

        props.update("insuredCheaps", 0);
      }
    }
    if (type == "expensive") {
      //} && insuredExpensive >= 1800) {
      if (insuredExpensive >= 1800) 
      {
        setState((state) => ({
          ...state,
          insuredExpensive: insuredExpensive - 1800,
        }));

        props.update("insuredExpensives", parseFloat(insuredCheap) - 1800);
      } 
      else 
      {
        setState((state) => ({ ...state, insuredExpensive: 0 }));

        props.update("insuredExpensives", 0);
      }
    }
  };
  const plusInsured = (type) => {
    let insuredCheap = state.insuredCheap;
    let insuredExpensive = state.insuredExpensive;

    if (type == "cheap") {
      setState((state) => ({
        ...state,
        insuredCheap: parseFloat(insuredCheap) + 400,
      }));

      props.update("insuredCheaps", parseFloat(insuredCheap) + 400);
    }
    if (type == "expensive") {
      setState((state) => ({
        ...state,
        insuredExpensive: parseFloat(insuredExpensive) + 1800,
      }));
      
      props.update("insuredExpensives", parseFloat(insuredCheap) + 1800);
    }
  };

  const handleInsuredCheap = (e) => {
    let insuredCheap = e.target.value;
    const reg = /^[0-9\b]+$/;
    if (insuredCheap === "" || reg.test(insuredCheap)) {
      setState((state) => ({ ...state, insuredCheap: insuredCheap }));
    }
  };

  const handleInsuredExpensive = (e) => {
    let insuredExpensive = e.target.value;
    const reg = /^[0-9\b]+$/;
    if (insuredExpensive === "" || reg.test(insuredExpensive)) {
      setState((state) => ({ ...state, insuredExpensive: insuredExpensive }));
    }
  };

  const handleBlurCheap = (e) => {
    let value = e.target.value;
    if (value === "") {
      setState((state) => ({ ...state, insuredCheap: 0 }));
    }
  };
  const handleBlurExpensive = (e) => {
    let value = e.target.value;
    if (value === "") {
      setState((state) => ({ ...state, insuredExpensive: 0 }));
    }
  };
  const showDetail = (type) => {
    if (type == "guarantee1") {
      let detail =
        `
        <div class="row">
          <div class="col">
            <h4>` +
        t("devis.result.includeOption") +
        `</h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
                src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee1_inc_option1") +
        `
          </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
              src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee1_inc_option2") +
        `
          </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
              src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee1_inc_option3") +
        `
          </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
              src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee1_inc_option4") +
        `
          </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
              src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee1_inc_option5") +
        `
          </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
              src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee1_inc_option6") +
        `
          </label>
          </div>
        </div>
        <div class="row">
        <div class="col">
          <h4>` +
        t("devis.result.excludeOption") +
        `</h4>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee1_exc_option1") +
        `
        </label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee1_exc_option2") +
        `
        </label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee1_exc_option3") +
        `
        </label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee1_exc_option4") +
        `
        </label>
        </div>
      </div>`;
      setState((state) => ({
        ...state,
        guaranteeTitle: t("devis.result.guarantee1"),
      }));
      setState((state) => ({
        ...state,
        guaranteeComment: t("devis.result.guaranteeComment1"),
      }));
      setState((state) => ({ ...state, guaranteeOptions: detail }));
    } else if (type == "guarantee2") {
      let detail =
        `
        <div class="row">
          <div class="col">
            <h4>` +
        t("devis.result.includeOption") +
        `</h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
                src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee2_inc_option1") +
        `
          </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
              src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee2_inc_option2") +
        `
          </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
              src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee2_inc_option3") +
        `
          </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
              src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee2_inc_option4") +
        `
          </label>
          </div>
        </div>
        <div class="row">
        <div class="col">
          <h4>` +
        t("devis.result.excludeOption") +
        `</h4>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee2_exc_option1") +
        `
        </label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee2_exc_option2") +
        `
        </label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee2_exc_option3") +
        `
        </label>
        </div>
      </div>`;
      setState((state) => ({
        ...state,
        guaranteeTitle: t("devis.result.guarantee2"),
      }));
      setState((state) => ({
        ...state,
        guaranteeComment: t("devis.result.guaranteeComment2"),
      }));
      setState((state) => ({ ...state, guaranteeOptions: detail }));
    } else if (type == "guarantee3") {
      let detail =
        `
        <div class="row">
          <div class="col">
            <h4>` +
        t("devis.result.includeOption") +
        `</h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
                src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee3_inc_option1") +
        `
          </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
              src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee3_inc_option2") +
        `
          </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
              src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee3_inc_option3") +
        `
          </label>
          </div>
        </div>
        <div class="row">
        <div class="col">
          <h4>` +
        t("devis.result.excludeOption") +
        `</h4>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee3_exc_option1") +
        `
        </label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee3_exc_option2") +
        `
        </label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee3_exc_option3") +
        `
        </label>
        </div>
      </div>`;
      setState((state) => ({
        ...state,
        guaranteeTitle: t("devis.result.guarantee3"),
      }));
      setState((state) => ({
        ...state,
        guaranteeComment: t("devis.result.guaranteeComment3"),
      }));
      setState((state) => ({ ...state, guaranteeOptions: detail }));
    } else if (type == "guarantee4") {
      let detail =
        `
        <div class="row">
          <div class="col">
            <h4>` +
        t("devis.result.includeOption") +
        `</h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
                src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee4_inc_option1") +
        `
          </label>
          </div>
        </div>
      <div class="row">
        <div class="col">
          <h4>` +
        t("devis.result.excludeOption") +
        `</h4>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee4_exc_option1") +
        `
        </label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee4_exc_option2") +
        `
        </label>
        </div>
      </div>`;
      setState((state) => ({
        ...state,
        guaranteeTitle: t("devis.result.guarantee4"),
      }));
      setState((state) => ({
        ...state,
        guaranteeComment: t("devis.result.guaranteeComment4"),
      }));
      setState((state) => ({ ...state, guaranteeOptions: detail }));
    } else if (type == "guarantee5") {
      let detail =
        `
        <div class="row">
          <div class="col">
            <h4>` +
        t("devis.result.includeOption") +
        `</h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
                src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee5_inc_option1") +
        `
          </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
                src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee5_inc_option2") +
        `
          </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
                src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee5_inc_option3") +
        `
          </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
                src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee5_inc_option4") +
        `
          </label>
          </div>
        </div>
      <div class="row">
        <div class="col">
          <h4>` +
        t("devis.result.excludeOption") +
        `</h4>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee5_exc_option1") +
        `
        </label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee5_exc_option2") +
        `
        </label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee5_exc_option3") +
        `
        </label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee5_exc_option4") +
        `
        </label>
        </div>
      </div>`;
      setState((state) => ({
        ...state,
        guaranteeTitle: t("devis.result.guarantee5"),
      }));
      setState((state) => ({
        ...state,
        guaranteeComment: t("devis.result.guaranteeComment5"),
      }));
      setState((state) => ({ ...state, guaranteeOptions: detail }));
    } else if (type == "guarantee6") {
      let detail =
        `
        <div class="row">
          <div class="col">
            <h4>` +
        t("devis.result.includeOption") +
        `</h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
                src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee6_inc_option1") +
        `
          </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
                src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee6_inc_option2") +
        `
          </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
                src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee6_inc_option3") +
        `
          </label>
          </div>
        </div>
      <div class="row">
        <div class="col">
          <h4>` +
        t("devis.result.excludeOption") +
        `</h4>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee6_exc_option1") +
        `
        </label>
        </div>
      </div>`;
      setState((state) => ({
        ...state,
        guaranteeTitle: t("devis.result.guarantee6"),
      }));
      setState((state) => ({
        ...state,
        guaranteeComment: t("devis.result.guaranteeComment6"),
      }));
      setState((state) => ({ ...state, guaranteeOptions: detail }));
    } else if (type == "guarantee7") {
      let detail =
        `
        <div class="row">
          <div class="col">
            <h4>` +
        t("devis.result.includeOption") +
        `</h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
                src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee7_inc_option1") +
        `
          </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
                src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee7_inc_option2") +
        `
          </label>
          </div>
        </div>
      <div class="row">
        <div class="col">
          <h4>` +
        t("devis.result.excludeOption") +
        `</h4>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee7_exc_option1") +
        `
        </label>
        </div>
      </div>`;
      setState((state) => ({
        ...state,
        guaranteeTitle: t("devis.result.guarantee7"),
      }));
      setState((state) => ({
        ...state,
        guaranteeComment: t("devis.result.guaranteeComment7"),
      }));
      setState((state) => ({ ...state, guaranteeOptions: detail }));
    } else if (type == "guarantee8") {
      let detail =
        `
        <div class="row">
          <div class="col">
            <h4>` +
        t("devis.result.includeOption") +
        `</h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
                src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee8_inc_option1") +
        `
          </label>
          </div>
        </div>
      <div class="row">
        <div class="col">
          <h4>` +
        t("devis.result.excludeOption") +
        `</h4>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee8_exc_option1") +
        `
        </label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee8_exc_option2") +
        `
        </label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee8_exc_option3") +
        `
        </label>
        </div>
      </div>`;
      setState((state) => ({
        ...state,
        guaranteeTitle: t("devis.result.guarantee8"),
      }));
      setState((state) => ({
        ...state,
        guaranteeComment: t("devis.result.guaranteeComment8"),
      }));
      setState((state) => ({ ...state, guaranteeOptions: detail }));
    } else if (type == "guarantee9") {
      let detail =
        `
        <div class="row">
          <div class="col">
            <h4>` +
        t("devis.result.includeOption") +
        `</h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
                src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee9_inc_option1") +
        `
          </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="api-label">
              <img
                src=` +
        checkIcon +
        `
                alt=""
                class="api-icon"
              />
            ` +
        t("devis.result.guarantee9_inc_option2") +
        `
          </label>
          </div>
        </div>
      <div class="row">
        <div class="col">
          <h4>` +
        t("devis.result.excludeOption") +
        `</h4>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee9_exc_option1") +
        `
        </label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee9_exc_option2") +
        `
        </label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="api-label">
            <img
            src=` +
        checkIcon +
        `
              alt=""
              class="api-icon"
            />
          ` +
        t("devis.result.guarantee9_exc_option3") +
        `
        </label>
        </div>
      </div>`;
      setState((state) => ({
        ...state,
        guaranteeTitle: t("devis.result.guarantee9"),
      }));
      setState((state) => ({
        ...state,
        guaranteeComment: t("devis.result.guaranteeComment9"),
      }));
      setState((state) => ({ ...state, guaranteeOptions: detail }));
    }
    setState((state) => ({ ...state, showDetail: true }));
  };
  const scrollToNode = () => {
    detailSection.current.scrollIntoView({ behavior: "smooth" });
  };

  const showMore = (type) => {
    if (type == "capital") {
      setState((state) => ({
        ...state,
        moreTitle: t("devis.result.capitalMoreTitle"),
      }));
      setState((state) => ({
        ...state,
        moreContent: t("devis.result.capitalMoreContent"),
      }));
      setState((state) => ({ ...state, showMore: true }));
    } else if (type == "optionVal") {
      setState((state) => ({
        ...state,
        moreTitle: t("devis.result.option3.optionCommentTitle"),
      }));
      setState((state) => ({
        ...state,
        moreContent: t("devis.result.option3.optionComment"),
      }));
      setState((state) => ({ ...state, showMore: true }));
    } else if (type == "optionProtection") {
      setState((state) => ({
        ...state,
        moreTitle: t("devis.result.option3.optionCommentTitle"),
      }));
      setState((state) => ({
        ...state,
        moreContent: t("devis.result.option3.optionComment"),
      }));
      setState((state) => ({ ...state, showMore: true }));
    } else if (type == "opElectricalDamage") {
      setState((state) => ({
        ...state,
        moreTitle: t("devis.result.option4.optionElectric.moreTitle"),
      }));
      setState((state) => ({
        ...state,
        moreContent: t("devis.result.option4.optionElectric.moreContent"),
      }));
      setState((state) => ({ ...state, showMore: true }));
    } else if (type == "opVol") {
      setState((state) => ({
        ...state,
        moreTitle: t("devis.result.option4.optionVol.moreTitle"),
      }));
      setState((state) => ({
        ...state,
        moreContent: t("devis.result.option4.optionVol.moreContent"),
      }));
      setState((state) => ({ ...state, showMore: true }));
    } else if (type == "opAffaires") {
      setState((state) => ({
        ...state,
        moreTitle: t("devis.result.option4.optionAffaires.moreTitle"),
      }));
      setState((state) => ({
        ...state,
        moreContent: t("devis.result.option4.optionAffaires.moreContent"),
      }));
      setState((state) => ({ ...state, showMore: true }));
    } else if (type == "opProtectionJuridical") {
      setState((state) => ({
        ...state,
        moreTitle: t("devis.result.option4.optionJuridique.moreTitle"),
      }));
      setState((state) => ({
        ...state,
        moreContent: t("devis.result.option4.optionJuridique.moreContent"),
      }));
      setState((state) => ({ ...state, showMore: true }));
    } else if (type == "opInsuranceSchool") {
      setState((state) => ({
        ...state,
        moreTitle: t("devis.result.option4.optionSchool.moreTitle"),
      }));
      setState((state) => ({
        ...state,
        moreContent: t("devis.result.option4.optionSchool.moreContent"),
      }));
      setState((state) => ({ ...state, showMore: true }));
    } else if (type == "opDependence") {
      setState((state) => ({
        ...state,
        moreTitle: t("devis.result.option4.optionDependence.moreTitle"),
      }));
      setState((state) => ({
        ...state,
        moreContent: t("devis.result.option4.optionDependence.moreContent"),
      }));
      setState((state) => ({ ...state, showMore: true }));
    }
  };

  const debounceUpdateCapital = useCallback(
    debounce((value) => {
      setState((state) => ({
        ...state,
        userData: {
          ...state.userData,
          capital: value,
        },
      }));
      
      props.update("insuredPropVal", value);
    }, 1000),
    []
  );

  const updateCapital = (value) => {
    debounceUpdateCapital(value);
  };
  const getCapitalPrice = () => {
    setLoading(true);
    setEstimated(true);
    let data = state.userData;
    Api.getPrice(data)
      .then((response) => {
        let initPrice = Number(
          (response.data.MontantTotalPrimeTTC / 12).toFixed(2)
        );
        setState((state) => ({ ...state, price: initPrice }));

        // Get opCapitalObjetsdeValeur
        let capitalObjectData = {
          ...data,
          capitalObject:
            parseFloat(state.insuredCheap) + parseFloat(state.insuredExpensive),
        };
        Api.getPrice(capitalObjectData)
          .then((response) => {
            let _resPrice = Number(
              (response.data.MontantTotalPrimeTTC / 12).toFixed(2)
            );
            const resPrice = Number((_resPrice - initPrice).toFixed(2));
            let capitalObject = {
              ...{},
              ...state.opProtectionValueables,
            };
            capitalObject.price = resPrice;
            if (capitalObject.selected) {
              setState((state) => ({
                ...state,
                opPrice:
                  state.opPrice - state.opProtectionValueables.price + resPrice,
              }));
            }
            setState((state) => ({
              ...state,
              opProtectionValueables: capitalObject,
            }));

            props.update("estFurnitureInsurance", capitalObject.price);

            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  const getPrice = () => {
    setLoading(true);
    //Get inital price
    let data = state.userData;
    let opPrice = 0;

    let opReplaceData = { ...data, opReplace: "Oui" };
    let opElectricData = { ...data, opElectric: "Oui" };
    let opVolData = { ...data, opVol: "Oui" };
    let opAffairesData = { ...data, opAffaires: "Individuel" };
    let opJuridicalData = { ...data, opJuridique: "Oui" };
    let opSchoolData = { ...data, opSchool: "Oui" };
    let opDependenceData = { ...data, opDependence: "Oui" };

    axios
      .all([
        Api.getPrice(data),
        Api.getPrice(opReplaceData),
        Api.getPrice(opElectricData),
        Api.getPrice(opVolData),
        Api.getPrice(opAffairesData),
        Api.getPrice(opJuridicalData),
        Api.getPrice(opSchoolData),
        Api.getPrice(opDependenceData),
      ])
      .then(
        axios.spread(function (
          initRes,
          opReplaceRes,
          opEleRes,
          opVolRes,
          opAffRes,
          opJurRes,
          opSchoolRes,
          opDepRes
        ) {
          let initPrice = Number(
            (initRes.data.MontantTotalPrimeTTC / 12).toFixed(2)
          );
          let opReplacePrice = Number(
            (opReplaceRes.data.MontantTotalPrimeTTC / 12).toFixed(2)
          );
          let opElePrice = Number(
            (opEleRes.data.MontantTotalPrimeTTC / 12).toFixed(2)
          );
          let opVolPrice = Number(
            (opVolRes.data.MontantTotalPrimeTTC / 12).toFixed(2)
          );
          let opAffPrice = Number(
            (opAffRes.data.MontantTotalPrimeTTC / 12).toFixed(2)
          );
          let opJurPrice = Number(
            (opJurRes.data.MontantTotalPrimeTTC / 12).toFixed(2)
          );
          let opSchPrice = Number(
            (opSchoolRes.data.MontantTotalPrimeTTC / 12).toFixed(2)
          );
          let opDepPrice = Number(
            (opDepRes.data.MontantTotalPrimeTTC / 12).toFixed(2)
          );

          let opReplaceValue = Number((opReplacePrice - initPrice).toFixed(2));
          let opElectricalDamage = Number((opElePrice - initPrice).toFixed(2));
          let opVol = Number((opVolPrice - initPrice).toFixed(2));
          let opAffaires = Number((opAffPrice - initPrice).toFixed(2));
          let opProtectionJuridical = Number(
            (opJurPrice - initPrice).toFixed(2)
          );
          let opInsuranceSchool = Number((opSchPrice - initPrice).toFixed(2));
          let opDependence = Number((opDepPrice - initPrice).toFixed(2));

          if (state.opReplaceValue.selected) {
            opPrice += opReplaceValue;
          }
          if (state.opElectricalDamage.selected) {
            opPrice += opElectricalDamage;
          }
          if (state.opVol.selected) {
            opPrice += opVol;
          }
          if (state.opAffaires.selected) {
            opPrice += opAffaires;
          }
          if (state.opProtectionJuridical.selected) {
            opPrice += opProtectionJuridical;
          }
          if (state.opInsuranceSchool.selected) {
            opPrice += opInsuranceSchool;
          }
          if (state.opDependence.selected) {
            opPrice += opDependence;
          }
          if (state.opProtectionValueables.selected) {
            opPrice += state.opProtectionValueables.price;
          }

          setState((state) => ({ ...state, price: initPrice }));
          let opRep = state.opReplaceValue;
          opRep.price = opReplaceValue;
          setState((state) => ({ ...state, opReplaceValue: opRep }));

          let opEle = state.opElectricalDamage;
          opEle.price = opElectricalDamage;
          setState((state) => ({ ...state, opElectricalDamage: opEle }));

          let opV = state.opVol;
          opV.price = opVol;
          setState((state) => ({ ...state, opVol: opV }));

          let opAff = state.opAffaires;
          opAff.price = opAffaires;
          setState((state) => ({ ...state, opAffaires: opAff }));

          let opProt = state.opProtectionJuridical;
          opProt.price = opProtectionJuridical;
          setState((state) => ({ ...state, opProtectionJuridical: opProt }));

          let opIns = state.opInsuranceSchool;
          opIns.price = opInsuranceSchool;
          setState((state) => ({ ...state, opInsuranceSchool: opIns }));

          let opDep = state.opDependence;
          opDep.price = opDependence;
          setState((state) => ({ ...state, opDependence: opDep }));

          setState((state) => ({ ...state, opPrice: opPrice }));

          setLoading(false);
        })
      )
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        if (detailSection.current != null) {
          let currentScrollPos = window.pageYOffset;
          let threshold = detailSection.current.offsetTop;
          if (currentScrollPos > threshold - 210) {
            setState((state) => ({ ...state, cardClass: "fixed-card" }));
          } else {
            setState((state) => ({ ...state, cardClass: "" }));
          }
        }
      };
    }
  }, []);

  useEffect(() => {
    getPrice();
  }, [state.userData.capital]);

  useEffect(() => {
    if (estimatedValue > 45000 || estimatedValue > state.userData.capital) {
      setValidEstimatedValid(false);
    } else setValidEstimatedValid(true);
  }, [estimatedValue, state.userData.capital]);

  return (
    <div className="Api-page">
      <Container className={`result ${loading ? "api-loading" : ""}`}>
        <div className="api-title">
          <h1 className="bold">{t("devis.result.Title1")}</h1>
          <h1 className="bold">{t("devis.result.Title2")}</h1>
        </div>
        <div className="api-content">
          <Row className="section section-info">
            <Col sm={12} md={6} lg={6}>
              <Row>
                <Col>
                  <div className="api-title">
                    <h1>{t("devis.result.Information")}</h1>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6}>
                  <label>{t("devis.result.postCode")}</label>
                </Col>
                <Col xs={6} sm={6}>
                  <label className="api-label">{state.userData.postCode}</label>
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6}>
                  <label>{t("devis.result.accomodationType")}</label>
                </Col>
                <Col xs={6} sm={6}>
                  <label className="api-label">
                    {state.userData.accomodationType == "Appartement"
                      ? t("devis.accomodationType.appartment")
                      : t("devis.accomodationType.maison")}
                  </label>
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6}>
                  <label>{t("devis.result.status")}</label>
                </Col>
                <Col xs={6} sm={6}>
                  <label className="api-label">
                    {state.userData.prospectType == "Locataire"
                      ? t("devis.prospectType.Tenant")
                      : state.userData.prospectType == "Propriétaire occupant"
                      ? t("devis.prospectType.Owner")
                      : t("devis.prospectType.Roommate")}
                  </label>
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6}>
                  <label>{t("devis.result.residence")}</label>
                </Col>
                <Col xs={6} sm={6}>
                  <label className="api-label">
                    {state.userData.residenceType == "Principale"
                      ? t("devis.residenceType.Principal")
                      : t("devis.residenceType.Second")}
                  </label>
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6}>
                  <label>{t("devis.result.floor")}</label>
                </Col>
                <Col xs={6} sm={6}>
                  <label className="api-label">
                    {state.userData.floors == "Rez de Chaussée"
                      ? t("devis.apartmentDetail.firstFloor")
                      : state.userData.floors == "Intermédiaire"
                      ? t("devis.apartmentDetail.interFloor")
                      : t("devis.apartmentDetail.lastFloor")}
                  </label>
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6}>
                  <label>{t("devis.result.area")}</label>
                </Col>
                <Col xs={6} sm={6}>
                  <label className="api-label">{state.userData.area} m2</label>
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6}>
                  <label>{t("devis.result.numberRooms")}</label>
                </Col>
                <Col xs={6} sm={6}>
                  <label className="api-label">{state.userData.rooms}</label>
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6}>
                  <label>{t("devis.result.firstName")}</label>
                </Col>
                <Col xs={6} sm={6}>
                  <label className="api-label">
                    {state.userData.firstName}
                  </label>
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6}>
                  <label>{t("devis.result.lastName")}</label>
                </Col>
                <Col xs={6} sm={6}>
                  <label className="api-label">{state.userData.lastName}</label>
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6}>
                  <label>{t("devis.result.Email")}</label>
                </Col>
                <Col xs={6} sm={6}>
                  <label className="api-label">{state.userData.email}</label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    className="btn-popup"
                    variant="link"
                    onClick={() =>
                      setState((state) => ({ ...state, showInfo: true }))
                    }
                  >
                    {t("devis.result.update")}
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <Card className="block-detail">
                <Card.Body>
                  <Row>
                    <Col sm={6}>
                      <label className="api-label price-label">
                        <span>{t("devis.result.cardTitle")}</span>
                      </label>
                    </Col>
                    <Col sm={6}>
                      <span className="inline-block">
                        <h1 className="price red">{Math.floor(state.price)}</h1>
                      </span>
                      <span className="inline-block">
                        <label className="api-label red">
                          ,
                          {Math.floor(
                            (state.price - Math.floor(state.price)) * 100
                          )}
                          €
                        </label>
                        <label className="api-label">
                          {t("devis.result.month")}
                        </label>
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="align-center">
                      <label>{t("devis.result.cardSubTitle")}</label>
                    </Col>
                  </Row>
                  <Row className="justify-content-between">
                    <label className="api-label">
                      <img src={checkIcon} alt="" className="api-icon" />
                      {t("devis.result.guarantee1")}
                    </label>
                    <a
                      className="btn-popup"
                      variant="link"
                      onClick={() => showDetail("guarantee1")}
                    >
                      {t("devis.result.detail")}
                    </a>
                  </Row>
                  <Row className="justify-content-between">
                    <label className="api-label">
                      <img src={checkIcon} alt="" className="api-icon" />
                      {t("devis.result.guarantee2")}
                    </label>
                    <a
                      className="btn-popup"
                      variant="link"
                      onClick={() => showDetail("guarantee2")}
                    >
                      {t("devis.result.detail")}
                    </a>
                  </Row>
                  <Row className="justify-content-between">
                    <label className="api-label">
                      <img src={checkIcon} alt="" className="api-icon" />
                      {t("devis.result.guarantee3")}
                    </label>
                    <a
                      className="btn-popup"
                      variant="link"
                      onClick={() => showDetail("guarantee3")}
                    >
                      {t("devis.result.detail")}
                    </a>
                  </Row>
                  <Row className="justify-content-between">
                    <label className="api-label">
                      <img src={checkIcon} alt="" className="api-icon" />
                      {t("devis.result.guarantee4")}
                    </label>
                    <a
                      className="btn-popup"
                      variant="link"
                      onClick={() => showDetail("guarantee4")}
                    >
                      {t("devis.result.detail")}
                    </a>
                  </Row>
                  <Row className="justify-content-between">
                    <label className="api-label">
                      <img src={checkIcon} alt="" className="api-icon" />
                      {t("devis.result.guarantee5")}
                    </label>
                    <a
                      className="btn-popup"
                      variant="link"
                      onClick={() => showDetail("guarantee5")}
                    >
                      {t("devis.result.detail")}
                    </a>
                  </Row>
                  <Row className="justify-content-between">
                    <label className="api-label">
                      <img src={checkIcon} alt="" className="api-icon" />
                      {t("devis.result.guarantee6")}
                    </label>
                    <a
                      className="btn-popup"
                      variant="link"
                      onClick={() => showDetail("guarantee6")}
                    >
                      {t("devis.result.detail")}
                    </a>
                  </Row>
                  <Row className="justify-content-between">
                    <label className="api-label">
                      <img src={checkIcon} alt="" className="api-icon" />
                      {t("devis.result.guarantee7")}
                    </label>
                    <a
                      className="btn-popup"
                      variant="link"
                      onClick={() => showDetail("guarantee7")}
                    >
                      {t("devis.result.detail")}
                    </a>
                  </Row>
                  <Row className="justify-content-between">
                    <label className="api-label">
                      <img src={checkIcon} alt="" className="api-icon" />
                      {t("devis.result.guarantee8")}
                    </label>
                    <a
                      className="btn-popup"
                      variant="link"
                      onClick={() => showDetail("guarantee8")}
                    >
                      {t("devis.result.detail")}
                    </a>
                  </Row>
                  <Row className="justify-content-between">
                    <label className="api-label">
                      <img src={checkIcon} alt="" className="api-icon" />
                      {t("devis.result.guarantee9")}
                    </label>
                    <a
                      className="btn-popup"
                      variant="link"
                      onClick={() => showDetail("guarantee9")}
                    >
                      {t("devis.result.detail")}
                    </a>
                  </Row>
                  <Row>
                    <Col className="align-center">
                      <label>{t("devis.result.cardComment", { state })}</label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button
                        className="api-button"
                        bsPrefix="api"
                        variant="large"
                        onClick={scrollToNode}
                      >
                        {t("devis.result.cardButton")}
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="section section-arrow">
            <Col className="align-center">
              <img
                src={arrowDownIcon}
                alt=""
                className="api-icon"
                onClick={scrollToNode}
              />
            </Col>
          </Row>
          <Row className="section section-detail" ref={detailSection}>
            <Col sm={12} md={8} lg={9}>
              <Row>
                <Col>
                  <div className="api-title">
                    <h1>{t("devis.result.personalizeTitle")}</h1>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2 className="sub-title">
                    {t("devis.result.chooseFranchise")}
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{t("devis.result.franchiseText")}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    as="select"
                    className={`api-input`}
                    name="franchise"
                    value={state.franchise}
                    onChange={handleFranchise}
                  >
                    <option value="75">75€</option>
                    <option value="150">150€</option>
                    <option value="225">225€</option>
                    <option value="300">300€</option>
                  </Form.Control>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2 className="sub-title">
                    {t("devis.result.capitalTitle")}
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{t("devis.result.capitalText")}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Slider
                    className="api-slider"
                    min={capitalMin}
                    max={capitalMax}
                    marks={marks}
                    defaultValue={capitalDefault}
                    step={500}
                    railStyle={{
                      height: 6,
                    }}
                    handle={handler}
                    handleStyle={{
                      height: 24,
                      width: 24,
                      backgroundColor: "white",
                      textColor: "#C62D54",
                      border: "2px solid #C62D54",
                      marginTop: -40,
                    }}
                    trackStyle={{
                      background: "#C62D54",
                      height: 6,
                    }}
                    dotStyle={{
                      display: "none",
                    }}
                    onChange={updateCapital}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="option-box">
                  <Row className="option-title">
                    <Col xs={12} md={7}>
                      <h2>{t("devis.result.optionCapital")}</h2>
                    </Col>
                    <Col xs={12} md={5} className="align-right">
                      <span className="option-price red">
                        +{state.opReplaceValue.price}€{t("devis.result.month")}
                      </span>
                      <ToggleButton
                        selected={state.opReplaceValue.selected}
                        onClick={() => handleSelected("opReplaceValue")}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        {t("devis.result.optionCapitalText")}{" "}
                        <a href="#" onClick={() => showMore("capital")}>
                          {t("devis.result.more")}
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2 className="sub-title">
                    {t("devis.result.option3.Title")}
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col className="option-box">
                  <Row>
                    <Col className="option-title">
                      <h2>{t("devis.result.option3.option400Title")}</h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        {t("devis.result.option3.option400Text")}{" "}
                        <a href="#" onClick={() => showMore("optionVal")}>
                          {t("devis.result.more")}
                        </a>
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="price-range">
                        <span onClick={() => minusInsured("cheap")}>
                          <img src={minusIcon} alt="-" className="api-icon" />
                        </span>
                        <span
                          className={`price-range-value ${
                            state.insuredCheap > 0 ? "" : "disabled"
                          }`}
                        >
                          <input
                            type="text"
                            className={`price-range-value`}
                            value={state.insuredCheap}
                            onChange={handleInsuredCheap}
                            onBlur={handleBlurCheap}
                          />
                          €
                        </span>
                        <span onClick={() => plusInsured("cheap")}>
                          <img src={plusIcon} alt="-" className="api-icon" />
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col className="option-box">
                  <Row>
                    <Col className="option-title">
                      <h2>{t("devis.result.option3.option1800Title")}</h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        {t("devis.result.option3.option1800Text")}
                        <a href="#" onClick={() => showMore("optionVal")}>
                          {t("devis.result.more")}
                        </a>
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="price-range">
                        <span onClick={() => minusInsured("expensive")}>
                          <img src={minusIcon} alt="-" className="api-icon" />
                        </span>
                        <span
                          className={`price-range-value ${
                            state.insuredExpensive > 0 ? "" : "disabled"
                          }`}
                        >
                          <input
                            type="text"
                            className={`price-range-value`}
                            value={state.insuredExpensive}
                            onChange={handleInsuredExpensive}
                            onBlur={handleBlurExpensive}
                          />
                          €
                        </span>
                        <span onClick={() => plusInsured("expensive")}>
                          <img src={plusIcon} alt="-" className="api-icon" />
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button
                        className={`api-button disabled ${
                          estimatedValue > 0 && isValidEstimatedValue
                            ? "insured-price"
                            : `${
                                isEstimated && isValidEstimatedValue
                                  ? "insured-price"
                                  : ""
                              }`
                        }`}
                        bsPrefix="api"
                        variant="large"
                        onClick={getCapitalPrice}
                      >
                        {t("devis.result.option3.Button")} {estimatedValue}€
                      </Button>
                      {!isValidEstimatedValue && (
                        <p className="error-message">
                          La valeur totale des objets de valeur que vous pouvez
                          assurer doit être inférieure ou égale au montant de
                          vos capitaux mobiliers assurés et, en tout état de
                          cause, à 45.000
                        </p>
                      )}
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className="option-box">
                  <Row className="option-title">
                    <Col xs={12} md={7}>
                      <h2>{t("devis.result.option3.optionProtection")}</h2>
                    </Col>
                    <Col xs={12} md={5} className="align-right">
                      <span className="option-price red">
                        +{state.opProtectionValueables.price}€
                        {t("devis.result.month")}
                      </span>
                      <ToggleButton
                        selected={state.opProtectionValueables.selected}
                        onClick={() => handleSelected("opProtectionValueables")}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        {t("devis.result.option3.optionProtectionText")}
                        <a
                          href="#"
                          onClick={() => showMore("optionProtection")}
                        >
                          {t("devis.result.more")}
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2 className="sub-title">
                    {t("devis.result.option4.Title")}
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col className="option-box">
                  <Row className="option-title">
                    <Col xs={12} md={7}>
                      <h2>{t("devis.result.option4.optionElectric.Title")}</h2>
                    </Col>
                    <Col xs={12} md={5} className="align-right">
                      <span className="option-price red">
                        +{state.opElectricalDamage.price}€
                        {t("devis.result.month")}
                      </span>
                      <ToggleButton
                        selected={state.opElectricalDamage.selected}
                        onClick={() => handleSelected("opElectricalDamage")}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        {t("devis.result.option4.optionElectric.Text")}
                        <a
                          href="#"
                          onClick={() => showMore("opElectricalDamage")}
                        >
                          {t("devis.result.more")}
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className="option-box">
                  <Row className="option-title">
                    <Col xs={12} md={7}>
                      <h2>{t("devis.result.option4.optionVol.Title")}</h2>
                    </Col>
                    <Col xs={12} md={5} className="align-right">
                      <span className="option-price red">
                        +{state.opVol.price}€{t("devis.result.month")}
                      </span>
                      <ToggleButton
                        selected={state.opVol.selected}
                        onClick={() => handleSelected("opVol")}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        {t("devis.result.option4.optionVol.Text")}
                        <a href="#" onClick={() => showMore("opVol")}>
                          {t("devis.result.more")}
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className="option-box">
                  <Row className="option-title">
                    <Col xs={12} md={7}>
                      <h2>{t("devis.result.option4.optionAffaires.Title")}</h2>
                    </Col>
                    <Col xs={12} md={5} className="align-right">
                      <span className="option-price red">
                        +{state.opAffaires.price}€{t("devis.result.month")}
                      </span>
                      <ToggleButton
                        selected={state.opAffaires.selected}
                        onClick={() => handleSelected("opAffaires")}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        {t("devis.result.option4.optionAffaires.Text")}
                        <a href="#" onClick={() => showMore("opAffaires")}>
                          {t("devis.result.more")}
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className="option-box">
                  <Row className="option-title">
                    <Col xs={12} md={7}>
                      <h2>{t("devis.result.option4.optionJuridique.Title")}</h2>
                    </Col>
                    <Col xs={12} md={5} className="align-right">
                      <span className="option-price red">
                        +{state.opProtectionJuridical.price}€
                        {t("devis.result.month")}
                      </span>
                      <ToggleButton
                        selected={state.opProtectionJuridical.selected}
                        onClick={() => handleSelected("opProtectionJuridical")}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        {t("devis.result.option4.optionJuridique.Text")}
                        <a
                          href="#"
                          onClick={() => showMore("opProtectionJuridical")}
                        >
                          {t("devis.result.more")}
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className="option-box">
                  <Row className="option-title">
                    <Col xs={12} md={7}>
                      <h2>{t("devis.result.option4.optionSchool.Title")}</h2>
                    </Col>
                    <Col xs={12} md={5} className="align-right">
                      <span className="option-price red">
                        +{state.opInsuranceSchool.price}€
                        {t("devis.result.month")}
                      </span>
                      <ToggleButton
                        selected={state.opInsuranceSchool.selected}
                        onClick={() => handleSelected("opInsuranceSchool")}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        {t("devis.result.option4.optionSchool.Text")}
                        <a
                          href="#"
                          onClick={() => showMore("opInsuranceSchool")}
                        >
                          {t("devis.result.more")}
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className="option-box">
                  <Row className="option-title">
                    <Col xs={12} md={7}>
                      <h2>
                        {t("devis.result.option4.optionDependence.Title")}
                      </h2>
                    </Col>
                    <Col xs={12} md={5} className="align-right">
                      <span className="option-price red">
                        +{state.opDependence.price}€{t("devis.result.month")}
                      </span>
                      <ToggleButton
                        selected={state.opDependence.selected}
                        onClick={() => handleSelected("opDependence")}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        {t("devis.result.option4.optionDependence.Text")}
                        <a href="#" onClick={() => showMore("opDependence")}>
                          {t("devis.result.more")}
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className="option-box">
                  <Row>
                    <Col sm={12} md={6}>
                      <Row>
                        <Col>
                          <a href="#">{t("devis.result.conditions")}</a>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <a href="#">
                            {t("devis.result.assuranceInformation")}
                          </a>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={12} md={6}>
                      <Button
                        onClick={() => handleSubmit(state.price + state.opPrice)}
                        className="api-button"
                        variant="large"
                      >
                        {t("devis.result.subscribe")}{" "}
                        {Math.floor(state.price + state.opPrice)},
                        {Math.floor(
                          (Number(state.price + state.opPrice).toFixed(2) -
                            Math.floor(state.price + state.opPrice)) *
                            100
                        )}
                        €{t("devis.result.month")}
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={4} lg={3} className="api-insurance">
              <Row className={state.cardClass}>
                <h2 className="api-title">
                  {t("devis.result.priceBoard.Title")}
                </h2>
                <Col>
                  <Card className="insurrance-box">
                    <Card.Body>
                      <Row>
                        <Col>
                          <label className="api-label">
                            {t("devis.result.priceBoard.Total")}
                          </label>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <span className="inline-block">
                            <h1 className="price red">
                              {Math.floor(state.price + state.opPrice)}
                            </h1>
                          </span>
                          <span className="inline-block">
                            <label className="api-label red">
                              ,
                              {Math.floor(
                                (Number(state.price + state.opPrice).toFixed(
                                  2
                                ) -
                                  Math.floor(state.price + state.opPrice)) *
                                  100
                              )}
                              €
                            </label>
                            <label className="api-label">
                              {t("devis.result.month")}
                            </label>
                          </span>
                        </Col>
                      </Row>
                      <Row className="justify-content-between">
                        <label className="api-label">L’essentiel</label>
                        <label className="api-label">
                          {t("devis.result.priceBoard.Basic")}
                        </label>
                        <label className="api-label">
                          {Math.floor(state.price)}.
                          {Math.floor(
                            (state.price - Math.floor(state.price)) * 100
                          )}
                          €
                        </label>
                      </Row>
                      <Row className="justify-content-between">
                        <label className="api-label">
                          {t("devis.result.priceBoard.Options")}
                        </label>
                        <label className="api-label">
                          {Number(state.opPrice).toFixed(2)}€
                        </label>
                      </Row>
                      <Row>
                        <Col>
                          <Button
                            onClick={() => handleSubmit(state.price + state.opPrice)}
                            className="api-button"
                            variant="large"
                          >
                            {t("devis.result.priceBoard.Button")}
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <ReactLoading className="loading-bar" type={"bars"} color="#C62D54" />
      </Container>
      <Modal
        show={state.showInfo}
        size="lg"
        onHide={() => setState((state) => ({ ...state, showInfo: false }))}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container">
            <Row>
              <Col>
                <h2 className="api-title">{t("devis.result.Information")}</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="api-label">
                  {t("devis.result.postCode")}
                </Form.Label>
                <Form.Control
                  type="text"
                  name="postcode"
                  value={state.userData.postCode}
                  onChange={(e) =>
                    setState((state) => ({
                      ...state,
                      userData: { ...state.userData, postCode: e.target.value },
                    }))
                  }
                  className="api-input"
                  placeholder="Code postal"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="api-label">
                  {t("devis.result.accomodationType")}
                </Form.Label>
                <Form.Control
                  as="select"
                  className={`api-input`}
                  name="type"
                  value={state.userData.accomodationType}
                  onChange={(e) =>
                    setState((state) => ({
                      ...state,
                      userData: {
                        ...state.userData,
                        accomodationType: e.target.value,
                      },
                    }))
                  }
                >
                  <option value="Appartement">
                    {t("devis.accomodationType.appartment")}
                  </option>
                  <option value="Maison">
                    {t("devis.accomodationType.maison")}
                  </option>
                </Form.Control>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="api-label">
                  {t("devis.result.status")}
                </Form.Label>
                <Form.Control
                  as="select"
                  className={`api-input`}
                  name="ownership"
                  value={state.userData.prospectType}
                  onChange={(e) =>
                    setState((state) => ({
                      ...state,
                      userData: {
                        ...state.userData,
                        prospectType: e.target.value,
                      },
                    }))
                  }
                >
                  <option value="Locataire">
                    {t("devis.prospectType.Tenant")}
                  </option>
                  <option value="Propriétaire occupant">
                    {t("devis.prospectType.Owner")}
                  </option>
                  <option value="Locataire meublé">
                    {t("devis.prospectType.Roommate")}
                  </option>
                </Form.Control>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="api-label">
                  {t("devis.result.residence")}
                </Form.Label>
                <Form.Control
                  as="select"
                  className={`api-input`}
                  name="residenceorder"
                  value={state.userData.residenceorder}
                  onChange={(e) =>
                    setState((state) => ({
                      ...state,
                      userData: {
                        ...state.userData,
                        residenceorder: e.target.value,
                      },
                    }))
                  }
                >
                  <option value="Principale">
                    {t("devis.residenceType.Principal")}
                  </option>
                  <option value="Secondaire">
                    {t("devis.residenceType.Second")}
                  </option>
                </Form.Control>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="api-label">
                  {t("devis.result.floor")}
                </Form.Label>
                <Form.Control
                  as="select"
                  className={`api-input`}
                  name="floors"
                  value={state.userData.floors}
                  onChange={(e) =>
                    setState((state) => ({
                      ...state,
                      userData: { ...state.userData, floors: e.target.value },
                    }))
                  }
                >
                  <option value="" disabled>
                    {t("devis.apartmentDetail.floorPlaceholder")}
                  </option>
                  <option value="Rez de Chaussée">
                    {t("devis.apartmentDetail.firstFloor")}
                  </option>
                  <option value="Intermédiaire">
                    {t("devis.apartmentDetail.interFloor")}
                  </option>
                  <option value="Dernier Etage">
                    {t("devis.apartmentDetail.lastFloor")}
                  </option>
                </Form.Control>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="api-label">
                  {t("devis.result.area")}
                </Form.Label>
                <Form.Control
                  type="text"
                  name="area"
                  value={state.userData.area}
                  onChange={(e) =>
                    setState((state) => ({
                      ...state,
                      userData: { ...state.userData, area: e.target.value },
                    }))
                  }
                  className="api-input"
                  placeholder={t("devis.result.area")}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="api-label">
                  {t("devis.result.numberRooms")}
                </Form.Label>
                <Form.Control
                  type="text"
                  name="number_rooms"
                  value={state.userData.rooms}
                  onChange={(e) =>
                    setState((state) => ({
                      ...state,
                      userData: { ...state.userData, rooms: e.target.value },
                    }))
                  }
                  className="api-input"
                  placeholder={t("devis.result.numberRooms")}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="api-label">
                  {t("devis.result.firstName")}
                </Form.Label>
                <Form.Control
                  type="text"
                  name="first_name"
                  value={state.userData.firstName}
                  onChange={(e) =>
                    setState((state) => ({
                      ...state,
                      userData: {
                        ...state.userData,
                        firstName: e.target.value,
                      },
                    }))
                  }
                  className="api-input"
                  placeholder={t("devis.result.firstName")}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="api-label">
                  {t("devis.result.lastName")}
                </Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  value={state.userData.lastName}
                  onChange={(e) =>
                    setState((state) => ({
                      ...state,
                      userData: { ...state.userData, lastName: e.target.value },
                    }))
                  }
                  className="api-input"
                  placeholder={t("devis.result.firstName")}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="api-label">
                  {t("devis.result.Email")}
                </Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={state.userData.email}
                  onChange={(e) =>
                    setState((state) => ({
                      ...state,
                      userData: { ...state.userData, email: e.target.value },
                    }))
                  }
                  className="api-input"
                  placeholder={t("devis.result.Email")}
                />
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={state.showDetail}
        size="lg"
        onHide={() => setState((state) => ({ ...state, showDetail: false }))}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container">
            <Row>
              <Col>
                <h2 className="api-title">{state.guaranteeTitle}</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{state.guaranteeComment}</p>
              </Col>
            </Row>
            <div
              dangerouslySetInnerHTML={{
                __html: state.guaranteeOptions,
              }}
            ></div>
            <Row>
              <Col>
                <p>{t("devis.result.guaranteeCondition")}</p>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={state.showMore}
        size="lg"
        onHide={() => setState((state) => ({ ...state, showMore: false }))}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container">
            <Row>
              <h4 className="bold">{state.moreTitle}</h4>
            </Row>
            <Row>
              <div
                dangerouslySetInnerHTML={{
                  __html: state.moreContent,
                }}
              ></div>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Result;
