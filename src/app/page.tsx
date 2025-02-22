import Navbar from "./components/Navbar/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Amandeep Ka Portfolio</h1>
      </div>
    </div>
  );
}
