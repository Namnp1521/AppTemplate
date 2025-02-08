export interface IInventory {
  id?: number;
  _id?: string;
  productId?: string;
  productName?: string;
  product_color?: string;
  product_location?: string;
  startingInventory?: number;
  soldInventory?: number;
  defectiveInventory?: number;
  remainingInventory?: number;
  stock_avilable?: string;
  takenFrom?: string;
  returnToOrigin?: string;
  preOrder?: string;
  date?: string; // '2024-12-05'
}
