import Link from "next/link";
import Select from "./Select";
import { locationOptions } from "@/data";

const Intro = () => {
  return (
    <div className="bg-primary h-6 text-sm flex  justify-between items-center text-zinc-200 px-10">
      <p>011005674292</p>
      <div className="flex">
        <p>Get 10% discount on Products | </p>
        <div>
          <Link href="#" className="text-xs underline inline-block">
            SHOP NOW
          </Link>
        </div>
      </div>
      <Select name="location" optionData={locationOptions} />
    </div>
  );
};

export default Intro;
