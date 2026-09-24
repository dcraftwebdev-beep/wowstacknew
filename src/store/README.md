# store/

Global client state lives here. Add a lightweight store (Zustand,
React context, or useReducer modules) only when prop-drilling actually hurts.
Server data belongs in `services/api/`, not here.
