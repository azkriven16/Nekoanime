import { LoaderGrid, LoaderSlider } from "@/components/Loader";

export default async function TrendingPageLoader() {
  return (
    <div className="flex flex-col">
      <LoaderSlider />
      <LoaderGrid />
      <LoaderGrid />
    </div>
  );
}
