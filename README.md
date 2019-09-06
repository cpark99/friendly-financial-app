# Friendly Financial

### Live:
[Link](https://friendlyfinancial-app.now.sh/)
___

### Summary:
Friendly Financial is a modern way for users to get started on securing their finances. This app provides users with free financial tools and educational resources, covering various topics like life insurance, retirement, and college planning, while directly connecting those who are interested to a certified financial services professional. While utilizing a responsive, mobile-first design, users can both learn about and calculate their own financial goals, while being introduced to a professional that they can trust and work with directly.
___

### Motivation:
A surpringly large number of people do not have any financial security, let alone know where to start. On the other hand, financial serives professionals struggle with generating "quality" leads, as most of them come from face-to-face interactions, as well as over the phone. Friendly Financial aims to connect both parties, online, by providing free educational material and financial tools, while allowing users to connect directly with a certified financial services professional, by scheduling a free consultation or registering for an account.
___

### Technologies Used:
* JavaScript
* React
* Node.js
* Express.js
* PostgreSQL
* CSS3
* HTML5
___

### API Documentation:

  * Base URL
    *https://lit-plateau-20514.herokuapp.com/api*

#### Login
___
Returns authentication token and corresponding user_id for valid requests
  * **URL**
    */auth/login*

  * **Method**
    `POST`

  * **URL Params**
    ##### Required:
    `email=[string]` <br />
    `password=[string]`


  * **Data Params**
    ```javascript
    {
      "email": "email",
      "password": "password"
    }
    ```

  * **Success Response:**
    * **Code:** 200 <br />
      **Content:** 
      ```javascript
      {
        "authToken": "$gdskfglkslj445tjo4t", 
        "payload": { user_id: 1} 
      }
      ```

  * **Error Response:**
    * **Code:** 400 BAD REQUEST <br />
      **Content:** `{ error: "Missing '${key}' in request body" }`

      OR

    * **Code:** 400 BAD REQUEST
      **Content:** `{ error: "Incorrect email or password" }`

  * **Sample Call:**
    ```javascript
      fetch(`${config.API_ENDPOINT}/auth/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(credentials)
      }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        );
    ```
___


### Screenshots:
##### Desktop:
![Desktop Screenshot](https://raw.githubusercontent.com/cpark99/friendly-financial-app/master/src/img/screenshots/friendlyfinancial-desktop-screenshot.png)
___

##### Tablet:
![Tablet Screenshot](https://raw.githubusercontent.com/cpark99/friendly-financial-app/master/src/img/screenshots/friendlyfinancial-tablet-screenshot.png)
___

##### Mobile:
![Mobile Screenshot](https://raw.githubusercontent.com/cpark99/friendly-financial-app/master/src/img/screenshots/friendlyfinancial-mobile-screenshot.png)
___