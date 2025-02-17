import React from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import Overview from "./pages/Overview";
import Text from "./pages/Text";
import Password from "./pages/Password";
import Email from "./pages/Email";
import Phone from "./pages/Phone";
import Number from "./pages/Number";
import Checkbox from "./pages/Checkbox";
const Router = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Overview/>}></Route>
            <Route path="/field/text" element={<Text />}></Route>
            <Route path="/field/password" element={<Password />}></Route>
            <Route path="/field/email" element={<Email />}></Route>
            <Route path="/field/phone" element={<Phone />}></Route>
            <Route path="/field/number" element={<Number />}></Route>
            <Route path="/field/checkbox" element={<Checkbox />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Router;
