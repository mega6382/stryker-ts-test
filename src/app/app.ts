// Comment the following line and uncomment the data variable declaration to see the other issue
import data from "./data.json";

// const data = {
//   text: "Test string",
// };

export async function app(): Promise<string> {
  return data.text;
}
