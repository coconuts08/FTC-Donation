import React from "react";
import TableLoading from "../../../../partials/spinner/TableLoading";
import { FaArchive, FaEdit } from "react-icons/fa";
import ServerError from "../../../../partials/ServerError";
import FetchingSpinner from "../../../../partials/spinner/FetchingSpinner";


const SettingsCategoryList = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);
  return (
    <>
      <div className="relative rounded-md overflow-auto z-0">
        <FetchingSpinner/>
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
              <tr className="text-center">
                <td colSpan="100%">
                  <TableLoading cols={2} count={20} />
                </td>
              </tr>
              <tr className="text-center">
                <td colSpan="100%">
                  <ServerError cols={2} count={20} />
                </td>
              </tr>
              <tr className="group relative">
                <td>1.</td>
                <td>
                  <span className="text-green">Active</span>
                </td>
                <td>Feeding Program</td>
                <td className="max-w-[6rem] truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore rem facilis repellendus nostrum illo! Perspiciatis non
                  accusantium obcaecati voluptatibus commodi?
                </td>
                <td colSpan="100%">
                  <div className="flex items-center justify-end gap-3">
                    <button
                      type="button"
                      className="btn-table-action tooltip-action-table"
                      data-tooltip="Edit"
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
                  </div>
                </td>
              </tr>

              <tr className="group relative">
                <td>2.</td>
                <td>
                  <span className="text-green">Active</span>
                </td>
                <td>Feeding Program</td>
                <td className="max-w-[6rem] truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore rem facilis repellendus nostrum illo! Perspiciatis non
                  accusantium obcaecati voluptatibus commodi?
                </td>
                <td colSpan="100%">
                  <div className="flex items-center justify-end gap-3">
                    <button
                      type="button"
                      className="btn-table-action tooltip-action-table"
                      data-tooltip="Edit"
                    >
                      <FaEdit />
                    </button>

                    <button
                      type="button"
                      className="btn-table-action tooltip-action-table"
                      data-tooltip="Edit"
                    >
                      <FaArchive />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="group relative">
                <td>3.</td>
                <td>
                  <span className="text-green">Active</span>
                </td>
                <td>Feeding Program</td>
                <td className="max-w-[6rem] truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore rem facilis repellendus nostrum illo! Perspiciatis non
                  accusantium obcaecati voluptatibus commodi?
                </td>
                <td colSpan="100%">
                  <div className="flex items-center justify-end gap-3">
                    <button
                      type="button"
                      className="btn-table-action tooltip-action-table"
                      data-tooltip="Edit"
                    >
                      <FaEdit />
                    </button>

                    <button
                      type="button"
                      className="btn-table-action tooltip-action-table"
                      data-tooltip="Edit"
                    >
                      <FaArchive />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SettingsCategoryList;