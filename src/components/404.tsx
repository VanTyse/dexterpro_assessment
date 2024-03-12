import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="h-screen w-full flex justify-center flex-col border border-red-900">
      <h1 className="text-center mb-5 text-6xl block">Hi,</h1>
      <h3 className="text-center mb-10 text-3xl">
        It seems like this page wasn't included in the design.
      </h3>
      <Link to="/" className="w-fit mx-auto">
        <button className="border rounded-md px-4 py-3 border-dxp-grey-3 w-fit text-sm">
          Return home
        </button>
      </Link>
    </section>
  );
}
