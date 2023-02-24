import Image from "next/image";
import Link from "next/link";

const EditTop = () => {
  return (
    <>
      <h2 className="capitalize text-gray-1100 font-bold text-[28px] leading-[35px]  mb-[13px]">
        Détails du produit
      </h2>
      <div className="flex items-center text-xs text-gray-500 gap-x-[11px] mb-[17px]">
        <div className="flex items-center gap-x-1">
          <Image
            width={12}
            height={13}
            src="/imgs/icons/icon-home-2.svg"
            alt="home icon"
          />
          <Link className="capitalize" href="/">
            Accueil
          </Link>
        </div>
        <Image
          width={12}
          height={13}
          src="/imgs/icons/icon-arrow-right.svg"
          alt="arrow right icon"
        />
        <span className="capitalize text-blue-600">Détails du produit</span>
      </div>
    </>
  );
};

export default EditTop;
