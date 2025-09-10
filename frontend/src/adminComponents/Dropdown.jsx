function Dropdown() {
  return (
    <>
      <div>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-transparent hover:bg-white"
          >
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a href="/orders">ORDERS</a>
            </li>
            <li>
              <a href="/admin">ITEMS</a>
            </li>
            <li>
              <a href="/reviews">REVIEWS</a>
            </li>
            <li>
              <a href="/contacts">CONTACTS</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
