export interface DataItem {
  id: number;
  name: string;
  email: string;
  role: string;
  category: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
}