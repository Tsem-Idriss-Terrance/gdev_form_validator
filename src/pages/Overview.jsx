import {useEffect} from "react";
import CodeHighlighter from "../components/CodeHighlighter";
import {toTop} from "../utils/scroller";
import downloadFile from "../utils/DownloadFile";
export default function Overview() {
  useEffect(() => {
    toTop();
  }, []);
  return (
    <div className="laptop-px-10 desktop-px-10  overflow-hidden  wh-2 tablet-px-4 ipad-px-4 mobile-px-4 ">
      <div>
        <h1 className="mb-4 display-1 fw-bold" translate="no">
          Gdev Form Validator
        </h1>
        <p>
          <span translate="no">Gdev Form Validator </span> is a dynamic and
          customizable form validation package designed to make form validation
          easy and flexible for developers. It provides multiple designs and
          realtime validation both in English and French.
        </p>
        <div className="alert alert-info" role="alert">
          NOTE: Make sure you write your script in a module environment.
        </div>
      </div>

      <hr />

      <div id="supportedInputTypes">
        <h2 className="fw-bold">Supported Input Types</h2>
        <ul translate="no">
          <li>Text</li>
          <li>Number</li>
          <li>Checkbox</li>
          <li>Textarea</li>
          <li>Email</li>
          <li>Phone</li>
          <li>Password</li>
        </ul>
      </div>
      <hr />
      <div id="design">
        <h2 className="fw-bold">Designs</h2>
        <ol>
          <li className="gt-5 fw-bold">classic</li>
          <form
            id="myForm"
            style={{width: "400px"}}
            className="mobile-w-100"
            gdev_lang="en"
            form_validator_design="classic"
          >
            <div className="gdev-field-wrapper">
              <label htmlFor="name">User Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                style={{color: "white"}}
                gdev_props='{"name":"name", "type":"text", "minWord":"2@@please provide name and surname.", "case":"upper@@all in uppercase"}'
              />

              <span className="gdev-error"></span>
            </div>
          </form>
          <li className="gt-5 fw-bold mt-4">floating-label</li>
          <form
            id="myForm"
            style={{width: "400px"}}
            gdev_lang="en"
            className="mobile-w-100"
            form_validator_design="floating-label"
          >
            <div className="gdev-field-wrapper">
              <div className="capsule">
                <label htmlFor="phone">Phone number</label>
                <input
                  type="text"
                  id="phone"
                  placeholder=""
                  style={{color: "white"}}
                  gdev_props='{"name":"phone", "type":"tel", "country":"cameroon, nigeria@@please provide a valid phone number from cameroon or nigeria."}'
                />
              </div>

              <span className="gdev-error"></span>
            </div>
          </form>
          <li className="gt-5 fw-bold  mt-4">
            ifta-label{" "}
            <span className="gt-3 text-danger">
              (same structure as floating)
            </span>
            <form
              id="myForm"
              style={{width: "400px"}}
              className="mobile-w-100"
              gdev_lang="en"
              form_validator_design="ifta-label"
            >
              <div className="gdev-field-wrapper">
                <div className="capsule">
                  <label htmlFor="num">Magic number</label>
                  <input
                    type="text"
                    id="num"
                    placeholder=""
                    style={{color: "white"}}
                    gdev_props='{"name":"num", "type":"number", "multipleOf":"3@@magic number must be a multiple of 3.", "required": "true"}'
                  />
                </div>

                <span className="gdev-error"></span>
              </div>
            </form>
          </li>
        </ol>
      </div>
      <hr />
      <div id="installation">
        <h2 className="fw-bold">Installation</h2>
        <ol>
          <div>
            <li className="gt-5 fw-bold">NPM</li>
            <p>To install the package using npm, run:</p>
            <CodeHighlighter
              code={`npm install gdev_form_validator 
//then import gdev_form_validator to your project
import "gdev_form_validator"
              `}
              language="javascript"
            />
          </div>

          <div>
            <li className="gt-5 fw-bold">CDN</li>
            <p>
              To use the package via CDN, include the following in your HTML
              body tag:
            </p>
            <CodeHighlighter
              code={`<script src="https://cdn.jsdelivr.net/npm/gdev_form_validator@latest/dist/validator.bundle.js"></script>`}
              language="markup"
            />
          </div>

          <div>
            <li className="gt-5 fw-bold">Download and link manually</li>
            <p>
              Download the built JS file{" "}
              <span
                className="text-primary cursor-ptr"
                onClick={() => {
                  downloadFile(
                    `/gdev_form_validator.js`,
                    "gdev_form_validator"
                  );
                }}
              >
                here.
              </span>
              and include it to your project as follows.
            </p>
            <CodeHighlighter
              code={`<script src="path/to/gdev_form_validator.js"></script>`}
              language="markup"
            />
          </div>
        </ol>
      </div>
      <hr />
      <div id="usage">
        <h2 className="fw-bold">Basic usage</h2>
        <p>
          Once installed, simply create a form and specify validation rules
          using <span className="text-info">gdev_props</span> attribute.
        </p>
        <ul>
          <div className="my-2">
            <li className="fw-bold" id="classic">
              classic design
            </li>
            <CodeHighlighter
              code={`
<form id="myForm" lang="en" form_validator_design="classic" response_exclude='["pToggle"]'>

  <div class="gdev-field-wrapper">
    <label for="fullname">User Name</label>
    <input type="text" id="fullname" name="fullname" gdev_props='{"name":"fullname","type":"text", "minWord": "2"}'/>
    <span class="gdev-error"></span>
  </div>

  <div class="gdev-field-wrapper">
    <label for="password">Password</label>
    <input type="password" id="password" name="password" gdev_props='{"name":"password","type":"password", "securityLevel": "s3"}'/>
    <span class="gdev-error"></span>
  </div>

  <div class="gdev-field-wrapper">
    <label for="pToggle">show password</label>
    <input type="checkbox" id="pToggle" name="pToggle" gdev_props='{"name":"pToggle","type":"checkbox", "value": "pToggle", "linkTo":"password,passwordShowToggle"}'/>
    <span class="gdev-error"></span>
  </div>

</form>
  `}
              language="markup"
            />
          </div>
          <div className="my-5">
            <li className="fw-bold" id="fl">
              floating-label
            </li>
            <CodeHighlighter
              code={`
<form id="myForm" lang="en" form_validator_design="floating-label" response_exclude='["pToggle"]'>

  <div class="gdev-field-wrapper">
    <div class="capsule">
      <label for="fullname"></label>
      <input type="text" id="fullname" placeholder="" name="fullname" gdev_props='{"name":"fullname","type":"text", "minWord": "2"}'/>
    </div>
    <span class="gdev-error"></span>
  </div>

  <div class="gdev-field-wrapper">
    <div class="capsule">
      <label for="password"></label>
      <input type="password"  placeholder="" id="password" name="password" gdev_props='{"name":"password","type":"password", "securityLevel": "s3"}'/>
    </div>
    <span class="gdev-error"></span>
  </div>

  <div class="gdev-field-wrapper">
    <label for="pToggle">show password</label>
    <input type="checkbox" id="pToggle" name="pToggle" gdev_props='{"name":"pToggle","type":"checkbox", "value": "pToggle", "linkTo":"password,passwordShowToggle"}'/>
    <span class="gdev-error"></span>
  </div>

</form>
  `}
              language="markup"
            />
          </div>
        </ul>
      </div>
      <hr />
      <div id="attributes">
        <h2 className="fw-bold">Form Attributes</h2>
        <ol>
          <div>
            <li className="fw-bold">lang</li>
            <p className="gt-4">
              This attribute specifies the language of the for console errors
              and default user error messages. It can take either{" "}
              <span className="text-info">"en"</span> or{" "}
              <span className="text-info">"fr"</span>.
            </p>
          </div>
          <div>
            <li className="fw-bold">form_validation_design</li>
            <p className="gt-4">
              This attribute determines the <strong>visual design</strong> of
              validation messages and error highlights in the form. It allows
              customization of how validation feedback is displayed to users.
            </p>
          </div>
          <div>
            <li className="fw-bold">response_exclude</li>
            <p className="gt-4">
              This attribute specifies which input fields should be excluded
              from the validation response. When set, the excluded fields will
              not appear in the validation result even if they are part of the
              form.
            </p>
          </div>
        </ol>
      </div>
      <hr />
      <div id="response">
        <h2 className="fw-bold">Validation Response</h2>
        <p className="gt-5">
          When a form is submitted, gdev_form_validator package dispatches an
          event <span className="text-info">"onCompleteValidation"</span> that
          provides the validation response. Developers need to listen for this
          event on the form to retrieve the validation results.
        </p>
        <ul className="d-flex flex-column gap-4">
          <div>
            <li className="fw-bold">Listening for the Validation Response</li>
            <p className="gt-5">
              To access the validation response, add the following script to
              your page:
            </p>
            <CodeHighlighter
              code={`<script type="module">
  document.getElementById("form-id").addEventListener("onCompleteValidation", () => {
    // The validationResponse object is created by the package during event dispatch
    console.log(validationResponse["form-id"]); // Contains validation results
  });
</script>`}
              language="javascript"
            />
          </div>
          <div>
            <li className="fw-bold">Validation Response Structure</li>
            <p className="gt-5">The response follows this structure:</p>
            <CodeHighlighter
              code={`{status: true,values: {fieldName1: "value", fieldName2: "value"}}`}
              language="javascript"
            />
          </div>

          <div>
            <li className="fw-bold">Key Points</li>
            <ul>
              <li>
                <span className="text-info gt-5">status</span> → A boolean
                indicating whether validation was successful.
              </li>
              <li>
                <span className="text-info gt-5">values</span> → An object
                containing form field names as keys and their respective values.
              </li>
              <li>
                If <span className="text-info">status</span> is{" "}
                <span className="text-info ">false</span>, values will be an
                empty object <span className="text-info">{"{}"}</span>.
              </li>
            </ul>
          </div>
        </ul>
      </div>
      <hr />
      <div id="errorMessages">
        <h2 className="fw-bold">Handling Error Messages</h2>
        <p className="gt-5">
          Our package provides default error messages for various validation
          rules. However, developers can also customize error messages to fit
          their needs using the <span className="text-info">@@</span> syntax.
        </p>
        <ul>
          <div>
            <li className="fw-bold">Default Error Messages</li>
            <p className="gt-5">
              By default, the package generates standard error messages when
              validation fails. For example:
            </p>
            <CodeHighlighter
              code={`<input type="text" id="fullname" name="fullname" gdev_props='{"name":"fullname","type":"text", "minWord": "2"}'/>`}
              language="markup"
            />
            <p className="gt-5">
              If the full name is less than 2 words, the default message could
              be: <br />
              <span className="text-info">
                "This field is requires atleast 2 words."
              </span>
            </p>
          </div>

          <div>
            <li className="fw-bold">Custom Error Messages</li>
            <p className="gt-5">
              Developers can override the default messages by using{" "}
              <span className="text-info">@@</span> followed by their custom
              message.
            </p>
            <CodeHighlighter
              code={`<input type="text" id="fullname" name="fullname" gdev_props='{"name":"fullname","type":"text", "minWord": "2@@please provide full name."}'/>`}
              language="markup"
            />
            <p className="gt-5">
              If the full name is less than 2 words, the default message will
              be: <br />
              <span className="text-info">"please provide full name."</span>
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
}
