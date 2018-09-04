import randomInteger from './../randomInteger';

export default function(status){
    switch (status)
    {
        case '2':
            return randomInteger(1800000, 2000000);

        case '3':
            return randomInteger(2800000, 3000000);

        case '4':
            return randomInteger(3800000, 4000000);

        case '5':
            return randomInteger(4100000, 4600000);

        case '6':
            return randomInteger(5100000, 5600000);

        case '7':
            return randomInteger(6100000, 6600000);

        case '8':
            return randomInteger(7000000, 8000000);

        case '9':
            return randomInteger(8000000, 9000000);

        case '10':
            return randomInteger(9100000, 10500000);
    }
}