'use strict';

//Targetting Elements
// Common elements
const labelWelcome = document.querySelector('h1');
const containerApp = document.querySelector('main');
const containerHistory = document.querySelector('.histories');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance');

// input fields
const inputLoginUsername = document.querySelector('.user');
const inputLoginPin = document.querySelector('.pin');
const inputTransferTo = document.querySelector('.transfer-to');
const inputTransferAmount = document.querySelector('.transfer-amount');
const inputLoanAmount = document.querySelector('.loan-amount');
const inputCloseUser = document.querySelector('.close-user');
const inputClosePin = document.querySelector('.close-pin');

// Buttons
const btnLogin = document.querySelector('.login');
const btnTransfer = document.querySelector('.btn-transfer');
const btnLoan = document.querySelector('.btn-loan');
const btnClose = document.querySelector('.btn-close');

// Accounts
const account1 = {
  owner: 'John Doe',
  pin: 1111,
  movements: [200, -400, 5000, 3600, -7000, 1000],
};

const account2 = {
  owner: 'Mike Bellion',
  pin: 2222,
  movements: [4000, -6000, 3000, -2500, -7000, 10000],
};

const account3 = {
  owner: 'Adam Smith',
  pin: 3333,
  movements: [20, -400, 500, 8000, -70, 1000],
};

const account4 = {
  owner: 'Samuel Jackson',
  pin: 4444,
  movements: [1000, -300, -5000, 9000, -700, -1000],
};

const accounts = [account1, account2, account3, account4];

/////////////// Functions

// Logic to create username
const createUsername = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .split(' ')
      .map(name => name[0].toLowerCase())
      .join('');
  });
};

createUsername(accounts);

const displayHistory = acc => {
  acc.movements.forEach(movement, i => {
    const tag = movement > 0 ? 'deposit' : 'wthdrawal';
    const html = ` 
    <li class="history">
      <p class="tag tag--${tag}">${i + 1} ${tag}</p>
      <p class="amount">${movement}&euro;</p>
    </li>`;
  });
};
//

// Event Handlers
