import actionType from "../actions/actionTypes";

const initState = {
    banner: [],
    chill: {},
    loveLife: {},
    remix: {},
    mood: {},
    artistsTrending: {},
    top100: {},
    albumHot: {},
    radio: {},
    isLoading: false,
    newRelease: {},
    weekChart: []
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionId === "hSlider")?.items || null,
                chill: action.homeData?.find(item => item.sectionId === "hEditorTheme") || {},
                loveLife: action.homeData?.find(item => item.sectionId === "hEditorTheme2") || {},
                remix: action.homeData?.find(item => item.sectionId === "hEditorTheme3") || {},
                mood: action.homeData?.find(item => item.sectionId === "hEditorTheme4") || {},
                artistsTrending: action.homeData?.find(item => item.sectionId === "hArtistTheme") || {},
                top100: action.homeData?.find(item => item.sectionId === "h100") || {},
                albumHot: action.homeData?.find(item => item.sectionId === "hAlbum") || {},
                radio: action.homeData?.find(item => item.sectionId === "hLiveRadio") || {},
                newRelease: action.homeData?.find(item => item.sectionType === "new-release") || {},
                weekChart: action.homeData?.find(item => item.sectionType === "weekChart")?.items || [],

            }
        case actionType.LOADING:
            return {
                ...state,
                isLoading: action.flag
            }
        default:
            return state
    }
}
export default appReducer;