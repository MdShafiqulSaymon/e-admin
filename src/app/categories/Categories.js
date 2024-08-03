import Breadcrumbs from "../components/Breadcrumbs";
import LightBtn from "../components/light-btn";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "./Table";
const Categories = () => {
  const breadcrumbData = [
    { label: "Dashboard", href: "/" },
    { label: "Categories", href: "/categories" },
  ];
  const header = ["ID", "Category Name", "Products", "Edit"];
  const data = [
    {
      ID: 1,
      "Category Name": "Laptop",
      Products: 'Apple MacBook Pro 17"',
      Edit: "...",
    },
    {
      ID: 2,
      "Category Name": "Laptop PC",
      Products: "Microsoft Surface Pro",
      Edit: "...",
    },
    {
      ID: 3,
      "Category Name": "Accessories",
      Products: "Magic Mouse 2",
      Edit: "...",
    },
  ];
  return (
    <div className="main-container flex flex-col w-full p-6 gap-5">
      <div className="title-part">
        <Breadcrumbs breadcrumbs={breadcrumbData} />
        <LightBtn colour={"bg-teal-300"} title={"Category"} />
      </div>
      <div className="input-box flex flex-col gap-3">
        <label className="text-gray-700">Create New Category</label>
        <input
          type="text"
          placeholder="Category Name"
          className="p-3 rounded-lg"
        ></input>
        <input
          type="text"
          placeholder="Category Title"
          className="p-3 rounded-lg"
        ></input>
        <input
          type="text"
          placeholder="Category Subtitle"
          className="p-3 rounded-lg"
        ></input>
      </div>
      <div className="image-upload border-4 w-fit border-dashed flex flex-col p-8 gap-5 justify-center items-center">
        <FontAwesomeIcon icon={faUpload} className="w-20 h-20 text-blue-300 " />
        <label>Upolad Image</label>
      </div>
      <LightBtn colour={"bg-sky-600"} title={"Save"} />
      <Table header={header} data={data} />
    </div>
  );
};

export default Categories;
