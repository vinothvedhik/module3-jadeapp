exports.home=function(req,res){
  res.render('home',{title:'Mycity Hotels',
                    headline:'Best Hotels In Bengaluru'
                    });
                  }


exports.hotel=function(req,res){
    var hotelName=req.params.hotel;
    var title,headline;
    var imageCount=4;

    if(hotelName==='abq'){
       title="Absolute BBQ";
       headline="ABQ: taste the thunder";
    }
    else if(hotelName==='a2b'){
       title="A2B";
       headline="A2B: pure veg";
    }

    res.render('hotel',{
      title:title,
      headline:headline,
      hotel:hotelName,
      numberOfImages:imageCount});
  }
