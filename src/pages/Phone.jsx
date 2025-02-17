import React, {useEffect} from "react";
import FieldSkeleton from "../components/FieldSkeleton";
import { toTop } from "../utils/scroller";

const Phone = () => {
  useEffect(() => {
    toTop();
  }, []);
  const supportedCountries = [
    "Cameroon",
    "Nigeria",
    "Ghana",
    "Kenya",
    "Uganda",
    "Rwanda",
    "Ethiopia",
    "namibia",
    "Southafrica",
    "Botswana",
    "Zimbabwe",
    "Angola",
    "Zambia",
    "Malawi",
    "Senegal",
    "Tanzania",
    "ivorycoast",
    "morocco",
    "Algeria",
    "Egypt",
  ];
  return (
    <FieldSkeleton
      title="Phone Field Validation"
      classicCode={`<div class="gdev-field-wrapper">
    <label for="phone"></label>
    <input type="tel" id="phone" name="phone" gdev_props='{"name":"phone","type":"tel", "country": "cameroon, nigeria"}'/>
    <span class="gdev-error"></span>
  </div>`}
      floatingCode={`<div class="gdev-field-wrapper">
    <div class="capsule">
     <label for="phone"></label>
     <input type="tel" placeholder="" id="phone" name="email" gdev_props='{"name":"phone","type":"tel", "country": "cameroon, nigeria"}'/>
    </div>
    <span class="gdev-error"></span>
  </div>`}
      iftaCode={`<div class="gdev-field-wrapper">
    <div class="capsule">
     <label for="phone">Phone</label>
     <input type="tel" placeholder="Enter phone number" id="phone" name="email" gdev_props='{"name":"phone","type":"tel", "country": "cameroon, nigeria"}'/>
    </div>
    <span class="gdev-error"></span>
  </div>`}
      description4="This configuration will require the user to provide a valid phone number from cameroon or nigeria."
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
          key: "country",
          description: (
            <>
              This property takes a strings (countries the phone number should
              come from separated by comma). Below is the list of supported
              countries as of today. <br />
              <br />
              <span className="bg-success p-2">
                NOTE: Use "any" if the target country is not listed.
              </span>
              <br />
              <br />
              <ul>
                {supportedCountries.map((country) => (
                  <li key={country}>{country.toLowerCase()}</li>
                ))}
              </ul>
            </>
          ),
        },
      ]}
    />
  );
};

export default Phone;
