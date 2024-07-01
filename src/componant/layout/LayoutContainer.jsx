import Hero from "./Hero";
// eslint-disable-next-line no-unused-vars
import Categories from "./Categories";
import FeatureProduct from "./FeatureProduct";
export default function LayoutContainer({ product }) {
  return (
    <div>
      <Hero />
      {/* <Categories /> */}
      <FeatureProduct data={product} />
    </div>
  );
}
