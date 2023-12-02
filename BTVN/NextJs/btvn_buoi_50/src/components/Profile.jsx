import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";

import Image from "next/image";
import avt from "../../public/spider.png";
const Profile = ({ page: { home } }) => {
  return (
    <main className="border border-slate-700 p-5">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="xl:col-span-3 text-center">
          <h1 className="font-bold text-[32px] ">{home.userName}</h1>
        </div>
        <div className="xl:col-span-1 hidden xl:inline-flex flex-col items-center p-5">
          <div className="w-[300px] ">
            <Image
              src={avt}
              priority="100"
              alt="Image"
              className="rounded-md object-cover "
            />
            <h3 className="text-center my-2 ">{home.userDesc}</h3>
          </div>
          <Card className="w-full border">
            <Card>
              <CardHeader>
                <CardTitle>{home.skillTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="font-semibold">{home.skillDesc1}</span>
                <span>
                  : Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis iure enim est corporis optio aliquid cumque earum
                  modi quis ipsum.
                </span>
              </CardContent>
            </Card>
            <hr />
            <Card>
              <CardHeader>
                <CardTitle>{home.orther}</CardTitle>
              </CardHeader>
              <CardContent>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Blanditiis mollitia aliquam earum voluptate doloribus nobis
                  reprehenderit minima iste dolore quaerat ipsam omnis eos
                  asperiores odit ullam architecto sit, sequi voluptatum!
                </span>
              </CardContent>
            </Card>
          </Card>
        </div>
        <div className="xl:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">{home.socialTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li>
                  Phone: <Link href={"tel:0867713501"}>0867713501</Link>
                </li>
                <li>
                  Zalo: <Link href={"tel:0867713501"}>0867713501</Link>
                </li>
                <li>
                  Email:{" "}
                  <Link href={"mailto:phantrunghieu@gmail.com"}>
                    phantrunghieu@gmail.com
                  </Link>
                </li>
                <li>
                  Facebook:{" "}
                  <Link href={"https://www.facebook.com/2720pth"}>
                    https://www.facebook.com/2720pth
                  </Link>
                </li>
                <li>
                  Github :{" "}
                  <Link href={"https://github.com/pth2003/FullStack_Nodejs_K1"}>
                    https://github.com/pth2003/FullStack_Nodejs_K1
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 rounded-xl shadow-gray-500">
            <CardHeader>
              <CardTitle className="text-center">
                {" "}
                {home.projectTitle}{" "}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Card>
                <CardHeader>
                  <CardTitle>React Simple Movie</CardTitle>
                  <CardDescription>{home.projectDesc1}</CardDescription>
                </CardHeader>
                <CardFooter className="flex">
                  <Button>
                    <Link href={"https://react-simple-movie-pi.vercel.app/"}>
                      Demo
                    </Link>
                  </Button>
                  <Button>Code</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Trello</CardTitle>
                  <CardDescription>{home.projectDesc2}</CardDescription>
                </CardHeader>
                <CardFooter className="flex">
                  <Button>
                    <Link href={"https://btvn-buoi-47.vercel.app/"}>Demo</Link>
                  </Button>
                  <Button>Code</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Soppi</CardTitle>
                  <CardDescription>{home.projectDesc3}</CardDescription>
                </CardHeader>
                <CardFooter className="flex">
                  <Button>
                    <Link href={"https://btvn-buoi-46.vercel.app/"}>Demo</Link>
                  </Button>
                  <Button>Code</Button>
                </CardFooter>
              </Card>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center"> {home.hobbiTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li className="list-disc list-inside">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  eaque...
                </li>
                <li className="list-disc list-inside">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Mollitia blanditiis magni eligendi praesentium perferendis?
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Profile;
