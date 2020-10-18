export interface Command {
  readonly id: number;
  readonly commandLine: string;
  readonly description: string;
  readonly platform: string;
}
