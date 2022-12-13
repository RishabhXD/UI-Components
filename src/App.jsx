import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
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
import GroupButton from "./Buttons/GroupButton";
import GroupIconButton from "./Buttons/GroupIconButton";
import IconButton from "./Buttons/IconButton";
import PrimaryButton from "./Buttons/PrimaryButton";
import MenuButton from "./Buttons/MenuButton";
import ArticleCard from "./Cards/ArticleCard";
import ArticleImage from "./Cards/ArticleImage";
import SMIconArticleCard from "./Cards/SMIconArticleCard";
import Product from "./Cards/Product";
import Product2 from "./Cards/Product2";
import DetailedProduct from "./Cards/DetailedProduct";
import TestimonialCard from "./Cards/TestimonialCard";
import UserCard from "./Cards/UserCard";
import DetailUser from "./Cards/DetailUser";

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
      <SimpleBreadcrumb />
      <ArrowBreadcrumb />
      <IconsBreadcrumb />
      <FullWidthBreadcrumb />
      <FullWidthIconsBreadcrumb />
      <GroupButton />
      <GroupIconButton />
      <IconButton />
      <PrimaryButton />
      <MenuButton />
      <ArticleCard />
      <ArticleImage />
      <SMIconArticleCard />
      <Product />
      <Product2 />
      <DetailedProduct />
      <TestimonialCard />
      <UserCard />
      <DetailUser />
    </>
  );
}

export default App;
