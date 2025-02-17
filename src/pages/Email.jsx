import React, { useEffect }  from "react";
import FieldSkeleton from "../components/FieldSkeleton";
import { toTop } from "../utils/scroller";

const Email = () => {
    useEffect(() => {
      toTop();
    }, []);
  const supportedProviders = ["gmail", "outlook", "yahoo"];
  return (
    <FieldSkeleton
      title="Email Field Validation"
      classicCode={`<div class="gdev-field-wrapper">
    <label for="email"></label>
    <input type="text" id="email" name="email" gdev_props='{"name":"email","type":"email", "provider": "gmail"}'/>
    <span class="gdev-error"></span>
  </div>`}
      floatingCode={`<div class="gdev-field-wrapper">
    <div class="capsule">
     <label for="email"></label>
     <input type="text" placeholder="" id="email" name="email" gdev_props='{"name":"email","type":"email", "provider": "gmail"}'/>
    </div>
    <span class="gdev-error"></span>
  </div>`}
      description4="This configuration will require the user to provide a valid gmail email."
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
          key: "provider",
          description: (
            <>
              This property takes a provider (string). Below is the list of
              supported providers as of today. <br />
              <br />
              <span className="bg-success p-2">
                NOTE: Use "any" if the target provider is not listed.
              </span>
              <br />
              <br />
              <ul>
                {supportedProviders.map((provider) => (
                  <li key={provider}>{provider.toLowerCase()}</li>
                ))}
              </ul>
            </>
          ),
        },
      ]}
    />
  );
};

export default Email;
