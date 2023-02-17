import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { SlideDown } from "react-slidedown";

import { useWishlist } from "context/wishlistContext";
import { useCart, Item } from "react-use-cart";
import { useMediaQuery } from "react-responsive";

interface HSidebarProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const HSidebar: FC<HSidebarProps> = ({ setOpen }) => {
  const [catOpen, setCatOpen] = useState(false);
  const [slide, setSlide] = useState(true);
  const { pathname } = useRouter();
  const { totalItems, isEmpty, cartTotal, items, removeItem } = useCart();
  const { totalItems: totalWishlistItems } = useWishlist();
  const [totals, setTotals] = useState(0);
  const [empty, setEmpty] = useState(false);
  const [Items, setItems] = useState<Item[]>([]);
  const [totalsWishlist, setTotalsWishlist] = useState(0);
  const [cartTotals, setCartTotals] = useState(0);

  useEffect(() => {
    setTotals(totalItems);
    setTotalsWishlist(totalWishlistItems);
    setEmpty(isEmpty);
    setItems(items);
    setCartTotals(cartTotal);
  }, [totalItems, isEmpty, cartTotal, items, totalWishlistItems]);
  const ref = useRef<HTMLDivElement>(null);
  const [fixed, setFixed] = useState(false);
  const callback = () => {
    if (window.scrollY >= 80) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  }, []);
  const [openBtn, setOpenBtn] = useState(false);
  const refbtn = useRef<HTMLUListElement>(null);
  const refbtn2 = useRef<HTMLAnchorElement>(null);
  // CLOSE WHEN CLICKED OUTSIDE OF THE ELEMENT
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        refbtn.current &&
        !refbtn.current.contains(e.target) &&
        refbtn2.current &&
        !refbtn2.current.contains(e.target)
      ) {
        setOpenBtn(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refbtn, refbtn2]);
  const isMobile = useMediaQuery({ query: "(max-width: 991.98px)" });
  return (
    <div ref={ref} className={`sidebar-left ${fixed ? "stick" : ""}`}>
      <a
        ref={refbtn2}
        className="btn btn-open"
        onClick={() => setOpenBtn(!openBtn)}
      ></a>
      <ul className="menu-icons hidden  ">
        <li>
          <a>
            <Image
              src="/imgs/template/monitor.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a>
            <Image
              src="/imgs/template/mobile.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/game.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/clock.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/airpod.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/airpods.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/mouse.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/music-play.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/bluetooth.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/clound.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/electricity.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/cpu.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/devices.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/driver.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/lamp.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
      </ul>
      <ul
        ref={refbtn}
        className={`menu-texts ${isMobile ? "menu-close" : ""}  ${
          openBtn ? "!block" : "menu-close"
        }`}
      >
        <li className="has-children">
          <a href="shop-grid-2.html">
            <span className="img-link">
              <Image
                src="/imgs/template/monitor.svg"
                alt="Ecom"
                className="inline"
                width={24}
                height={24}
              />
            </span>
            <span className="text-link">Computers &amp; Accessories</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Computer Accessories</a>
            </li>
            <li>
              <a href="shop-grid.html">Computer Cases</a>
            </li>
            <li>
              <a href="shop-grid.html">Laptop</a>
            </li>
            <li>
              <a href="shop-grid.html">HDD</a>
            </li>
            <li>
              <a href="shop-grid.html">RAM</a>
            </li>
            <li>
              <a href="shop-grid.html">Headphone</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="#">
            <span className="img-link">
              <Image
                src="/imgs/template/mobile.svg"
                alt="Ecom"
                className="inline"
                width={24}
                height={24}
              />
            </span>
            <span className="text-link">Cell Phones</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Phone Accessories</a>
            </li>
            <li>
              <a href="shop-grid.html">Phone Cases</a>
            </li>
            <li>
              <a href="shop-grid.html">Postpaid Phones</a>
            </li>
            <li>
              <a href="shop-grid.html">Unlocked Phones</a>
            </li>
            <li>
              <a href="shop-grid.html">Prepaid Phones</a>
            </li>
            <li>
              <a href="shop-grid.html">Prepaid Plans</a>
            </li>
            <li>
              <a href="shop-grid.html">Refurbished Phones</a>
            </li>
            <li>
              <a href="shop-grid.html">Straight Talk</a>
            </li>
            <li>
              <a href="shop-grid.html">iPhone</a>
            </li>
            <li>
              <a href="shop-grid.html">Samsung Galaxy</a>
            </li>
            <li>
              <a href="shop-grid.html">Samsung Galaxy</a>
            </li>
            <li>
              <a href="shop-grid.html">Samsung Galaxy</a>
            </li>
            <li>
              <a href="shop-grid.html">Samsung Galaxy</a>
            </li>
            <li>
              <a href="shop-grid.html">Samsung Galaxy</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <Image
                src="/imgs/template/game.svg"
                alt="Ecom"
                className="inline"
                width={24}
                height={24}
              />
            </span>
            <span className="text-link">Gaming Gatgets</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Wireless Routers</a>
            </li>
            <li>
              <a href="shop-grid.html">Cool New Gadgets</a>
            </li>
            <li>
              <a href="shop-grid.html">Tech and Gadgets</a>
            </li>
            <li>
              <a href="shop-grid.html">Geek Gifts and Gadgets</a>
            </li>
            <li>
              <a href="shop-grid.html">Xbox Accessories</a>
            </li>
            <li>
              <a href="shop-grid.html">PlayStation Accessories</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <Image
                src="/imgs/template/clock.svg"
                alt="Ecom"
                className="inline"
                width={24}
                height={24}
              />
            </span>
            <span className="text-link">Smart watches</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Smart Watches</a>
            </li>
            <li>
              <a href="shop-grid.html">Fashion Smart Watches</a>
            </li>
            <li>
              <a href="shop-grid.html">Smart Bracelets</a>
            </li>
            <li>
              <a href="shop-grid.html">Pocket Watches</a>
            </li>
            <li>
              <a href="shop-grid.html">Smart Rings</a>
            </li>
            <li>
              <a href="shop-grid.html">Other Watches</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <Image
                src="/imgs/template/airpods.svg"
                alt="Ecom"
                className="inline"
                width={24}
                height={24}
              />
            </span>
            <span className="text-link">Wired Headphone</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">On-Ear Headphones</a>
            </li>
            <li>
              <a href="shop-grid.html">Earbud & In-Ear</a>
            </li>
            <li>
              <a href="shop-grid.html">DJ Headphones</a>
            </li>
            <li>
              <a href="shop-grid.html">PC Accessories</a>
            </li>
            <li>
              <a href="shop-grid.html">PC Game Headsets</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <Image
                src="/imgs/template/mouse.svg"
                alt="Ecom"
                className="inline"
                width={24}
                height={24}
              />
            </span>
            <span className="text-link">Mouse &amp; Keyboard</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Logitech</a>
            </li>
            <li>
              <a href="shop-grid.html">Redragon</a>
            </li>
            <li>
              <a href="shop-grid.html">Amazon Basics</a>
            </li>
            <li>
              <a href="shop-grid.html">Microsoft</a>
            </li>
            <li>
              <a href="shop-grid.html">MageGee</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <Image
                src="/imgs/template/music-play.svg"
                alt="Ecom"
                className="inline"
                width={24}
                height={24}
              />
            </span>
            <span className="text-link">Headphone</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Car Audio Systems</a>
            </li>
            <li>
              <a href="shop-grid.html">Cellphones</a>
            </li>
            <li>
              <a href="shop-grid.html">Desktops</a>
            </li>
            <li>
              <a href="shop-grid.html">Gaming Consoles</a>
            </li>
            <li>
              <a href="shop-grid.html">Telephones</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <Image
                src="/imgs/template/bluetooth.svg"
                alt="Ecom"
                className="inline"
                width={24}
                height={24}
              />
            </span>
            <span className="text-link">Bluetooth devices</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Player Accessories</a>
            </li>
            <li>
              <a href="shop-grid.html">Computer Accessories</a>
            </li>
            <li>
              <a href="shop-grid.html">Speakers & Audio</a>
            </li>
            <li>
              <a href="shop-grid.html">Computer Networking</a>
            </li>
            <li>
              <a href="shop-grid.html">Movies & Films</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <Image
                src="/imgs/template/clound.svg"
                alt="Ecom"
                className="inline"
                width={24}
                height={24}
              />
            </span>
            <span className="text-link">Cloud Software</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Android</a>
            </li>
            <li>
              <a href="shop-grid.html">Linux & Unix</a>
            </li>
            <li>
              <a href="shop-grid.html">Macintosh</a>
            </li>
            <li>
              <a href="shop-grid.html">Windows</a>
            </li>
            <li>
              <a href="shop-grid.html">iPhone & iOS</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <Image
                src="/imgs/template/electricity.svg"
                alt="Ecom"
                className="inline"
                width={24}
                height={24}
              />
            </span>
            <span className="text-link">Electric accessories</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Antenna Toppers</a>
            </li>
            <li>
              <a href="shop-grid.html">Automotive Body Armor</a>
            </li>
            <li>
              <a href="shop-grid.html">Power Inverter</a>
            </li>
            <li>
              <a href="shop-grid.html">Gas Tank Doors</a>
            </li>
            <li>
              <a href="shop-grid.html">Hood Scoops & Vents</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <Image
                src="/imgs/template/cpu.svg"
                alt="Ecom"
                className="inline"
                width={24}
                height={24}
              />
            </span>
            <span className="text-link">Mainboard &amp; CPU</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Computer CPU Processors</a>
            </li>
            <li>
              <a href="shop-grid.html">Internal Fans & Cooling</a>
            </li>
            <li>
              <a href="shop-grid.html">Graphics Cards</a>
            </li>
            <li>
              <a href="shop-grid.html">Network I/O Port Cards</a>
            </li>
            <li>
              <a href="shop-grid.html">Internal Memory Card</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <Image
                src="/imgs/template/devices.svg"
                alt="Ecom"
                className="inline"
                width={24}
                height={24}
              />
            </span>
            <span className="text-link">Desktop PC</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Graphic PC</a>
            </li>
            <li>
              <a href="shop-grid.html">Office PC</a>
            </li>
            <li>
              <a href="shop-grid.html">Gaming PC</a>
            </li>
            <li>
              <a href="shop-grid.html">Server</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <Image
                src="/imgs/template/driver.svg"
                alt="Ecom"
                className="inline"
                width={24}
                height={24}
              />
            </span>
            <span className="text-link">Speaker</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">JBL</a>
            </li>
            <li>
              <a href="shop-grid.html">Anker</a>
            </li>
            <li>
              <a href="shop-grid.html">Pyle</a>
            </li>
            <li>
              <a href="shop-grid.html">Bose</a>
            </li>
            <li>
              <a href="shop-grid.html">Logitech</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <Image
                src="/imgs/template/airpod.svg"
                alt="Ecom"
                className="inline"
                width={24}
                height={24}
              />
            </span>
            <span className="text-link">Bluetooth Headphone</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">On-Ear Headphones</a>
            </li>
            <li>
              <a href="shop-grid.html">In-Ear Headphones</a>
            </li>
            <li>
              <a href="shop-grid.html">Earbud</a>
            </li>
            <li>
              <a href="shop-grid.html">Over-Ear Headphones</a>
            </li>
            <li>
              <a href="shop-grid.html">Other</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="shop-grid.html">
            <span className="img-link">
              <Image
                src="/imgs/template/lamp.svg"
                alt="Ecom"
                className="inline"
                width={24}
                height={24}
              />
            </span>
            <span className="text-link">Computer Decor</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="shop-grid.html">Copyholders</a>
            </li>
            <li>
              <a href="shop-grid.html">Office Bookends</a>
            </li>
            <li>
              <a href="shop-grid.html">Business Card Holders</a>
            </li>
            <li>
              <a href="shop-grid.html">Lap Desks</a>
            </li>
            <li>
              <a href="shop-grid.html">Mouse Pads</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default HSidebar;
