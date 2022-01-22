type Normalize = (v: string) => string;

export const normalize: Normalize = (v) => v.replace(/-/g, "");
