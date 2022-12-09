import ErrorAlert from "./Alerts/ErrorAlert";
import InfoAlert from "./Alerts/InfoAlert";
import SuccessAlert from "./Alerts/SuccessAlert";
import SuccessFWAlert from "./Alerts/SuccessFWAlert";
import InfoFWAlert from "./Alerts/InfoFWAlert";
import WarningFWAlert from "./Alerts/WarningFWAlert";
import ErrorFWAlert from "./Alerts/ErrorFWAlert";
import WarningAlert from "./Alerts/WarningAlert";

function App() {
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
    </>
  );
}

export default App;
