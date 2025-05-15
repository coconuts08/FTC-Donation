import React from "react";
import { StoreContext } from "../../../../../store/StoreContext";
import { useInView } from "react-intersection-observer";
import { FaArchive, FaEdit, FaHistory, FaList, FaTrash } from "react-icons/fa";
import SearchBarWithFilterStatus from "../../../partials/SearchBarWithFilterStatus";
import { queryDataInfinite } from "../../../helper/queryDataInfinite";
import { useInfiniteQuery } from "@tanstack/react-query";
import TableLoading from "../../../partials/spinners/TableLoading";
import ServerError from "../../../partials/ServerError";
import Loadmore from "../../../partials/Loadmore";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";
import NoData from "../../../partials/NoData";
import { setIsSearch } from "../../../../../store/StoreAction";
import ModalArchive from "../../../partials/modal/ModalArchive";
import ModalRestore from "../../../partials/modal/ModalRestore";
import ModalDelete from "../../../partials/modal/ModalDelete";

const DonorListTable = ({ setItemEdit, setIsModal }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isActive, setIsActive] = React.useState("");
  const [onSearch, setOnSearch] = React.useState(false);
  const [isFilter, setIsFilter] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();
  const search = React.useRef({ value: "" });
  let count = 1;

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["donor-list", search.current.value, store.isSearch, isActive],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/rest/v1/controllers/developer/donor-list/search.php`, // url search
        `/rest/v1/controllers/developer/donor-list/page.php?start=${pageParam}`, // list search
        store.isSearch || isFilter, //search boolean
        {
          searchValue: search?.current?.value,
          isActive,
          isFilter,
          id: "",
        }
      ),

    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
  });

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);
  const handleEdit = (item) => {
    setItemEdit(item);
    setIsModal(true);
  };

  const handleArchive = (item) => {
    setDataItem(item);
    setId(item.category_aid);
    dispatch(setArchive(true));
  };

  const handleRestore = (item) => {
    setDataItem(item);
    setId(item.category_aid);
    dispatch(setRestore(true));
  };

  const handleDelete = (item) => {
    setDataItem(item);
    setId(item.category_aid);
    dispatch(setDelete(true));
  };

  return (
    <>
      {/* SEARCH AND FILTER */}
      <div className="flex justify-between items-center py-3">
        <div className="flex items-center gap-x-1">
          {/* STATUS SELECT */}
          <div className="relative w-28">
            <label>Status</label>
            <select
              name="status"
              value={isActive}
              onChange={(e) => {
                const val = e.target.value;
                setIsActive(val);
                if (val === "") {
                  setIsFilter(false);
                  search.current.value = "";
                  dispatch(setIsSearch(false));
                }
                if (val !== "") setIsFilter(true);
              }}
              disabled={false}
              className="h-8 py-1"
            >
              <optgroup label="Select a status">
                <option value="">All</option>
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </optgroup>
            </select>
          </div>
          {/* COUNT OF DATA */}
          <div className="flex items-center gap-x-1">
            <FaList />
            <span>0</span>
          </div>
        </div>
        <div className="relative">
          <SearchBarWithFilterStatus
            search={search}
            dispatch={dispatch}
            store={store}
            result={0}
            isFetching={false}
            setOnSearch={setOnSearch}
            onSearch={onSearch}
            isFilter={isFilter}
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="relative">
        {status === "pending" && !isFetching && <FetchingSpinner />}
        <table>
          <thead>
            <tr>
              <th className="w-[1rem] text-center">#</th>
              <th className="w-[2rem]">Status</th>
              <th className="w-[10rem]">Name</th>
              <th className="">Email</th>
              <th colSpan="100%"></th>
            </tr>
          </thead>
          <tbody>
            {(status === "pending" || result?.pages[0].data.length === 0) && (
              <tr>
                <td colSpan="100%" className="p-10">
                  {status === "pending" ? (
                    <TableLoading cols={2} count={20} />
                  ) : (
                    <NoData />
                  )}
                </td>
              </tr>
            )}

            {error && (
              <tr>
                <td colSpan="100%" className="p-10">
                  <ServerError />
                </td>
              </tr>
            )}

            {result?.pages.map((page, key) => (
              <React.Fragment key={key}>
                {page.data.map((item, key) => {
                  return (
                    <tr key={key} className="relative group cursor-pointer">
                      <td className="text-center">{count++}.</td>
                      <td>
                        {item.donor_list_is_active == 1 ? (
                          <span className="text-green-600">Active</span>
                        ) : (
                          <span className="text-gray-300">Inactive</span>
                        )}
                      </td>
                      <td>
                        {item.donor_list_last_name},{""}
                        {item.donor_list_first_name},
                      </td>
                      <td>{item.donor_list_email}</td>
                      <td colSpan="100%">
                        <div className="flex gap-x-3 items-center justify-end pr-1">
                          {item.donor_list_is_active == 1 ? (
                            <>
                              <button
                                type="button"
                                className=" tooltip-action-table"
                                data-tooltip="Edit"
                                onClick={() => handleEdit(item)}
                              >
                                <FaEdit />
                              </button>
                              <button
                                type="button"
                                className=" tooltip-action-table"
                                data-tooltip="Archive"
                                onClick={() => handleArchive(item)}
                              >
                                <FaArchive />
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                type="button"
                                className=" tooltip-action-table"
                                data-tooltip="Restore"
                                onClick={() => handleRestore(item)}
                              >
                                <FaHistory />
                              </button>
                              <button
                                type="button"
                                className=" tooltip-action-table"
                                data-tooltip="Delete"
                                onClick={() => handleDelete(item)}
                              >
                                <FaTrash />
                              </button>
                              {store.archive && (
                                <ModalArchive
                                  endpoint={`/rest/v1/controllers/developer/settings/category/active.php?categoryid=${id}`}
                                  msg={`Are you sure want to archive this record?`}
                                  successMsg={`Successfully Archived`}
                                  queryKey={`category`}
                                />
                              )}

                              {store.restore && (
                                <ModalRestore
                                  endpoint={`/rest/v1/controllers/developer/settings/category/active.php?categoryid=${id}`}
                                  msg={`Are you sure want to restore this record?`}
                                  successMsg={`Successfully Restored`}
                                  queryKey={`category`}
                                />
                              )}

                              {store.delete && (
                                <ModalDelete
                                  endpoint={`/rest/v1/controllers/developer/settings/category/category.php?categoryid=${id}`}
                                  msg={`Are you sure want to delete this record?`}
                                  successMsg={`Successfully Deleted.`}
                                  item={dataItem.category_name}
                                  queryKey={`category`}
                                />
                              )}
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center items-center flex-col pb-10">
          <Loadmore
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
            result={result?.pages[0]}
            setPage={setPage}
            page={page}
            refView={ref}
            store={store}
          />
        </div>
      </div>
    </>
  );
};

export default DonorListTable;
