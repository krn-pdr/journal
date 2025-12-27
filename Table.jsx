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
      {/* REQUEST ID */}
      <td>
        <a href="#" className="request-link">
          REQ-{item.id.toString().padStart(4, "0")}
        </a>
      </td>

      {/* PART NAME */}
      <td className="bold">{item.partName}</td>

      {/* PART ID */}
      <td className="muted">{item.partId}</td>

      {/* INSPECTION RESULT */}
      <td>
        <span
          className={`inspection ${
            item.result === "GOOD" ? "good" : "bad"
          }`}
        >
          {item.result === "GOOD" ? "✔" : "✖"}{" "}
          {item.result === "GOOD" ? "Good" : "Bad"}
        </span>
      </td>

      {/* CREATED AT */}
      <td>
        <div className="created-at">
          <div>{item.timeString.split(" ")[0]}</div>
          <div className="time">{item.timeString.split(" ")[1]}</div>
        </div>
      </td>

      {/* APPROVAL PROGRESS */}
      <td>
        <div className="approval-progress">
          <div className={`step ${item.actionBySuperVisor ? "done" : ""}`}>
            ✓
            <span>SUP.</span>
          </div>
          <div className={`step ${item.actionByManager ? "done" : ""}`}>
            ✓
            <span>MGR.</span>
          </div>
          <div className={`step ${item.actionBySeniorManager ? "done" : ""}`}>
            ✓
            <span>SNR.</span>
          </div>
        </div>
      </td>

      {/* STATUS */}
      <td>
        <span
          className={`status-pill ${item.status.toLowerCase()}`}
        >
          {item.status === "SupervisorApproved"
            ? "Pending"
            : item.status}
        </span>
      </td>
    </tr>
  ))}
</tbody>

/* Request ID */
.request-link {
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
}

/* Muted text */
.muted {
  color: #6b7280;
}

/* Inspection Result */
.inspection {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
}

.inspection.good {
  color: #15803d;
}

.inspection.bad {
  color: #b91c1c;
}

/* Created At */
.created-at {
  color: #6b7280;
  line-height: 1.3;
}

.created-at .time {
  font-size: 13px;
}

/* Approval Progress */
.approval-progress {
  display: flex;
  gap: 16px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #9ca3af;
}

.step::before {
  content: "";
}

.step span {
  margin-top: 4px;
  font-weight: 600;
}

.step.done {
  color: #16a34a;
}

.step.done::before {
  content: "✓";
}

/* Status Pill */
.status-pill {
  padding: 6px 14px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 13px;
  display: inline-block;
}

.status-pill.approved {
  background: #dcfce7;
  color: #166534;
}

.status-pill.rejected {
  background: #fee2e2;
  color: #991b1b;
}

.status-pill.pending,
.status-pill.supervisorapproved {
  background: #f3f4f6;
  color: #6b7280;
}



