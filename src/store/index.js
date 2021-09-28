import { createStore } from "vuex";
import { getMonthesNames } from '@/helpers'
import { Month } from '@/models/month.js'

export default createStore({
    state: {
        calendarCards: getMonthesNames().map((month, index) => new Month(month, index))
    },
    getters: {
        getMonthById: (state) => (id) => {
            return state.calendarCards.find(month => month.id === id);
        },
        getMonthList:(state) => () => {
            return state.calendarCards;
        }
    },
    actions: {

    }
});