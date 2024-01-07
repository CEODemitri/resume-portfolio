"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export function DefaultSpeedDial() {
  return (
    <div className="relative h-80 w-full">
      <div className="absolute md:fixed bottom-5 right-5">
        <SpeedDial placement="bottom">
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full  bg-deep-orange-900">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction>
              <HomeIcon className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction>
              <CogIcon className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction>
              <Square3Stack3DIcon className="h-5 w-5" />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}

export function CardDefault() {
  return (
    <Card className="mt-6 w-72">
      <CardHeader color="blue-gray" className="relative h-48">
        <Image src="/me.jpg" width={125} height={60} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Works
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to where you can enjoy the main night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Works</Button>
      </CardFooter>
    </Card>
  );
}

export function CodingCard() {
  return (
    <Card className="mt-6 w-72">
      <CardHeader color="blue-gray" className="relative h-48">
        <Image src="/me.jpg" width={125} height={60} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Coding Projects
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to where you can enjoy the main night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Projects</Button>
      </CardFooter>
    </Card>
  );
}

export function GraphicsCard() {
  return (
    <Card className="mt-6 w-72">
      <CardHeader color="blue-gray" className="relative h-48">
        <Image src="/me.jpg" width={125} height={60} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Design Catalog
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to where you can enjoy the main night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Catalog</Button>
      </CardFooter>
    </Card>
  );
}
