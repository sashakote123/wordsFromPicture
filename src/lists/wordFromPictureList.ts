// Импорт картинок (предполагается, что картинки импортируются в начале файла)
import img1 from './../images/wfp/photo_11_2024-08-25_12-46-06.jpg';
import img2 from './../images/wfp/photo_23_2024-08-25_12-46-06.jpg';
import img3 from './../images/wfp/photo_7_2024-08-25_12-46-06.jpg';
import img4 from './../images/wfp/photo_3_2024-08-25_12-46-06.jpg';
import img5 from './../images/wfp/photo_4_2024-08-25_12-46-06.jpg';
import img6 from './../images/wfp/photo_1_2024-08-25_12-46-06.jpg';
import img7 from './../images/wfp/photo_16_2024-08-25_12-46-06.jpg';
import img8 from './../images/wfp/photo_14_2024-08-25_12-46-06.jpg';
import img9 from './../images/wfp/photo_13_2024-08-25_12-46-06.jpg';
import img10 from './../images/wfp/photo_12_2024-08-25_12-46-06.jpg';
import img11 from './../images/wfp/photo_5_2024-08-25_12-46-06.jpg';
import img12 from './../images/wfp/photo_6_2024-08-25_12-46-06.jpg';
import img13 from './../images/wfp/photo_21_2024-08-25_12-46-06.jpg';
import img14 from './../images/wfp/photo_20_2024-08-25_12-46-06.jpg';
import img15 from './../images/wfp/photo_22_2024-08-25_12-46-06.jpg';
import img16 from './../images/wfp/photo_10_2024-08-25_12-46-06.jpg';
import img17 from './../images/wfp/photo_19_2024-08-25_12-46-06.jpg';
import img18 from './../images/wfp/photo_18_2024-08-25_12-46-06.jpg';
import img19 from './../images/wfp/photo_2_2024-08-25_12-46-06.jpg';
import img20 from './../images/wfp/photo_9_2024-08-25_12-46-06.jpg';
import img21 from './../images/wfp/photo_17_2024-08-25_12-46-06.jpg';
import img22 from './../images/wfp/photo_8_2024-08-25_12-46-06.jpg';
import img23 from './../images/wfp/photo_15_2024-08-25_12-46-06.jpg';

import img2_1 from './../images/wfp/Verb/photo_1_2024-10-26_17-39-46.jpg';
import img2_2 from './../images/wfp/Verb/photo_1_2024-10-26_17-41-56.jpg';
import img2_3 from './../images/wfp/Verb/photo_2_2024-10-26_17-39-46.jpg';
import img2_4 from './../images/wfp/Verb/photo_2_2024-10-26_17-41-56.jpg';
import img2_5 from './../images/wfp/Verb/photo_3_2024-10-26_17-39-46.jpg';
import img2_6 from './../images/wfp/Verb/photo_3_2024-10-26_17-41-56.jpg';
import img2_7 from './../images/wfp/Verb/photo_4_2024-10-26_17-39-46.jpg';
import img2_8 from './../images/wfp/Verb/photo_4_2024-10-26_17-41-56.jpg';
import img2_9 from './../images/wfp/Verb/photo_5_2024-10-26_17-39-46.jpg';
import img2_10 from './../images/wfp/Verb/photo_6_2024-10-26_17-39-46.jpg';
import img2_11 from './../images/wfp/Verb/photo_7_2024-10-26_17-39-46.jpg';
import img2_12 from './../images/wfp/Verb/photo_1_2025-01-22_22-48-04.jpg';

import img3_1 from './../images/wfp/1sp/photo_11_2025-01-22_22-06-05.jpg';
import img3_2 from './../images/wfp/1sp/photo_13_2025-01-22_22-06-05.jpg';
import img3_3 from './../images/wfp/1sp/photo_12_2025-01-22_22-06-05.jpg';
import img3_4 from './../images/wfp/1sp/photo_14_2025-01-22_22-06-05.jpg';
import img3_5 from './../images/wfp/1sp/photo_10_2025-01-22_22-06-05.jpg';
import img3_6 from './../images/wfp/1sp/photo_9_2025-01-22_22-06-05.jpg';
import img3_7 from './../images/wfp/1sp/photo_15_2025-01-22_22-06-05.jpg';
import img3_8 from './../images/wfp/1sp/photo_16_2025-01-22_22-06-05.jpg'

import img4_1 from './../images/wfp/2sp/photo_4_2025-01-22_22-06-05.jpg';
import img4_2 from './../images/wfp/2sp/photo_2_2025-01-22_22-06-05.jpg';
import img4_3 from './../images/wfp/2sp/photo_5_2025-01-22_22-06-05.jpg';
import img4_4 from './../images/wfp/2sp/photo_3_2025-01-22_22-06-05.jpg';
import img4_5 from './../images/wfp/2sp/photo_7_2025-01-22_22-06-05.jpg';
import img4_6 from './../images/wfp/2sp/photo_8_2025-01-22_22-06-05.jpg';
import img4_7 from './../images/wfp/2sp/photo_1_2025-01-22_22-06-05.jpg';
import img4_8 from './../images/wfp/2sp/photo_6_2025-01-22_22-06-05.jpg';


