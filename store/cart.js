import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

let cart

const initialState = {
  lastUpdate: 0,
  count: 5,
  items: [],
}

export const actionTypes = {
  INIT: 'INIT',
  ADD: 'ADD',
  DEL: 'DEL',
  UPDATE: 'UPDATE',
  LOAD: 'LOAD',
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT:
      return {
        ...state,
      }
    case actionTypes.ADD:
      return {
        ...state,
        items: state.items.filter(i => i.no ===action.item.no).length === 0 ?
          state.items.concat([action.item]):
          state.items.map(i => i.no !==action.item.no? i: action.item),
        count: state.count + 1,
      }
    case actionTypes.DEL:
      return {
        ...state,
        items: items.filter(i => i.no !==action.item.no),
        count: count - 1,
      }
    case actionTypes.UPDATE:
      return {
        ...state,
        items: items.map(i => i.no !==action.item.no? i: action.item),
      }
    case actionTypes.LOAD:
      return {
        ...state,
        itemㄴ: action.itemㄴ,
        count: action.item.length
      }
    default:
      return state
  }
}

// ACTIONS
export const addCart = (item) => {
  return { type: actionTypes.ADD, item: item, ts: Date.now() }
}
export const initCart = () => {
  return { type: actionTypes.INIT, items: [] }
}

export const incrementCount = () => {
  return { type: actionTypes.INCREMENT }
}

export const decrementCount = () => {
  return { type: actionTypes.DECREMENT }
}

export const resetCount = () => {
  return { type: actionTypes.RESET }
}

export const loadExampleData = (data) => {
  return { type: actionTypes.LOAD_EXAMPLE_DATA, data }
}

export const loadingExampleDataFailure = () => {
  return { type: actionTypes.LOADING_DATA_FAILURE }
}

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['items'], // place to select which state you want to persist
}

const persistedReducer = persistReducer(persistConfig, reducer)

function makeCart(initState = initialState) {
  return createStore(
    persistedReducer,
    initState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeCart = (preloadedState) => {
  let _cart = cart ?? makeCart(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the cart, and create a new cart
  if (preloadedState && cart) {
    _cart = makecart({
      ...cart.getState(),
      ...preloadedState,
    })
    // Reset the current cart
    cart = undefined
  }

  // For SSG and SSR always create a new cart
  if (typeof window === 'undefined') return _cart
  // Create the cart once in the client
  if (!cart) cart = _cart

  return _cart
}

export function useCart(initialState) {
  const cart = useMemo(() => initializeCart(initialState), [initialState])
  return cart
}
