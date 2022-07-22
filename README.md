# JS TASKS
 1. **Task1**
This task do sum of all elements of an array

> Example

    
     var list = [10, 20, 60, 30, 54, 39]  
	 var result = solution(list)

> Here, the result should contain 213.

 2. **Task2**
This task find the smallest positive integer (greater than 0) that  
does not occur in A.

> For example,  given A = [1, 3, 6, 4, 1, 2], the function  should
> return 5.   Given A = [1, 2, 3], the function should return 4.   Given
> A = [−1, −3], the function should return 1.

 3. **Task3**
 That will extract even and odd numbers from an array A. 

> For example,  given A = [1, 3, 4, 6, 8, 9], the function  should
> return two arrays, index 0 should   contain array of odd numbers and
> index 1 should return array of even number.

 4. **Task4**
		 This task will get the value of symptom for each goal in goals.json 		from symptoms.json

> For example solution(“yoga”) should return

		{  
		"title":  "Yoga",  
		"symptoms": [  
		"Low mood"  
		]
		}

 5. **Task5**
		 In this task there is a function called cleanNames that accepts an 	array of strings containing additional space characters at the beginning and end. The cleanNames() function  use the array map method to return a new array full of trimmed names.
> For example:  
> cleanNames([" avengers", "   captain_america", "ironman   ", " black
> panther   "])  should give ["avengers", "captain_america", "ironman",
> "black panther"]

 6. **Task6**
		In this task there is function that converts an array of values from miles to kilometres using the map method. In the end, add the kilometres up in a new variable called “totalDistanceInKilometers” and return this variable.
 7. **Task7**
		This task do square and sum the array elements using the arrow function and then find the average of the array.
 8. **Task8**
		This task chooses even double even numbers from the array of numbers and compute the sum using Array’s filter, map and reduce methods
9. **Task9**	
		This task uses the .map() method on the heros array to return a new array.  

-   This new array will rename the ‘name’ key to ‘hero’.
-   The ‘name’ key will not appear in the new array.
-   The new array will have new key added called (id).
-   The key ‘id’ will be based on the index. 

> Example : 
> Input : 

    const heros = [
      { name: 'Spider-Man' },
      { name: 'Thor' },
      { name: 'Black Panther' },
      { name: 'Captain Marvel' },
      { name: 'Silver Surfer' }
    ];

> EXPECTED OUTPUT (array of objects):

    [
      { id: 0, hero: 'Spider-Man' }, 
      { id: 1, hero: 'Thor' }, 
      { id: 2, hero: 'Black Panther' }, 
      { id: 3, hero: 'Captain Marvel' }, 
      { id: 4, hero: 'Silver Surfer' }
    ]

10. **Task10**
In This task, we have to display only some of the array items from the predefined array elements.

> Input :

    const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
    

> Output : 
 

    const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

11. **Task11**
In this task, a problem is solved.
In this problem we have given matrix size and matrix as input.
In this problem we have to rotate matrix 90 degrees either left side or right side.
In this problem we have also given string as input specifying the direction in which we have to rotate the matrix 90 degrees. This string has maximum length of three letters.

> Example 
> Input :
> 2
> 1 2
> 3 4
> RLR
> Output :
> 3 1 
> 4 2

