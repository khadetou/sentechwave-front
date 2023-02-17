import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex items-center order-2 user-noti gap-[30px] xl:gap-[48px]  lg:mr-0">
      <div className="dropdowns dropdowns-end">
        <label className="cursor-pointer dropdowns-label" tabIndex={0}>
          <div className="relative w-[26px] h-[26px]">
            <Image
              className="w-full h-full object-cover"
              src="/imgs/icons/icon-messages.svg"
              width={26}
              height={26}
              alt="message icon"
            />
            <div className="w-2 h-2 bg-blue-600 rounded-full absolute right-[1px] top-[-1px]"></div>
          </div>
        </label>
        <ul className="dropdowns-content" tabIndex={0}>
          <div className="relative menu rounded-2xl dropdowns-shadow bg-white px-6 mt-[50px] min-w-[350px] pt-[21px] pb-[11px] ">
            <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute border-b-white w-[14px] top-[-7px] right-[18px]"></div>
            <div className="flex items-center justify-between !pb-5 border-bottom border-neutral mb-[22px] ">
              <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                New Mesages
              </p>
              <a
                className="text-color-brands text-xs hover:opacity-75"
                href="#"
              >
                View All
              </a>
            </div>
            <li className="rounded ml-[-14px] hover:bg-gray-100 w-[calc(100%+28px)] ">
              <div className="flex items-start bg-transparent gap-[10px] p-[14px]">
                <Image
                  className="w-8 h-8 rounded-full"
                  src="/imgs/avatar-layouts-1.png"
                  alt="user avatar"
                  width={32}
                  height={32}
                />
                <div>
                  <div className="flex items-center gap-[25px] mb-[7px]">
                    <p className="leading-4 text-gray-1100 font-semibold text-[10px] ">
                      Esther Howard
                    </p>
                    <p className="leading-4 text-gray-500 text-[10px] ">
                      3 mins ago
                    </p>
                  </div>
                  <p className="leading-4 text-gray-500 text-[10px] line-clamp-2">
                    Please tell me how to develop this template to Tailwind CSS
                    3 and ReactJS ?
                  </p>
                </div>
              </div>
            </li>
            <div className="w-full bg-neutral h-[1px] "></div>
            <li className="rounded ml-[-14px] hover:bg-gray-100 w-[calc(100%+28px)] ">
              <div className="flex items-start bg-transparent gap-[10px] p-[14px]">
                <Image
                  className="w-8 h-8 rounded-full"
                  src="/imgs/avatar-layouts-2.png"
                  alt="user avatar"
                  width={32}
                  height={32}
                />
                <div>
                  <div className="flex items-center gap-[25px] mb-[7px]">
                    <p className="leading-4 text-gray-1100 font-semibold text-[10px] ">
                      Emma Watson
                    </p>
                    <p className="leading-4 text-gray-500 text-[10px] ">
                      3 mins ago
                    </p>
                  </div>
                  <p className="leading-4 text-gray-500 text-[10px]  line-clamp-2">
                    Hey, I&apos;m going to meet a friend of mine at the
                    department store.
                  </p>
                </div>
              </div>
            </li>
            <div className="w-full bg-neutral h-[1px] "></div>
            <li className="rounded ml-[-14px] hover:bg-gray-100 w-[calc(100%+28px)] ">
              <div className="flex items-start bg-transparent gap-[10px] p-[14px]">
                <Image
                  className="w-8 h-8 rounded-full"
                  src="/imgs/avatar-layouts-3.png"
                  alt="user avatar"
                  width={32}
                  height={32}
                />
                <div>
                  <div className="flex items-center gap-[25px] mb-[7px]">
                    <p className="leading-4 text-gray-1100 font-semibold text-[10px] ">
                      Elizabeth
                    </p>
                    <p className="leading-4 text-gray-500 text-[10px] ">
                      3 mins ago
                    </p>
                  </div>
                  <p className="leading-4 text-gray-500 text-[10px]  line-clamp-2">
                    Good morning, How are you? What about our next meeting?
                  </p>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </div>
      <div className="dropdowns dropdowns-end">
        <label className="cursor-pointer dropdowns-label" tabIndex={0}>
          <div className="relative w-[26px] h-[26px]">
            <Image
              className="w-full h-full object-cover"
              src="/imgs/icons/icon-notification-bing.svg"
              width={26}
              height={26}
              alt="notification icon"
            />
            <div className="w-2 h-2 bg-blue-600 rounded-full absolute right-[1px] top-[-1px]"></div>
          </div>
        </label>
        <ul className="dropdowns-content" tabIndex={0}>
          <div className="relative menu rounded-2xl dropdowns-shadow bg-white px-6 mt-[50px] min-w-[350px] pt-[21px] pb-[11px] ">
            <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute border-b-white w-[14px] top-[-7px] right-[18px] "></div>
            <div className="flex items-center justify-between !pb-5 border-bottom border-neutral mb-[22px] ">
              <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                Notifications
              </p>
              <a
                className="text-color-brands text-xs hover:opacity-75"
                href="#"
              >
                View All
              </a>
            </div>
            <li className="rounded ml-[-14px] hover:bg-gray-100 w-[calc(100%+28px)] ">
              <div className="flex items-start bg-transparent gap-[10px] p-[14px]">
                <Image
                  className="w-8 h-8 rounded-full"
                  src="/imgs/avatar-layouts-4.png"
                  alt="user avatar"
                  width={32}
                  height={32}
                />
                <div>
                  <div className="flex items-center gap-[15px] mb-[7px]">
                    <p className="leading-4 text-gray-1100 font-semibold text-[10px] ">
                      Jenny Wilson
                    </p>
                    <p className="leading-4 text-gray-500 text-[10px]  line-clamp-2">
                      commented on your latest story
                    </p>
                  </div>
                  <p className="leading-4 text-gray-500 text-[10px] ">
                    1 min ago
                  </p>
                </div>
              </div>
            </li>
            <div className="w-full bg-neutral h-[1px] "></div>
            <li className="rounded ml-[-14px] hover:bg-gray-100 w-[calc(100%+28px)] ">
              <div className="flex items-start bg-transparent gap-[10px] p-[14px]">
                <Image
                  className="w-8 h-8 rounded-full"
                  src="/imgs/avatar-layouts-1.png"
                  alt="user avatar"
                  height={32}
                  width={32}
                />
                <div>
                  <div className="flex items-center gap-[15px] mb-[7px]">
                    <p className="leading-4 text-gray-1100 font-semibold text-[10px] ">
                      Esther Howard
                    </p>
                    <p className="leading-4 text-gray-500 text-[10px]  line-clamp-2">
                      commented on your latest story
                    </p>
                  </div>
                  <p className="leading-4 text-gray-500 text-[10px] ">
                    3 mins ago
                  </p>
                </div>
              </div>
            </li>
            <div className="w-full bg-neutral h-[1px] "></div>
            <li className="rounded ml-[-14px] hover:bg-gray-100 w-[calc(100%+28px)] ">
              <div className="flex items-start bg-transparent gap-[10px] p-[14px]">
                <Image
                  className="w-8 h-8 rounded-full"
                  src="/imgs/avatar-layouts-2.png"
                  alt="user avatar"
                  width={32}
                  height={32}
                />
                <div>
                  <div className="flex items-center gap-[15px] mb-[7px]">
                    <p className="leading-4 text-gray-1100 font-semibold text-[10px] ">
                      Steven
                    </p>
                    <p className="leading-4 text-gray-500 text-[10px]  line-clamp-2">
                      add new photos in Travel Album
                    </p>
                  </div>
                  <p className="leading-4 text-gray-500 text-[10px] ">
                    5 mins ago
                  </p>
                </div>
              </div>
            </li>
            <div className="w-full bg-neutral h-[1px] "></div>
            <li className="rounded ml-[-14px] hover:bg-gray-100 w-[calc(100%+28px)] ">
              <div className="flex items-start bg-transparent gap-[10px] p-[14px]">
                <Image
                  className="w-8 h-8 rounded-full"
                  src="/imgs/avatar-layouts-3.png"
                  alt="user avatar"
                  width={32}
                  height={32}
                />
                <div>
                  <div className="flex items-center gap-[15px] mb-[7px]">
                    <p className="leading-4 text-gray-1100 font-semibold text-[10px] ">
                      Wada Warren
                    </p>
                    <p className="leading-4 text-gray-500 text-[10px]  line-clamp-2">
                      posted new job
                    </p>
                  </div>
                  <p className="leading-4 text-gray-500 text-[10px] ">
                    6 mins ago
                  </p>
                </div>
              </div>
            </li>
            <div className="w-full bg-neutral h-[1px] "></div>
            <li className="rounded ml-[-14px] hover:bg-gray-100 w-[calc(100%+28px)] ">
              <div className="flex items-start bg-transparent gap-[10px] p-[14px]">
                <Image
                  className="w-8 h-8 rounded-full"
                  src="/imgs/avatar-layouts-4.png"
                  alt="user avatar"
                  height={32}
                  width={32}
                />
                <div>
                  <div className="flex items-center gap-[15px] mb-[7px]">
                    <p className="leading-4 text-gray-1100 font-semibold text-[10px] ">
                      Jenny Wilson
                    </p>
                    <p className="leading-4 text-gray-500 text-[10px]  line-clamp-2">
                      {" "}
                      Updated her profile and company
                    </p>
                  </div>
                  <p className="leading-4 text-gray-500 text-[10px] ">
                    8 mins ago
                  </p>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </div>
      <div className="dropdowns dropdowns-end">
        <label className="cursor-pointer dropdowns-label" tabIndex={0}>
          <Image
            src="/imgs/avatar-layouts-5.png"
            alt="user avatar"
            width={48}
            height={48}
          />
        </label>
        <ul className="dropdowns-content" tabIndex={0}>
          <div className="relative menu rounded-2xl dropdowns-shadow p-[25px] pb-[10px] bg-white mt-[25px] md:mt-[40px] min-w-[237px]  ">
            <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-white right-[18px]"></div>
            <li className="text-gray-500 hover:text-gray-1100 hover:bg-gray-100   rounded-lg group p-[15px] pl-[21px]">
              <a
                className="flex items-center bg-transparent p-0 gap-[7px]"
                href="sign-in.html"
              >
                {" "}
                <i className="w-4 h-4 grid place-items-center">
                  <Image
                    width={16}
                    height={16}
                    className="group-hover:filter-black "
                    src="/imgs/icons/icon-user.svg"
                    alt="icon"
                  />
                </i>
                <span>Profile</span>
              </a>
            </li>
            <li className="text-gray-500 hover:text-gray-1100 hover:bg-gray-100   rounded-lg group p-[15px] pl-[21px]">
              <a
                className="flex items-center bg-transparent p-0 gap-[7px]"
                href="#"
              >
                {" "}
                <i className="w-4 h-4 grid place-items-center">
                  <Image
                    width={16}
                    height={16}
                    className="group-hover:filter-black "
                    src="/imgs/icons/icon-favorite-chart.svg"
                    alt="icon"
                  />
                </i>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="text-gray-500 hover:text-gray-1100 hover:bg-gray-100   rounded-lg group p-[15px] pl-[21px]">
              <a
                className="flex items-center bg-transparent p-0 gap-[7px]"
                href="#"
              >
                {" "}
                <i className="w-4 h-4 grid place-items-center">
                  <Image
                    width={16}
                    height={16}
                    className="group-hover:filter-black "
                    src="/imgs/icons/icon-bitcoin-card.svg"
                    alt="icon"
                  />
                </i>
                <span>Payouts</span>
              </a>
            </li>
            <li className="text-gray-500 hover:text-gray-1100 hover:bg-gray-100   rounded-lg group p-[15px] pl-[21px]">
              <a
                className="flex items-center bg-transparent p-0 gap-[7px]"
                href="#"
              >
                {" "}
                <i className="w-4 h-4 grid place-items-center">
                  <Image
                    width={16}
                    height={16}
                    className="group-hover:filter-black "
                    src="/imgs/icons/icon-trade.svg"
                    alt="icon"
                  />
                </i>
                <span>Statement</span>
              </a>
            </li>
            <li className="text-gray-500 hover:text-gray-1100 hover:bg-gray-100   rounded-lg group p-[15px] pl-[21px]">
              <a
                className="flex items-center bg-transparent p-0 gap-[7px]"
                href="#"
              >
                {" "}
                <i className="w-4 h-4 grid place-items-center">
                  <Image
                    width={16}
                    height={16}
                    className="group-hover:filter-black "
                    src="/imgs/icons/icon-sun.svg"
                    alt="icon"
                  />
                </i>
                <span>Settings</span>
              </a>
            </li>
            <div className="w-full bg-neutral h-[1px] my-[7px] "></div>
            <li className="text-gray-500 hover:text-gray-1100 hover:bg-gray-100   rounded-lg group p-[15px] pl-[21px]">
              <a
                className="flex items-center bg-transparent p-0 gap-[7px]"
                href="#"
              >
                {" "}
                <i className="w-4 h-4 grid place-items-center">
                  <Image
                    width={16}
                    height={16}
                    className="group-hover:filter-black "
                    src="/imgs/icons/icon-logout.svg"
                    alt="icon"
                  />
                </i>
                <span>Log out</span>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
//
