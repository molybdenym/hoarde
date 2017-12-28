/* The Ability type */
export interface Ability {
  raceMod: number; 
  roll2?: number | null; 
  baseScore?: number | null; 
  levelMod: number; 
  roll3?: number | null; 
  roll1?: number | null; 
  proficient?: boolean | null; 
  magicMod: number; 
  abbr: string; 
}

