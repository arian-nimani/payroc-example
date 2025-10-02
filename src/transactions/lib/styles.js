export const defaultStyles = {
  disableDefaultStyles: true,
  css: {
    body: {
      margin: "0",
      width: "100%",
    },
    form: {
      display: "flex",
      "align-items": "center",
    },
    input: {
      "line-height": "2",
      "box-sizing": "border-box",
      border: "none",
      width: "100%",
      height: "100%",
      padding: "8px",
      "border-radius": "8px",
      "background-color": "#FFF",
      color: "rgb(99, 99, 99)",
      "text-align": "left",
      "font-size": "0.8rem",
    },
    ":focus-visible": {
      outline: "none",
    },
    "::placeholder": {
      color: "rgb(158, 158, 158)",
    },
    "input[type='text']": {
      "min-height": "40px",
    },
    button: {
      "background-color": "#13B9FF",
      color: "#FFF",
      border: "1px #13B9FF solid",
      "border-radius": "8px",
      width: "100%",
      "text-align": "center",
      "min-height": "45px",
      padding: "8px",
    },
    div: {
      width: "unset",
      margin: "0",
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      "margin-left": "8px",
    },
    label: {
      "font-family": "Arial",
      "font-size": "14px",
      "line-height": "20px",
      color: "#374145",
    },
    'input[type="radio"]': {
      "min-height": "unset",
      "line-height": "unset",
      margin: "6px",
      width: "18px",
      height: "18px",
      "border-color": "#13B9FF",
      color: "#13B9FF",
    },
  },
};

export const cardStyles = {
  ...defaultStyles,
  css: {
    ...defaultStyles.css,
    input: {
      ...defaultStyles.css.input,
    },
  },
};

export const achStyles = {
  ...defaultStyles,
  css: {
    ...defaultStyles.css,
    form: {
      ...defaultStyles.css.form,
      "flex-direction": "column",
      "align-items": "flex-start",
    },
    input: {
      ...defaultStyles.css.input,
    },
  },
};
