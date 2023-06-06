import { render, screen } from "@testing-library/react";
import App from "./components/App";
import Register from "./components/Register";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/smug shopping/i);
  expect(linkElement).toBeInTheDocument();
});

test("在庫量を修正すると「在庫量と登録日更新完了」と返ってくる", () => {
  render(<Register />);


});