import { IList } from '../types/types';

// Массив объектов




export const wordFromPictureList: Array<IList> = [
    {
        id: 0,
        theme: 'Комната',
        array: [
            { id: Math.random(), image: img1, translate: 'ковёр' },
            { id: Math.random(), image: img2, translate: 'окно́' },
            { id: Math.random(), image: img3, translate: 'одея́ло' },
            { id: Math.random(), image: img4, translate: 'потоло́к' },
            { id: Math.random(), image: img5, translate: 'кре́сло' },
            { id: Math.random(), image: img6, translate: 'стол' },
            { id: Math.random(), image: img7, translate: 'што́ра' },
            { id: Math.random(), image: img8, translate: 'крова́ть' },
            { id: Math.random(), image: img9, translate: 'стул' },
            { id: Math.random(), image: img10, translate: 'стена́' },
            { id: Math.random(), image: img11, translate: 'карти́на' },
            { id: Math.random(), image: img12, translate: 'телеви́зор' },
            { id: Math.random(), image: img13, translate: 'ту́мба' },
            { id: Math.random(), image: img14, translate: 'шкаф' },
            { id: Math.random(), image: img15, translate: 'по́лка' },
            { id: Math.random(), image: img16, translate: 'пол' },
            { id: Math.random(), image: img17, translate: 'дива́н' },
            { id: Math.random(), image: img18, translate: 'душ' },
            { id: Math.random(), image: img19, translate: 'плита́' },
            { id: Math.random(), image: img20, translate: 'печь' },
            { id: Math.random(), image: img21, translate: 'ва́нна' },
            { id: Math.random(), image: img22, translate: 'ра́ковина' },
            { id: Math.random(), image: img23, translate: 'зе́ркало' },
        ]
    },


    // {
    //     id: 1,
    //     theme: 'Глаголы',
    //     array: [
    //         { id: Math.random(), image: img2_1, translate: 'слу́шать' },
    //         { id: Math.random(), image: img2_2, translate: 'ду́мать' },
    //         { id: Math.random(), image: img2_3, translate: 'рабо́тать' },
    //         { id: Math.random(), image: img2_4, translate: 'знать' },
    //         { id: Math.random(), image: img2_5, translate: 'гуля́ть' },
    //         { id: Math.random(), image: img2_6, translate: 'ку́шать' },
    //         { id: Math.random(), image: img2_7, translate: 'отдыха́ть' },
    //         { id: Math.random(), image: img2_8, translate: 'понима́ть' },
    //         { id: Math.random(), image: img2_9, translate: 'игра́ть' },
    //         { id: Math.random(), image: img2_10, translate: 'изуча́ть' },
    //         { id: Math.random(), image: img2_11, translate: 'де́лать' },
    //         { id: Math.random(), image: img2_12, translate: 'чита́ть' },

    //     ]
    // },

    {
        id: 1,
        theme: 'Глаголы. 1 спряжение',
        array: [
            { id: Math.random(), image: img3_1, translate: 'помога́ть' },
            { id: Math.random(), image: img3_2, translate: 'продава́ть' },
            { id: Math.random(), image: img3_3, translate: 'покупа́ть' },
            { id: Math.random(), image: img3_4, translate: 'выбира́ть' },
            { id: Math.random(), image: img3_5, translate: 'убира́ть' },
            { id: Math.random(), image: img3_6, translate: 'пла́вать' },
            { id: Math.random(), image: img3_7, translate: 'бе́гать' },
            { id: Math.random(), image: img3_8, translate: 'разгова́-ривать' },

            { id: Math.random(), image: img2_1, translate: 'слу́шать' },
            { id: Math.random(), image: img2_2, translate: 'ду́мать' },
            { id: Math.random(), image: img2_3, translate: 'рабо́тать' },
            { id: Math.random(), image: img2_4, translate: 'знать' },
            { id: Math.random(), image: img2_5, translate: 'гуля́ть' },
            { id: Math.random(), image: img2_6, translate: 'ку́шать' },
            { id: Math.random(), image: img2_7, translate: 'отдыха́ть' },
            { id: Math.random(), image: img2_8, translate: 'понима́ть' },
            { id: Math.random(), image: img2_9, translate: 'игра́ть' },
            { id: Math.random(), image: img2_10, translate: 'изуча́ть' },
            { id: Math.random(), image: img2_11, translate: 'де́лать' },
            { id: Math.random(), image: img2_12, translate: 'чита́ть' },


        ]
    },


    {
        id: 2,
        theme: 'Глаголы. 2 спряжение',
        array: [
            { id: Math.random(), image: img4_1, translate: 'стро́ить' },
            { id: Math.random(), image: img4_2, translate: 'дари́ть' },
            { id: Math.random(), image: img4_3, translate: 'смотре́ть' },
            { id: Math.random(), image: img4_4, translate: 'учи́ть' },
            { id: Math.random(), image: img4_5, translate: 'говори́ть' },
            { id: Math.random(), image: img4_6, translate: 'вари́ть' },
            { id: Math.random(), image: img4_7, translate: 'по́мнить' },
            { id: Math.random(), image: img4_8, translate: 'звони́ть' },


        ]
    },


];
