import * as React from "react";
import * as ReactDOM from "react-dom";

import 'antd/dist/antd.css';

import { Hello } from "./app/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);
