import Breadcrumbs from "../components/Breadcrumbs";
import LightBtn from "../components/light-btn";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "./Table";
export default function Products() {
  const breadcrumbData = [
    { label: "Dashboard", href: "/" },
    { label: "Products", href: "/products" },
  ];
  const header = ["ID", "Product Name", "Price", "Quantity", "Status"];
  const data = [
    {
      id: "0",
      product_name: "New Pakistani Designed Saree",
      price: "900",
      quantity: "3",
      status: "Active",
    },
    {
      id: "1",
      product_name: "Basic Kameez From India",
      price: "700",
      quantity: "9",
      status: "Active",
    },
    {
      id: "2",
      product_name: "New Jamdani Saree",
      price: "500",
      quantity: "5",
      status: "Active",
    },
    {
      id: "3",
      product_name: "Beautiful Handloom Silk Saree",
      price: "500",
      quantity: "20",
      status: "Active",
    },
    {
      id: "4",
      product_name: "Sparkling Georgette Saree",
      price: "799",
      quantity: "9",
      status: "Active",
    },
    {
      id: "5",
      product_name: "Beautiful Handloom Silk Saree",
      price: "1299",
      quantity: "36",
      status: "Active",
    },
    {
      id: "6",
      product_name: "Men's Casual Slim Fit Blazer",
      price: "60",
      quantity: "11",
      status: "Active",
    },
    {
      id: "7",
      product_name: "Tangali Skirt",
      price: "300",
      quantity: "6",
      status: "Active",
    },
    // Add more data as needed
  ];
  return (
    <div className="main-container flex flex-col w-full p-6 gap-5">
      <div className="title-part flex flex-col gap-3">
        <Breadcrumbs breadcrumbs={breadcrumbData} />
        <div className="flex w-full justify-between">
            <LightBtn colour={"bg-teal-300"} title={"Products"} />
            <LightBtn colour={"bg-blue-700"} title={"+ Add Product"} extCss="text-white" link="/products/new" />
        </div>
      </div>
      <Table header={header} data={data} />
      <div className="flex flex-row gap-4 items-center">
        <LightBtn colour={"bg-blue-300"} title={"Previous"} />
        <label>Page 1 of 1</label>
        <LightBtn colour={"bg-blue-300"} title={"Next"} />
      </div>
    </div>
  );
}
