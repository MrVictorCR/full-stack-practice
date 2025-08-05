// Flow control and error management

/* 
Basicamente, el flow control se dividen en bloques, por ende, una variable puede ser inicializada en X bloque,
pero, no seria el mismo valor si se accede a ella desde otro bloque.
*/

// Swtich as flow control

const day = 'Monday';

switch (day) {
    case 'Monday':
        console.log('Start of the week');
        break;
    case 'Tuesday':
        console.log('Second day of the week');
        break;
    case 'Wednesday':
        console.log('Midweek');
        break;
    case 'Thursday':
        console.log('Almost there');
        break;
    case 'Friday':
        console.log('End of the work week');
        break;
    case 'Saturday':
        console.log('Weekend!');
        break;
    case 'Sunday':
        console.log('Weekend!');
        break;
    default:
        console.log('Not a valid day');
}

// Este se puede utilizar para problemas conflejos y mayor legibilidad.

// Error control with try-catch-finally

// Throw