export const SECTIONS = ['home', 'sobre', 'projetos', 'contato'] as const;

export type Section = typeof SECTIONS[number];
