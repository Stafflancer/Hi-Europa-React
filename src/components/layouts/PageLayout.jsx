import React, { Component } from "react";
import Header from "components/components/PageLayout/Header/Header";
import Footer from "components/components/PageLayout/Footer/Footer";
// style components
// import GetYourQuote from "../components/PageLayout/GetYourQuote";
// import Banner from "../components/PageLayout/Banner";
// import IntroService from "../components/PageLayout/IntroService";
// import IntroContent from "../components/PageLayout/IntroContent";
// import GetMoreInfo from "../components/PageLayout/GetMoreInfo";
// import JoinUs from "../components/PageLayout/JoinUs";
// import Comments from "../components/PageLayout/Comments";
// import ContactUs from "../components/PageLayout/ContactUs";
// import FAQ from "../components/PageLayout/FAQ";
import { Route as RouteDom, Switch, withRouter } from "react-router-dom";
import { routes } from "../../modules/pageLayout/routes";
import NotFound from "../pages/admin/NotFound";

const PageLayout = () => {

  return (
    <div className="page-wrap">
      <Header />
      <div className="page-container">
        <div className="page-content">
          <Switch>
            {routes.map((r) => {
              return (
                <RouteDom
                  path={r.path}
                  key={r.path}
                  exact={true}
                  component={r.component}
                />
              );
            })}
            <RouteDom component={NotFound} />
          </Switch>
          {/* <Banner></Banner>
          <ContactUs></ContactUs>
          <IntroService></IntroService>
          <GetYourQuote></GetYourQuote>
          <IntroContent></IntroContent>
          <GetMoreInfo></GetMoreInfo>
          <FAQ></FAQ>
          <Comments></Comments>
          <JoinUs></JoinUs> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   app: state.app,
//   page: state.page,
// });

export default PageLayout;
