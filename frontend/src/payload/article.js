const ARTICLE = 'ARTICLE'
const TEXT_ROW = 'TEXT_ROW'

export class Article {
    type = ARTICLE
    id
    name
    description
    imageUrl
    textRows = []
}

export class TextRow {
    type = TEXT_ROW
    id = 0
    index = 0
    segments = []
    textRowType = "DEFAULT"
    borderColor
    padding
    fullWidth
}