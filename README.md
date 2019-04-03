# SESSIONS

## Create Session

**URL:** http://localhost:3000/api/sessions

**Method:** POST

**sample post data**

|  field | example value   | mandatory   | description  |
| ------------ | ------------ | ------------ | ------------ |
|  category | sample category 1  |  required |  type string |
|  title | sample title  | required  | type string  |
|  description | sample description  |  required  | type string   |
|  mp3_url |  http://some-address.tld/filename.mp3 | required  | type string  |
|  length | 14  | required  | type string, in minutes  |


**sample success response**
```javascript
{
    "status": "success",
    "message": "Session added successfully!!!",
    "data": null
}
```
**sample failed respon**
```javascript
{
    "message": "Something looks wrong :( !!!"
}
```

## List Session

**URL:** http://localhost:3000/api/sessions

**Method:** GET
 
**sample success response**
```javascript
{
    "status": "success",
    "message": "Session list found!!!",
    "data": {
        "session": [
            {
                "id": "5ca4550a9e236943e8829230",
                "category": "rwrewrewr",
                "title": "fwrwerewrewr",
                "description": "fwerwer wr werwer wr",
                "mp3_url": "adsaada asd",
                "length": "45"
            },
            {
                "id": "5ca478997a69e860c0471816",
                "category": "rwrewrewr",
                "title": "fwrwerewrewr",
                "description": "fwerwer wr werwer wr",
                "mp3_url": "adsaada asd",
                "length": "45"
            },
            {
                "id": "5ca4789e7a69e860c0471817",
                "category": "rwrewrewr",
                "title": "fwrwerewrewr",
                "description": "fwerwer wr werwer wr",
                "mp3_url": "adsaada asd",
                "length": "45"
            }
        ]
    }
}
```
 

# Goals

## Create Goals

**URL:** http://localhost:3000/api/goals

**Method:** POST

**sample post data**

|  field | example value   | mandatory   | description  |
| ------------ | ------------ | ------------ | ------------ |
|  session_id | 5ca4550a9e236943e8829230  |  required |  type string |
|  category | sample category  | required  | type string  |
|  description | sample description  |  required  | type string   |
|  status |  completed | required  | type string  |
|  percent_completed | 14  | required  | type string, in minutes  |


**sample success response**
```javascript
{
    "status": "success",
    "message": "Goals added successfully!!!",
    "data": null
}
```
**sample failed respon**
```javascript
{
    "message": "Something looks wrong :( !!!"
}
```

## List Goals

**URL:** http://localhost:3000/api/goals

**Method:** GET
 
**sample success response**
```javascript
{
    "status": "success",
    "message": "Goals list found!!!",
    "data": {
        "goals": [
            {
                "category": "Emotional",
                "description": "sample description",
                "id": "5ca47ec896964d51f46e6120",
                "percent_completed": "12",
                "status": "completed",
                "session_id": "5ca4550a9e236943e8829230"
            },
            {
                "category": "Emotional",
                "description": "sample description",
                "id": "5ca47f1496964d51f46e6121",
                "percent_completed": "12",
                "status": "completed",
                "session_id": "5ca4550a9e236943e8829230"
            }
        ]
    }
}
```
 
