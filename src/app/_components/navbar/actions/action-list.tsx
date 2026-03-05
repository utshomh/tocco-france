import { Account } from "./account";
import { Cart } from "./cart";
import { Search } from "./search";

export function ActionList() {
  return (
    <ul className="hidden md:flex items-center gap-4">
      <Account />
      <Search />
      <Cart />
    </ul>
  );
}
