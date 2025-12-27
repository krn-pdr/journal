import { useEffect, useState } from "react";
import "./ApprovalTable.css";

const PAGE_SIZE = 5;

const STATUS_MAP = {
  All: null,
  Pending: "Pending",
  Approved: "Approved",
  Rejected: "Rejected",
};

export default function ApprovalTable() {
  const [rows, setRows] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const [sortBy, setSortBy] = useState("Id");
  const [sortOrder, setSortOrder] = useState("asc");

  const totalPages = Math.ceil(totalRecords / PAGE_SIZE);

  useEffect(() => {
    fetchData();
  }, [page, search, status, sortBy, sortOrder]);

  const fetchData = async () => {
    const params = new URLSearchParams({
      page,
      pageSize: PAGE_SIZE,
      sortBy,
      sortOrder,
    });

    if (search) params.append("search", search);
    if (STATUS_MAP[status]) params.append("statusFilter", STATUS_MAP[status]);

    const res = await fetch(
      `http://localhost:5000/api/approval/requests/paged?${params.toString()}`
    );
    const json = await res.json();

    setRows(json.data);
    setTotalRecords(json.totalRecords);
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  return (
    <div className="table-wrapper">
      <h2 className="title">My Approval Requests</h2>
      <p className="subtitle">
        Manage and track status of your submitted approval requests.
      </p>

      {/* Toolbar */}
      <div className="toolbar">
        <div className="tabs">
          {["All", "Pending", "Approved", "Rejected"].map((tab) => (
            <button
              key={tab}
              className={`tab ${status === tab ? "active" : ""}`}
              onClick={() => {
                setStatus(tab);
                setPage(1);
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <input
          className="search"
          placeholder="Search by Part Name or ID..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* Table */}
      <table className="approval-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("Id")}>Request ID</th>
            <th onClick={() => handleSort("PartName")}>Part Name</th>
            <th onClick={() => handleSort("PartId")}>Part ID</th>
            <th>Current Level</th>
            <th onClick={() => handleSort("Status")}>Status</th>
            <th onClick={() => handleSort("CreatedAt")}>Last Updated</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan="7" className="empty">
                No records found
              </td>
            </tr>
          )}

          {rows.map((item) => (
            <tr key={item.id}>
              <td>{`REQ-${item.id.toString().padStart(4, "0")}`}</td>
              <td className="bold">{item.partName}</td>
              <td>{item.partId}</td>
              <td>
                {item.actionBySeniorManager
                  ? "Completed"
                  : item.actionByManager
                  ? "Senior Manager"
                  : item.actionBySuperVisor
                  ? "Manager"
                  : "Supervisor"}
              </td>
              <td>
                <span className={`status ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </td>
              <td>{item.timeString}</td>
              <td>
                <button className="view-btn">👁</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="footer">
        <span>
          Showing {(page - 1) * PAGE_SIZE + 1} to{" "}
          {Math.min(page * PAGE_SIZE, totalRecords)} of {totalRecords} entries
        </span>

        <div className="pagination">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
        }
