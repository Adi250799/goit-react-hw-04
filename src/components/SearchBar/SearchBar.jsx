import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { queryContext } from "../../providers/ContextProvider";
import { scrollToBottom } from "../../Hooks/useGetImages";

export const SearchBar = ({ getImgs }) => {
  const { setSearchQuery } = useContext(queryContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { search } = e.target.elements;
    search.value === ""
      ? toast.error("Please enter searching phase!")
      : getImgs(search.value).then(scrollToBottom);
    setSearchQuery(search.value);
    search.value = "";
  };
  return (
    <header className={css.header}>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit">
          <CiSearch size={20} />
        </button>
        <input
          name="search"
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};