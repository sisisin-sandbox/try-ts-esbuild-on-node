import leftPad from 'left-pad';

export const pad = (str: string, len: number, ch?: string) => leftPad(str, len, ch);
