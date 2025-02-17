import CodeHighlighter from "./CodeHighlighter";

export default function FieldSkeleton(props) {
  return (
    <div className="laptop-px-10 desktop-px-10 tablet-px-4 ipad-px-4 mobile-px-4 my-4 wh-2 overflow-hidden">
      <h2 className="mb-3 fw-bold">{props.title}</h2>
      <p className="gt-5">
        This field validation is designed to ensure that the user input meets
        specific criteria before the form can be submitted. This validation can
        be configured using various properties, each serving a unique purpose to
        enforce the required rules.
      </p>

      <h4 className="fw-bold">Valdation Properties</h4>
      <ul>
        {props.properties.map((property) => (
          <li key={property.key}>
            <strong className="text-primary">{property.key}</strong>:
            <div className="gt-5 my-2">{property.description}</div>
          </li>
        ))}
      </ul>

      <h4 className="fw-bold">How It Works</h4>
      <p className="gt-5">
        When the user interacts with the text field, the validation logic checks
        the input against the specified rules. If the input does not meet the
        criteria (e.g., the text is shorter than the minimum number of
        characters), an error message will be displayed in the
        <code> gdev-error</code> element.
      </p>

      <div id="configuration">
        <div id="classic-code-sample">
          <h4 className="fw-bold">Example Configuration (classic design)</h4>
          
            <CodeHighlighter code={props.classicCode} language="markup" />
          
        </div>

        <div id="floating-code-sample">
          <h4 className="fw-bold">
            Example Configuration (floating-label design)
          </h4>
          
            <CodeHighlighter code={props.floatingCode} language="markup" />
          
        </div>

        <p className="gt-4 text-danger">{props.description4}</p>
      </div>
    </div>
  );
}
