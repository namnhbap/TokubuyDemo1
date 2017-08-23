export function actionLike(id) {
    return {
        type: 'LIKE',
        id: id
    }
}

export function actionComment(id) {
    return {
        type: 'COMMENT',
        id: id
    }
}