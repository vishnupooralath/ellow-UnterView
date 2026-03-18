import { useState } from "react";
import { generateData, categories, statuses } from "./data/mockData";
import { useDebounce } from "./hooks/useDebounce";
import { sortData } from "./utilities.ts/sort";
import { filterData } from "./utilities.ts/filter";
import { paginate } from "./utilities.ts/paginate";

function App() {
  const [data] = useState(generateData());
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const [sortKey, setSortKey] = useState<string>("id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const [page, setPage] = useState(1);
  const limit = 10;

  const filtered = filterData(
    data,
    debouncedSearch,
    selectedCategories,
    selectedStatuses,
  );
  const sorted = sortData(filtered, sortKey, sortOrder);
  const paginated = paginate(sorted, page, limit);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
    setPage(1);
  };

  const toggleStatus = (status: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status],
    );
    setPage(1);
  };

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "#dcfce7"; // green-100
      case "pending":
        return "#fef9c3"; // yellow-100
      case "inactive":
        return "#fee2e2"; // red-100
      default:
        return "#f3f4f6";
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case "active":
        return "#166534"; // green-800
      case "pending":
        return "#854d0e"; // yellow-800
      case "inactive":
        return "#991b1b"; // red-800
      default:
        return "#374151";
    }
  };

  return (
    <div className="container">
      <div className="ticks"></div>
      <section id="next-steps-modern">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search by name, role, email or category..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        <div className="filters-wrapper">
          <div className="filter-group">
            <h3 className="filter-group-title">Categories</h3>
            <div className="filter-options">
              {categories.map((cat) => (
                <label key={cat} className="filter-label">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <h3 className="filter-group-title">Statuses</h3>
            <div className="filter-options">
              {statuses.map((status) => (
                <label key={status} className="filter-label">
                  <input
                    type="checkbox"
                    checked={selectedStatuses.includes(status)}
                    onChange={() => toggleStatus(status)}
                  />
                  {status}
                </label>
              ))}
            </div>
          </div>
        </div>

        {paginated.length > 0 ? (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th onClick={() => handleSort("id")}>ID</th>
                  <th onClick={() => handleSort("name")}>Name</th>
                  <th onClick={() => handleSort("email")}>Email</th>
                  <th onClick={() => handleSort("role")}>Role</th>
                  <th onClick={() => handleSort("category")}>Category</th>
                  <th onClick={() => handleSort("status")}>Status</th>
                  <th onClick={() => handleSort("createdAt")}>Created</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((item) => (
                  <tr key={item.id} className="row-hover">
                    <td>{item.id}</td>
                    <td style={{ fontWeight: 500 }}>{item.name}</td>
                    <td style={{ color: "#64748b" }}>{item.email}</td>
                    <td>{item.role}</td>
                    <td>{item.category}</td>
                    <td>
                      <span
                        className="status-badge"
                        style={{
                          background: getStatusColor(item.status),
                          color: getStatusTextColor(item.status),
                        }}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td style={{ color: "#64748b" }}>
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div
            style={{ textAlign: "center", padding: "50px", color: "#64748b" }}
          >
            <p style={{ fontSize: "18px" }}>No matching data found</p>
          </div>
        )}

        {paginated.length > 0 && (
          <div className="pagination-controls">
            <div className="page-info">
              Showing {(page - 1) * limit + 1} to{" "}
              {Math.min(page * limit, filtered.length)} of {filtered.length}{" "}
              entries
            </div>
            <div className="pagination-buttons">
              <button
                // className="pagination-btn"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                Previous
              </button>
              <button
                // className="pagination-btn"
                disabled={page >= Math.ceil(filtered.length / limit)}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </section>

      <div className="ticks"></div>
      <section id="spacer" style={{ height: "50px" }}></section>
    </div>
  );
}

export default App;
