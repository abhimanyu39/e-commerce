const development = {
  servicePath: "http://localhost:5000",
  currentEnv: "development",
};

const stage = {
  servicePath: "http://localhost:5000",
  currentEnv: "stage",
};

let config = development;
switch (process.env.REACT_APP_ENV) {
  case "stage": {
    config = stage;
    break;
  }
  default: {
    config = development;
    break;
  }
}

export default config;
