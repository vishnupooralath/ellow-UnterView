import type { DataItem } from "../types/index";

export const categories = ["Engineering", "Design", "Marketing", "Sales", "Customer Success"];
export const statuses = ["active", "inactive", "pending"];

const firstNames = ["Alice", "Bob", "Charlie", "Diana", "Edward", "Fiona", "George", "Hannah"];
const lastNames = ["Smith", "Jones", "Brown", "Taylor", "Wilson", "Davies", "Evans", "Thomas"];
const roles = ["Software Engineer", "UI Designer", "Technical Lead", "Marketing Manager", "Sales Representative", "Customer Advocate"];

const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

export const generateData = (): DataItem[] => {
  const data: DataItem[] = [];

  for (let i = 0; i < 500; i++) {
    const firstName = getRandom(firstNames);
    const lastName = getRandom(lastNames);
    
    data.push({
      id: i + 1,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
      role: getRandom(roles),
      category: getRandom(categories),
      status: getRandom(statuses) as DataItem["status"],
      createdAt: new Date(Date.now() - Math.random() * 1000000000).toISOString(),
    });
  }

  return data;
};