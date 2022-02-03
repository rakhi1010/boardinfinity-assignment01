/* Pattern 1
1
22
333
4444
55555   */


 for(var i = 1; i <=5; i++) {
     var valueToBePrinted = "";
     for(var j = 1; j <= i; j++) {
         valueToBePrinted = valueToBePrinted + i
     }
     console.log(valueToBePrinted);
 }

 

/*

    1
    21
    321
    4321
    54321

*/


// loop for increment

for(var i=1; i<=5; i++)
   {
    var valueToBePrinted = "";

    // loop for decrement

     for(var j=i; j>=1; j--)
     {
        valueToBePrinted = valueToBePrinted + j
     }

     console.log(valueToBePrinted);
   }


/*

    54321
    5432
    543
    54
    5

*/

for(var i = 1; i < 6; i++)
{
  var valueToBePrinted = "";

  for(var j = 5; j >= i; j--)
  {
    valueToBePrinted = valueToBePrinted + j
  }
  console.log(valueToBePrinted);
}

