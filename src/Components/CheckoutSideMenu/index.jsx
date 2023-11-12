import React from "react";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import "./style.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  
  return (
    <aside
      className={`${
        context.isCheckoutsideMenu ? "flex" : "hidden"
      } checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      {console.log(context.isProductDetailOpen)}
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div >
          <XMarkIcon className="h-6 w-6 text-black" onClick={() => context.closeCheckoutsideMenu()}/>
        </div>
      </div>|
    </aside>
  );
};

export default CheckoutSideMenu;
