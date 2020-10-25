export interface Command {
  readonly id: number;
  readonly commandLine: string;
  readonly howTo: string;
  readonly platform: string;
}
