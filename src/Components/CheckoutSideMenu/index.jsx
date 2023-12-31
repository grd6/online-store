import React from "react";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../util";
import "./style.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  console.log("cart", context.cartProduct);

  const handDelete = (id) => {
    const filteredProduct = context.cartProduct.filter(
      (product) => product.id != id
    );
    context.setCartProduct(filteredProduct);
  };

  const handledCheckout = () => {
    const orderToAdd = {
      data: "01.02.24",
      products: context.cartProduct,
      totalProducts: context.cartProduct.lengh,
      totalPrice: totalPrice(context.cartProduct),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProduct([]);
  };

  return (
    <aside
      className={`${
        context.isCheckoutsideMenu ? "flex" : "hidden"
      } checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      {console.log(context.isProductDetailOpen)}
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black"
            onClick={() => context.closeCheckoutsideMenu()}
          />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProduct.map((Product) => (
          <OrderCard
            key={Product.id}
            id={Product.id}
            title={Product.title}
            imageUrl={Product.images}
            price={Product.price}
            handDelete={handDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(context.cartProduct)}
          </span>
        </p>
        <button
          className="w-full bg-black py-3 text-white rounded-lg"
          onClick={() => handledCheckout()}
        >
          Checkout
        </button>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
