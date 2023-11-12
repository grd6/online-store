import { XMarkIcon } from "@heroicons/react/24/solid";

const index = props => {
    const  {id,title,imageUrl,price,handDelete} = props;
  return (
    <div className="flex justify-between items-center p-6 ">
      <div className="flex items-center gap-2">
  
      
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg  object-cover"
            src={imageUrl}
            alt={title}
          ></img>
        </figure>
        <p className="text-sm font-light ">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        <XMarkIcon onClick={()=>handDelete(id)} className="h-6 w-6 text-black cursor-pointer" />
      </div>
    </div>
  );
};

export default index;
