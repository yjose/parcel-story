import Stories from "../Utils/Stories";
import Centred from "../Utils/Centred";
import Button from "../components/Button";
import Story from "./Story";

const Sts = new Stories();

Sts.add("Story", Centred(Story))
   .add("Button", Centred(Button));

export default Sts;
