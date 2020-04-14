# Project Overview

## Project Name

StayHomeCookHome
(https://pages.git.generalassemb.ly/AbrahamEfrenTavarez/StayHomeCookHome/ "Page link")

## Project Description

Now that you're working from home, this is the best time to learn how to cook.

- Get easy, fast and healthy recipes to make at home while you stay safe.

- See random and delicous food ideas of what to cook at home.

- Search thousands of recipes on the website and get a full list of ingredients, and a short how-to video.

## Api and Data Sample

#### The Meal DB API

The MealDB site:
(https://www.themealdb.com/api.php)
![alt text](https://res.cloudinary.com/abetavarez/image/upload/v1586143923/Screen_Shot_2020-04-05_at_11.30.23_PM_e5cyb5.png "JSON DATA")

#### JSON Data

#### Postman

![alt text](https://res.cloudinary.com/abetavarez/image/upload/v1586121154/postman_ulhuhm.png "postman json data")

## Wireframe

### Desktop

![alt text](https://res.cloudinary.com/abetavarez/image/upload/v1586127786/sitewire_ti4yi2.png "wireframe image desktop")

### Mobile

![alt text](https://res.cloudinary.com/abetavarez/image/upload/v1586180975/Screen_Shot_2020-04-06_at_9.49.11_AM_rnbqpw.png "wireframe image mobile")

## MVP/Post MVP

### MVP

- Find an external API to access food recipes data.
- Render data from API on the page.
- Style the page as indicated on the wireframe.
- Add search funtionallity, allowing the user to search recipes.
- Render results on the page with images and recipe ingredients.

---

### Post MVP

- Render random recipes on the left column of the page.
- Add search categories on the right column of the page.
- Add short video link to recipes.
- Use local storage to save favorites.

## Project Schedule

| Day             | Deliverable                                          | Status   |
| --------------- | ---------------------------------------------------- | -------- |
| April 2rd       | Project Prompt                                       | Complete |
| April 3rd - 5th | Wireframes / Priority Matrix                         | Complete |
| April 6th       | Project Aproval/Core Application Structure(HTML,CSS) | Complete |
| April 7th       | Pseudocode / API and JS functionality                | Complete |
| April 8th       | Clickable Model Search, Rendering functionality      | Complete |
| April 9th       | MVP                                                  | Complete |
| April 10th      | Present                                              | Complete |

## Priority Matrix

## ![alt text](https://res.cloudinary.com/abetavarez/image/upload/v1586146746/Screen_Shot_2020-04-06_at_12.18.45_AM_nphuft.png "priority matrix")

![alt text](https://res.cloudinary.com/abetavarez/image/upload/v1586146445/Screen_Shot_2020-04-05_at_10.43.38_PM_bqrwru.png "priority matrix")

## Timeframes

| Component                           | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Research APIs                       |    L     |      4hrs      |     4hrs      |    4hrs     |
| Wireframes/Priority Matrix          |    L     |      3hrs      |     3hrs      |    3hrs     |
| Testing API & JSON Data             |    M     |      3hrs      |     3hrs      |    3hrs     |
| Basic HTML and Basic CSS            |    M     |      3hrs      |     3hrs      |    3hrs     |
| Setting up API, CDNs and Test Calls |    M     |      4hrs      |     4hrs      |    4hrs     |
| JavaScript DOM Manipulation         |    H     |      4hrs      |     4hrs      |    4hrs     |
| Testing and Debugging               |    H     |      4hrs      |     2hrs      |    2hrs     |
| JS Functions and Handlers           |    H     |      5hrs      |     8hrs      |    8hrs     |
| Applys CSS FlexBox                  |    H     |      4hrs      |     4hrs      |    4hrs     |
| Site interactivity JS & FlexBox     |    H     |      6hrs      |     6hrs      |    6hrs     |
| Total                               |    H     |     40hrs      |     41hrs     |    41hrs    |

## Code Snippet

The JSON format was a little hard to work with because all the key were together on a single object.
One of the solutions was to filter the keys I needed with the method .includes() and checking that the value wasn't null or undefind.

```
for (m in meal[x]) {
      if (m.includes("Meas") && meal[x][m] != "" && meal[x][m] != " ") {

        let li = document.createElement('li');
        li.innerHTML = meal[x][m];
        ulResult.appendChild(li);
        measArr.push(meal[x][m]);
      };
    };

```

## Change Log

The layout of the page had to change because of issues with data coming back from the API.
