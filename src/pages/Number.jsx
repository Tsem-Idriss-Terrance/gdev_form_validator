import React, {useEffect} from "react";
import FieldSkeleton from "../components/FieldSkeleton";
import { toTop } from "../utils/scroller";

const Number = () => {
  useEffect(() => {
    toTop();
  }, []);
  const numClasses = ["odd", "even", "prime"];
  const numTypes = ["integer", "decimal", "real"];
  const fancyNums = ["perfectsquare"];
  return (
    <FieldSkeleton
      title="Number Field Validation"
      classicCode={`<div class="gdev-field-wrapper">
    <label for="magicNumber"></label>
    <input type="number" id="magicNumber" name="magicNumber" gdev_props='{"name":"magicNumber","type":"number", "min": "7"}'/>
    <span class="gdev-error"></span>
  </div>`}
      floatingCode={`<div class="gdev-field-wrapper">
    <div class="capsule">
     <label for="magicNumber"></label>
     <input type="number" placeholder="" id="magicNumber" name="magicNumber" gdev_props='{"name":"magicNumber","type":"number", "min": "7"}'/>
    </div>
    <span class="gdev-error"></span>
  </div>`}
      iftaCode={`<div class="gdev-field-wrapper">
    <div class="capsule">
     <label for="magicNumber">Magic Number</label>
     <input type="number" placeholder="Enter magic number" id="magicNumber" name="magicNumber" gdev_props='{"name":"magicNumber","type":"number", "min": "7"}'/>
    </div>
    <span class="gdev-error"></span>
  </div>`}
      description4="This configuration will require the user to provide a magic number greather than 6."
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
          key: "min",
          description: "The minimum value the field should have.",
        },
        {
          key: "max",
          description: "The maximum value the field should have.",
        },
        {
          key: "factorOf",
          description:
            "Indicates that the filed should contain only factors of a certain number.",
        },
        {
          key: "multipleOf",
          description:
            "Indicates that the field should contain only multiples of a certain number.",
        },
        {
          key: "range",
          description:
            "Specifies a range within which the provided value should appear ( 'min,max' ). It should be of type string.",
        },
        {
          key: "numType",
          description: (
            <>
              This property takes a number type (string). Below is the list of
              supported numbers types as of today. <br />
              <ul>
                {numTypes.map((numType) => (
                  <li key={numType}>{numType.toLowerCase()}</li>
                ))}
              </ul>
            </>
          ),
        },
        {
          key: "numClass",
          description: (
            <>
              This property takes a certain class of numbers (string). Below is
              the list of supported numbers class as of today. <br />
              <ul>
                {numClasses.map((numType) => (
                  <li key={numType}>{numType.toLowerCase()}</li>
                ))}
              </ul>
            </>
          ),
        },
        {
          key: "fancyNum",
          description: (
            <>
              This property takes a special type of numbers (string). Below is
              the list of supported fancy numbers as of today. <br />
              <ul>
                {fancyNums.map((fancyNum) => (
                  <li key={fancyNum}>{fancyNum.toLowerCase()}</li>
                ))}
              </ul>
            </>
          ),
        },
      ]}
    />
  );
};

export default Number;
