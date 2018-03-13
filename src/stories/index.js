import Stories from "../Utils/Stories";
import Test from "./Test";
import Story from "./Story";

const Sts = new Stories();

Sts.add("Test", Test)
  .add("Story", Story)
  .add("Test 2", Test)
  .add("Story 2", Story);

export default Sts;
