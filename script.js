
function YtViewsConverter(views){
   if(views>999 && views<1000000){
      let v=views.toString();
      const new_views=v.slice(0,v.length-3) + "K views";
   return new_views;
   }else{
      let v=views.toString();
      const m=v.slice(0,v.length-6) +"M views";
      return m;
   }
}


function CreateCards(title,thumbnail,views,channel_name,duration,months_been_posted){
    let cardDiv=document.createElement("div");
     cardDiv.className="cards";
    let titleDiv=document.createElement("div");
     titleDiv.className="title";
     titleDiv.textContent=title;
  let thumbnailDiv=document.createElement("img");
     thumbnailDiv.className="thumbnail";
    thumbnailDiv.src="img.jpg"
    thumbnailDiv.alt="thumbnail";
  let viewsDiv=document.createElement("div");
     viewsDiv.className="views";
     viewsDiv.textContent=YtViewsConverter(views);
  let channelDiv=document.createElement("div");
     channelDiv.className="channel_name";
   channelDiv.textContent=channel_name;
  let durationDiv=document.createElement("div");
     durationDiv.className="duration";
     durationDiv.textContent=duration;
  let monthsDiv=document.createElement("div");
     monthsDiv.className="months_been_posted";
    monthsDiv.textContent=months_been_posted; 


cardDiv.appendChild(thumbnailDiv);
cardDiv.appendChild(durationDiv);  cardDiv.appendChild(titleDiv);
cardDiv.appendChild(channelDiv);
cardDiv.appendChild(viewsDiv);
cardDiv.appendChild(monthsDiv);
document.querySelector('.container').appendChild(cardDiv);
}
CreateCards("17 Life Lessons(I Wish Someone Had Told Me)","img.jpg",170000,"Iman Ghadzi","17:01","•2 months ago");
CreateCards("17 Life Lessons(I Wish Someone Had Told Me)","img.jpg",170000,"Iman Ghadzi","17:01","•2 months ago");
CreateCards("17 Life Lessons(I Wish Someone Had Told Me)","img.jpg",170000,"Iman Ghadzi","17:01","•2 months ago");
