// Импорт картинок (предполагается, что картинки импортируются в начале файла)
import img1 from './../images/wfp/Verb/photo_1_2024-10-26_17-39-46.jpg';
import img2 from './../images/wfp/Verb/photo_1_2024-10-26_17-41-56.jpg';
import img3 from './../images/wfp/Verb/photo_2_2024-10-26_17-39-46.jpg';
import img4 from './../images/wfp/Verb/photo_2_2024-10-26_17-41-56.jpg';
import img5 from './../images/wfp/Verb/photo_3_2024-10-26_17-39-46.jpg';
import img6 from './../images/wfp/Verb/photo_3_2024-10-26_17-41-56.jpg';
import img7 from './../images/wfp/Verb/photo_4_2024-10-26_17-39-46.jpg';
import img8 from './../images/wfp/Verb/photo_4_2024-10-26_17-41-56.jpg';
import img9 from './../images/wfp/Verb/photo_5_2024-10-26_17-39-46.jpg';
import img10 from './../images/wfp/Verb/photo_6_2024-10-26_17-39-46.jpg';
import img11 from './../images/wfp/Verb/photo_7_2024-10-26_17-39-46.jpg';
import img12 from './../images/wfp/Verb/photo_8_2024-10-26_17-39-46.jpg';


import { IList } from '../types/types';

// Массив объектов




export const wordFromPictureListVerb: Array<IList> = [
    {
        theme: 'Глаголы',
        array: [
            { id: Math.random(), image: img1, translate: 'слу́шать' },
            { id: Math.random(), image: img2, translate: 'ду́мать' },
            { id: Math.random(), image: img3, translate: 'рабо́тать' },
            { id: Math.random(), image: img4, translate: 'знать' },
            { id: Math.random(), image: img5, translate: 'гуля́ть' },
            { id: Math.random(), image: img6, translate: 'ку́шать' },
            { id: Math.random(), image: img7, translate: 'отдыха́ть' },
            { id: Math.random(), image: img8, translate: 'понима́ть' },
            { id: Math.random(), image: img9, translate: 'игра́ть' },
            { id: Math.random(), image: img10, translate: 'изуча́ть' },
            { id: Math.random(), image: img11, translate: 'де́лать' },
            { id: Math.random(), image: img12, translate: 'чита́ть' },

        ]
    }
];
