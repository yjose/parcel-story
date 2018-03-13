export default class Stories {
  list = [];
  constructor() {}

  add = (storyName, Component) => {
    this.list.push({ storyName, Component });
    return this;
  };
}
