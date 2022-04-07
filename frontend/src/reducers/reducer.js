import { createSlice } from '@reduxjs/toolkit';


const slice = createSlice({
    name: 'wineHandler',
    initialState: [],
    reducers: {
        updateStore(state, action) {
            return action.payload
        },
        add(state, action) {
            // POST-funktion påkallas
            postWine(action.payload)

            return [...state, action.payload];
        },
        remove(state, action) {
            //DELETE-funktion påkallas
            deleteWine(action.payload)
            let newStateArr = state.filter(wine => (wine.id !== action.payload.id));
            return newStateArr
        },
        edit(state, action) {
            //Tar bort originalet från store och lägger till den redigerade
            let newStateArr = state.filter(wine => wine.id !== action.payload.id);
            //PUT-funktion påkallas
            putWine(action.payload)
            return [...newStateArr, action.payload];
        },
        editAmount(state, action) {
           let newStateArr = state.filter(wine => wine.id !== action.payload.id);
           // Samma som edit förutom att payload.amount minskas
           action.payload.amount = action.payload.amount - 1;
           putWine(action.payload)

           return [...newStateArr, action.payload];  
        }
    }
})


function postWine(wine) {
    // POST (lägga till)
    fetch('http://localhost:5010/api_post', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(wine)
        })
        .then(response => response.json())
        .then(data => slice.actions.updateStore(data));
}

function deleteWine(wine) {
    // DELETE (ta bort)
    fetch('http://localhost:5010/api_delete', {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(wine)
        })
        .then(response => response.json())
        .then(data => slice.actions.updateStore(data));
}

function putWine(wine) {
    // PUT (uppdatera)
    fetch('http://localhost:5010/api_put', {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(wine)
        })
        .then(response => response.json())
        .then(data => slice.actions.updateStore(data)); // Behöver inte (kan inte) använda dispatch då man redan är inne? Därför slice.actions.
}

export const actions = slice.actions;
export const reducers = slice.reducer;