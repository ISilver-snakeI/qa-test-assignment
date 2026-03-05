
# Payment Test Cases

Test cases for payment by bank card via an external payment gateway.

---

## BUGID - 001

### Preconditions
- User is authorized
- An order exists in the cart
- Payment page is open

### Steps
1. Enter valid bank card details:
   - Card number
   - Expiration date
   - CVV
2. Click the **"Pay"** button
3. If the **3-D Secure** page appears, confirm the payment
4. Wait for redirect back to the application

### Expected Result
- Payment gateway returns status **Success**
- Order status changes to **Paid**
- User sees a successful payment message
- Receipt is sent to the user's email

---

## BUGID - 002

### Preconditions
- User is on the payment page
- Order is created

### Steps
1. Enter card data that will be declined by the bank
2. Click **"Pay"**

### Expected Result
- Payment gateway returns status **Declined by bank**
- User sees message **"Payment declined by bank"**
- Order status remains **Unpaid**

---

## BUGID - 003

### Preconditions
- User is on the payment page
- Order is created

### Steps
1. Enter valid card details
2. Click **"Pay"**
3. Payment gateway returns service error

### Expected Result
- User sees message **"Payment service error. Please try again later"**
- Order status remains unchanged
- Payment is not completed

---

## BUGID - 004

### Preconditions
- Payment page is open

### Steps
1. Leave card fields empty
2. Click **"Pay"**

### Expected Result
- Validation messages are displayed
- Data is not sent to the payment gateway

---

## BUGID - 005

### Preconditions
- Payment page is open

### Steps
1. Enter an invalid card number (e.g. 1234)
2. Click **"Pay"**

### Expected Result
- Message appears: **"Invalid card number"**
- Request is not sent to the payment gateway

---

## BUGID - 006

### Preconditions
- Payment page is open

### Steps
1. Enter valid card details
2. Enter 1 or 2 digits in the CVV field
3. Click **"Pay"**

### Expected Result
- Error message **"Invalid CVV"** is displayed
- Payment request is not sent to the gateway

---

## BUGID - 007

### Preconditions
- Payment page is open

### Steps
1. Enter a card number with **16 digits**
2. Enter other valid card details
3. Click **"Pay"**

### Expected Result
- Validation passes successfully
- Data is sent to the payment gateway

---

## BUGID - 008

### Preconditions
- Payment page is open

### Steps
1. Enter a card number with **19 digits**
2. Fill in other fields
3. Click **"Pay"**

### Expected Result
- Field accepts the value
- Client-side validation passes successfully

---

## BUGID - 009

### Preconditions
- Payment page is open
- Test payment gateway is configured

### Steps
1. Enter valid card details
2. Click **"Pay"**
3. Check request in **Network tab or logs**

### Expected Result
- Payment data is sent to the payment gateway
- Gateway response is correctly processed by the system

---

## BUGID - 010

### Preconditions
- Payment card requires **3-D Secure authentication**

### Steps
1. Enter card details
2. Click **"Pay"**

### Expected Result
- User is redirected to **3-D Secure page**
- After authentication the user returns to the application
- Payment status is displayed correctly
