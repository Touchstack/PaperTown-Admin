import { useRouteError } from "react-router-dom";
import AdminDashBoard from "../AdminPage/AdminDashBoard";

{/*import GeneralNav from "../../Navbar/GeneralNav";*/}
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="">
     {/* <GeneralNav color="black" btnColor="black" bgShadow="shadow"/>*/}
     <AdminDashBoard />
      <div className="flex flex-col justify-center items-center pt-24 pb-24 font-Regular">
        <h1 className="font-Bold text-6xl">Oops!</h1>
        <p className="text-xl text-slate-600 py-8 text-center">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-amber-500 underline px-12 pt-0 pb-3 rounded-xl text-xl text-center self-center">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
