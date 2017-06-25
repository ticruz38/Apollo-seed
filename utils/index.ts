import { DocumentNode, DefinitionNode } from 'graphql'

export class DocumentParser {
    constructor(public document: DocumentNode) {
        document.definitions.map((def: any) => {
            this[def.name.value] = { ...document, definitions: [def] }
        })
    }

    get(prop: string): DocumentNode {
        if (!this[prop]) {
            throw prop + ' is not defined for that document'
        }
        return this[prop]
    }
}
