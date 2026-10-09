export interface ICategroy {
  id: string
  slug: string
  nameBn: string
  icon: string
}

export interface IProduct{
id: number;
categoryIcon: string;
nameBn: string;
today: number;
unit: string;
change: {
dir: "up" | "down";
pct: number;
}
}