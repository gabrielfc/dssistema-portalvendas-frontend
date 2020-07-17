import Vue from 'vue'

export const userKey = 'ecommerce_admin_user'
export const baseApiUrl = 'https://modelobh-ecommerce-service.herokuapp.com/api/v1'

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