var display = document.getElementById('display');
var blocknumber = 51;
var curBlockX, curBlockY;


display.width = 0.9 * Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight);
display.height = display.width;

playerY = playerX = display.width / 2;
curBlockY = curBlockX = 25;

var context = display.getContext('2d');

Hide();

var blocksize = display.width / blocknumber;

var matrix = new Array(blocknumber);
for (var i = 0; i < blocknumber; i++)
{
    matrix[i] = new Array(blocknumber);
}

for (var i = 0; i < blocknumber; i++)
{
    for (var j = 0; j < blocknumber; j++)
    {
    	matrix[i][j] = getRandomInRange(0, 1);
    }
}

for (var i = 0; i < blocknumber; i++)
{
    for (var j = 0; j < blocknumber; j++)
    {
        if (matrix[i][j] == 1)
            DrawWall(i * blocksize, j * blocksize);
    }
}

DrawPlayer();
Hide();
DrawRadius();
DrawPlayer();

function Hide()
{
    context.fillStyle = 'black';
    context.fillRect(0, 0, display.width, display.height);
}

function DrawPlayer()
{
    context.beginPath();
    context.arc(display.width / 2, display.height / 2, blocksize * 0.35, 0, 2 * Math.PI, false);
    context.fillStyle = '#ff4b39';
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = '#ff4b39';
    context.stroke();
}

function DrawWall(x, y)
{
    context.fillStyle = 'white';
    context.fillRect(x, y, blocksize, blocksize);
}

function DrawRadius()
{
    for (var i = curBlockX - 4; i < curBlockX + 4; i++)
    {
        for (var j = curBlockY - 4; j < curBlockY + 4; j++)
        {
            if (matrix[i][j] == 1)
                DrawWall(i * blocksize, j * blocksize);
        }
    }

}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}