
import { DataRow, DataTable } from "./interfaces"

const optionDimensions = [
    "underlyingSymbol",
    "symbol",
    "expireDate",
    "strike",
    "tradable",
    "exchangeDataDelayedBy"
]

const optionFacts = [
    "regularMarketTime",
    "regularMarketPrice",
    "regularMarketOpen",
    "regularMarketDayHigh",
    "regularMarketDayLow",
    "regularMarketClose",
    "regularMarkeyVolumne",
    "ask",
    "bid",
]

export class OptionTable implements DataTable {
    public table: DataRow[] = []
    public dimNames: string[] = optionDimensions
    public factNames: string[] = optionFacts
}