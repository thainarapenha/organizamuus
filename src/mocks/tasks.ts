export type TaskStatus = "concluido" | "atrasado" | "pendente";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  date: string;
  icon: string;
}

export const tasksMock: Task[] = [
  {
    id: "1",
    title: "Limpar a cozinha",
    status: "concluido",
    date: "22/08/2026",
    icon: "restaurant-outline",
  },
  {
    id: "2",
    title: "Lavar os banheiros",
    status: "concluido",
    date: "21/08/2026",
    icon: "water-outline",
  },
  {
    id: "3",
    title: "Aspirar a sala",
    status: "pendente",
    date: "23/08/2026",
    icon: "home-outline",
  },
  {
    id: "4",
    title: "Lavar as roupas",
    status: "concluido",
    date: "22/08/2026",
    icon: "shirt-outline",
  },
  {
    id: "5",
    title: "Organizar o quarto",
    status: "pendente",
    date: "24/08/2026",
    icon: "bed-outline",
  },
  {
    id: "6",
    title: "Limpar os vidros",
    status: "atrasado",
    date: "20/08/2026",
    icon: "sparkles-outline",
  },
  {
    id: "7",
    title: "Lavar as roupas",
    status: "concluido",
    date: "22/08/2026",
    icon: "shirt-outline",
  },
  {
    id: "8",
    title: "Organizar o quarto",
    status: "pendente",
    date: "24/08/2026",
    icon: "bed-outline",
  },
  {
    id: "9",
    title: "Limpar os vidros",
    status: "atrasado",
    date: "20/08/2026",
    icon: "sparkles-outline",
  },
];