import { useAppSelector } from "hooks/index";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Item, useRecviewed } from "context/recviewedContext";
import Link from "next/link";

const RecViewed = () => {
  const { product } = useAppSelector((store) => store.product);
  const { items, removeItem } = useRecviewed();

  const [itms, setItms] = useState<Item[]>([]);
  useEffect(() => {
    setItms(items);
  }, [items]);
  console.log(items);
  return (
    <div>
      {" "}
      <h4 className="color-brand-3 text-2xl font-bold">
        Articles récemment consultés
      </h4>
      <div className="row mt-40">
        {itms.map((item) => {
          if (product && product._id !== item.id) {
            return (
              <Link
                onDoubleClick={() => removeItem(item.id)}
                key={item.id}
                href={`/products/${item.id}`}
                className="col-lg-3 col-md-6 col-sm-12 hover:shadow-md cursor-pointer"
              >
                <div className="card-grid-style-2 card-grid-none-border hover-up">
                  <div className="image-box">
                    <Link href={`/products/${item.id}`}>
                      <Image
                        src={item.images[0].url}
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </Link>
                  </div>
                  <div className="info-right">
                    <span className="font-xs color-gray-500">{item.brand}</span>
                    <br />
                    <Link
                      className="color-brand-3 font-xs-bold truncate block max-w-[185px]"
                      href={`/products/${item.id}`}
                    >
                      {item.name}
                    </Link>
                    <div className="rating">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{
                            width: `${(100 * item.rating) / 5}%`,
                          }}
                        ></div>
                      </div>
                      <span className="font-xs color-gray-500"> (65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        {Number(item.price).toLocaleString("fr-FR", {
                          style: "currency",
                          currency: "XOF",
                        })}
                      </strong>
                      <br />
                      <span className="color-gray-500 price-line">
                        {Number(item.oldPrice).toLocaleString("fr-FR", {
                          style: "currency",
                          currency: "XOF",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          } else if (!product) {
            return (
              <Link
                onDoubleClick={() => removeItem(item.id)}
                key={item.id}
                href={`/products/${item.id}`}
                className="col-lg-3 col-md-6 col-sm-12 hover:shadow-md cursor-pointer"
              >
                <div className="card-grid-style-2 card-grid-none-border hover-up">
                  <div className="image-box">
                    <Link href={`/products/${item.id}`}>
                      <Image
                        src={item.images[0].url}
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </Link>
                  </div>
                  <div className="info-right">
                    <span className="font-xs color-gray-500">{item.brand}</span>
                    <br />
                    <Link
                      className="color-brand-3 font-xs-bold truncate block max-w-[185px]"
                      href={`/products/${item.id}`}
                    >
                      {item.name}
                    </Link>
                    <div className="rating">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{
                            width: `${(100 * item.rating) / 5}%`,
                          }}
                        ></div>
                      </div>
                      <span className="font-xs color-gray-500"> (65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        {Number(item.price).toLocaleString("fr-FR", {
                          style: "currency",
                          currency: "XOF",
                        })}
                      </strong>
                      <br />
                      <span className="color-gray-500 price-line">
                        {Number(item.oldPrice).toLocaleString("fr-FR", {
                          style: "currency",
                          currency: "XOF",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default RecViewed;
