import Icon from "./Icons/Icon";
import Chart from "./Chart";

export default function Dashboard() {
  return (
    <div className="py-12 px-6 overflow-auto max-h-screen">
      <div className="flex bg-white rounded-lg py-3 px-1 justify-between items-center mb-8">
        <h1 className="font-semibold">Welcome Dexter Admin,</h1>
        <div className="flex gap-6 items-center">
          <button className="relative -top-[1px]">
            <Icon name="notification" />
          </button>
          <button className="flex items-center">
            <div className="w-8 h-8 rounded-full flex justify-center items-center bg-dxp-green-2 mr-1">
              <Icon name="user" />
            </div>
            <p className="text-sm font-normal mr-2">Admin</p>
            <Icon name="chevron_down" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Vendors Card */}
        <div className="px-2 py-4 bg-white rounded-lgx shadow-dashboard-card">
          <div className="w-[60px] h-[60px] ml-4 aspect-square flex items-center justify-center bg-dxp-blue-1/25 rounded-full mb-6">
            <Icon name="vendors" />
          </div>
          <div className="flex flex-col justify-center mx-auto w-fit items-center">
            <h1 className="text-dxp-blue-1 text-[32px] font-semibold text-center">
              350
            </h1>
            <h3 className="text-dxp-grey-3 text-lg text-center font-semibold">
              Vendors
            </h3>
          </div>
        </div>

        {/* Active Services Card */}

        <div className="px-2 py-4 bg-white rounded-lgx shadow-dashboard-card">
          <div className="w-[60px] h-[60px] ml-4 aspect-square flex items-center justify-center bg-dxp-yellow-2/25 rounded-full mb-6">
            <Icon name="services" />
          </div>
          <div className="flex flex-col justify-center mx-auto w-fit items-center">
            <h1 className="text-dxp-yellow-2 text-[32px] font-semibold text-center">
              10
            </h1>
            <h3 className="text-dxp-grey-3 text-lg text-center font-semibold">
              Active Services
            </h3>
          </div>
        </div>

        {/* Active Service Requests Card */}

        <div className="px-2 py-4 bg-white rounded-lgx shadow-dashboard-card">
          <div className="w-[60px] h-[60px] ml-4 aspect-square flex items-center justify-center bg-dxp-red-1/25 rounded-full mb-6">
            <Icon name="active_service_requests" />
          </div>
          <div className="flex flex-col justify-center mx-auto w-fit items-center">
            <h1 className=" text-[32px] font-semibold text-dxp-red-1 text-center">
              56
            </h1>
            <h3 className="text-dxp-grey-3 text-lg text-center font-semibold">
              Active Service Requests
            </h3>
          </div>
        </div>

        {/* Users Card */}

        <div className="px-2 py-4 bg-white rounded-lgx shadow-dashboard-card">
          <div className="w-[60px] h-[60px] ml-4 aspect-square flex items-center justify-center bg-dxp-grey-4/25 rounded-full mb-6">
            <Icon name="vendors" />
          </div>
          <div className="flex flex-col justify-center mx-auto w-fit items-center">
            <h1 className="text-dxp-grey-4 text-[32px] font-semibold">1100+</h1>
            <h3 className="text-dxp-grey-3 text-lg text-center font-semibold">
              Users
            </h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(255px,31.5%)] gap-x-8">
        <div className="flex flex-col gap-7 pb-3 ">
          <div className="flex justify-between bg-white rounded-lg items-center">
            <h1 className="font-semibold py-1.5 pl-0.5 text-dxp-grey-6">
              Users on Dexter App
            </h1>
            <div className="px-4 py-2 rounded-md border border-dxp-grey-5 flex gap-1 items-center">
              <div className="flex justify-center items-center gap-2">
                <Icon name="calendar" />
                <span className="text-sm text-dxp-grey-7">Last 6 months</span>
              </div>
              <div className="flex gap-1 items-center">
                <button>
                  <Icon name="chevron_left" />
                </button>
                <button>
                  <Icon name="chevron_right" />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg py-5 pl-12 flex-1 w-auto h-auto">
            <Chart
              dataSetsData={[
                [0, 0, 0, 0, 0, 0],
                [50, 150, 300, 500, 750, 1100],
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Vendors />
          <Users />
        </div>
      </div>
    </div>
  );
}

