import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Icon from "./Icons/Icon";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import PersonalNotes from "./PersonalNotes";

const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
    icon: <Icon name="home" />,
  },
  {
    label: "Service Request",
    href: "/service-request",
    icon: <Icon name="service_request" />,
  },
  {
    label: "Vendors",
    href: "/vendors",
    icon: <Icon name="three_users" />,
  },
  {
    label: "Users",
    href: "/users",
    icon: <Icon name="two_users" />,
  },
  {
    label: "Services",
    href: "/services",
    icon: <Icon name="truck" />,
  },
  {
    label: "Payments",
    href: "/payments",
    icon: <Icon name="cart" />,
  },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  const [hasSeenModal] = useState(() => {
    const h = localStorage.getItem("has_seen_modal");
    if (h === "true") return true;
    else return false;
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!hasSeenModal) {
      setTimeout(() => setShowModal(true), 1000);
    }
  }, [hasSeenModal]);

  useEffect(() => {
    if (showModal === false) localStorage.setItem("has_seen_modal", "true");
  }, [showModal]);
  return (
    <div className="bg-dxp-green-1 h-screen px-6 py-3 relative z-50 flex flex-col justify-between">
      <div>
        <Link to={"/"}>
          <img src={Logo} alt="dxp-logo" className="w-20 h-auto mb-10" />
        </Link>
        <div>
          {NAV_LINKS.map(({ href, label, icon }) => {
            const is_active = href === pathname;
            return (
              <Link
                to={href}
                className={`flex gap-2 items-center group  px-4 py-3 text-sm mb-1.5  ${
                  is_active ? "text-dxp-yellow-1" : "text-dxp-grey-2"
                }`}
                key={label}
              >
                <span className="group-hover:text-dxp-yellow-1">{icon}</span>
                <span className="">{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <Modal show={showModal} closeModal={() => setShowModal(false)}>
        <PersonalNotes setShowModal={setShowModal} />
      </Modal>
      <div className="animate-pulse mx-auto max-w-[200px]">
        <button
          className="bg-dxp-yellow-1 text-[white] rounded-full p-3 px-6 text-xs"
          onClick={() => setShowModal(true)}
        >
          Show Personal Notes
        </button>
      </div>
    </div>
  );
}
