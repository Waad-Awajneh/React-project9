import { ReferenceDataContext } from "./../ReferenceDataContext/ReferenceDataContext";
import React, { useContext } from "react";
import Card from "../components/Card";
import Side from "./Home/sideContent/side/Side";
import {
  Link,
  NavLink,
  useSearchParams,
  useNavigate,
  useParams,
} from "react-router-dom";
import navbarGradient from "@material-tailwind/react/theme/components/navbar/navbarGradient";

const Search = (props) => {
  //  { const [searchParam, setSearchParam]} = useSearchParams();
  const search = useParams();
  //   const showSearchedNews = searchParam.get("search");
  const navigate = useNavigate();

  const { data } = useContext(ReferenceDataContext);
  console.log(data);

  return (
    <>
      <main>
        <div className="container ">
          <section className="culture">
            <div className="m-2 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {data
                .filter((news) => {
                  return news.title
                    .toLowerCase()
                    .includes(search.id.toLowerCase().trim());
                })
                .map((val) => {
                  return <Card data={val} />;
                })}
            </div>
          </section>

          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default Search;
