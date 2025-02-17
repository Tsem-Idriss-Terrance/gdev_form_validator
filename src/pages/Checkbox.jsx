import React, { useEffect } from "react";
import CodeHighlighter from "../components/CodeHighlighter";
import { toTop } from "../utils/scroller";

const Checkbox = () => {
    useEffect(() => {
        toTop();
    },[])
  const properties = [
    {
      key: "type",
      description: "Specify the type of input (required property).",
    },
    {
      key: "name",
      description: "use to uniquely identify the field (required property).",
    },
    {
      key: "value",
      description:
        "The value of the checkbox to be used in the response (required property).",
    },
    {
      key: "required",
      description: "Boolean indicating if a field can be left blank or not.",
    },
    {
      key: "linkTo",
      description: (
        <span>
          <p>
            Enables the linking of the checkbox with another field. It takes a
            value in the form <strong>"fieldName,relationShip"</strong>
          </p>
          <p>
            <div>
              <span className="gt-5 fw-bold">RelationShips</span>
              <ul>
                <div>
                  <li className="text-info">passwordShowToggle:</li>
                  <p>
                    Used with a password field to show or hide the password.
                  </p>
                </div>
                <div>
                  <li className="text-info">enableToggle:</li>
                  <p>Used to disable or enable a field.</p>
                </div>
                <div>
                  <li className="text-info">reset:</li>
                  <p>
                    With this, the linked field takes the value of the checkbox
                    when its checked.
                  </p>
                </div>
                <div>
                  <li className="text-info">clear:</li>
                  <p>
                    The value of the linked field is cleared when checkbox is
                    checked.
                  </p>
                </div>
              </ul>
            </div>
          </p>
          <CodeHighlighter
            code={`<div className="gdev-field-wrapper">
    <label htmlFor="name">Name</label>
    <input type="text" id="name" gdev_props='{"name":"name", "type":"text", "minWord":"2"}'/>
</div>

<div className="gdev-field-wrapper">
    <label htmlFor="cn">clear name</label>
    <input type="checkbox" id="cn" gdev_props='{"name":"cn", "type":"checkbox", "value":"clear", "linkTo":"name,clear"}'/>
</div>`}
            language="markup"
          />
          <p>
            The above code links a checkbox to a text field with the
            relationship <strong>'clear'</strong>.
          </p>
        </span>
      ),
    },
    {
      key: "groupName",
      description: "Use to identify a group of checkboxes. ",
    },
    {
      key: "groupMembers",
      description: (
        <span>
          Contains names of other checkboxes to be included in a group. eg{" "}
          <span className="text-info fw-bold gt-3">
            "groupMembers":"name1,name2,name3"
          </span>
        </span>
      ),
    },
    {
      key: "defaultSelect",
      description:
        "Conatins names of members that must be selected in group. Default members can not be unselected. Similar syntax as groupMembers. ",
    },
    {
      key: "maxSelect",
      description:
        "The maximum number of members that can be selected in group.",
    },
  ];
  return (
    <div className="mx-5 my-4 wh-2 overflow-hidden">
      <div>
        <h2 className="mb-3 fw-bold">Checkbox</h2>
        <p className="gt-5">
          This field validation is designed to ensure that the user input meets
          specific criteria before the form can be submitted. This validation
          can be configured using various properties, each serving a unique
          purpose to enforce the required rules.
        </p>
      </div>
      <div>
        <h4 className="fw-bold">Valdation Properties</h4>
        <ul>
          {properties.map((property) => (
            <li key={property.key}>
              <strong className="text-primary">{property.key}</strong>:
              <p className="gt-5">{property.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="fw-bold">Grouping</h2>
        <p className="gt-5">
          The <span translate="no">gdev_form_validator</span> allows developers
          to easily group checkboxes, making it ideal for creating MCQ forms.
          This functionality is achieved using the attributes{" "}
          <strong>'groupName'</strong>,<strong>'groupMembers'</strong>,{" "}
          <strong>maxSelect</strong>, and <strong>'defaultSelect'</strong>.
        </p>
        <p>
          <CodeHighlighter
            code={`<div className="gdev-field-wrapper">
    <label htmlFor="A">A</label>
    <input type="checkbox" id="A" gdev_props='{"name":"A", "type":"checkbox", "value":"A", "groupName":"q1", "groupMembers":"A,B,C", "maxSelect":"1"}'/>
</div>

<div className="gdev-field-wrapper">
    <label htmlFor="B">B</label>
    <input type="checkbox" id="B" gdev_props='{"name":"B", "type":"checkbox", "value":"B"}'/>
</div>

<div className="gdev-field-wrapper">
    <label htmlFor="C">C</label>
    <input type="checkbox" id="C" gdev_props='{"name":"C", "type":"checkbox", "value":"C"}'/>
</div>`}
            language="markup"
          />
        </p>
        <p className="gt-5">
          The above code creates three input fields and link them with the name{" "}
          <strong>'q1'</strong> and only a maximum of one member can be
          selected.
        </p>
        <p className="bg-info text-dark p-2 br-1">
          <strong>REMARK:</strong> The link attributes{" "}
          <strong>
            ('groupName', 'groupMembers', 'defaultSelect', 'maxSelect')
          </strong>{" "}
          should be placed in any <strong>one</strong> of the group members.
        </p>
      </div>
    </div>
  );
};

export default Checkbox;
