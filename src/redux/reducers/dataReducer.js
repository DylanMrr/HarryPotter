const initialState = {
    error: null,
    data: {},
    loading: false
}

const REQUESTED_DATA = 'REQUESTED_DATA'
const REQUESTED_DATA_FAILED = 'REQUESTED_DATA_FAILED'
const REQUESTED_DATA_SUCCEEDED = 'REQUESTED_DATA__SUCCEEDED'

const actions = {
    getData: () => async (dispatch) => {
        dispatch(actions.requestData)
        try {
            const response = await fetch('http://hp-api.herokuapp.com/api/characters')
            const json = await response.json()
            dispatch(actions.requestDataSucceeded(json))
        } catch(e) {
            dispatch(actions.requestDataFailed(e))
        }
    },
    requestData: () => ({
        type: REQUESTED_DATA
    }),
    requestDataFailed: (error) => ({
        type: REQUESTED_DATA_FAILED,
        payload: error
    }),
    requestDataSucceeded: (data) => ({
        type: REQUESTED_DATA_SUCCEEDED,
        payload: data
    })
}

export const {getData} = {...actions}

export default function dataReducer(state = initialState, action) {
    switch(action.type){
        case REQUESTED_DATA:
            return{
                data: {},
                loading: true,
                error: null
            }
        case REQUESTED_DATA_FAILED:
            return{
                data: {},
                loading: false,
                error: action.payload
            }
        case REQUESTED_DATA_SUCCEEDED:
            return {
                data: action.payload,
                loading: false,
                error: null
            }
        default: 
            return state
    }
}