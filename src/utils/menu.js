import icons from "./icons"


const { MdOutlineLibraryMusic, BsDisc, HiOutlineChartPie, FaRegFolderOpen } = icons
export const sidebarMenu = [
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icons: <BsDisc size={24} />
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        icons: <FaRegFolderOpen size={24} />
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <HiOutlineChartPie size={24} />
    },
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icons: <MdOutlineLibraryMusic size={24} />
    },
];
export const searchMenu = [
    {
        path: 'tat-ca',
        text: 'Tất cả',
    },
    {
        path: 'bai-hat',
        text: 'Bài Hát',
        end: true
    },
    {
        path: 'playlist',
        text: 'PLAYLIST/ALBUM',
    },
]