import randomInteger from './../randomInteger';

export default function (rank){
    switch (rank)
    {
        case '2':
            return randomInteger(15000, 50000);

        case '3':
            return randomInteger(30000, 80000);

        case '4':
            return randomInteger(50000, 100000);

        case '5':
            return randomInteger(100000, 150000);

        case '6':
            return randomInteger(150000, 200000);

        case '7':
            return randomInteger(200000, 250000);

        case '8':
            return randomInteger(250000, 350000);

        case '9':
            return randomInteger(350000, 550000);

        case '10':
            return randomInteger(550000, 1000000);
    }
}