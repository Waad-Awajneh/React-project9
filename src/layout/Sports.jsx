import { ReferenceDataContext } from "./../ReferenceDataContext/ReferenceDataContext";
import Card from "../components/Card";
import React, { useContext } from "react";
import Side from "./Home/sideContent/side/Side";

const Sports = () => {
  const { data, isLoading } = useContext(ReferenceDataContext);

  return (
    <>
      {window.scrollTo(0, 0)}
      <main>
        <div className="flex justify-around flex-warp lg:flex-nowrap ">
          <section className="culture">
            <div className="m-2 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {data
                .filter((val) => val.catgeory.catgeory === "Sports")

                .sort(
                  (dateA, dateB) => new Date(dateB.time) - new Date(dateA.time)
                )
                .map((val) => {
                  console.log(val);
                  return <Card data={val} />;
                })}
            </div>
          </section>

          <section className="sideContent  mx-5">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default Sports;
