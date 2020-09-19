import React, { useState } from "react";
import "./Form.css";

export function Form(props) {
  const [data, setData] = useState(props.data);
  return (
    <div className="form-container">
      <form className="form">
        {Object.keys(data).map((key) => (
          <label key={key}>
            {key}
            <input
              type="text"
              name={key}
              value={data[key]}
              onChange={(ev) => {
                let newData = { ...data };
                newData[ev.target.name] = ev.target.value;
                setData(newData);
              }}
            />
          </label>
        ))}
      </form>
      <button className="form-button" onClick={() => props.onSubmit(data)}>
        {props.buttonInnerText}
      </button>
    </div>
  );
}
