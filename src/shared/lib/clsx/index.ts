export type TypeMods = Record<string, boolean>;

export function clsx(arr: string[] = [], mods: TypeMods = {}): string {
  return [
    ...arr.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, val]) => Boolean(val))
      .map(([key]) => key),
  ].join(" ");
}
