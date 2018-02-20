function forLoop(array)
{
<<<<<<< HEAD
  for(var i = 0; i < 25; i++)
  {
    if(i === 1)
    {
      array.push(`I am ${i} strange loop.`)
    }
    else
    {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array;
}

function whileLoop(n)
{
  while(n > 0)
  {
    console.log (--n);
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}
 
function doWhileLoop(array)
{
  do 
  {
    array.pop();
  } while (array.length > 2 && maybeTrue());
  return array;
=======
  for(let i = 0; i < 25; i++)
  {
    if(i === 1)
    {
      return `I am ${i} strange loop.`;
    }
    else
    {
      return `I am ${i+1} strange loops.`;
    }
    
  }
>>>>>>> 141f0fcb0713819eab73dbc1621001896bf80501
}