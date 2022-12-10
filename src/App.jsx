import { ToastContainer,toast,Zoom,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ErrorAlert from "./Alerts/ErrorAlert";
import InfoAlert from "./Alerts/InfoAlert";
import SuccessAlert from "./Alerts/SuccessAlert";
import SuccessFWAlert from "./Alerts/SuccessFWAlert";
import InfoFWAlert from "./Alerts/InfoFWAlert";
import WarningFWAlert from "./Alerts/WarningFWAlert";
import ErrorFWAlert from "./Alerts/ErrorFWAlert";
import WarningAlert from "./Alerts/WarningAlert";
import SimpleBreadcrumb from "./Breadcrumbs/SimpleBreadcrumb";
import ArrowBreadcrumb from "./Breadcrumbs/ArrowBreadcrumb";
import IconsBreadcrumb from "./Breadcrumbs/IconsBreadcrumb";
import FullWidthBreadcrumb from "./Breadcrumbs/FullWidthBreadcrumb";
import FullWidthIconsBreadcrumb from "./Breadcrumbs/FullWidthIconsBreadcrumb";

function App() {

  toast.error("Error");
  toast.success("Success");

  return (
    <>
      <ErrorAlert />
      <InfoAlert />
      <SuccessAlert />
      <WarningAlert />
      <SuccessFWAlert />
      <InfoFWAlert />
      <WarningFWAlert />
      <ErrorFWAlert />
      <SimpleBreadcrumb/>
      <ArrowBreadcrumb/>
      <IconsBreadcrumb/>
      <FullWidthBreadcrumb/>
      <FullWidthIconsBreadcrumb/>
    </>
  );
}

export default App;
