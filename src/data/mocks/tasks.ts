export type TaskStatus = "concluido" | "atrasado" | "pendente";

export type TaskPeriod = "hoje" | "ultima_semana";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  date: string;
  icon: string;
  period: TaskPeriod;
  responsible: string;
}

export const tasksMock: Task[] = [
  {
    id: "1",
    title: "Limpar a cozinha",
    status: "concluido",
    date: "24/08/2026",
    icon: "restaurant-outline",
    period: "hoje",
    responsible: "ana_beatriz",
  },

  {
    id: "2",
    title: "Lavar os banheiros",
    status: "concluido",
    date: "24/08/2026",
    icon: "water-outline",
    period: "hoje",
    responsible: "carlos_eduardo",
  },

  {
    id: "3",
    title: "Aspirar a sala",
    status: "pendente",
    date: "24/08/2026",
    icon: "home-outline",
    period: "hoje",
    responsible: "mariana_alves",
  },

  {
    id: "4",
    title: "Lavar as roupas",
    status: "concluido",
    date: "22/08/2026",
    icon: "shirt-outline",
    period: "ultima_semana",
    responsible: "ana_beatriz",
  },

  {
    id: "5",
    title: "Organizar o quarto",
    status: "pendente",
    date: "21/08/2026",
    icon: "bed-outline",
    period: "ultima_semana",
    responsible: "carlos_eduardo",
  },

  {
    id: "6",
    title: "Limpar os vidros",
    status: "atrasado",
    date: "20/08/2026",
    icon: "sparkles-outline",
    period: "ultima_semana",
    responsible: "mariana_alves",
  },

  {
    id: "7",
    title: "Lavar as roupas",
    status: "concluido",
    date: "19/08/2026",
    icon: "shirt-outline",
    period: "ultima_semana",
    responsible: "carlos_eduardo",
  },

  {
    id: "8",
    title: "Organizar o quarto",
    status: "pendente",
    date: "18/08/2026",
    icon: "bed-outline",
    period: "ultima_semana",
    responsible: "ana_beatriz",
  },

  {
    id: "9",
    title: "Limpar os vidros",
    status: "atrasado",
    date: "17/08/2026",
    icon: "sparkles-outline",
    period: "ultima_semana",
    responsible: "mariana_alves",
  },
];