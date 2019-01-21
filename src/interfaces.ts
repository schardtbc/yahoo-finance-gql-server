

export interface DataRow {
    dimensions: string[]
    time: number
    facts: number []
 }
 
 export interface DataTable {
   table: DataRow[]
   dimNames: string[]
   factNames: string[]
 }