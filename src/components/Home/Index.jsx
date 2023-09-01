import React from "react";
import MainHome from "./MainHome";
import Discounts from "./Discounts";
import ViewByCategoryIndex from "../ViewByCategory/Indxe";
import Suppliers from "./Suppliers";

// Needs
// you need create req sned on this req category view in home
// and add category id and image cover

function HomeIndex() {
  return (
    <div className="bg-[#DEE2E7] flex flex-col gap-5">
      <MainHome />
      <Discounts />
      <ViewByCategoryIndex category_id="64bf9a461e435a618d06fb61" />
      <ViewByCategoryIndex category_id="64bf9a5e1e435a618d06fb6b" />
      <Suppliers/>
      <ViewByCategoryIndex category_id="64bf9a5e1e435a618d06fb6b" />
    </div>
  );
}

export default HomeIndex;