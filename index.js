function changep(x)
{
    var w=document.getElementById("who");
    var s=document.getElementsByClassName("ele");
    c=document.getElementById("alertcont");
    t=document.getElementById("t");
    if(s[x-1].innerHTML==" ")
    {
        if(w.innerHTML=="Player One's Turn")
        {
            w.innerHTML="Player Two's Turn";
            s[x-1].innerHTML="X"
        }
        else
        {
            w.innerHTML="Player One's Turn";
            s[x-1].innerHTML="O"
        }
    }
    else
    {
        c.style.display="block";
        t.innerHTML="Cell Already Filled"
        
    }

    endo();
    whowon();
}

function endo()
{
    var i;fo=0;
    var w=document.getElementById("who");
    var s=document.getElementsByClassName("ele");
    for(i=0;i<9;++i)
    {
        if(s[i].innerHTML==" ")
        {
            fo=1;
        }
    }
    if(fo==0)
    {
        w.innerHTML="Draw";
        var s=document.getElementsByClassName("ele");
        var w=document.getElementById("who");
        c=document.getElementById("alertcont");
        t=document.getElementById("t");
        c.style.display="block";
        t.innerHTML="Draw";
        for(i=0;i<9;++i)
        {
            s[i].innerHTML=" ";
        }  
        w.innerHTML="Player One's Turn"
    }
}

function whowon()
{
    var w=document.getElementById("who");
    var s=document.getElementsByClassName("ele");
    //We check if player 1 won
    if((s[0].innerHTML=="X"&&s[1].innerHTML=="X"&&s[2].innerHTML=="X"))
    {
        winboc(1);
        re();
    }
    else if((s[0].innerHTML=="X"&&s[3].innerHTML=="X"&&s[6].innerHTML=="X"))
    {
        winboc(1);
        re();
    }
    else if((s[2].innerHTML=="X"&&s[5].innerHTML=="X"&&s[8].innerHTML=="X"))
    {
        winboc(1);
        re();
    }
    else if((s[6].innerHTML=="X"&&s[7].innerHTML=="X"&&s[8].innerHTML=="X"))
    {
        winboc(1);
        re();
    }
    else if((s[3].innerHTML=="X"&&s[4].innerHTML=="X"&&s[5].innerHTML=="X"))
    {
        winboc(1);
        re();
    }
    else if((s[1].innerHTML=="X"&&s[4].innerHTML=="X"&&s[7].innerHTML=="X"))
    {
        winboc(1);
        re();
    }
    else if((s[0].innerHTML=="X"&&s[4].innerHTML=="X"&&s[8].innerHTML=="X"))
    {
        winboc(1);
        re();
    }
    else if((s[2].innerHTML=="X"&&s[4].innerHTML=="X"&&s[6].innerHTML=="X"))
    {
        winboc(1);
        re();
    }
    //Now we check if Player 2 Won
    else if((s[0].innerHTML=="O"&&s[1].innerHTML=="O"&&s[2].innerHTML=="O"))
    {
        winboc(2);
        re();
    }
    else if((s[0].innerHTML=="O"&&s[3].innerHTML=="O"&&s[6].innerHTML=="O"))
    {
        winboc(2);
        re();
    }
    else if((s[2].innerHTML=="O"&&s[5].innerHTML=="O"&&s[8].innerHTML=="O"))
    {
        winboc(2);
        re();
    }
    else if((s[6].innerHTML=="O"&&s[7].innerHTML=="O"&&s[8].innerHTML=="O"))
    {
        winboc(2);
        re();
    }
    else if((s[3].innerHTML=="O"&&s[4].innerHTML=="O"&&s[5].innerHTML=="O"))
    {
        winboc(2);
        re();
    }
    else if((s[1].innerHTML=="O"&&s[4].innerHTML=="O"&&s[7].innerHTML=="O"))
    {
        winboc(2);
        re();
    }
    else if((s[0].innerHTML=="O"&&s[4].innerHTML=="O"&&s[8].innerHTML=="O"))
    {
        winboc(2);
        re();
    }
    else if((s[2].innerHTML=="O"&&s[4].innerHTML=="O"&&s[6].innerHTML=="O"))
    {
        winboc(2);
        re();
    }
    //Else it is a draw
    else
    {
    }
}

function re()
{
    var s=document.getElementsByClassName("ele");
    var w=document.getElementById("who");
    for(i=0;i<9;++i)
    {
        s[i].innerHTML=" ";
    }  
    w.innerHTML="Player One's Turn"
}

function closeme()
{
    c=document.getElementById("alertcont");
    c.style.display="none";
}

function winboc(x)
{
    c=document.getElementById("alertcont");
    t=document.getElementById("t");
    if(x==1)
    {
        c.style.display="block";
        t.innerHTML="Winner: Player One";
    }
    else
    {
        c.style.display="block";
        t.innerHTML="Winner: Player Two";
    }
}

function scrollme()
{
  window.scrollTo(0,100); 
}