import randomInteger from './../randomInteger';

export default function (status){
    switch(status)
    {
        case '2':
            return [
                {
                    busy: false,
                    position: 4,
                    increment: 5,
                    knob: 4,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: 2,
                    increment: 5,
                    knob: 3,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: 4,
                    increment: 5,
                    knob: 2,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: 3,
                    increment: 5,
                    knob: 1,
                    disabled: false,
                    active: false
                }
            ];

        case '3':
            return [
                {
                    busy: false,
                    position: randomInteger(7, 9),
                    increment: 6,
                    knob: 4,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 3),
                    increment: 6,
                    knob: 3,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(6, 9),
                    increment: 6,
                    knob: 2,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 3),
                    increment: 6,
                    knob: 1,
                    disabled: false,
                    active: false
                }
            ];

        case '4':
            return [
                {
                    busy: false,
                    position: randomInteger(5, 8),
                    increment: randomInteger(3, 5),
                    knob: 6,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(5, 8),
                    increment: randomInteger(3, 5),
                    knob: 5,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(2, 6),
                    increment: randomInteger(3, 5),
                    knob: 4,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 5),
                    increment: randomInteger(3, 5),
                    knob: 3,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 5),
                    increment: randomInteger(3, 5),
                    knob: 2,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(5, 8),
                    increment: randomInteger(3, 5),
                    knob: 1,
                    disabled: false,
                    active: false
                }
            ];

        case '5':
            return [
                {
                    busy: false,
                    position: randomInteger(5, 9),
                    increment: randomInteger(4, 6),
                    knob: 6,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 4),
                    increment: randomInteger(4, 6),
                    knob: 5,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(2, 6),
                    increment: randomInteger(4, 6),
                    knob: 4,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(4, 8),
                    increment: randomInteger(4, 6),
                    knob: 3,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 4),
                    increment: randomInteger(4, 6),
                    knob: 2,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(5, 8),
                    increment: randomInteger(4, 6),
                    knob: 1,
                    disabled: false,
                    active: false
                }
            ];

        case '6':
            return [
                {
                    busy: false,
                    position: randomInteger(5, 8),
                    increment: randomInteger(5, 8),
                    knob: 6,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 4),
                    increment: randomInteger(5, 8),
                    knob: 5,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(2, 6),
                    increment: randomInteger(5, 8),
                    knob: 4,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(7, 9),
                    increment: randomInteger(5, 8),
                    knob: 3,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 4),
                    increment: randomInteger(5, 8),
                    knob: 2,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: 5,
                    increment: randomInteger(5, 8),
                    knob: 1,
                    disabled: false,
                    active: false
                }
            ];

        case '7':
            return [
                {
                    busy: false,
                    position: randomInteger(5, 7),
                    increment: randomInteger(5, 8),
                    knob: 8,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(2, 5),
                    increment: randomInteger(5, 8),
                    knob: 7,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(6, 8),
                    increment: randomInteger(5, 8),
                    knob: 6,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 4),
                    increment: randomInteger(5, 8),
                    knob: 5,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(7, 9),
                    increment: randomInteger(5, 8),
                    knob: 4,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 3),
                    increment: randomInteger(5, 8),
                    knob: 3,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(6, 9),
                    increment: randomInteger(5, 8),
                    knob: 2,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 3),
                    increment: randomInteger(5, 8),
                    knob: 1,
                    disabled: false,
                    active: false
                }
            ];

        case '8':
            return [
                {
                    busy: false,
                    position: randomInteger(1, 3),
                    increment: randomInteger(6, 9),
                    knob: 8,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(7, 9),
                    increment: randomInteger(6, 9),
                    knob: 7,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 4),
                    increment: randomInteger(6, 9),
                    knob: 6,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(6, 9),
                    increment: randomInteger(6, 9),
                    knob: 5,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(2, 6),
                    increment: randomInteger(6, 9),
                    knob: 4,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(5, 8),
                    increment: randomInteger(6, 9),
                    knob: 3,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(3, 6),
                    increment: randomInteger(6, 9),
                    knob: 2,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(5, 8),
                    increment: randomInteger(6, 9),
                    knob: 1,
                    disabled: false,
                    active: false
                }
            ];

        case '9':
            return [
                {
                    busy: false,
                    position: randomInteger(1, 9),
                    increment: randomInteger(8, 10),
                    knob: 8,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 9),
                    increment: randomInteger(8, 10),
                    knob: 7,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 9),
                    increment: randomInteger(8, 10),
                    knob: 6,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 9),
                    increment: randomInteger(8, 10),
                    knob: 5,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 9),
                    increment: randomInteger(8, 10),
                    knob: 4,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 9),
                    increment: randomInteger(8, 10),
                    knob: 3,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 9),
                    increment: randomInteger(8, 10),
                    knob: 2,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(5, 9),
                    increment: randomInteger(8, 10),
                    knob: 1,
                    disabled: false,
                    active: false
                }
            ];

        case '10':
            return [
                {
                    busy: false,
                    position: randomInteger(1, 9),
                    increment: randomInteger(0, 15),
                    knob: 8,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 9),
                    increment: randomInteger(0, 15),
                    knob: 7,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 9),
                    increment: randomInteger(0, 15),
                    knob: 6,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 9),
                    increment: randomInteger(0, 15),
                    knob: 5,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 9),
                    increment: randomInteger(0, 15),
                    knob: 4,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 9),
                    increment: randomInteger(0, 15),
                    knob: 3,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 9),
                    increment: randomInteger(0, 15),
                    knob: 2,
                    disabled: false,
                    active: false
                },
                {
                    busy: false,
                    position: randomInteger(1, 3),
                    increment: randomInteger(0, 15),
                    knob: 1,
                    disabled: false,
                    active: false
                }
            ];
    }
}