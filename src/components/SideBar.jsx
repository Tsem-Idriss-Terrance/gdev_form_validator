import React, {useContext} from "react";
import GroupMenu from "./GroupMenu";
import useActivateFirstIndex from "../utils/activeIndex";
import "../style/SideBar.css";
import AppContext from "../context/AppContext";
const SideBar = ({className}) => {
  let points = ["", "text", "password", "checkbox", "email", "phone", "number"];

  let location = window.location.href.split("/");
  let activeIndex = useActivateFirstIndex(points, location);
  const {setActiveNav: setActiveSideBar} = useContext(AppContext);
  return (
    <div
      className={`${className} border-r-1 border-color-jira width-250 position-sticky flex-shrink-0 px-3 tablet-width-200 ipad-d-none mobile-d-none py-3`}
      style={{height: "calc(100vh - 80px)", top: "80px"}}
    >
      <div className="tablet-d-none laptop-d-none desktop-d-none w-100  ipad-d-flex mobile-d-flex flex-row justify-content-between align-items-center">
        <span className="fw-bold gt-10 text-light">Menu</span>
        <i
          className="bi bi-x-lg gt-10 text-light px-1 border-b-1 border-l-2 border-color-jira rounded-circle cursor-ptr"
          onClick={() => {
            setActiveSideBar("");
          }}
        ></i>
      </div>
      <GroupMenu
        items={[
          {
            id: 0,
            label: "Overview",
            link: "/",
          },
          {
            id: 1,
            label: "Text",
            link: "/field/text",
          },
          {
            id: 2,
            label: "Password",
            link: "/field/password",
          },
          {
            id: 3,
            label: "Checkbox",
            link: "/field/checkbox",
          },
          {
            id: 4,
            label: "Email",
            link: "/field/email",
          },
          {
            id: 5,
            label: "Phone",
            link: "/field/phone",
          },
          {
            id: 6,
            label: "Number",
            link: "/field/number",
          },
        ]}
        firstActiveIdex={activeIndex}
        barClass="d-flex flex-column wh-2 fw-bold gap-2 py-3"
        itemClass="py-2 px-3 br-1 text-decoration-none wh-2"
        activeClass="py-2 px-3 border-3 border-start border-primary  text-decoration-none wh-2"
        withLink={true}
        onEachItemClick={() => {
          setActiveSideBar("");
        }}
      />
    </div>
  );
};

export default SideBar;
