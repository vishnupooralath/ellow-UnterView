import type { DataItem } from "../types";

export const sortData = (data: DataItem[], key: string, order: "asc" | "desc") => {
  return [...data].sort((a, b) => {
    const valA = a[key as keyof DataItem];
    const valB = b[key as keyof DataItem];
    
    if (valA < valB) return order === "asc" ? -1 : 1;
    if (valA > valB) return order === "asc" ? 1 : -1;
    return 0;
  });
};