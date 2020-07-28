# Stay Home Cook Home

[![Netlify Status](https://api.netlify.com/api/v1/badges/910d26dd-1614-447b-b4d3-a642b6e39b95/deploy-status)](https://app.netlify.com/sites/vibrant-yonath-0cbbfa/deploys)

#StayHomeCookHome
(https://www.stayhomecookhome.com/)

## Project Description

Now that you're working from home, this is the best time to learn how to cook.

- Get easy, fast and healthy recipes to make at home while you stay safe.

- See random and delicous food ideas of what to cook at home.

- Search thousands of recipes on the website and get a full list of ingredients, and a short how-to video.

## API and Data Sample

#### The Meal DB API

This site is build with The Meal DB API:
(https://www.themealdb.com/api.php)
![alt text](https://res.cloudinary.com/abetavarez/image/upload/v1586143923/Screen_Shot_2020-04-05_at_11.30.23_PM_e5cyb5.png "JSON DATA")

#### JSON Data Smaple

#### Postman

![alt text](https://res.cloudinary.com/abetavarez/image/upload/v1586121154/postman_ulhuhm.png "postman json data")

## Wireframe

### Desktop

![alt text](https://res.cloudinary.com/abetavarez/image/upload/v1586127786/sitewire_ti4yi2.png "wireframe image desktop")

### Mobile

![alt text](https://res.cloudinary.com/abetavarez/image/upload/v1586180975/Screen_Shot_2020-04-06_at_9.49.11_AM_rnbqpw.png "wireframe image mobile")

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
