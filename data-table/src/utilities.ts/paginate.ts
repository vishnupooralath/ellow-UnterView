import type { DataItem } from "../types";

export const paginate = (data: DataItem[], page: number, limit: number) => {
  const start = (page - 1) * limit;
  return data.slice(start, start + limit);
};