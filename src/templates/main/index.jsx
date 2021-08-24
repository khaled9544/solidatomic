import React from "react";
import Header from '../../components/organisms/header';

const TemplateBody = () => {
  return <div>Template body will be here</div>;
};

const MainTemplate = () => {
  return (
    <>
      <Header />
      <TemplateBody />
      {/* <Footer /> */}
    </>
  );
};

export default MainTemplate;
