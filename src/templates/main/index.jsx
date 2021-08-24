import React from "react";
import Header from "../../components/organisms/header";
import Divider from "../../components/atoms/divider";
import Boxes from "../../components/organisms/boxes";
import './style.css';

const TemplateBody = () => {
  return (
    <div className="template-body">
      <Boxes />
    </div>
  );
};

const MainTemplate = () => {
  return (
    <>
      <Header />
      <Divider />
      <TemplateBody />
    </>
  );
};

export default MainTemplate;
