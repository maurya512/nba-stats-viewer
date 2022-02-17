import { configureStore } from '@reduxjs/toolkit'

// * importing api 
import { scoreApi } from '../services/scoreApi'

export default configureStore({
    reducer: {
        [scoreApi.reducerPath]: scoreApi.reducer,
    },
})