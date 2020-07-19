import Vue from 'vue'

export const userKey = 'ZHNzaXN0ZW1hczpkc3Npc3RlbWFzQDIwMjBAUE9SVEFMVkVOREFT'
export const baseApiUrl = 'http://localhost:5000/api/v1'

export function showError(e) {
    if (e && e.response && e.response.data && e.response.data.parameterViolations) {
        e.response.data.parameterViolations.forEach(element => {
            Vue.toasted.global.defaultError({ msg: element.message })
        });
    } else if (e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ msg: e.response.data })
    } else if (typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg: e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, userKey }