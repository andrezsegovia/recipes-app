export interface Ingredient {
  name: string;
  unit: string;
  amount: number;
}
export interface Step {
  order: number;
  name: string;
  description: string;
}
export interface CookHistory {
  date: Date;
  note: string;
}
export interface Recipe {
  id: Number;
  name: string;
  time: Number;
  for: string;
  type: string;
  ingredients: Ingredient[];
  steps: Step[];
  cookHistory: CookHistory[];
}


