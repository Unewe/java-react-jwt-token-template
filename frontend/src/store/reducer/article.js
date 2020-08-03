import {SET_ARTICLE} from "../action";

export class Article {
    name = "Название..."
    description = "Описание для поста."
    textRows = [
        {
            index: 0,
            type: 'DEFAULT',
            segments: [
                {
                    index: 0,
                    text: "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.",
                    type: "DEFAULT",
                }
            ]
        },
        {
            index: 1,
            type: 'EXTRA',
            segments: [
                {
                    index: 0,
                    text: "Какой то бонусный текст, требующий внимания",
                    type: "DEFAULT",
                }
            ]
        },
        {
            index: 2,
            type: 'DEFAULT',
            segments: [
                {
                    index: 0,
                    text: "C помощью этого онлайн-генератора рыботекста можно пачками плодить как отдельные предложения и заголовки, так и целые абзацы отменнейшего рыбы-текста. А для любителей автоматизации даже реализован API фиштекста.",
                    type: "DEFAULT",
                }
            ]
        },
        {
            index: 3,
            type: 'ATTENTION',
            segments: [
                {
                    index: 0,
                    text: "Многострочный текст, требующий внимания.",
                    type: "DEFAULT",
                    newLine: true,
                },
                {
                    index: 1,
                    text: "Многострочный текст, требующий внимания.",
                    type: "DEFAULT",
                    newLine: true,
                },
                {
                    index: 2,
                    text: "Многострочный текст, требующий внимания.",
                    type: "DEFAULT",
                    newLine: true,
                }
            ]
        },
    ]
}

const article = (state = new Article(), action) => {
    switch (action.type) {
        case SET_ARTICLE:
            return {...state, article: action.payload}
        default:
            return state
    }
}

export default article