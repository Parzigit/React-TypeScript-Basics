 import { /*MouseEvent,*/ ReactNode, useState } from "react";
 interface Props{
  items:[];
  heading:string;
  onSelectItem:(item:string)=>void;
  children:ReactNode;
 }

 function ListGroup({items,heading,onSelectItem}:Props){
    const getList=()=>{
      return items.length==0 && <p>Nothing Exists here</p>;
    }
    const [selectedIndex,setIndex]=useState(-1);
    // const clickFunc=(event:MouseEvent)=>console.log(event);
    return(
    <>
    <h1>{heading}</h1>
    {getList()}
    <ul className="list-group">
    {items.map((item,index)=>(<li className={selectedIndex==index?"list-group-item active":"list-group-item"} key={item} onClick={()=>{setIndex(index);
      onSelectItem(item);
    }}>{item}</li>))}
    </ul>
  </>);
}
export default ListGroup;