const Vendors = () => {
  const vendors = [
    {
      name: "Esosa Bolaji",
      occupation: "Electrician",
      rating: 4,
      profile_img: "/images/profile_image_1.png",
    },
    {
      name: "Efik Ayo",
      occupation: "Carpenter",
      rating: 4,
      profile_img: "/images/profile_image_2.png",
    },
    {
      name: "Victor Siji",
      occupation: "Makeup Artist",
      rating: 4,
      profile_img: "/images/profile_image_3.png",
    },
    {
      name: "Tolani Chelsea",
      occupation: "House Cleaner",
      rating: 4,
      profile_img: "/images/profile_image_3.png",
    },
    {
      name: "Amala Moon",
      occupation: "Restaurant",
      rating: 4,
      profile_img: "/images/profile_image_3.png",
    },
  ];

  return (
    <div className="px-3 py-5 shadow-dashboard-card rounded-lg bg-white">
      <h1 className="font-medium text-xl text-dxp-grey-6 text-center mb-7">
        Top Rated Vendors
      </h1>
      <div className="flex flex-col gap-4">
        {vendors.map(({ name, occupation, profile_img, rating }) => (
          <div className="flex justify-between gap-1 items-center">
            <div className="flex gap-2 items-center">
              <img className="w-8 h-auto" src={profile_img} alt="" />
              <h1 className="text-xs font-medium text-dxp-grey-9">{name}</h1>
            </div>
            <div>
              <h3 className="text-xs font-light text-dxp-grey-8">
                {occupation}
              </h3>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((x) => {
                  if (x <= rating)
                    return (
                      <div className="text-dxp-yellow-3">
                        <Icon name="star" />
                      </div>
                    );
                  else
                    return (
                      <div className="text-dxp-grey-10">
                        <Icon name="star" />
                      </div>
                    );
                })}
              </div>
              <h2 className="text-xs text-dxp-green-3 font-semibold">
                {rating}/5
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Users = () => {
  const users = [
    {
      name: "Coco M",

      rating: 4,
      profile_img: "/images/profile_image_1.png",
    },
    {
      name: "Ifeoluwa",
      rating: 4,
      profile_img: "/images/profile_image_2.png",
    },
    {
      name: "Oluchi",

      rating: 4,
      profile_img: "/images/profile_image_3.png",
    },
    {
      name: "Emiliano Rora",

      rating: 4,
      profile_img: "/images/profile_image_3.png",
    },
    {
      name: "Sabi Girl",
      occupation: "Restaurant",
      rating: 4,
      profile_img: "/images/profile_image_3.png",
    },
  ];

  return (
    <div className="px-3 py-5 shadow-dashboard-card rounded-lg bg-white">
      <h1 className="font-medium text-xl text-dxp-grey-6 text-center mb-7">
        Top Rated Users
      </h1>
      <div className="flex flex-col gap-4">
        {users.map(({ name, profile_img, rating }) => (
          <div className="flex justify-between gap-1 items-center">
            <div className="flex gap-2 items-center">
              <img className="w-8 h-auto" src={profile_img} alt="" />
              <h1 className="text-xs font-medium text-dxp-grey-9">{name}</h1>
            </div>

            <div className="flex items-center gap-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((x) => {
                  if (x <= rating)
                    return (
                      <div className="text-dxp-yellow-3">
                        <Icon name="star" />
                      </div>
                    );
                  else
                    return (
                      <div className="text-dxp-grey-10">
                        <Icon name="star" />
                      </div>
                    );
                })}
              </div>
              <h2 className="text-xs text-dxp-green-3 font-semibold">
                {rating}/5
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
