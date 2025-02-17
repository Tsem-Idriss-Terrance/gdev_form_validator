import React, {useEffect} from "react";
import FieldSkeleton from "../components/FieldSkeleton";
import { toTop } from "../utils/scroller";

const Password = () => {
  useEffect(() => {
    toTop();
  }, []);
  return (
    <FieldSkeleton
      title="Password Field Validation"
      classicCode={`<div class="gdev-field-wrapper">
    <input 
      type="password"
      gdev_props='{"type":"password","name":"password", "securityLevel": "s3", "confirmWith":"cpassword"}' 
      placeholder="Enter username" 
    />
    <span class="gdev-error"></span>
</div>

<div class="gdev-field-wrapper">
    <input 
      type="password"
      gdev_props='{"type":"password","name":"cpassword", "securityLevel": "s3", "confirmWith":"password"}' 
      placeholder="Enter username" 
    />
    <span class="gdev-error"></span>
</div>
`}
      floatingCode={`<div class="gdev-field-wrapper">
    <div class="capsule">
     <label for="password"></label>
     <input 
      id="password"
      type="password"
      gdev_props='{"type":"password","name":"password", "securityLevel": "s3", "confirmWith":"cpassword"}' 
      placeholder="" 
     />
    </div>
    <span class="gdev-error"></span>
</div>

<div class="gdev-field-wrapper">
    <div class="capsule">
     <label for="cpassword"></label>
     <input 
      id="cpassword"
      type="password"
      gdev_props='{"type":"password","name":"cpassword", "securityLevel": "s3", "confirmWith":"password"}' 
      placeholder="" 
     />
    </div>
    <span class="gdev-error"></span>
</div>

`}
      iftaCode={`<div class="gdev-field-wrapper">
    <div class="capsule">
     <label for="password">password</label>
     <input 
      id="password"
      type="password"
      gdev_props='{"type":"password","name":"password", "securityLevel": "s3", "confirmWith":"cpassword"}' 
      placeholder="password" 
     />
    </div>
    <span class="gdev-error"></span>
</div>

<div class="gdev-field-wrapper">
    <div class="capsule">
     <label for="cpassword">confirm password</label>
     <input 
      id="cpassword"
      type="password"
      gdev_props='{"type":"password","name":"cpassword", "securityLevel": "s3", "confirmWith":"password"}' 
      placeholder="Enter password again" 
     />
    </div>
    <span class="gdev-error"></span>
</div>

`}
      description4="This configuration will ensure that the password field requires at least 12 characters and max 17 of which 3 numbers, 3 uppercase and 3 lowercase. and also it will validate the two passwords we linked. "
      properties={[
        {
          key: "type",
          description: "Specify the type of input (required property).",
        },
        {
          key: "name",
          description: "use to uniquely identify the field.",
        },
        {
          key: "maxCharRepeat",
          description:
            "Use to specifify how many times a character can repeat.",
        },
        {
          key: "sequentialPatternCount",
          description:
            "This property determins the max length characters can occure in sequential order. eg if set to '3', this means we can't have a pattern like '123', '321', 'bcd' or 'dcb' in the password field.",
        },
        {
          key: "minLen",
          description:
            "The minimum number of characters the field should have.",
        },
        {
          key: "minNumCount",
          description: "The minimum number of numbers the field should have.",
        },
        {
          key: "minLowercaseAlphabetCount",
          description: "The minimum number of lowercase characters.",
        },
        {
          key: "minUppercaseAlphabetCount",
          description: "The minimum number of uppercase characters.",
        },
        {
          key: "minSpecialCharCount",
          description: "use to uniquely identify the field.",
        },
        {
          key: "confirmWith",
          description:
            "this property is used to confirm two passwords. It takes the name of the other password field. ",
        },
        {
          key: "securityLevel",
          description: (
            <>
              This is the password security level. It can be set to "s1", "s2",
              "s3" or "s4".
              {
                <ul>
                  <li>
                    <span className="fw-bold text-info">s1</span>:{" "}
                    <p>
                      {" "}
                      Very weak. The password should be between 5 and 7
                      characters inclusive.
                    </p>
                  </li>
                  <li>
                    <span className="fw-bold text-info">s2</span>:{" "}
                    <p>
                      Weak. The password should be between 8 and 11 characters
                      inclusive and should contain a combination of lowercase
                      and uppercase characters.
                    </p>
                  </li>
                  <li>
                    <span className="fw-bold text-info">s3</span>:{" "}
                    <p>
                      Medium. The password should be between 12 and 17
                      characters inclusive and should contain at least 3
                      lowercase, 3 uppercase and 3 numbers.
                    </p>
                  </li>
                  <li>
                    <span className="fw-bold text-info">s4</span>:{" "}
                    <p>
                      Strong. The password should be between 18 and 30
                      characters inclusive and should contain at least 4
                      lowercase, 4 uppercase, 4 special characters and 4
                      numbers.
                    </p>
                  </li>
                </ul>
              }
            </>
          ),
        },
      ]}
    />
  );
};

export default Password;
