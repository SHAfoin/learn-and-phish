export type WorldStatus = "locked" | "not_started" | "in_progress" | "completed";

export interface WorldPath {
  id: number;
  title: string;
  description: string;
  icon_url: string;
  start_at?: string;
  end_at?: string;
  status: WorldStatus; // TODO : a gerer selon les dates et les progres de l'utilisateur
}
