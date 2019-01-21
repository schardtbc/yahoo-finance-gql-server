
import { DataRow } from "./interfaces"

export class OptionRow implements DataRow {
    public dimensions: string[] = [];
    public time: number = 0;
    public facts: number[] = [];
}   