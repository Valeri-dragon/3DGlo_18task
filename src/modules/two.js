import { slicer } from "./helpers";
const moduleTwo = () => {
  const two = "Проверка обрезки строки для функции из helpers";
  console.log(slicer(two, 30));
};
export default moduleTwo;
