import React from "react";
import TableLoading from "../../../../partials/spinner/TableLoading";
import { FaArchive, FaEdit, FaHistory, FaTrash } from "react-icons/fa";
import ServerError from "../../../../partials/ServerError";
import FetchingSpinner from "../../../../partials/spinner/FetchingSpinner";
import useQueryData from "../../../../helper/useQueryData";
import Nodata from "../../../../partials/Nodata";

const SettingsCategoryList = ({ setItemEdit, setIsModal }) => {
  let count = 1;
  const {
    isLoading,
    isFetching,
    error,
    data: category,
  } = useQueryData(
    `/rest/V1/controllers/developer/settings/category/category.php`,
    "get",
    "category", // key for refetching
    {}, //payload
    null, // ID
    true // for refetching
  );
  const handleEdit = (item) => {
    setItemEdit(item);
    setIsModal(true);
  };

  return (
    <>
      <div className="relative rounded-md overflow-auto z-0">
        {isFetching && !isLoading && <FetchingSpinner />}
        <div className="overflow-auto max-h-[70dvh]">
          <table>
            <thead>
              <tr>
                <th className="w-[3rem] text-center">#</th>
                <th className="w-[3rem]">Status</th>
                <th className="w-[15rem]">Name</th>
                <th className="w-[15rem]">Description</th>
                <th colSpan="100%"></th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <>
                  <tr className="text-center">
                    <td colSpan="100%">
                      <TableLoading cols={2} count={20} />
                    </td>
                  </tr>
                </>
              )}

              {error && (
                <>
                  <tr className="text-center">
                    <td colSpan="100%">
                      <ServerError cols={2} count={20} />
                    </td>
                  </tr>
                </>
              )}
              {/*if data has no count*/}
              {category?.count == 0 && (
                <>
                  <tr className="text-center">
                    <td colSpan="100%">
                      <Nodata />
                    </td>
                  </tr>
                </>
              )}
              {/*if data has count*/}
              {category?.count > 0 &&
                category.data.map((item, key) => {
                  return (
                    <tr key={key} className="group relative">
                      <td className="text-centerf">{count++}</td>
                      <td>
                        {item.category_is_active == 1 ? (
                          <span className="text-green-500">Active</span>
                        ) : (
                          <span className="text-gray-300">Inactive</span>
                        )}
                      </td>
                      <td>{item.category_name}</td>
                      <td className="max-w-[6rem] truncate">
                        {item.category_description}
                      </td>
                      <td colSpan="100%">
                        <div className="flex items-center justify-end gap-3">
                          {item.category_is_active == 1 ? (
                            <>
                              <button
                                type="button"
                                className="btn-table-action tooltip-action-table"
                                data-tooltip="Edit"
                                onClick={() => handleEdit(item)}
                              >
                                <FaEdit />
                              </button>

                              <button
                                type="button"
                                className="btn-table-action tooltip-action-table"
                                data-tooltip="Archive"
                              >
                                <FaArchive />
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                type="button"
                                className="btn-table-action tooltip-action-table"
                                data-tooltip="Restore"
                              >
                                <FaHistory />
                              </button>

                              <button
                                type="button"
                                className="btn-table-action tooltip-action-table"
                                data-tooltip="Delete"
                              >
                                <FaTrash />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SettingsCategoryList;
