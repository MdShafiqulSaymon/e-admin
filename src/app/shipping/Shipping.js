import Breadcrumbs from "../components/Breadcrumbs";
import LightBtn from "../components/light-btn";
import AddressDropDown from "./AddressDropDown";
export default function Shipping() {
  const breadcrumbData = [
    { label: "Dashboard", href: "/" },
    { label: "Shipping", href: "/shipping" },
  ];
  const addresses = [
    "Dhaka, Bangladesh",
    "Chittagong, Bangladesh",
    "Rajshahi, Bangladesh",
    "Cumilla, Bangladesh",
    "Rangpur, Bangladesh",
    "Dinajpur, Bangladesh",
    // Add more addresses as needed
  ];
  return (
    <div className="main-container flex flex-col w-full p-6 gap-5 h-screen">
      <div className="title-part flex flex-col gap-3">
        <Breadcrumbs breadcrumbs={breadcrumbData} />
        <LightBtn colour={"bg-teal-300"} title={"Shipping"} />
        <AddressDropDown addresses={addresses}/>
      </div>
    </div>
  );
}
