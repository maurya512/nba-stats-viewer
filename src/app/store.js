import { configureStore } from '@reduxjs/toolkit'

// * importing api 
import { statsApi } from '../services/scoreApi'

export default configureStore({
    reducer: {
        [statsApi.reducerPath]: statsApi.reducer,
    },
})