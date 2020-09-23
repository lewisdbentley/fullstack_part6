import noteReducer from './noteReducer'
import deepFreeze from 'deep-freeze'


describe('noteReducer', () => {
    it('adds new note to state', () => {
        let state = []
        const action = {
            type: 'NEW_NOTE',
            data: {
                content: 'deep freeze tests state',
                id: '1',
                important: true
            }
        }
    
        deepFreeze(state)
        const newState = noteReducer(state, action)

        expect(newState).toHaveLength(1)
        expect(newState[0].content).toBe('deep freeze tests state')
    })


    it('toggles importance of a note', () => {
        let state = [
            {
                content: 'state is stated in redux',
                important: true,
                id: 1,
            },
            {
                content: 'noteReducer toggles importance of a note',
                important: false,
                id: 2,
            }
        ]

        const action = {
            type: 'TOGGLE_IMPORTANCE',
            data: {
                id: 2,
            }
        }
    
        deepFreeze(state)
        const newState = noteReducer(state, action)

        expect(newState).toHaveLength(2)
        expect(newState).toContainEqual(state[0])

        expect(newState).toContainEqual({
            content: 'noteReducer toggles importance of a note',
            important: true,
            id: 2,
        })
    })

})