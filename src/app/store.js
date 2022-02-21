import { configureStore } from '@reduxjs/toolkit'

// * importing api 
import { statsApi } from '../services/scoreApi'
import { rankingApi } from '../services/rankingApi'

export default configureStore({
    reducer: {
        [statsApi.reducerPath]: statsApi.reducer,
        [rankingApi.reducerPath] : rankingApi.reducer
    },
})