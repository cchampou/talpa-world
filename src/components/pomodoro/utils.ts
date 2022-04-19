export const getTimeString = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export enum PomodoroState {
  WORK = 'WORK',
  REST = 'REST',
}

export const WORK_TIME = 25 * 60;
export const REST_TIME = 5 * 60;
