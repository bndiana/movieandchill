import React, { useState, useEffect } from "react";
import "./Form.css";

export function Form(props) {
  const [data, setData] = useState(props.data);
  useEffect(() => setData(props.data), [props]);

  return (
    <div className="form-container">
      <form className="form">
        {Object.keys(data).map((key) => (
          <label key={key}>
            {key}
            <input
              type="text"
              name={key}
              value={data[key] || ""}
              onChange={(ev) => {
                let newData = { ...data };
                newData[ev.target.name] = ev.target.value
                  ? ev.target.value
                  : null;
                setData(newData);
              }}
            />
          </label>
        ))}
      </form>
      <div>
        {" "}
        <button className="form-button" onClick={() => props.onSubmit(data)}>
          {props.buttonInnerText}
        </button>
      </div>
    </div>
  );
}
