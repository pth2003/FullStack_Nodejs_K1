"use client";
import Image from "next/image";
import { Button } from "./ui/button";

const hotelData = [
  {
    image: "/find/hotel-1.png",
    name: "Hotel De Luna",
    location: "Singapore",
  },
  {
    image: "/find/hotel-2.png",
    name: "Ina Tretes Hotel",
    location: "Singapore",
  },
  {
    image: "/find/hotel-3.png",
    name: "Delight Hotel",
    location: "Singapore",
  },
  {
    image: "/find/hotel-4.png",
    name: "PTH Hotel",
    location: "Singapore",
  },
];
const Find = () => {
  return (
    <section className="py-12 xl:py-36">
      <div className="container mx-auto">
        {/* texxt */}
        <div className="text-center">
          <h2 className="h2 mb-6">Find your best Hotel</h2>
          <p className="max-w-[638px] mx-auto mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
            molestiae consectetur fugit ad iure dicta itaque quaerat omnis
            magnam eligendi, placeat error et! Accusantium facilis quisquam
            veniam. Voluptatem, cum obcaecati.
          </p>
          <div>
            <Button variant="accent" className="px-12 mb-14 xl:mb-28">
              View All
            </Button>
          </div>
        </div>
        {/* hotel desc */}
        <div className="grid gap-y-10 xl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-[30px] ">
          {hotelData.map((hotel, index) => {
            return (
              <div
                className="border-2 border-outline w-[270px] h-[390px] rounded-xl overflow-hidden hover:cursor-pointer group hover:bg-soft_green transition-all daration-700 mx-auto xl:mx-0"
                key={index}
              >
                <Image src={hotel.image} width={270} height={270} alt="" />
                <div className="p-6">
                  <h4 className="h4 group-hover:text-white transition-all daration-300">
                    {hotel.name}
                  </h4>
                  <p className="group-hover:text-white transition-all daration-300">
                    {hotel.location}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Find;
