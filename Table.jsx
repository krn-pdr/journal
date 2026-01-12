Below is a **pure React (JSX) + vanilla CSS** example that recreates the **same static inspection table layout and visual structure** as your image: multi-row header, merged cells, grid lines, measuring columns `#1–#6`, arrows, IN/EX, standards, etc.

This is **visual-first**, not dynamic logic — exactly like your requirement.

---

## 1️⃣ React Component (JSX)

```jsx
import React from "react";
import "./InspectionTable.css";

export default function InspectionTable() {
  return (
    <div className="table-wrapper">
      <table className="inspection-table">
        <thead>
          <tr>
            <th rowSpan="2">No</th>
            <th rowSpan="2">Measuring items</th>
            <th rowSpan="2">IN / EX</th>
            <th rowSpan="2">Standard</th>
            <th colSpan="6">Measuring value</th>
            <th rowSpan="2">Freq</th>
            <th rowSpan="2">Unit</th>
          </tr>
          <tr>
            <th>#1</th>
            <th>#2</th>
            <th>#3</th>
            <th>#4</th>
            <th>#5</th>
            <th>#6</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Inspection Jig gauge<br />Measuring instrument</td>
            <td></td>
            <td>No scratches, dent</td>
            <td colSpan="6" className="center">OK / NG</td>
            <td>–</td>
            <td>–</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Camshaft Half diameter</td>
            <td>IN / EX</td>
            <td>14.2 ±0.11 (control value ±0.1)</td>
            <td></td><td></td><td></td><td></td><td></td><td></td>
            <td>1/shift</td>
            <td>mm</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Valve guide hole dia.</td>
            <td>IN</td>
            <td>Ø 10.5 +0.018 / 0</td>
            <td></td><td></td><td></td><td></td><td></td><td></td>
            <td>↑</td>
            <td>↑</td>
          </tr>

          <tr>
            <td>4</td>
            <td>↑ ↑</td>
            <td>EX</td>
            <td>↑</td>
            <td></td><td></td><td></td><td></td><td></td><td></td>
            <td>↑</td>
            <td>↑</td>
          </tr>

          <tr>
            <td>5</td>
            <td>Valve seat hole dia.</td>
            <td>IN</td>
            <td>Ø 31.1 +0.025 / 0</td>
            <td></td><td></td><td></td><td></td><td></td><td></td>
            <td>↑</td>
            <td>↑</td>
          </tr>

          <tr>
            <td>6</td>
            <td>↑ ↑</td>
            <td>EX</td>
            <td>Ø 26.7 +0.021 / 0</td>
            <td></td><td></td><td></td><td></td><td></td><td></td>
            <td>↑</td>
            <td>↑</td>
          </tr>

          <tr>
            <td>7</td>
            <td>↑ ↑ height</td>
            <td>IN</td>
            <td>56.0 ±0.1 (jig standard)</td>
            <td></td><td></td><td></td><td></td><td></td><td></td>
            <td>↑</td>
            <td>↑</td>
          </tr>

          <tr>
            <td>8</td>
            <td>↑ ↑</td>
            <td>EX</td>
            <td>58.24 ±0.1 (jig standard)</td>
            <td></td><td></td><td></td><td></td><td></td><td></td>
            <td>↑</td>
            <td>↑</td>
          </tr>

          <tr>
            <td>9</td>
            <td>↑ ↑ squareness</td>
            <td>IN</td>
            <td>0.03 or less</td>
            <td></td><td></td><td></td><td></td><td></td><td></td>
            <td>↑</td>
            <td>↑</td>
          </tr>

          <tr>
            <td>10</td>
            <td>↑ ↑</td>
            <td>EX</td>
            <td>↑</td>
            <td></td><td></td><td></td><td></td><td></td><td></td>
            <td>↑</td>
            <td>↑</td>
          </tr>

          <tr>
            <td>11</td>
            <td>Port inner dia.</td>
            <td>IN</td>
            <td>Ø 25.07 +0.2 / 0</td>
            <td></td><td></td><td></td><td></td><td></td><td></td>
            <td>↑</td>
            <td>–</td>
          </tr>

          <tr>
            <td>12</td>
            <td>↑</td>
            <td>EX</td>
            <td>Ø 21.68 +0.2 / 0</td>
            <td></td><td></td><td></td><td></td><td></td><td></td>
            <td>↑</td>
            <td>–</td>
          </tr>

          <tr>
            <td>13</td>
            <td>Spring seat spot face height</td>
            <td>IN</td>
            <td>56.0 ±0.1 (jig standard)</td>
            <td></td><td></td><td></td><td></td><td></td><td></td>
            <td>↑</td>
            <td>↑</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
```

---

## 2️⃣ Vanilla CSS (InspectionTable.css)

```css
.table-wrapper {
  width: 100%;
  overflow-x: auto;
  background: #fff;
  padding: 10px;
}

.inspection-table {
  border-collapse: collapse;
  min-width: 1200px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: #000;
}

.inspection-table th,
.inspection-table td {
  border: 1px solid #000;
  padding: 4px 6px;
  vertical-align: middle;
}

.inspection-table th {
  background-color: #f3f3f3;
  font-weight: bold;
  text-align: center;
}

.inspection-table td {
  text-align: left;
}

.inspection-table td.center {
  text-align: center;
  font-weight: bold;
}

.inspection-table thead tr:first-child th {
  border-bottom: 2px solid #000;
}

.inspection-table tbody tr td:nth-child(n+5):nth-child(-n+10) {
  height: 26px;
}

.inspection-table tbody tr:hover {
  background-color: #fafafa;
}
```

---

## 3️⃣ Result

✔ Same **grid layout**
✔ Same **static structure**
✔ Same **visual inspection format**
✔ Printable & Excel-like look
✔ No libraries (no MUI, no AntD)

---

## 4️⃣ Optional Enhancements (if you want next)

* Editable measuring cells
* Auto-fill arrows (`↑`) programmatically
* Export table to **PDF / Excel**
* Highlight NG values
* Dynamic rows from JSON

If you want, tell me:

> **Static only** OR **editable + validations**
> and I’ll extend this exactly for your use case.
  
