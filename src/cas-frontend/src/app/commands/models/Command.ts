export class Alert {
  success: string
  error: string
}

export interface Command {
  id: number;
  commandLine: string;
  howTo: string;
  platform: string;
}
