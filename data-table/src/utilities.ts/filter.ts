import type { DataItem } from "../types";

export const filterData = (
  data: DataItem[],
  search: string,
  categories: string[],
  statuses: string[]
) => {
  return data.filter(item => {
    const searchLower = search.toLowerCase();
    const matchesSearch =
      item.name.toLowerCase().includes(searchLower) ||
      item.category.toLowerCase().includes(searchLower) ||
      item.role.toLowerCase().includes(searchLower) ||
      item.email.toLowerCase().includes(searchLower);

    const matchesCategory =
      categories.length === 0 || categories.includes(item.category);

    const matchesStatus =
      statuses.length === 0 || statuses.includes(item.status);

    return matchesSearch && matchesCategory && matchesStatus;
  });
};