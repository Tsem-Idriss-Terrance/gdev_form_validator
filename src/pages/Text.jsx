import React, {useEffect} from "react";
import FieldSkeleton from "../components/FieldSkeleton";
import { toTop } from "../utils/scroller";

const Text = () => {
  useEffect(() => {
    toTop();
  }, []);
  return (
    <FieldSkeleton
      title="Text Field Validation"
      classicCode={` <div class="gdev-field-wrapper">
    <label for="fullname"></label>
    <input type="text" id="fullname" name="fullname" gdev_props='{"name":"fullname","type":"text", "minWord": "2"}'/>
    <span class="gdev-error"></span>
  </div>`}
      floatingCode={` <div class="gdev-field-wrapper">
    <div class="capsule">
      <label for="fullname">User name</label>
      <input type="text" id="fullname" name="fullname" gdev_props='{"name":"fullname","type":"text", "minWord": "2"}'/>
    </div>
    <span class="gdev-error"></span>
  </div>`}
      iftaCode={` <div class="gdev-field-wrapper">
    <div class="capsule">
      <label for="fullname">User name</label>
      <input type="text" id="fullname" placeholder="Enter fullname" name="fullname" gdev_props='{"name":"fullname","type":"text", "minWord": "2"}'/>
    </div>
    <span class="gdev-error"></span>
  </div>`}
      description4="This configuration will ensure that the fullname field contains atleast 2 word."
      properties={[
        {
          key: "type",
          description: "Specify the type of input (required property).",
        },
        {
          key: "name",
          description:
            "use to uniquely identify the field (required property).",
        },
        {
          key: "required",
          description:
            "Boolean indicating if a field can be left blank or not.",
        },
        {
          key: "minChar",
          description:
            "The minimum number of characters the field should have.",
        },
        {
          key: "maxChar",
          description:
            "The maximum number of characters the field should have.",
        },
        {
          key: "minWord",
          description: "The minimum number of words the field should have.",
        },
        {
          key: "maxWord",
          description: "The maximum number of words the field should have.",
        },
        {
          key: "case",
          description: (
            <div>
              <ul>
                <li>
                  If set to <span className="fw-bold text-info">"lower"</span>,
                  the field will only allow lowercase letters.
                </li>
                <li>
                  If set to <span className="fw-bold text-info">"upper"</span>,
                  the field will only allow uppercase letters.
                </li>
              </ul>
            </div>
          ),
        },

        {
          key: "specialChar",
          description:
            " Boolean value to specify if the field should have special characters.",
        },
      ]}
    />
  );
};

export default Text;
