# Dev Notes

## Version 1 Singara 💡
The version 1 `Singara` of the app contains a Create Task section at the bottom. Whenever user enters some tasks in the given input field and hits the create button, The tasks get displayed on the screen as a ordered list. Besides these functionalities, this version also contains a speciall method in the tasker app that clears all the listed tasks.

### The `alldone()` method
Whenever user types `alldone()` in the new task input and submits, all the listed tasks gets deleted and the app becomes new.

---

## Verison 2 Kochuri 🫓
The Version 2 `Kochuri` contains better styling and a delete button on each tasks. Kochuri also contains functionality that capitalizes the first letter of the task. It also has another method, that is just an alternative of the `alldone()` method.

### The `alldel()` method
The `alldel()` method and `alldone()` methods are basically same, but a user can use them on their own contexts.

---

## Version 3 Pokora 🧆
The Version 3 `Pokora` contains a better user experience with the same functionalities of the previous version.

---

## Version 4 Begni 🍆
The Version 4 `Begni` now gives the user option to Edit the tasks. 

---

## Version 5 Piyaji 🍪
The Version 5 `Piyaji` of the Niyoga app has a backend support and all the data get's fetch from a json server. In result, the app will have all the data preserved even if the app is closed.
The custom methods are restored as well. The methods will delete all the data from the database.

## Version 6 Chopp 🧉
In The Version 6 `Chopp` of the Niyoga app the `alldone()` method's functionality has been changed to marking all task green. On the other side a new method is on board `allundone()`, which will do exactly the opposite of `alldone()`, meaning will remove green from all tasks.

Issue :- Although the app now hot three methods to increase productivity, the backend json server is not really able to handle repeated tens requests. Hence when the app has many tasks listed the methods will not work properly. This will fixed in the next versions, as we will use other servers.

## Version 7 Gathia 🥖
Version 7 `Gathia` simply uses the context system from react rather than only states & props. This gives more clear code to understand and better user and development performance. 
Also the version 7 got introduced with some more methods. Those are - 

### The Done methods
 These methods can be used to mark all tasks as done.
* `alldone()` 
* `allgreen()` 
* `green()`
* `done()` 

### The Undone methods
These methods can be used for marking all tasks as undone.
* `allundone()`
* `undone()`
* `reset()`

### The Delete methods
These methods can be used for deleting all tasks at once.
* `alldel()`
* `del()`
* `delete()`


---
---
---


## Version 6 Planning
* **Name** - 
* **Major Updates** - The alldone() method will mark all tasks green rather than deleting it. And the backend server will be updated the status done so that whenever app is reloaded the green tasks remains green.

### How will we achieve this - 
1. We will create a new field in the task objects in the server as `status`. This data field will be a boolean `data type`.
1. The status will remain `false` as default.
1. Whenever the card is clicked (the `clickHandler()` function is invoked in the TaskCard component) the server will get a put request of toggling the `status` data.
1. Change the functionality of `alldone()` method to mark all task's status as true.
