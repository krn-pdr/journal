import { useState } from "react";
import "./ApprovalTable.css";

const STATUS_MAP = {
  Approved: "approved",
  Rejected: "rejected",
  Pending: "pending",
  SupervisorApproved: "pending",
};

export default function ApprovalTable({ data }) {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) => {
    const matchesTab =
      activeTab === "All" ||
      item.status.toLowerCase() === activeTab.toLowerCase();

    const matchesSearch =
      item.partName.toLowerCase().includes(search.toLowerCase()) ||
      item.partId.toLowerCase().includes(search.toLowerCase());

    return matchesTab && matchesSearch;
  });

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
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <input
          className="search"
          type="text"
          placeholder="Search by Part Name or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <table className="approval-table">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Part Name</th>
            <th>Part ID</th>
            <th>Current Level</th>
            <th>Status</th>
            <th>Last Updated</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.length === 0 && (
            <tr>
              <td colSpan="7" className="empty">
                No records found
              </td>
            </tr>
          )}

          {filteredData.map((item) => (
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
                <span
                  className={`status ${
                    STATUS_MAP[item.status] || "pending"
                  }`}
                >
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
          Showing 1 to {filteredData.length} of {data.length} entries
        </span>
        <div className="pagination">
          <button disabled>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}
