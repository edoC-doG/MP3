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
    weekChart: [],
    chart: {},
    rank: {},
    singers: null,
    scrollTop: true,
    currentWidth: null,
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionId === "hSlider")?.items || null,
                chill: action.homeData?.find(item => item.sectionId === "hEditorTheme") || false,
                loveLife: action.homeData?.find(item => item.sectionId === "hEditorTheme2") || false,
                remix: action.homeData?.find(item => item.sectionId === "hEditorTheme3") || false,
                mood: action.homeData?.find(item => item.sectionId === "hEditorTheme4") || false,
                artistsTrending: action.homeData?.find(item => item.sectionId === "hArtistTheme") || false,
                top100: action.homeData?.find(item => item.sectionId === "h100") || false,
                albumHot: action.homeData?.find(item => item.sectionId === "hAlbum") || false,
                radio: action.homeData?.find(item => item.sectionId === "hLiveRadio") || false,
                newRelease: action.homeData?.find(item => item.sectionType === "new-release") || {},
                weekChart: action.homeData?.find(item => item.sectionType === "weekChart")?.items || [],
                chart: action.homeData?.find(item => item.sectionId === "hZC")?.chart || {},
                rank: action.homeData?.find(item => item.sectionId === "hZC")?.items || [],
                singers: action.homeData?.find(item => item.sectionType === "artistSpotlight")?.items || null,
            }
        case actionType.LOADING:
            return {
                ...state,
                isLoading: action.flag
            }
        case actionType.ZERO_SCROLL:
            return {
                ...state,
                scrollTop: action.flag
            }
        case actionType.CURRENT_WIDTH:
            return {
                ...state,
                currentWidth: action.w
            }
        default:
            return state
    }
}
export default appReducer;