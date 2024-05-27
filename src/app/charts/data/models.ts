export const types = ["Cambridge", "Oxford"] as const

export type ModelType = (typeof types)[number]

export interface Model<Type = string> {
    id: string
    name: string
    description: string
    strengths?: string
    type: Type
}

export const models: Model<ModelType>[] = [
    {
        id: "c305f976-8e38-42b1-9fb7-d21b2e34f0da",
        name: "Lent Bumps",
        description:
            "A set of rowing races held annually on the River Cam in Cambridge. They began in 1887.",
        type: "Cambridge",
        strengths:
            "Complex intent, cause and effect, creative generation, search, summarization for audience",
    },
    {
        id: "464a47c3-7ab5-44d7-b669-f9cb5a9e8465",
        name: "May Bumps",
        description: "A set of rowing races held annually on the River Cam in Cambridge. They began in 1887.",
        type: "Cambridge",
        strengths:
            "Language translation, complex classification, sentiment, summarization",
    },
    {
        id: "ac0797b0-7e31-43b6-a494-da7e2ab43445",
        name: "Town Bumps",
        description: "The first town bumping races took place in 1868.",
        type: "Cambridge",
        strengths: "Moderate classification, semantic search",
    },
    {
        id: "be638fb1-973b-4471-a49c-290325085802",
        name: "Torpids",
        description:
            "The racing takes place on the Isis (part of the River Thames), usually in the 7th week of Hilary Term on four successive days from Wednesday to Saturday (around the start of March).",
        type: "Oxford",
        strengths:
            "Parsing text, simple classification, address correction, keywords",
    },
    {
        id: "b43c0ea9-5ad4-456a-ae29-26cd77b6d0fb",
        name: "Summer Eights",
        description:
            "a four-day regatta of bumps races which constitutes the University of Oxford's main intercollegiate rowing event of the year. The regatta takes place in May of each year, from the Wednesday to the Saturday of the fifth week of Trinity Term. Men's and women's eights compete in separate divisions for their colleges.",
        type: "Oxford",
    },
]