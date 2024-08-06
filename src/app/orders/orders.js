import Breadcrumbs from "../components/Breadcrumbs";
import LightBtn from "../components/light-btn";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "./Table";
const Orders = () => {
  const breadcrumbData = [
    { label: "Dashboard", href: "/" },
    { label: "Orders", href: "/orders" },
  ];
  const header = [
    "ID",
    "Date",
    "Customer Name",
    "Items",
    "Phone Number",
    "Total Price",
    "Payment",
    "Status",
  ];
  const data = [
    {
      id: "1",
      date: "2024-07-17",
      customer_name: "John Doe",
      items: "Item 1, Item 2",
      phone_number: "123-456-7890",
      total_price: "$100",
      payment: "Paid",
      status: "Pending",
    },
    {
      id: "2",
      date: "2024-07-18",
      customer_name: "Jane Smith",
      items: "Item 3",
      phone_number: "987-654-3210",
      total_price: "$50",
      payment: "Unpaid",
      status: "Confirmed",
    },
    {
      id: "2",
      date: "2024-07-18",
      customer_name: "Jane Smith",
      items: "Item 3",
      phone_number: "987-654-3210",
      total_price: "$50",
      payment: "Unpaid",
      status: "Confirmed",
    },
    {
      id: "2",
      date: "2024-07-18",
      customer_name: "Jane Smith",
      items: "Item 3",
      phone_number: "987-654-3210",
      total_price: "$50",
      payment: "Unpaid",
      status: "Confirmed",
    },
    {
      id: "2",
      date: "2024-07-18",
      customer_name: "Jane Smith",
      items: "Item 3",
      phone_number: "987-654-3210",
      total_price: "$50",
      payment: "Unpaid",
      status: "Confirmed",
    },
    {
      id: "2",
      date: "2024-07-18",
      customer_name: "Jane Smith",
      items: "Item 3",
      phone_number: "987-654-3210",
      total_price: "$50",
      payment: "Unpaid",
      status: "Confirmed",
    },
    {
      id: "2",
      date: "2024-07-18",
      customer_name: "Jane Smith",
      items: "Item 3",
      phone_number: "987-654-3210",
      total_price: "$50",
      payment: "Unpaid",
      status: "Confirmed",
    },
    {
      id: "2",
      date: "2024-07-18",
      customer_name: "Jane Smith",
      items: "Item 3",
      phone_number: "987-654-3210",
      total_price: "$50",
      payment: "Unpaid",
      status: "Confirmed",
    },
    {
      id: "2",
      date: "2024-07-18",
      customer_name: "Jane Smith",
      items: "Item 3",
      phone_number: "987-654-3210",
      total_price: "$50",
      payment: "Unpaid",
      status: "Confirmed",
    },
    {
      id: "10",
      date: "2024-07-18",
      customer_name: "Jane Smith",
      items: "Item 3",
      phone_number: "987-654-3210",
      total_price: "$50",
      payment: "Unpaid",
      status: "Confirmed",
    },

    // Add more data as needed
  ];
  return (
    <div className="main-container flex flex-col w-full p-6 gap-5">
      <div className="title-part flex flex-col gap-3">
        <Breadcrumbs breadcrumbs={breadcrumbData} />
        <LightBtn colour={"bg-teal-300"} title={"Orders"} />
      </div>
      <Table header={header} data={data} />
      <div className="flex flex-row gap-4 items-center">
        <LightBtn colour={"bg-blue-300"} title={"Previous"} />
        <label>Page 1 of 1</label>
        <LightBtn colour={"bg-blue-300"} title={"Next"} />
      </div>
    </div>
  );
};

export default Orders;
