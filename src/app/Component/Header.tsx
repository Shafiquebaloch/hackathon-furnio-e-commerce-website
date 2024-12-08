
import Image from "next/image";
import Logo from "../../../Public/Images/header.png"
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../Style/header.css";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="subnav">
        <div className="logo ">
          <div className="logo2">
          <Image src={Logo} width={175} height={31} alt="Picture of the author" />
          </div>
        
        <div className="heading">Furnio</div>
        </div>

        <div className="navbtns">
        <ul className="head">
          <Link href={""}>
            <li>Home</li>
          </Link>
          <Link href={"../Shop"}>
            <li>Shop</li>
          </Link>
          <Link href={"/blog"}>
            <li>Blog</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
        </div>

        <div className="icons">
          <div className="icon1"><MdPersonOutline /></div>
        <span className="icon2"><CiSearch /></span>
        <span className="icon3"><GoHeart /></span>
        <span className="icon4"><AiOutlineShoppingCart /></span>

        </div>

    </div>
      </div>
    </>
  );
}
