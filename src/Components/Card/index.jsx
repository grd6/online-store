import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/solid";

const Card = ({ items }) => {
  const context = useContext(ShoppingCartContext);
  console.log(context);

  const showProduct = (productDetail) => {
    context.openProductDetail(items);
    context.setProductToShow(productDetail);
    console.log(productDetail);
  };

  const adProductToCard = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProduct([...context.cartProduct, productData]);
    console.log("cart", context.cartProduct);
    context.openCheckoutsideMenu();
    context.closeProductDetail();
  };
  return (
    <div
      className="bg-white cursor-pointer w-56 h60 rounded-lg"
      onClick={() => showProduct(items)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        {console.log(items)}
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {items.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={items.images[0]}
          alt={items.category.name}
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white rounded-full w-6 h-6 m-2 p-1"
          onClick={(event) => adProductToCard(event, items)}
        >
          <PlusIcon className="h-6 w-6 text-black" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{items.title}</span>
        <p className="text-lg font-medium">${items.price}</p>
      </p>
    </div>
  );
};

export default Card;
