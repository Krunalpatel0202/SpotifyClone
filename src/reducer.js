export const initialState ={
    user: null,
    playlists:[],
    Playing: false,
    item:null,
    // remove after finishing developing...
   // token: 'BQCtyfMYNcyCaUw0CSeeiDE1cUEWVxk35Gq6tewOZ6UiJLN4u4MGgoTPyHqaZPKdHcf8Fu6yKoi6jncXqf8tJDV_O3E_6ne2D-VJRa2g2x4bMz9Vc5CSdYdd00a2UYsSrHNR0lYKv2IALMLXdH9Fvom9Zw2xH4Fd7fgt2S-rpi6WDztnN73x',
};

const reducer = (state, action)=> {
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}


export default reducer;