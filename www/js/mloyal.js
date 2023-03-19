$.mobile.allowCrossDomainPages = true;
_debug = false;

var popUp;
var city_id='';
var category_id='';

var gallery_cat='';
var galstr='';
var player_cat='';
var fix_cat='';

var reg_id="";



var lastattemptpage='';


var json_fb_mm='https://taghash.co/mloyalApps/facebookorchidhotel.php';
var json_fb_pp='https://taghash.co/mloyalApps/facebookorchidhotelpune.php';
var json_fb_ff='https://taghash.co/mloyalApps/facebookfortjg.php';
var json_fb_mo='https://taghash.co/mloyalApps/facebookmahodadhi.php';
var json_fb_vitsmumbai='https://taghash.co/mloyalApps/facebookvitsmumbai.php';
var json_fb_vitsbhub='https://taghash.co/mloyalApps/facebookvitsbhub.php';
var json_fb_lotusgoa='https://taghash.co/mloyalApps/facebooklotusgoa.php';
var json_fb_lotuskonark='https://taghash.co/mloyalApps/facebooklotuskonark.php';
var json_fb_shimla='https://taghash.co/mloyalApps/facebooklotuskonark.php';

var RSS_twitter_mm='https://taghash.co/mloyalApps/twitter.php?uname=TheOrchidMumbai';
var RSS_twitter_pp='https://taghash.co/mloyalApps/twitter.php?uname=orchidhotelpune';
var RSS_twitter_ff='https://taghash.co/mloyalApps/twitter.php?uname=fortjadhavgadh';
var RSS_twitter_mo='https://taghash.co/mloyalApps/twitter.php?uname=mahodadhipalace';
var RSS_twitter_vitsmumbai='https://taghash.co/mloyalApps/twitter.php?uname=vitshotels';
var RSS_twitter_vitsbhub='https://taghash.co/mloyalApps/twitter.php?uname=vitsbbsr';
var RSS_twitter_lotusgoa='https://taghash.co/mloyalApps/twitter.php?uname=LotusGoa';
var RSS_twitter_lotuskonark='https://taghash.co/mloyalApps/twitter.php?uname=lotuskonark';
var RSS_twitter_shimla='https://taghash.co/mloyalApps/twitter.php?uname=TheOrchidMumbai';

var RSS_instagram_mm='https://www.instagram.com/theorchidmumbai/?__a=1';
var RSS_instagram_pp='https://www.instagram.com/orchidhotelpune/?__a=1';
var RSS_instagram_ff='https://www.instagram.com/fortjadhavgadh/?__a=1';
var RSS_instagram_mo='https://www.instagram.com/mahodadhipalace/?__a=1';
var RSS_instagram_vitsmumbai='https://www.instagram.com/vitsmumbai/?__a=1';
var RSS_instagram_vitsbhub='https://www.instagram.com/vits_bbsr_no/?__a=1';
var RSS_instagram_lotusgoa='https://www.instagram.com/lotusgoa_no/?__a=1';
var RSS_instagram_lotuskonark='https://www.instagram.com/lotuskonark_no/?__a=1';
var RSS_instagram_shimla='https://www.instagram.com/theorchidhotelshimla/?__a=1';

var RSS_pinterest='http://pinterestapi.co.uk/royalorchidltd/pins';
var RSS_youtube='http://xceedfbapps.com/mloyalfeeds/youtube.php?brandname=sanjeevkapoorkhazana';
var RSS_tumblr='http://xceedfbapps.com/mloyalfeeds/tumblr.php?brandurl=http://vinegarwoman.tumblr.com';
var RSS_matchfix='http://xceedfbapps.com/ddfeeds/calendar_new.php';

var brandname='orchid';
var aboutus_det='The Orchid Mumbai';
var brand_url='http://www.orchidhotel.com/';
var cart = { cartdata: []};
var indexary=new Array();
var ids = [];
var cityarr=new Array();
var cityidarr=new Array();
var storecodelist=new Array();
user = {
	"balance" : 0,
	"firstname" : "",
	"id" : "",
	"lastname" : "",
	"total" : 0,
	"validity" : "",
	"mobile" : "",
	"email":"",
	"dob":""
};


var SERVER = "https://orchid.mloyalretail.com/m/";
var SERVER1 = "https://orchid.mloyalretail.com/";


       
$(document).ready(function(event){


			
                $( function() {
					 $( "#popupNested1" ).enhanceWithin().popup();
					 $( "#popupNested2" ).enhanceWithin().popup();
					 $( "#location_pop" ).enhanceWithin().popup();
                     $( "#donatePopup" ).enhanceWithin().popup();

				});

                $("#wait").css("display","none"); // hide it initially
				
                 $(document).ajaxStart(function() {
                       $("#wait").css("display","block");
                    });
				  
                 $(document).ajaxStop(function() {
                       $("#wait").css("display","none");
                    });
					document.addEventListener("backbutton", function(e){
						if($.mobile.activePage.is('#myaccount')){
							navigator.app.exitApp();
						}
			   if($.mobile.activePage.is('#homepage')){
				   e.preventDefault();
				   var x;
					if (confirm("Are you sure you want to exit?") == true) {
						x = "Yes";
						navigator.app.exitApp();
					} else {
						x = "No";
					}
				   
			   }
			   else {

				   navigator.app.backHistory();
			   }
			}, false);
			var loginusername = localStorage.getItem("usernameorchid");
            var loginpass = localStorage.getItem("passwordorchid");
            if(typeof loginusername == undefined || loginusername == null)
                    loginusername='';
            if(typeof loginpass == undefined || loginpass == null)
                    loginpass='';
                 //getContacts();
                  if(loginusername!='' && loginpass!='')
                    {
                           $('#username').val(localStorage.getItem("usernameorchid"));
                           $('#password_myacc').val(localStorage.getItem("passwordorchid"));
							user.mobile = localStorage.getItem('usernameorchid');
							pwd = localStorage.getItem('passwordorchid');
							uname = user.mobile;
							user.balance = localStorage.getItem('balance');
							user.firstname = localStorage.getItem('firstname');
							user.lastname = localStorage.getItem('lastname');
							user.id = localStorage.getItem('id');
							user.total = localStorage.getItem('total');
							user.validity = localStorage.getItem('validity');
							user.trans_sms = localStorage.getItem('trans_sms');
							user.mktgsms = localStorage.getItem('mktgsms');
							user.cpns = localStorage.getItem('cpns');
							user.ads = localStorage.getItem('ads');
							user.dob = localStorage.getItem('dob');
							user.emailid = localStorage.getItem('emailid');
							user.def_store = localStorage.getItem('def_store');
							user.def_city = localStorage.getItem('def_city');
							user.visit_frequency = localStorage.getItem('visit_frequency');
							   console.log(" in ready");
                              // alert(user.firstname);
                            if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
                            {
                                user.firstname = '';
                            }
                        if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
                                user.lastname = '';
                        if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
                                user.emailid = '';
                        if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
                                user.dob = '';
                        if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
                                user.mobile = '';
                           // alert(user.firstname);
                            $('#update_firstname').val(user.firstname);
                            $('#update_lastname').val(user.lastname);
                                var dob = user.dob.split('-');
                                var mm = dob.length == 3 ? dob[1] : '';
                                var dd = dob.length == 3 ? dob[0] : '';
                                var yyyy = dob.length == 3 ? dob[2] : '';
                                
                                $('#update_dd').val(dd);
                                $('#update_mm').val(mm);
                                $('#update_yyyy').val(yyyy);

                            $('#update_email').val(user.emailid);
                            $('#update_dob').val(user.dob);
                            $('#update_firstname1').val(user.firstname);
                            $('#update_lastname1').val(user.lastname);
                            
                            $('#update_email1').val(user.emailid);
                            $('#update_dob1').val(user.dob);

    
                            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
                            document.getElementById("profilepts").innerHTML=user.balance+' Petals';
                            document.getElementById("profilenm1").innerHTML=user.firstname;
                            document.getElementById("profilepts1").innerHTML=user.balance+' Petals';
                            
                             $("#wait").css("display","none");
                            authenticate();
                          if(imageExists('https://taghash.co/mloyalfileupload/uploads/Orchid_'+localStorage.getItem("username")+'.jpg'))
                          {
                              document.getElementById("cardImagemenu").src='https://taghash.co/mloyalfileupload/uploads/Orchid_'+localStorage.getItem("username")+'.jpg';
                          }                     
                     }
				   else if( loginusername!='' && loginpass=='') 
	                 {
					   $.mobile.changePage( "#myaccount", { transition: "none"} );
	                 }
				   else
					  {
								
						    $.mobile.changePage( "#page-forgot-password", { transition: "none"} );
					  }
});


function donate(){
    //$( "#donatePopup" ).enhanceWithin().popup();
   // $('#donatePopup').popup("open");
    //setTimeout(function(){
     //   $('#donatePopup').popup("close")
    //},5000)

    if(user.mobile==null || user.mobile=='')
	{
		$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else if(parseInt(user.balance)<=99)
	{
		toast('You dont have sufficent petals to donate');
	}
	else
	{
	/*if(localStorage.getItem('selectedstore')=='mahodadhi')
            toast('Donate petals not available for Mahodadhi Palace - Puri, Odisha');
    else
    {*/
       // alert(storecodelist.length);
   
       var stores='';
       if(localStorage.getItem('selectedstore')=='jadhavgadh')
            stores = 'Orchid-03';
       else if(localStorage.getItem('selectedstore')=='mumbai')
            stores = 'Orchid-01';
       else if(localStorage.getItem('selectedstore')=='pune')
            stores = 'Orchid-02';
       else if(localStorage.getItem('selectedstore')=='mahodadhi')
            stores = 'Orchid-04';
       else if(localStorage.getItem('selectedstore')=='vitsmumbai')
            stores = 'Orchid-08';
       else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
            stores = 'Orchid-06';
       else if(localStorage.getItem('selectedstore')=='lotusgoa')
            stores = 'Orchid-05';
       else if(localStorage.getItem('selectedstore')=='lotuskonark')
            stores = 'Orchid-07';
	   else if(localStorage.getItem('selectedstore')=='shimla')
            stores = 'Orchid-09';
        
   
    
    $.ajax({
   url: SERVER1+'apis/donate_petals_api.asp', //login.php
    type: 'GET',
    timeout: 95000,
    dataType: 'html', //xml/html/script/json/jsonp
    data: {

				'mobnum': user.mobile,
				'points': '100',
				'store_code': stores
				
			},
   
    success: function(data, textStatus, xhr) {
  
				//console.log('JSONDATA:'+JSON.stringify(data));
 
				//toast('Thanks for submitting your feedback.');
		        
				//$.mobile.changePage( "#homepage", { transition: "none"} );
            user.balance = parseInt(user.balance)-100;
            localStorage.setItem('balance',user.balance);
				$(".donate_text").html('<div class="ui-grid-solo"><div class="ui-block-a"><h1 class="donate_heading1">Thank You</h1><h4 class="donate_p1">For saving the earth.</h4></div></div>')
    $(".donate_text").css({"background-image":"url(img/thanks_bg.png)",
                          "background-size":"cover",
                          "background-position":"center"})

    },
    error: function(xhr, textStatus, errorThrown) {
				//toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
    
    //}
    }
}
 $(document).on('pageinit', '#page-forgot-password', function (event, ui) {

   localStorage.setItem("firsttime","Yes"); 
 
  $(document).on('tap', '#forgot_button', function (e, ui) {
	 e.preventDefault();
	 e.stopPropagation();
	 var mob = $('#forgot_mobile').val();
	 
	 if(mob==''){
		 toast('Please enter your mobile number');
	 }
	 else if(mob.length==10){
		 $.mobile.changePage("#myaccount");
		 $.ajax({
			url: SERVER+'forgot_pswd.asp',
			type: 'GET',
			timeout: 30000,
			data: {'mobileno': mob},
			success: function(data, textStatus, xhr) {
			 console.log(data);
			 console.log(textStatus);
			 if(data.toLowerCase()=='success'){
				 //startWatch();
				 console.log("In forgot_pswd.asp");
				 $('#login-msg').html('The  passcode has been sent to your mobile.Please check your SMS.');
			  
				  localStorage.setItem("SMSMNO",mob);
				 
			      $('#username').val(mob);
				  localStorage.setItem('usernameorchid',mob);
				 
				  $.mobile.changePage("#myaccount");
              }
			  else{
				 toast(mob+' is not registered, please try again.');
				 $('#forgot_mobile').val('');
			 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 $('#forgot-msg').html('Could not connect to Server, make sure you are connected to Internet');
				}
		});
  }else{
   toast('Please enter 10 digits mobile number');
  }
  
  
 })
 
});


$(document).on('pageinit', '#myaccount', function (event, ui) {

		//receivedEvent('deviceready');

		  
       
        $(document).on('tap', '#login_button', function (e, ui) {

			
		e.preventDefault();
		e.stopPropagation();
		
		authenticate();

	});
});

$(document).on('pageinit', '#slidepage', function (event, ui) {
         document.getElementById("slide1img").src=SERVER+'images/apps/splash1.jpg';
		 document.getElementById("slide2img").src=SERVER+'images/apps/splash2.jpg';
		// document.getElementById("slide3img").src=SERVER+'images/apps/splash3.jpg';
		
});

function setlocation(str)
{
  localStorage.setItem('selectedstore',str); 
  
  if(localStorage.getItem('selectedstore')=='jadhavgadh')
  document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Fort JadhavGADH - Pune!';
  else if(localStorage.getItem('selectedstore')=='mahodadhi')
  document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Mahodadhi Palace - Puri, Odisha!';
  else if(localStorage.getItem('selectedstore')=='mumbai')
  document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Mumbai!';
  else if(localStorage.getItem('selectedstore')=='pune')
  document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Pune!';
  else if(localStorage.getItem('selectedstore')=='vitsmumbai')
  document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to VITS Mumbai!';
  else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
  document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to VITS Bhubaneswar!';
  else if(localStorage.getItem('selectedstore')=='lotusgoa')
  document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Lotus Eco Beach Resort - Goa!';
  else if(localStorage.getItem('selectedstore')=='lotuskonark')
  document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Lotus Eco Beach Resort - Konark, Odisha!';
  else if(localStorage.getItem('selectedstore')=='shimla')
  document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Shimla!';


  $.mobile.changePage( "#homepage", { transition: "slide"} );
  $('#location_pop').popup('close');
}
function hideloader()
{
	try{
	var pop = document.getElementById('wait');
	if(pop.style.display=='block')
		pop.style.display = 'none';
    }catch(err){}
}

$(document).on('pageshow', '#homepage', function (event, ui) {
    hideloader();
    //alert(localStorage.getItem('selectedstore'));
    if(typeof localStorage.getItem('selectedstore')!=undefined && localStorage.getItem('selectedstore')!=null && localStorage.getItem('selectedstore')!='')
        { //do nothing
        }
        else
        {$('#location_pop').popup('open');}
    
});
$(document).on('pageinit', '#homepage', function (event, ui) {
        /* document.getElementById("home1img").src=SERVER+'images/apps/home1.jpg';
		 document.getElementById("home2img").src=SERVER+'images/apps/home2.jpg';
		 document.getElementById("home3img").src=SERVER+'images/apps/home3.jpg';*/
		// document.getElementById("barcontenthome").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
        
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname==''){
		document.getElementById("profilenm").innerHTML= 'Welcome Guest!';
		document.getElementById("profilenm1").innerHTML='Guest';
       if(typeof localStorage.getItem('selectedstore')!=undefined && localStorage.getItem('selectedstore')!=null && localStorage.getItem('selectedstore')!='')
       {
            if(localStorage.getItem('selectedstore')=='jadhavgadh')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Fort JadhavGADH - Pune!';
            else if(localStorage.getItem('selectedstore')=='mahodadhi')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Mahodadhi Palace - Puri, Odisha!';
            else if(localStorage.getItem('selectedstore')=='mumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to The Orchid Hotel - Mumbai!';
            else if(localStorage.getItem('selectedstore')=='pune')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to The Orchid Hotel - Pune!';
            else if(localStorage.getItem('selectedstore')=='vitsmumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to VITS Mumbai!';
            else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to VITS Bhubaneswar!';
            else if(localStorage.getItem('selectedstore')=='lotusgoa')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Lotus Eco Beach Resort - Goa!';
            else if(localStorage.getItem('selectedstore')=='lotuskonark')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Lotus Eco Beach Resort - Konark, Odisha!';
			else if(localStorage.getItem('selectedstore')=='shimla')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to The Orchid Hotel - Shimla!';
       }
	}else{
		document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
          if(typeof localStorage.getItem('selectedstore')!=undefined && localStorage.getItem('selectedstore')!=null && localStorage.getItem('selectedstore')!='')
       {
            if(localStorage.getItem('selectedstore')=='jadhavgadh')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Fort JadhavGADH - Pune!';
            else if(localStorage.getItem('selectedstore')=='mahodadhi')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Mahodadhi Palace - Puri, Odisha!';
            else if(localStorage.getItem('selectedstore')=='mumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Mumbai!';
            else if(localStorage.getItem('selectedstore')=='pune')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Pune!';
            else if(localStorage.getItem('selectedstore')=='vitsmumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to VITS Mumbai!';
            else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to VITS Bhubaneswar!';
            else if(localStorage.getItem('selectedstore')=='lotusgoa')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Lotus Eco Beach Resort - Goa!';
            else if(localStorage.getItem('selectedstore')=='lotuskonark')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Lotus Eco Beach Resort - Konark, Odisha!';
			else if(localStorage.getItem('selectedstore')=='shimla')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Shimla!';
       }
		document.getElementById("profilepts").innerHTML=user.balance+' Petals';
		document.getElementById("profilenm1").innerHTML=user.firstname;
		document.getElementById("profilepts1").innerHTML=user.balance+' Petals';
		if(parseInt(user.balance)<=2000){
			document.getElementById("category_img").src="img/Silver_icon.png";
		}
		else if(parseInt(user.balance)<=25000){
			document.getElementById("category_img").src="img/gold.png";
		}
		else{
			document.getElementById("category_img").src="img/platinum.png";
		}
	}
		//initApp();
});



function authenticate(){

  var uname = $('#username').val();
  var pwd = $('#password_myacc').val();
  var phno = localStorage.getItem("phno");
    console.log("uname:"+uname);
    console.log("pwd:"+pwd);
  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  $('#login-msg').html('Please enter Mobile Number /Passcode');
 }
 else{
  $.ajax({
   url: SERVER+'mloyallogin_json.asp', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'username': uname, 'password': pwd,'phonenos':phno},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   
	console.log("success"+JSON.stringify(data));
   if(data.status=='success'){
    user.balance = data.balance;
    user.firstname = data.firstname;
    user.id = data.id;
    user.lastname = data.lastname;
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	user.trans_sms = data.trans_sms;
	user.mktgsms = data.mktgsms;
	user.cpns = data.cpns;
    user.ads = data.ads;
    user.dob = data.dob;
    user.emailid = data.emailid;
	user.def_store = data.store;
	user.def_city = data.store_city;
	user.visit_frequency = data.visit_frequency;

	if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined')
		user.cpns='0';

	console.log("user.firstname:"+user.firstname);

	console.log("success:"+data.status);
    
    $('#username').val('');
    $('#password_myacc').val('');
  
   localStorage.setItem('usernameorchid',uname);
   localStorage.setItem('passwordorchid',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('trans_sms',user.trans_sms);
   localStorage.setItem('mktgsms',user.mktgsms);
   localStorage.setItem('cpns',user.cpns);
   localStorage.setItem('ads',user.ads);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);
   //localStorage.setItem('passworddd',pwd);

	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
	if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
	if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
	if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
	if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';

	$('#update_firstname').val(user.firstname);
	$('#update_lastname').val(user.lastname);
	    var dob = user.dob.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[0] : '';
		var yyyy = dob.length == 3 ? dob[2] : '';
		
		$('#update_dd').val(dd);
		$('#update_mm').val(mm);
		$('#update_yyyy').val(yyyy);

	$('#update_email').val(user.emailid);
	$('#update_dob').val(user.dob);
	$('#update_firstname1').val(user.firstname);
	$('#update_lastname1').val(user.lastname);
	
	$('#update_email1').val(user.emailid);
	$('#update_dob1').val(user.dob);

     //$('#push_reg_no').val(reg_id);
	
	


	
	document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
	document.getElementById("profilepts").innerHTML=user.balance+' Petals';
	document.getElementById("profilenm1").innerHTML=user.firstname;
    document.getElementById("profilepts1").innerHTML=user.balance+' petals';
	/*document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	document.getElementById("pr_valid").innerHTML=user.validity;*/
    var s1 = parseInt(user.balance);

			if(s1 >= 0 && s1 <= 2000)
			{
				$('a#admirer').css({
					'border-top':'4px solid #ffec6a',
					'padding-top':'10px',
					'color':'#FFFFFF'
				});
			}
			else if(s1 >= 2001 && s1 <= 25000)
			{
				$('a#lover').css({
					'border-top':'4px solid #ffec6a',
					'padding-top':'10px',
					'color':'#FFFFFF'
				});
			}
			else if(s1 >= 25001)
			{
				$('a#freak').css({
					'border-top':'4px solid #ffec6a',
					'padding-top':'10px',
					'color':'#FFFFFF'
				});
			}
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
    {
		 $.mobile.changePage( "#profilepage", { transition: "flip"} );
    }
    else
    {
	    if(localStorage.getItem("profiledone_orchid")){
			//document.getElementById("profilepts").innerHTML=user.balance;
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname==''){
		document.getElementById("profilenm").innerHTML= 'Welcome Guest!';
		document.getElementById("profilenm1").innerHTML='Guest';
          if(typeof localStorage.getItem('selectedstore')!=undefined && localStorage.getItem('selectedstore')!=null && localStorage.getItem('selectedstore')!='')
       {
            if(localStorage.getItem('selectedstore')=='jadhavgadh')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Fort JadhavGADH - Pune!';
            else if(localStorage.getItem('selectedstore')=='mahodadhi')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Mahodadhi Palace - Puri, Odisha!';
            else if(localStorage.getItem('selectedstore')=='mumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to The Orchid Hotel - Mumbai!';
            else if(localStorage.getItem('selectedstore')=='pune')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to The Orchid Hotel - Pune!';
            else if(localStorage.getItem('selectedstore')=='vitsmumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to VITS Mumbai!';
            else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to VITS Bhubaneswar!';
            else if(localStorage.getItem('selectedstore')=='lotusgoa')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Lotus Eco Beach Resort - Goa!';
            else if(localStorage.getItem('selectedstore')=='lotuskonark')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Lotus Eco Beach Resort - Konark, Odisha!';
			else if(localStorage.getItem('selectedstore')=='shimla')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to The Orchid Hotel - Shimla!';
       }
	}else{
		document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
          if(typeof localStorage.getItem('selectedstore')!=undefined && localStorage.getItem('selectedstore')!=null && localStorage.getItem('selectedstore')!='')
       {
            if(localStorage.getItem('selectedstore')=='jadhavgadh')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Fort JadhavGADH - Pune!';
            else if(localStorage.getItem('selectedstore')=='mahodadhi')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Mahodadhi Palace - Puri, Odisha!';
            else if(localStorage.getItem('selectedstore')=='mumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Mumbai!';
            else if(localStorage.getItem('selectedstore')=='pune')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Pune!';
            else if(localStorage.getItem('selectedstore')=='vitsmumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to VITS Mumbai!';
            else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to VITS Bhubaneswar!';
            else if(localStorage.getItem('selectedstore')=='lotusgoa')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Lotus Eco Beach Resort - Goa!';
            else if(localStorage.getItem('selectedstore')=='lotuskonark')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Lotus Eco Beach Resort - Konark, Odisha!';
			else if(localStorage.getItem('selectedstore')=='shimla')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Shimla!';
       }
		document.getElementById("profilepts").innerHTML=user.balance+' Petals';
		document.getElementById("profilenm1").innerHTML=user.firstname;
		document.getElementById("profilepts1").innerHTML=user.balance+' Petals';
		if(parseInt(user.balance)<=2000){
			document.getElementById("category_img").src="img/Silver_icon.png";
		}
		else if(parseInt(user.balance)<=25000){
			document.getElementById("category_img").src="img/gold.png";
		}
		else{
			document.getElementById("category_img").src="img/platinum.png";
		}
	}
		$.mobile.changePage( "#homepage", { transition: "flip"} );}
  else
      $.mobile.changePage( "#profilepage", { transition: "flip"} );
    }
   }else{
		 $('#login-msg').html('Authentication failed');
		  $.mobile.changePage( "#myaccount", { transition: "flip"} );
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernameorchid');
	pwd = localStorage.getItem('passwordorchid');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    user.trans_sms = localStorage.getItem('trans_sms');
    user.mktgsms = localStorage.getItem('mktgsms');
    user.cpns = localStorage.getItem('cpns');
    user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
    /*document.getElementById("pr_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	document.getElementById("pr_valid").innerHTML=user.validity;*/
	if(localStorage.getItem("imagedata")!=null)
	   {
		document.getElementById("cardImagemenu").src = localStorage.getItem("imagedata");
		//document.getElementById("cardImagepunch").src = localStorage.getItem("imagedata");
		
	   }
	if(localStorage.getItem("cardPic")==null || localStorage.getItem("cardPic")=='null' || localStorage.getItem("cardPic")=='undefined' )
	   {
		//document.getElementById("cardImage").src = 'img/person_img.png';
		//document.getElementById("cardImagepunch").src = 'img/person_img.png';
		
	   }
	else
	   {
		//document.getElementById("cardImage").src = 'http://graph.facebook.com/' + localStorage.getItem("cardPic") + '/picture?type=small';
		//document.getElementById("cardImagepunch").src = 'http://graph.facebook.com/' + localStorage.getItem("cardPic") + '/picture?type=small';
	   }
   
    }
  });
 }
}


$(document).on('pageinit', '#profilepage', function (event, ui) {

	    //console.log("in profilepage");
		
	
		$(document).on('tap', '#update_button', function (e, ui) {

			
		e.preventDefault();
		e.stopPropagation();
		var firstname = $('#update_firstname').val();
		var lastname = $('#update_lastname').val();
		var mobile = user.mobile;
		var email = $('#update_email').val();
		/*var birthday = $('#update_dob').val();
		var dob = birthday.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[2] : '';
		var yyyy = dob.length == 3 ? dob[0] : '';*/
		//var devid=$('#push_reg_no').val();
		var mm = $('#update_mm').val();
		var dd = $('#update_dd').val();
		var yyyy =$('#update_yyyy').val();
		

    
	$.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				FirstName: firstname,
				LastName: lastname,
				deviceid:reg_id,
				cname:'',
				Emailid: email,
				mobileno: mobile,
				dd: dd,
				mm: mm,
				yy: yyyy,
                deviceType:deviceType
				//subscribe: bc_hair
				
			},
			success: function(data, textStatus, xhr) {

				//console.log("Anoop"+url);
				
				localStorage.setItem("profiledone_orchid","Yes");
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						$('#update_response_msg').html('Your profile has been updated successfully.');
						user.firstname=firstname;
						user.lastname=lastname;
						user.emailid=email;
						user.dob=dd+"-"+mm+"-"+yyyy;

				}
				else if(data=='Failed')
					$('#update_response_msg').html('Update failed.');
				else
					$('#update_response_msg').html(data);
					

               
				
				
				//document.getElementById("profilepts").innerHTML=user.balance;
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname==''){
		document.getElementById("profilenm").innerHTML= 'Welcome Guest!';
		document.getElementById("profilenm1").innerHTML='Guest';
          if(typeof localStorage.getItem('selectedstore')!=undefined && localStorage.getItem('selectedstore')!=null && localStorage.getItem('selectedstore')!='')
       {
            if(localStorage.getItem('selectedstore')=='jadhavgadh')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Fort JadhavGADH - Pune!';
            else if(localStorage.getItem('selectedstore')=='mahodadhi')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Mahodadhi Palace - Puri, Odisha!';
            else if(localStorage.getItem('selectedstore')=='mumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to The Orchid Hotel - Mumbai!';
            else if(localStorage.getItem('selectedstore')=='pune')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to The Orchid Hotel - Pune!';
            else if(localStorage.getItem('selectedstore')=='vitsmumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to VITS Mumbai!';
            else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to VITS Bhubaneswar!';
            else if(localStorage.getItem('selectedstore')=='lotusgoa')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Lotus Eco Beach Resort - Goa!';
            else if(localStorage.getItem('selectedstore')=='lotuskonark')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Lotus Eco Beach Resort - Konark, Odisha!';
			else if(localStorage.getItem('selectedstore')=='shimla')
			document.getElementById("profilenm").innerHTML= 'Welcome Guest to The Orchid Hotel - Shimla!';
       }
	}else{
		document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
          if(typeof localStorage.getItem('selectedstore')!=undefined && localStorage.getItem('selectedstore')!=null && localStorage.getItem('selectedstore')!='')
       {
            if(localStorage.getItem('selectedstore')=='jadhavgadh')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Fort JadhavGADH - Pune!';
            else if(localStorage.getItem('selectedstore')=='mahodadhi')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Mahodadhi Palace - Puri, Odisha!';
            else if(localStorage.getItem('selectedstore')=='mumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Mumbai!';
            else if(localStorage.getItem('selectedstore')=='pune')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Pune!';
            else if(localStorage.getItem('selectedstore')=='vitsmumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to VITS Mumbai!';
            else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to VITS Bhubaneswar!';
            else if(localStorage.getItem('selectedstore')=='lotusgoa')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Lotus Eco Beach Resort - Goa!';
            else if(localStorage.getItem('selectedstore')=='lotuskonark')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Lotus Eco Beach Resort - Konark, Odisha!';
			else if(localStorage.getItem('selectedstore')=='shimla')
			document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Shimla!';
       }
		document.getElementById("profilepts").innerHTML=user.balance+' Petals';
		document.getElementById("profilenm1").innerHTML=user.firstname;
		document.getElementById("profilepts1").innerHTML=user.balance+' Petals';
		if(parseInt(user.balance)<=2000){
			document.getElementById("category_img").src="img/Silver_icon.png";
		}
		else if(parseInt(user.balance)<=25000){
			document.getElementById("category_img").src="img/gold.png";
		}
		else{
			document.getElementById("category_img").src="img/platinum.png";
		}
	}
				$.mobile.changePage( "#homepage", {transition: "flip"} );
		         
				
				
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
		
	});

	$(document).on('tap', '#fb_btn', function (e, ui) {
		e.preventDefault();
		e.stopPropagation();
		login();
		});
	
});
$(document).on('pageinit', '#profilepage_fb', function (event, ui) {

	    console.log("in profilepage");
	
		$(document).on('tap', '#update_button_fb', function (e, ui) {

			
		e.preventDefault();
		e.stopPropagation();
		var firstname = $('#update_firstname_fb').val();
		var lastname = $('#update_lastname_fb').val();
		var mobile = user.mobile;
		var email = $('#update_email_fb').val();
		var mm;
		var dd;
		var yyyy;
		if(user.dob!=null || user.dob !='null')
			{
		var birthday = $('#update_dob_fb1').val();
		var dob = birthday.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
			}
		else
			{
			mm = $('#update_mm1').val();
		    dd = $('#update_dd1').val();
		    yyyy =$('#update_yyyy1').val();
			}

    
	$.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				FirstName: firstname,
				LastName: lastname,
				deviceid:reg_id,
				cname:'',
				Emailid: email,
				mobileno: mobile,
				dd: dd,
				mm: mm,
				yy: yyyy,
                deviceType:deviceType
				//subscribe: bc_hair
				
			},
			success: function(data, textStatus, xhr) {

				console.log("Anoop"+data);
				
				 
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						$('#update_response_msg_fb').html('Your profile has been updated successfully.');
						user.firstname=firstname;
						user.lastname=lastname;
						user.emailid=email;
						user.dob=dd+"-"+mm+"-"+yyyy;

				}
				else if(data=='Failed')
					$('#update_response_msg_fb').html('Update failed.');
				else
					$('#update_response_msg_fb').html(data);
					


				
				
				
                
				
					//showHome();
					//document.getElementById("profilepts").innerHTML=user.balance;
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname==''){
		document.getElementById("profilenm").innerHTML= 'Welcome Guest!';
		document.getElementById("profilenm1").innerHTML='Guest';
          if(typeof localStorage.getItem('selectedstore')!=undefined && localStorage.getItem('selectedstore')!=null && localStorage.getItem('selectedstore')!='')
       {
            if(localStorage.getItem('selectedstore')=='jadhavgadh')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Fort JadhavGADH - Pune!';
            else if(localStorage.getItem('selectedstore')=='mahodadhi')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Mahodadhi Palace - Puri, Odisha!';
            else if(localStorage.getItem('selectedstore')=='mumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to The Orchid Hotel - Mumbai!';
            else if(localStorage.getItem('selectedstore')=='pune')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to The Orchid Hotel - Pune!';
            else if(localStorage.getItem('selectedstore')=='vitsmumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to VITS Mumbai!';
            else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to VITS Bhubaneswar!';
            else if(localStorage.getItem('selectedstore')=='lotusgoa')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Lotus Eco Beach Resort - Goa!';
            else if(localStorage.getItem('selectedstore')=='lotuskonark')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Lotus Eco Beach Resort - Konark, Odisha!';
			else if(localStorage.getItem('selectedstore')=='shimla')
			document.getElementById("profilenm").innerHTML= 'Welcome Guest to The Orchid Hotel - Shimla!';
       }
	}else{
		document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
          if(typeof localStorage.getItem('selectedstore')!=undefined && localStorage.getItem('selectedstore')!=null && localStorage.getItem('selectedstore')!='')
       {
            if(localStorage.getItem('selectedstore')=='jadhavgadh')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Fort JadhavGADH - Pune!';
            else if(localStorage.getItem('selectedstore')=='mahodadhi')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Mahodadhi Palace - Puri, Odisha!';
            else if(localStorage.getItem('selectedstore')=='mumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Mumbai!';
            else if(localStorage.getItem('selectedstore')=='pune')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Pune!';
            else if(localStorage.getItem('selectedstore')=='vitsmumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to VITS Mumbai!';
            else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to VITS Bhubaneswar!';
            else if(localStorage.getItem('selectedstore')=='lotusgoa')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Lotus Eco Beach Resort - Goa!';
            else if(localStorage.getItem('selectedstore')=='lotuskonark')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Lotus Eco Beach Resort - Konark, Odisha!';
			else if(localStorage.getItem('selectedstore')=='shimla')
			document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Shimla!';
       }
		document.getElementById("profilepts").innerHTML=user.balance+' Petals';
		document.getElementById("profilenm1").innerHTML=user.firstname;
		document.getElementById("profilepts1").innerHTML=user.balance+' Petals';
		if(parseInt(user.balance)<=2000){
			document.getElementById("category_img").src="img/Silver_icon.png";
		}
		else if(parseInt(user.balance)<=25000){
			document.getElementById("category_img").src="img/gold.png";
		}
		else{
			document.getElementById("category_img").src="img/platinum.png";
		}
	}
                $.mobile.changePage( "#homepage", {transition: "flip"} );
		        
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
		
	});
	if($('#update_firstname_fb').val()=='' || $('#update_firstname_fb').val()=='null' || $('#update_firstname_fb').val()==null || $('#update_firstname_fb').val()=='undefined')
	{
		        $('#update_firstname_fb').val(user.firstname);
	            $('#update_lastname_fb').val(user.lastname);
	
	            $('#update_email_fb').val(user.emailid);
				try{
				if(user.dob!=null || user.dob!='null' || user.dob==' ')
					{
					$('#updt_1').css('display','none');
	                $('#update_dob_fb1').val(user.dob);
                    $('#updt_2').css('display','block');
					}
					else
					{
					$('#updt_2').css('display','none');
	               // $('#update_dob_fb1').val(user.dob);
                    $('#updt_1').css('display','block');
					}
				}catch(err)
		        {
					txt="There was an error on this page.\n\n"; 
					txt+="Error description: " + err.message + "\n\n"; 
					alert(txt);
				}
	}
	});





$(document).on('pageinit', '#profile', function (event, ui) {

	    //console.log("in profilepage");
		
	
		$(document).on('tap', '#update_button1', function (e, ui) {

			
		e.preventDefault();
		e.stopPropagation();
		var firstname = $('#update_firstname1').val();
		var lastname = $('#update_lastname1').val();
		var mobile = user.mobile;
		var email = $('#update_email1').val();
		var birthday = $('#update_dob1').val();
		var dob = birthday.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[2] : '';
		var yyyy = dob.length == 3 ? dob[0] : '';
		//var devid=$('#push_reg_no').val();
		

		
    
	$.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				FirstName: firstname,
				LastName: lastname,
				deviceid:reg_id,
				cname:'',
				Emailid: email,
				mobileno: mobile,
				dd: dd,
				mm: mm,
				yy: yyyy,
                deviceType:deviceType
				//subscribe: bc_hair
				
			},
			success: function(data, textStatus, xhr) {

				//console.log("Anoop"+url);
				
				
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						$('#update_response_msg1').html('Your profile has been updated successfully.');
						user.firstname=firstname;
						user.lastname=lastname;
						user.emailid=email;
						//user.dob=mm+"-"+dd+"-"yyyy;

				}
				else if(data=='Failed')
					$('#update_response_msg1').html('Update failed.');
				else
					$('#update_response_msg1').html(data);
					


				//document.getElementById("profilepts").innerHTML=user.balance;
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname==''){
		document.getElementById("profilenm").innerHTML= 'Welcome Guest!';
		document.getElementById("profilenm1").innerHTML='Guest';
          if(typeof localStorage.getItem('selectedstore')!=undefined && localStorage.getItem('selectedstore')!=null && localStorage.getItem('selectedstore')!='')
       {
            if(localStorage.getItem('selectedstore')=='jadhavgadh')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Fort JadhavGADH - Pune!';
            else if(localStorage.getItem('selectedstore')=='mahodadhi')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Mahodadhi Palace - Puri, Odisha!';
            else if(localStorage.getItem('selectedstore')=='mumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to The Orchid Hotel - Mumbai!';
            else if(localStorage.getItem('selectedstore')=='pune')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to The Orchid Hotel - Pune!';
            else if(localStorage.getItem('selectedstore')=='vitsmumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to VITS Mumbai!';
            else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to VITS Bhubaneswar!';
            else if(localStorage.getItem('selectedstore')=='lotusgoa')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Lotus Eco Beach Resort - Goa!';
            else if(localStorage.getItem('selectedstore')=='lotuskonark')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Lotus Eco Beach Resort - Konark, Odisha!';
			else if(localStorage.getItem('selectedstore')=='shimla')
			document.getElementById("profilenm").innerHTML= 'Welcome Guest to The Orchid Hotel - Shimla!';
       }
	}else{
		document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
          if(typeof localStorage.getItem('selectedstore')!=undefined && localStorage.getItem('selectedstore')!=null && localStorage.getItem('selectedstore')!='')
       {
            if(localStorage.getItem('selectedstore')=='jadhavgadh')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Fort JadhavGADH - Pune!';
            else if(localStorage.getItem('selectedstore')=='mahodadhi')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Mahodadhi Palace - Puri, Odisha!';
            else if(localStorage.getItem('selectedstore')=='mumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Mumbai!';
            else if(localStorage.getItem('selectedstore')=='pune')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Pune!';
            else if(localStorage.getItem('selectedstore')=='vitsmumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to VITS Mumbai!';
            else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to VITS Bhubaneswar!';
            else if(localStorage.getItem('selectedstore')=='lotusgoa')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Lotus Eco Beach Resort - Goa!';
            else if(localStorage.getItem('selectedstore')=='lotuskonark')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Lotus Eco Beach Resort - Konark, Odisha!';
			else if(localStorage.getItem('selectedstore')=='shimla')
			document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Shimla!';
       }
		document.getElementById("profilepts").innerHTML=user.balance+' Petals';
		document.getElementById("profilenm1").innerHTML=user.firstname;
		document.getElementById("profilepts1").innerHTML=user.balance+' Petals';
		if(parseInt(user.balance)<=2000){
			document.getElementById("category_img").src="img/Silver_icon.png";
		}
		else if(parseInt(user.balance)<=25000){
			document.getElementById("category_img").src="img/gold.png";
		}
		else{
			document.getElementById("category_img").src="img/platinum.png";
		}
	}
				$.mobile.changePage( "#homepage", {transition: "flip"} );
               
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
	});
	});


function aboutprg(){
	
			if(parseInt(user.balance)>=0 && parseInt(user.balance)<=2000)
            {
               document.getElementById('cardclass').innerHTML = 'Silver Member';
               document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';
		       document.getElementById('silverslab').className = 'active';
            }
            else if(parseInt(user.balance)>=2001 && parseInt(user.balance)<=25000)
            {
               document.getElementById('silverslab').className = '';
               document.getElementById('cardclass').innerHTML = 'Gold Member';
		       document.getElementById('platinumslab').className = '';
		       document.getElementById('goldslab').className = 'active';
			   console.log("in about");
            }
            else if(parseInt(user.balance)>=25001)
            {
               document.getElementById('silverslab').className = '';
               document.getElementById('goldslab').className = '';
		       document.getElementById('cardclass').className = 'Platinum Member';
		       document.getElementById('platinumslab').className = 'active'; 
            }
			console.log("out about");
	    $("#navBdr").css('display', 'none');
        $("#navBdr_about").css('display', 'block');
        $("#navBdr_coupon").css('display', 'none');
        $("#navBdr_points").css('display', 'none');

		$("#MESSAGES").css('display', 'none');
		$("#ABOUT").css('display', 'block');
		$("#COUPONS").css('display', 'none');
		$("#POINTS").css('display', 'none');
		renderTemplatedetail('aboutus');
		//document.getElementById("barcontentplist").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span></a>';
        
        $.mobile.changePage( "#mloyalpg", {transition: "flip"} );
  }   

function showInbox(){
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	//document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	//document.getElementById("headername").innerHTML='Messages';
	//var main = document.getElementById("cardcontent");
	//main.style.display = 'none';
	$("#navBdr").css('display', 'block');
    $("#navBdr_about").css('display', 'none');
    $("#navBdr_coupon").css('display', 'none');
    $("#navBdr_points").css('display', 'none');

	$("#MESSAGES").css('display', 'block');
    $("#ABOUT").css('display', 'none');
    $("#COUPONS").css('display', 'none');
    $("#POINTS").css('display', 'none');
   
	$.mobile.changePage( "#mloyalpg", { transition: "none"} ); 
	showTabContent('inbox', 'msg_history_json.asp');
	}
}
function showLoyalty(){
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	/*document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	document.getElementById("headername").innerHTML='Points';
	 var main = document.getElementById("cardcontent");
	main.style.display = 'none';*/
	$("#navBdr").css('display', 'none');
    $("#navBdr_about").css('display', 'none');
    $("#navBdr_coupon").css('display', 'none');
    $("#navBdr_points").css('display', 'block');

	$("#MESSAGES").css('display', 'none');
    $("#ABOUT").css('display', 'none');
    $("#COUPONS").css('display', 'none');
    $("#POINTS").css('display', 'block');
    
	$.mobile.changePage( "#mloyalpg", { transition: "none"} ); 
	showTabContent('loyalty', 'points_history_json.asp');
	}
}
function showCoupons(){
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	document.getElementById("headername").innerHTML='Coupons';
	
	 var main = document.getElementById("cardcontent");
	 main.style.display = 'none';
	 $("#navBdr").css('display', 'none');
    $("#navBdr_about").css('display', 'none');
    $("#navBdr_coupon").css('display', 'block');
    $("#navBdr_points").css('display', 'none');

	$("#MESSAGES").css('display', 'none');
    $("#ABOUT").css('display', 'none');
    $("#COUPONS").css('display', 'block');
    $("#POINTS").css('display', 'none');
   
	$.mobile.changePage( "#mloyalpg", { transition: "none"} ); 
	showTabContent('coupons', 'cpns_history_json.asp');
	}
}
function showRewards(){
	 
	openInWebView('https://orchid.mloyalretail.com/microsite/');
	//RewardsNA();
	/*
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	 document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn_star.png" class="mem_acc_icon_rewardstore"></span><span><a href="javascript:showcategories();"><img src="img/menu_icon.png" class="rewardstore_menu"></a></span>';
     document.getElementById("headername").innerHTML='Rewardstore';
	 var main = document.getElementById("cardcontent");
	 main.style.display = 'none';
	$.mobile.changePage( "#page-card", { transition: "none"} ); 
	showTabContent('rewardstore', 'coupons_json.asp');
	
	$("a[data-role='button']").button();
	}*/
}
function showcategories(){

    $.mobile.changePage( "#reward-cat", { transition: "none"} ); 
	showTabContent('reward-cat', 'categories_json.asp');
}
function showcatbrands(catid){
    $.mobile.changePage( "#reward-brand", { transition: "none"} ); 
	showTabContent('reward-brand', 'coupons_json.asp?cat_id='+catid);
}
function viewcart(){
	var main = document.getElementById("cardcontent");
	main.style.display = 'none';
	$.mobile.changePage( "#page-card", { transition: "none"} ); 
	  renderTemplate('viewcart',cart);
	  $("a[data-role='button']").button();

	 
}

function showSpecial(){
	
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
   
	else
	{
	//document.getElementById("barcontentspecials").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	$.mobile.changePage( "#specials", { transition: "none"} );
	//document.getElementById("left-panel").panel( "close" );
	try{
	$( "#left-panel" ).panel( "close" );
	}catch(err) 
	{	}
	
	showTabContent('specials', 'specials_json.asp');
	}
	
}


function showStores(){
	
	
	//document.getElementById("barcontentstores").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><a href="javascript:getNearStores();"><span class="myacc">Find Nearby</span></a>';
	
	$.mobile.changePage( "#stores", { transition: "none"} );
	
	 showTabContent('citylist', 'city_locator_json.asp');
	
	

}

function showFacilities(){
    if(localStorage.getItem('selectedstore')=='jadhavgadh')
  document.getElementById("facilitieslocation").innerHTML= 'Facilities<br/>Fort JadhavGADH - Pune';
  else if(localStorage.getItem('selectedstore')=='mahodadhi')
  {
  //toast('Coming Soon');
  document.getElementById("facilitieslocation").innerHTML= 'Facilities<br/>Mahodadhi Palace - Puri, Odisha';
  }
  else if(localStorage.getItem('selectedstore')=='mumbai')
  document.getElementById("facilitieslocation").innerHTML= 'Facilities<br/>The Orchid Hotel - Mumbai';
  else if(localStorage.getItem('selectedstore')=='pune')
  document.getElementById("facilitieslocation").innerHTML= 'Facilities<br/>The Orchid Hotel - Pune';
  else if(localStorage.getItem('selectedstore')=='vitsmumbai')
  document.getElementById("facilitieslocation").innerHTML= 'Facilities<br/>VITS Mumbai';
  else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
  document.getElementById("facilitieslocation").innerHTML= 'Facilities<br/>VITS Bhubaneswar!';
  else if(localStorage.getItem('selectedstore')=='lotusgoa')
  document.getElementById("facilitieslocation").innerHTML= 'Facilities<br/>Lotus Eco Beach Resort - Goa!';
  else if(localStorage.getItem('selectedstore')=='lotuskonark')
  document.getElementById("facilitieslocation").innerHTML= 'Facilities<br/>Lotus Eco Beach Resort - Konark, Odisha!';
  else if(localStorage.getItem('selectedstore')=='shimla')
  document.getElementById("facilitieslocation").innerHTML= 'Facilities<br/>The Orchid Hotel - Shimla!';

	 $.ajax({
			url: 'https://taghash.co/orchid/facilitiesmain.php',
			type: 'GET',
			timeout: 30000,
			data: {'loc' : localStorage.getItem('selectedstore')},
			success: function(data, textStatus, xhr) {
			 console.log(data);
			 console.log(textStatus);
			 document.getElementById('facilitiescontent').innerHTML=data;
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 $('#forgot-msg').html('Could not connect to Server, make sure you are connected to Internet');
				}
		});
	
	//document.getElementById("barcontentstores").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><a href="javascript:getNearStores();"><span class="myacc">Find Nearby</span></a>';
	
	$.mobile.changePage( "#facilities", { transition: "none"} );
	
	// showTabContent('citylist', 'city_locator_json.asp');
	
	

}
function showBanquets(){
    if(localStorage.getItem('selectedstore')=='jadhavgadh')
  document.getElementById("banquetlocation").innerHTML= 'Banquets<br/>Fort JadhavGADH - Pune';
  else if(localStorage.getItem('selectedstore')=='mahodadhi')
  {
  //toast('Coming Soon');
  document.getElementById("banquetlocation").innerHTML= 'Banquets<br/>Mahodadhi Palace - Puri, Odisha';
  }
  else if(localStorage.getItem('selectedstore')=='mumbai')
  document.getElementById("banquetlocation").innerHTML= 'Banquets<br/>The Orchid Hotel - Mumbai';
  else if(localStorage.getItem('selectedstore')=='pune')
  document.getElementById("banquetlocation").innerHTML= 'Banquets<br/>The Orchid Hotel - Pune';
  else if(localStorage.getItem('selectedstore')=='vitsmumbai')
  document.getElementById("banquetlocation").innerHTML= 'Banquets<br/>VITS Mumbai';
  else if(localStorage.getItem('selectedstore')=='lotusgoa' )
  {
  //toast('No Banquets found');
  document.getElementById("banquetlocation").innerHTML= 'Banquets<br/>Lotus Eco Beach Resort - Goa!';
  }
  else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
  document.getElementById("banquetlocation").innerHTML= 'Banquets<br/>VITS Bhubaneswar!';
  else if(localStorage.getItem('selectedstore')=='lotuskonark')
  document.getElementById("banquetlocation").innerHTML= 'Banquets<br/>Lotus Eco Beach Resort - Konark, Odisha!';
  else if(localStorage.getItem('selectedstore')=='shimla')
  document.getElementById("banquetlocation").innerHTML= 'Banquets<br/>The Orchid Hotel - Shimla!';

	 $.ajax({
			url: 'https://taghash.co/orchid/banquetmain.php',
			type: 'GET',
			timeout: 30000,
			data: {'loc' : localStorage.getItem('selectedstore')},
			success: function(data, textStatus, xhr) {
			 console.log(data);
			 console.log(textStatus);
			 document.getElementById('banquetcontent').innerHTML=data;
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 $('#forgot-msg').html('Could not connect to Server, make sure you are connected to Internet');
				}
		});
	
	//document.getElementById("barcontentstores").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><a href="javascript:getNearStores();"><span class="myacc">Find Nearby</span></a>';
	
	$.mobile.changePage( "#banquets", { transition: "none"} );
	
	// showTabContent('citylist', 'city_locator_json.asp');
	
	

}

function showitemdetail(str,city,str1){
	 $.ajax({
			url: 'https://taghash.co/orchid/banquetdetail.php',
			type: 'GET',
			timeout: 30000,
			data: {'str' : str,'loc' : city},
			success: function(data, textStatus, xhr) {                
			 console.log(data);
			 console.log(textStatus);
             if(str1=='banquets')
             {
			    document.getElementById('banquetdetailcontent').innerHTML=data;
             }
             else if(str1=='restuarant')
             {
                document.getElementById('detailscontent').innerHTML=data;
             }
			 },
			error: function(xhr, textStatus, errorThrown) {
				 $('#forgot-msg').html('Could not connect to Server, make sure you are connected to Internet');
				}
		});
	
	//document.getElementById("barcontentstores").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><a href="javascript:getNearStores();"><span class="myacc">Find Nearby</span></a>';
	if(str1=='banquets')
    {
	$.mobile.changePage( "#b_details1", { transition: "none"} );
    setTimeout(function(){   
        //console.log("1254");    
            $("#slider").excoloSlider({
				prevnextNav:false,
				autoPlay:true,
				interval:3000,
                pagerNav:false
				});
            }, 200)
    }
	else if(str1=='restuarant')
    {
    document.getElementById("detailsheader").innerHTML=str;
	$.mobile.changePage( "#details1", { transition: "none"} ); 
    setTimeout(function(){   
        //console.log("1254");    
            $("#slider").excoloSlider({
				prevnextNav:false,
				autoPlay:true,
				interval:3000,
                pagerNav:false
				});
            }, 200)
    }
	// showTabContent('citylist', 'city_locator_json.asp');
	
	

}
function showrestuarants()
{
     
  if(localStorage.getItem('selectedstore')=='jadhavgadh')
  document.getElementById("restuarantlocation").innerHTML= 'Restaurants<br/>Fort JadhavGADH - Pune';
  else if(localStorage.getItem('selectedstore')=='mahodadhi')
  {
  document.getElementById("restuarantlocation").innerHTML= 'Restaurants<br/>Mahodadhi Palace - Puri, Odisha';
  //toast('Coming Soon');
  }
  else if(localStorage.getItem('selectedstore')=='mumbai')
  document.getElementById("restuarantlocation").innerHTML= 'Restaurants<br/>The Orchid Hotel - Mumbai';
  else if(localStorage.getItem('selectedstore')=='pune')
  document.getElementById("restuarantlocation").innerHTML= 'Restaurants<br/>The Orchid Hotel - Pune';
  else if(localStorage.getItem('selectedstore')=='vitsmumbai')
  document.getElementById("restuarantlocation").innerHTML= 'Restaurants<br/>VITS Mumbai';
  else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
  document.getElementById("restuarantlocation").innerHTML= 'Restaurants<br/>VITS Bhubaneswar!';
  else if(localStorage.getItem('selectedstore')=='lotusgoa')
  document.getElementById("restuarantlocation").innerHTML= 'Restaurants<br/>Lotus Eco Beach Resort - Goa!';
  else if(localStorage.getItem('selectedstore')=='lotuskonark')
  document.getElementById("restuarantlocation").innerHTML= 'Restaurants<br/>Lotus Eco Beach Resort - Konark, Odisha!';
  else if(localStorage.getItem('selectedstore')=='shimla')
  document.getElementById("restuarantlocation").innerHTML= 'Restaurants<br/>The Orchid Hotel - Shimla!';

	 $.ajax({
			url: 'https://taghash.co/orchid/restuarantmain.php',
			type: 'GET',
			timeout: 30000,
			data: {'loc' : localStorage.getItem('selectedstore')},
			success: function(data, textStatus, xhr) {
			 console.log(data);
			 console.log(textStatus);
			 document.getElementById('restaurant').innerHTML=data;
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 $('#forgot-msg').html('Could not connect to Server, make sure you are connected to Internet');
				}
		});
	
	//document.getElementById("barcontentstores").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><a href="javascript:getNearStores();"><span class="myacc">Find Nearby</span></a>';
	
	$.mobile.changePage( "#stores", { transition: "none"} );
	
	// showTabContent('citylist', 'city_locator_json.asp');
	
	

}
function showEcotel(){
	var donatestr = '<div class="ui-grid-a"><div class="ui-block-a">';
    donatestr += '<h1 class="donate_heading">Donate Petals</h1>';
    donatestr += '<h4 class="donate_p">For every <span>100 petals</span> you donate, we will plant a sapling.</h4>';
    donatestr += '<a href="#" onclick="javascript:donate();" class="donate_btn"><img src="img/donate_btn.png" alt="donate Button"/></a>';
    donatestr += '</div><div class="ui-block-b"></div></div>';
	// document.getElementById("donate_text").innerHTML=donatestr;
    $(".donate_text").html(donatestr);                 
                      
	$.mobile.changePage( "#ecotels", { transition: "none"} );
	
	

}

function getCityId(id)
{
       city_id=id;
	   
	   $.mobile.changePage( "#stores", { transition: "none"} );
	  showTabContent('centre', 'store_locator_json.asp?city='+city_id);
	  
      
}


function showTabContent_Map(addr,ind) {
var url="http://delhidaredevilsadda.com/latlong.php";
 console.log(url+'&addr='+addr);
	$.getJSON(
		url, {
		//page: url,
		addr : addr
	}, function (json) {
       console.log("SSSS"+JSON.stringify(json));
	  
	    
		var lat,lng;
		try
		{
		lat=json.results[0].geometry.location.lat;
		lng=json.results[0].geometry.location.lng;	
		}
		catch (err)
		{
			lat="";
			lng="";
		}
        
		
		if(lat !="" && lng !="")
			{
			 drawMap(new google.maps.LatLng(lat, lng),ind);
			//openInWebView('http://maps.google.com/maps/api/staticmap?center='+lat+','+lng+'&zoom=14&amp;size=304x250&scale=2&amp;sensor=false&markers=color:green|'+lat+','+lng+'&key=AIzaSyCAAjJ5FAg8NmaZ9594yQXq-t1HzcgYocs&size=279x183');
			}
			else
			{
				alert("Location could not be traced");
			}
	}).error(function () {
		alert("Error: Could not connect to Server, make sure you are connected to Network");
	});
}

   function drawMap(latlng,index) {
	   
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
			alert(index);

			var bounds = new google.maps.LatLngBounds();
        var map = new google.maps.Map(document.getElementById(index), myOptions);
        // Add an overlay to the map of current lat/lng
        var pinColor = "FE7569";
        var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                new google.maps.Size(21, 34),
                new google.maps.Point(0, 0),
                new google.maps.Point(10, 34));
        var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                new google.maps.Size(40, 37),
                new google.maps.Point(0, 0),
                new google.maps.Point(12, 35));



        bounds.extend(latlng);
        var markercurr = new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Current Position!!!',
            icon: pinImage,
            shadow: pinShadow

        });
        map.fitBounds(bounds);
    }



function showTabContent_Map1(addr) {
var url="http://maps.googleapis.com/maps/api/geocode/json";
	$.getJSON(
		url, {
		//page: url,
		latlng : addr,
		sensor : 'false'
	}, function (json) {
       //console.log("SSSS"+JSON.stringify(json.results[0].address_components[3]));
		
		for(var i=0;i<json.results[0].address_components.length;i++)
		{
		console.log("SSSS"+JSON.stringify(json.results[0].address_components[i].types[0]));
		if(json.results[0].address_components[i].types[0]=='locality')
			{
        var cityname= json.results[0].address_components[i].long_name;
        if(cityarr.indexOf(cityname))
				{
			  var j = cityarr.indexOf(cityname);
			  getCityId(cityidarr[j]);
				}
			}
		}
		
		
		
		
	}).error(function () {
		alert("Error: Could not connect to Server, make sure you are connected to Network");
	});
}

function showTabContent(id, url) {
console.log("url"+url);
var tabserver='';
if(id=='rewardstore' || id=='reward-cat' || id=='reward-brand')
	{
	tabserver = "https://orchid.mloyalretail.com/Rewards/";
	}
else
	{
	
	tabserver = "https://orchid.mloyalretail.com/m/";

	}
	$.getJSON(
		tabserver+url, {
		//page: url,
		mno : user.mobile
	}, function (json) {
       console.log("SSSS"+JSON.stringify(json));
			
		renderTemplate(id, json);
	}).error(function () {
		alert("Error: Could not connect to Server, make sure you are connected to Network");
	});
}

function openInWebView(url)
	{
	
          var ref = window.open(url, '_blank', 'location=yes,toolbar=yes');



	}

function showlocationpop()
{
    try{
	$( "#sidebar" ).panel( "close" );
	}catch(err) 
	{	}
    try{
	$( "#location_pop" ).popup( "open" );
	}catch(err) 
	{	}

}

function renderTemplate(pageID, json) {
	var str = '';
	var str1 = '';
	var oth = document.getElementById("othercontent");
    var main = document.getElementById("cardcontent");

	console.log('pageID'+pageID);
	switch (pageID) {
	case 'loyalty':
				
		str += '<br/><div class="pts"><span>' + json.balance + '</span></div>';   
        str += '<p class="tpts">Total Petals</p>';
        str += '<a href="javascript:purchaseHistory();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="img/earned-points.png" alt="img" class="eIcon"><span>Earned Petals :' + json.earnpoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></a>';
        str += '<a href="javascript:redeemHistory();" id="ptsRedeem" class="ui-btn ui-corner-all"><img src="img/redeemed-points.png" alt="img" class="rIcon"><span>Redeemed Petals :' + json.burnpoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></span></a>';
		str += '<a href="javascript:bonusHistory();" id="ptsBonus" class="ui-btn ui-corner-all"><img src="img/earned-points.png" alt="img" class="rIcon"><span>Bonus Petals :' + json.bonuspoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></span></a>';
	
		//str += '<a href="#" id="ptsEarn1" class="ui-btn ui-corner-all"><img src="img/earned-points.png" alt="img" class="eIconT"><span class="ernPt1">Earned Petals :' + json.earnpoints + '</span><span class="rdmPt1">Redeemed Points :' + json.burnpoints + '</span><span class="purchaseBtnTxt1">My Purchase History</span></a>';
		
		
		
		str += '<div id="purchaseHistory" style="display:none;">';
		str+='<hr><span class="phist">Purchase History</span><hr>';
		for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">EARNED PETALS <span class="ptsRed">'+json.data[i].earn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].earn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';
		
		
		str += '<div id="redeemHistory" style="display:none;">';
		str+='<hr><span class="phist">Redeem History</span><hr>';
        for(var i=0;i<json.redeem.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
		    str +='<caption><span style="float:left;">REDEEM PETALS <span class="ptsRed">'+json.redeem[i].redeempoints+'</span></span>  <span class="cap_date">'+json.redeem[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.redeem[i].redeempoints+'</td><td>'+json.redeem[i].billnumber+'</td></tr>';
			str +='</tbody></table><br/>';
		}
	    str +='</div>';


		str += '<div id="bonusHistory" style="display:none;">';
		str+='<hr><span class="phist">Bonus History</span><hr>';
		for(var i=0;i<json.bonus.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">BONUS PETALS <span class="ptsRed">'+json.bonus[i].bonuspoints+'</span></span>  <span class="cap_date">'+json.bonus[i].createdon+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.bonus[i].bonuspoints+'</td><td>'+json.bonus[i].flag+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';

        document.getElementById("POINTS").innerHTML=str;   
		
		
		break;
	case 'specials':
		console.log(JSON.stringify(json));
		
		
        
		//str = '<div class="subheading_t" style="font-size:14px;"><div class="submenu_button_right" ><a href="#coupons"><div class="couponbx"><span class="age_4">5 Coupons</span></div><img src="img/sci_coupons.png"/></div></a></div><br/><br/>';
		for (var i=0;i<json.length;i++ )
		{
		
			console.log('Video:'+json[i].AdVideoURL);

			if(json[i].AdVideoURL=='' || json[i].AdVideoURL==null  || json[i].AdVideoURL=='null')
			{
			   str += '<div class="specials7"><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p><img src='+SERVER+json[i].AdImgURL+'  style="width: 90%;  height: auto;  padding: 5px;  text-align: center;margin: 0 auto;display: block;"></img><br><hr/></div></div>';
		 
			}
			else
			{
				 console.log('Img:'+json[i].AdVideoURL);
				str += '<div class="specials7"><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p><video width="320" height="240" controls="controls" poster='+SERVER+json[i].AdImgURL+' onClick=this.play();><source src='+SERVER+json[i].AdVideoURL+'  this.play();/></video><br/><hr/></div></div>';
			}
		}

        
		document.getElementById("spec").innerHTML=str;  
		
		break;
	case 'coupons':
		str = '';


        if (json.data.length == 0) 
		 {
                str = 'No Coupons Found';
         }
		else
		 {
		   for(var i=0;i<json.data.length;i++)
		{
        str += '<div>';
        if(json.data[i].couponstatus == 'Active')
        {
        str += '<div class="coupon active">';
        }
        else
        {
        str += '<div class="coupon inactive">';
        }
        str += '<h2 class="coupon_code">'+json.data[i].couponcode+'</h2>';
        str += '<h3 class="validity">Valid Till : <span>'+json.data[i].validtill+'</span></h3>';
        str += '<h3 class="coupon_no">Coupon Detail : '+json.data[i].offername+'</h3>';
        str += '<a href="#">T&amp;C* </a>';
        str += '<div class="qr_code"><img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+json.data[i].couponcode+'&choe=UTF-8" style="padding:10px;"/></div>';
        str += '<div class="coupon_state "></div>';
        str += '</div></div>';
		/*str += '<div class="ui-grid-a">';
        str += '<div class="ui-block-a" style="width:15%;"><img src="img/couponsp.png" class="msgImg"/></div>';
        str += '<div class="ui-block-b" style="width:85%;">';
        str += '<div class="MsgBlk"><a href="#headline" style="text-decoration:none;">';
        str += '<span class="MsgBdr"><span class="msghdr">DM-MKRETL</span>'; 
        str += '<span class="msgTxt"><div class="coupon-box"><div class="coupon-box-scissor"></div><div><span class="bold">Coupon Code : '+json.data[i].couponcode+'</span> | <span class="red">'+json.data[i].couponstatus+'</span></div><div>Coupon Details: '+json.data[i].offername+'</div>	<div class="coupon-box-date">[ Issued On: '+json.data[i].issueddate+' | Valid till: '+json.data[i].validtill+']</div></div></span>';
        str += '</span></a></div></div></div>';*/
		}
		}
		//str += '</ul>';
		document.getElementById("COUPONS").innerHTML=str;
		break;
	case 'inbox':
		
		console.log('json'+JSON.stringify(json));
		
		 str +=' <ul data-role="listview" data-inset="true" id="MsgUl">';
		 for(var i=0;i<json.length;i++ )
		{
		str += '<li data-icon="false">';
        str += '<div class="ui-grid-a"><div class="ui-block-a" style="width:15%;">';
		str += '<img src="img/open.png" class="msgImg"/>';
        str += '</div><div class="ui-block-b" style="width:85%;">';
        str += '<div class="MsgBlk"><span class="MsgBdr">';
        str += '<span class="msghdr">DM-Orchid</span><span class="msgTime">'+json[i].msgtime+'</span>';
		str += '<span class="msgDate">' + json[i].msgdate + '</span>';
        str += '<span class="msgTxt">'+json[i].msg+'</span>';
        str += '</span></div></div></div></li>';
	
		}
		
		str +='</ul>';
		document.getElementById("MESSAGES").innerHTML=str;
		break;

	

		case 'centre':
   //console.log('inside centre');
      console.log('json'+JSON.stringify(json));
  
  str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator_sub" id="ul_locator_sub">';
  for (var i=0;i<json.length;i++ )
  {
   var storecontact=json[i].storephone;
   var custcare=json[i].CustomerCare;
   if(storecontact==null)
    storecontact='';
   if(custcare==null)
    custcare='';

   if(json[i].storename.indexOf('Email Admin')==0 || json[i].storename.indexOf('Online')==0)
   continue;
   
  
      str += '<li data-icon="false" style="margin-top: 5px;margin-bottom: 5px;">'+json[i].storename+','+json[i].storelocation+'<br/><span class="callout1">'+json[i].storeaddress+'</span><br/><br/>';
   if(storecontact!='')
   {
   str += '<a href="tel:'+storecontact+'\'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external" style="background: #ffffff; border: #ffffff; color: #999;font-weight: normal;  font-size: 13px;">'+storecontact+'</a>';
   }
  if(custcare!='')
   {
   str +='<a href="tel:'+custcare+'\'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external" style="background: #ffffff; border: #ffffff; color: #999;font-weight: normal;  font-size: 13px;">'+json[i].CustomerCare+'</a>';
   }
  //str +='<div  id=map-canvas'+i+' style="height:300px;width:400px;"></li>';
  str +='</li>';



  
  
  //alert(str);
  //str += '<li data-icon="false" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;">'+json[i].storename+','+json[i].storelocation+'<br/><span class="callout1">'+json[i].storeaddress+'</span><br/><br/><a href="tel:'+json[i].storephone+'\'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a><a href="javascript:showTabContent_Map(\''+json[i].storeaddress+'\');" data-role="button" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></li>';
        //str += '<li data-icon="false"><span class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</span><br/><span class="callout1">'+json[i].storeaddress+'</span><br/><div class="ui-grid-a"><div class="ui-block-a"><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a></div><div class="ui-block-b"><a href="#" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></div></div></li>';
  //str += '<div class="center-box"><div class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</div><div class="callout1">'+json[i].storeaddress+'<br/><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" data-role="button" rel="external">'+json[i].storephone+'</a></div></div>';
  
  }
  //str +='<div  id=map-canvas'+i+' style="height:250px;width:250px;">';
  str += '</ul>';
  
  document.getElementById("stor").innerHTML=str;
  /*for (var i=0;i<json.length;i++ )
  {
   if(json[i].storename.indexOf('Email Admin')==0)
   continue;
   
      showTabContent_Map(json[i].storeaddress,i);
  }*/
   $('#ul_locator_sub').listview();
  break;
		
	case 'defstore':
		//console.log('inside default store'+user.def_store);
	     console.log('json'+JSON.stringify(json));
		//str +='<div  style="text-align:center;width:100%;"><img src="img/c-logo.png" width="137" height="44" /></div>';
		str += '<h2 align="center" style=\"color:#ff0000;font-size:14px;font-weight:normal;\">Default Store : '+user.def_store+'</h2>';
		str += '<a href="#citylist" data-role="button" data-theme="reset" class="ios">View All Stores</a>';
		str += '<h3 align="center" style=\"color:#ff0000;font-size:14px;font-weight:normal;\">Other Stores in your city</h3><h3></h3>';
		//$("#" + pageID + " .ui-content").html(str);
		$("#" + pageID + " .ui-content").html(str+$.render[pageID](json));
		$("a[data-role='button']").button();
		break;
	case 'citylist':
		//console.log('inside citylist');
	    console.log('json'+JSON.stringify(json));
		
        str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator" id="ul_locator">';
		for (var i=0;i<json.data.length;i++ )
		{
			cityidarr[i]=json.data[i].cityid;
			cityarr[i]=json.data[i].cityname;
		//str +='<a href="javascript:getCityId('+json.data[i].cityid+');" data-role="button"  data-theme="reset" class="ios">'+json.data[i].cityname+'</a>'
		str += '<li data-icon="false"><a href="javascript:getCityId('+json.data[i].cityid+');" class="ui-btn ui-icon-location ui-btn-icon-left ui-shadow ui-corner-all">'+json.data[i].cityname+'</a></li>';
		}
		str += '</ul>';
		document.getElementById("stor").innerHTML=str;
		  
        $('#ul_locator').listview();
		//$("a[data-role='button']").button();
		break;

	case 'merchandise':
	  console.log(JSON.stringify(json));
	  
	  /*str += '<h3>Merchandise</h3>';


	  for (var i=0;i<json.length;i++ )
	  {
			
	   str += '<div><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p><video width="320" height="240"  poster='+json[i].AdImgURL+' onClick=this.play();><source src='+SERVER+json[i].AdVideoURL+'  this.play();/></video><br/><hr/> <a href="#" data-role="button" id="forgot_button">Order</a></div></div>';

	  }


	  $("#" + pageID + " .ui-content").html(str);*/
	  break;
case 'categorylist':
   console.log(JSON.stringify(json));

  //str = str +'<div class="subheading_t" style="font-size:14px;"><div style="color:#555555;">Welcome '+user.firstname+'</div><div class="submenu_button_right" ><img src="img/coupons.png" style="height:26px;width:auto;"></div></div>';
  str +='<img src="img/rstore.png" style="width:97%;height:auto;"><br/>';
  //str +='<div id="rss_desc1"><ul>';
 // str +='<ul>';
  // for (var i=0;i<json.length;i++ )
  //{
  //str +='<li><a href="javascript:getCatDetails('+json[i].Catid+');" data-theme="reset" class="ios" style="background: url(../img/shop_categoryList.png);height: 78px;color:#000;">'+json[i].CatName+'</a></li>';
  //str +='<li class="s_cn"><a href="javascript:getCatDetails('+json[i].Catid+');" style="background-image: url(../img/s_cn.png);color:#000;text-align:center;">'+json[i].CatName+'</a></li>';
  //}
 // str +='</ul>';
  //str +='</ul></div>';
  $("#" + pageID + " .ui-content").html(str);

  $("a[data-role='button']").button();
   break;
	  case 'rewardsmain':
		
		 $("#" + pageID + " .ui-content").html(str);
		break;
	  case 'viewcart':
		
		//str += '<div class="cartinfo">You have '+json.cartdata.length+' items in your cart</div>';
		
		str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator_sub" id="cartlist">';
        for (var i=0;i<json.cartdata.length;i++ )
		{
		
		
		str += '<li data-icon="delete" data-iconpos="right" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;line-height:90px;"><img src='+json.cartdata[i].url+' style="width: 100px;height: 100px;padding: 5px;"/>'+json.cartdata[i].BrandName+' Offer,Cost:Rs. '+json.cartdata[i].BrandValue+'<br/><span class="callout1">'+json.cartdata[i].BrandDescription+'</span></li>';
        																																					   
																																							   
		
		//	str +='<li><div class="li-img"><img src='+json.cartdata[i].url+' /></div><div class="li-text"><h4 class="li-head">'+json.cartdata[i].BrandName+' Offer,Cost:Rs. '+json.cartdata[i].BrandValue+'</h4><br/><p class="li-sub">'+json.cartdata[i].BrandDescription+'</p></div></li>';
            
		}
		str += '</ul>';
		
		str += '<br clear="all" /><a href="#" data-role="button" id="view_cart" class="btnclass">Redeem</a>';
		console.log("str herrrrrr"+str);
		oth.innerHTML=str; oth.style.display = 'block';  
		 $('#cartlist').listview();
		 $('#view_cart').button();
		break;

	case 'rewardstore':
    
  
       
	  jsonary = json.data;
  
  // str += '<div class="ui-content rsbanner"><span class="vouchers"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" class="vouchers" id="vouchers"'+i+'/></a></span><img src="img/featured.png" class="rs_b1" /></div>';
          
  for (var i=0;i<json.data.length;i++ )
  {

   if(json.data[i].BrandDescription=='Featured')
   {
   
   str += '<div class="ui-content rsbanner"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src='+json.data[i].url+' class="rs_b1" /></div>';
   }
   else
   {

   
   //str += '<div class="ui-content rs_msg"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src="http://portico.mloyalengage.com/'+json.data[i].brand_logo+'" class="rs_b2"></div>';
   str += '<div class="ui-content rs_msg"><img src="" class="rs_b2"><div class="amount_date"> <b>Rs. '+json.data[i].gift_voucher_value+'</b><br/>Valid Thru : '+json.data[i].end_date+'</div></div>';
   
   str += '<div class="ui-grid-a msg_cont"><div><img src="'+SERVER1+json.data[i].brand_logo+'" class="img_blogo1"></div><div class="ui-block-a wid20"></div>';
   

   str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">'+json.data[i].brand_name+' </span><br/>';
   str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">Friday at 10:40 am </span><br/></div>';
   str += '<div class="ui-block-b wid40"><div class="flt_rght">';
   //str += '<a href="javascript:likeMessage_rewards(\''+json.data[i].brand_id+'\',\''+i+'\');" data-role="button"><span id="likingrewards'+i+'"><img src="img/msg_up.png"></span></a>';
   str += '<span><a href="javascript:shareMessage(\''+json.data[i].brand_description+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
   str += '</div></div></div><hr class="style-one">';
   str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json.data[i].brand_description;
   str += '</span></div></div></div></div>';
   str += '<div class="ui-grid-solo msg_like_comt"><div class="rs_lk_cmt">';
 //  str += '<span class="msg_lke"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   str += '<span class="msg_lke"><a href=\'javascript:getVoucher('+json.data[i].gv_id+','+json.data[i].gift_voucher_value+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   }

 
  }
  //str +='Coming Soon';
  
   oth.innerHTML=str; oth.style.display = 'block';  
    break;
 case 'reward-cat':
   str +='<ul data-role="listview" id="ul_reward-cat" class="ul_shop" data-icon="false" data-iconpos="none">';
   for(var i=0;i<json.data.length;i++)
  {
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showcatbrands('+json.data[i].catid+');" class="lt_shop_a"><h2>'+json.data[i].catname+'</h2></a></li>';
  }
 str +='</ul>';
 //str +='Coming Soon';
    $("#" + pageID + " .ui-content").html(str);
    $('#ul_reward-cat').listview();
   break;
   case 'reward-brand':
   for (var i=0;i<json.data.length;i++ )
  {

   if(json.data[i].BrandDescription=='Featured')
   {
   
   str += '<div class="ui-content rsbanner"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src='+json.data[i].url+' class="rs_b1" /></div>';
   }
   else
   {

   
   //str += '<div class="ui-content rs_msg"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src="http://portico.mloyalengage.com/'+json.data[i].brand_logo+'" class="rs_b2"></div>';
   str += '<div class="ui-content rs_msg"><img src="" class="rs_b2"><span class="amount_date"> <b>Rs. '+json.data[i].gift_voucher_value+'</b><br/>Valid Thru : '+json.data[i].end_date+'</span></div>';
   
   str += '<div class="ui-grid-a msg_cont"><div><img src="'+SERVER1+json.data[i].brand_logo+'" class="img_blogo1"></div><div class="ui-block-a wid20"></div>';
   

   str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">'+json.data[i].brand_name+' </span><br/>';
   str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">Friday at 10:40 am </span><br/></div>';
   str += '<div class="ui-block-b wid40"><div class="flt_rght">';
  // str += '<a href="javascript:likeMessage_rewards(\''+json.data[i].brand_id+'\',\''+i+'\');" data-role="button"><span id="likingrewards'+i+'"><img src="img/msg_up.png"></span></a>';
   str += '<span><a href="javascript:shareMessage(\''+json.data[i].brand_description+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
   str += '</div></div></div><hr class="style-one">';
   str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json.data[i].brand_description;
   str += '</span></div></div></div></div>';
   str += '<div class="ui-grid-solo msg_like_comt"><div class="rs_lk_cmt">';
   //str += '<span class="msg_lke"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   str += '<span class="msg_lke"><a href=\'javascript:getVoucher('+json.data[i].gv_id+','+json.data[i].gift_voucher_value+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   }

 
  }
            $("#" + pageID + " .ui-content").html(str);
   break;
			
    case 'socialwall_youtube':
		
		//str += '<a href=\"javascript:loadDataGal(\''+gallery_cat+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><span><img src=\"img/cheer/refresh.png\" /></span></a></div>';
		
		for (var i=0;i<json.length;i++ )
		{
			//console.log(JSON.stringify(json[i]));
        if(json[i].link!='')
			{

			//console.log(json[i].link[1].href);
			//console.log(json[i].link[1].href.indexOf("videos/")+7);

			//console.log(json[i].link[1].href.substring(json[i].link[1].href.indexOf("videos/")+7,json[i].link[1].href.indexOf("/related")));
			

			 str1="http://www.youtube.com/embed/"+json[i].link[1].href.substring(json[i].link[1].href.indexOf("videos/")+7,json[i].link[1].href.indexOf("/related"));
			 //console.log(str1);
			
			
				
			   	str += '<div id="rss_desc"><div><span style=\"color:#F39E34;font-size:12px;font-weight:bold;\">'+json[i].title.t+'</span><HR>';
				
				
					str +='<iframe width="95%" height="240" src='+str1+' frameborder="0" allowfullscreen=""></iframe>';
					str +='<br/>'+json[i].content.t;
					
				 
				  str += '</div></div>';
				
				
			}
		}

		
        document.getElementById("contensocial").innerHTML=str;
		break;
		case 'socialwall_facebook':
		for (var i = 0; i < json.data.length; i++)
            {

                if (json.data[i].link != '')
                {
                    var fbid=json.data[i].id;
                    
                    
                    
                    var first_part=fbid.substr(0,fbid.indexOf('_'));
                     
                     var sec_part=fbid.substr(fbid.indexOf('_')+1,fbid.length);
                    
                    
                    var linkfbpost='https://www.facebook.com/'+first_part+'/posts/'+sec_part;
                   
                    
                    
				
				var msg=json.data[i].message;
				if(msg=='' || msg=='undefined' || msg==null || msg=='null')
					{
						msg='';
					}
		
				var lk='';
				if(json.data[i].likes)
				{
					lk= json.data[i].likes.data.length;
				}
				else
				{
					lk= '0';
				}
				

				str+='<div class="ui-grid-solo">';
				str+='<div class="ui-block">';
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				//str+='<div class="f_hdr_img"><img src="images/social/profile.jpg" id="f_profile" alt="profile"></div>';
				//<!--<div class="f_hdr_time" id="f_hdr_time">'+jQuery.timeago(json.data[i].updated_time)+'</div>-->
				//str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+json.data[i].from.name+'</span><br/><span class="f_hdr_desc" id="f_hdr_desc">'+json.data[i].from.category+'</span></div>';
				if(typeof json.data[i].picture !== "undefined" && json.data[i].picture != null)
					{
					str+='<div class="f_feed_bdy"><img src='+json.data[i].picture+' id="f_banner" alt="banner"></div>';
					}
				str+='<div class="f_feed_bdy"><p id="fb_msg">'+msg+'</p></div>';
				str+='<div class=f_feed_ftr><div class=f_bdy_likes>'+lk+' Likes</div><hr class=hori /><div class=f_bdy_lcs><span><img src=img/like.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Like</span><span><img src=img/comment.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Comment</span><span><img src=img/share.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Share</span></div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';
				str+='</div>';
				str+='</div>';

                }
            }

			document.getElementById("FACEBOOK").innerHTML = str;
            
            break;

		case 'socialwall_twitter':
		for (var i = 0; i < json.length; i++)
            {

               


					str+='<ul class="facebookFeed">';
					str+='<li>';
					str+='<div class="y_feedCon">';
					str+='<div class="ui-grid-a">';
					str+='<div class="ui-block-a" style="width:30%;"><img src="img/twitter.png" alt="twitter" class="y_video"></div>';
					str+='<div class="ui-block-b" style="width:70%;padding-left:10px;">';
					str+='<div class="y_hdr_title">'+json[i].user.name+'</div>';
					//str+='<div class="y_hdr_desc">'+json[i].user.description+'</div>';
					try{
					str+='<div class="f_feed_bdy"><img src='+json[i].entities.media[0].media_url+' id="f_banner" alt="banner" onClick=javascript:openBrowser(\''+json[i].entities.urls.url+'\');></div>';
					}
					catch(err){}
					str+='<div class="y_hdr_desc">'+json[i].text+'</div>';
					//str+='<div class=f_bdy_likes>'+json[i].user.followers_count+' Followers</div>';
					str+='</div></div></div></li></ul>';

                
            }

            document.getElementById("TWITTER").innerHTML = str;

            break;

		case 'socialwall_pinterest':
		console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
        
			str+='<ul class="facebookFeed">';
			str+='<li>';
			str+='<div class="f_feedCon"><div class="f_feed_hdr">';
			str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+brandname+'</span><br/><span class="f_hdr_desc" id="f_hdr_desc">'+json[i].board.name+'<br>'+json[i].desc+'</span></div>';
			str +='<div class="ui-grid-solo"><div class="ui-block"><img src="'+json[i].src+'" ></div></div>';
			str+='</div>';
			str+='</li>';
			str+='</ul>';
			
		}
        
        
        document.getElementById("PINTEREST").innerHTML=str;
		break;
		case 'socialwall_tumblr':
		console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
        
         if(json[i].link!='')
			{
		
				str += '<div id="rss_desc"><div><img src="img/ddsmall.jpg"><div style=\"margin: -50px 5px 20px 60px;\"><span style=\"color:#F39E34;font-size:12px;font-weight:bold;\">'+json[i].title+'</span><br/><span style="font-size:11px;color:#999999;"></span></div><HR><div style=\"margin: 10px 10px 10px -20px;\" class="content-responsive">'+json[i].description+'</div><HR><a href=\"javascript:playvideo(\''+json[i].link+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><div class=\"see-all\">See All</div></a></div></div>';
				
		
			}
		}
        
        document.getElementById("contensocial").innerHTML=str;
		break;

		case 'socialwall_instagram':

		//console.log('instagram: '+JSON.stringify(json));

		/*for (var i = 0; i < json.media.nodes.length; i++)
        {
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				//str+='<div class="f_hdr_img"><img src="images/social/profile.jpg" id="f_profile" alt="profile"></div>';
				str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+json.full_name+'</span><br/><span class="f_hdr_desc" id="f_hdr_desc">'+json.media.nodes[i].caption+'</span></div>';
				str +='<img style="border: 1px solid #cccccc;text-align: center;width: 98%;height: auto;" src="'+json.media.nodes[i].display_src+'" />';
				str+='<div class=f_bdy_likes>'+json.media.nodes[i].likes.count+' Likes</div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';
		}*/

		for (var i = 0; i < json.edge_owner_to_timeline_media.edges.length; i++)
        {
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+json.full_name+'</span></div>';
				str +='<img style="border: 1px solid #cccccc;text-align: center;width: 98%;height: auto;" src="'+json.edge_owner_to_timeline_media.edges[i].node.display_url+'" />';
				str+='<div class=f_bdy_likes>'+json.edge_owner_to_timeline_media.edges[i].node.edge_liked_by.count+' Likes</div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';
		}

        document.getElementById("INSTAGRAM").innerHTML = str;

        break;
		
		case 'popuppage4':

       
		for(var i=0;i<json.data.length;i++)
		
		{

		str += '<ul data-role="listview" data-inset="true" class="listPpup ui-listview ui-listview-inset ui-corner-all ui-shadow" data-icon="false">';
		str += '<li class="ui-li-has-thumb ui-first-child ui-last-child"><a href="#" class="ui-btn"><img src="img/rstar.jpg"/>';
		str += '<h2>'+json.data[i].offername+'</h2><p>Coupon Code : '+json.data[i].couponcode+'</p></a>';
		str += '</li></ul>';
               
		
		}
		 $("#" + pageID + " .ui-content").html(str);
		break;
		


	}
}


function renderTemplatedetail(pageID) {
var str = '';



	switch (pageID) {
		
		case 'aboutus':
			document.getElementById("cardname").innerHTML = user.firstname+' '+user.lastname;
		    var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
		    document.getElementById("cardid").innerHTML = uuu;
		    document.getElementById("valid").innerHTML = 'Valid Thru:'+user.validity;
			document.getElementById("tpoint").innerHTML = 'PETALS: ' +user.balance;
			document.getElementById("barimg").innerHTML = '<img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+user.mobile+'&choe=UTF-8" style="padding:10px;"/>';
			if(parseInt(user.balance)>=0 && parseInt(user.balance)<=2000)
            {
               document.getElementById('cardclass').innerHTML = 'Silver Member';
               document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';
		       document.getElementById('silverslab').className = 'active';
            }
            else if(parseInt(user.balance)>=2001 && parseInt(user.balance)<=25000)
            {
               document.getElementById('silverslab').className = '';
               document.getElementById('cardclass').innerHTML = 'Gold Member';
		       document.getElementById('platinumslab').className = '';
		       document.getElementById('goldslab').className = 'active';
            }
            else if(parseInt(user.balance)>=25001)
            {
               document.getElementById('silverslab').className = '';
               document.getElementById('goldslab').className = '';
		       document.getElementById('cardclass').className = 'Platinum Member';
		       document.getElementById('platinumslab').className = 'active'; 
            }

			break;

		case 'page-card':
			
			document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
			//document.getElementById("welcomehome").innerHTML = 'Welcome '+user.firstname+' '+user.lastname;
		    document.getElementById("cardname").innerHTML = user.firstname+' '+user.lastname;
			var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
		    document.getElementById("cardid").innerHTML = uuu;
		    document.getElementById("valid").innerHTML = 'Valid Thru:'+user.validity;
			var ustr = user.balance;
			var tstr = '';
			if(ustr.length<=8)
		   {
             for (var k=0;k<(8-ustr.length); k++)
			{
			tstr += '<span class="bdrht" style="">0</span>';
			}
		   }
			for (var j=0;j<ustr.length; j++)
			{
			tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
			}
			
			document.getElementById("tpoint").innerHTML = tstr;
			document.getElementById("barimg").innerHTML = '<img src="http://delhidaredevilsadda.com/barcode.php?text='+user.mobile+'" style="padding:5px;border: solid 1px #ffffff;border-radius: 1px;background:#ffffff;" />';

			document.getElementById("headername").innerHTML='Membership';
			 
			break;


			case 'page-card-punch':
			
			


						document.getElementById("barcontentpunch").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
			//document.getElementById("welcomehome").innerHTML = 'Welcome '+user.firstname+' '+user.lastname;
		    document.getElementById("cardnamepunch").innerHTML = user.firstname+' '+user.lastname;
			var pstr='<span style="color:#ffffff;"><br><br>';
			console.log("user.visit_frequency)"+user.visit_frequency);
            //user.visit_frequency='2';
			console.log("parseInt(user.visit_frequency)"+parseInt(user.visit_frequency));
			 for (var k1=0;k1<parseInt(user.visit_frequency); k1++)
			{
			pstr += '<img src="img/star11.png"/>';
			}
			 for (var k1=0;k1<10-parseInt(user.visit_frequency); k1++)
			{
			pstr += '<img src="img/star.png"/>';
			}
			pstr +='</span>'
			console.log("pstr"+pstr);



            document.getElementById("card_punches").innerHTML =pstr;
			var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
		   
			var ustr = user.balance;
			var tstr = '';
			if(ustr.length<=8)
		   {
             for (var k=0;k<(8-ustr.length); k++)
			{
			tstr += '<span class="bdrht" style="">0</span>';
			}
		   }
			for (var j=0;j<ustr.length; j++)
			{
			tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
			}
			
			document.getElementById("tpointpunch").innerHTML = tstr;
			
			document.getElementById("headernamepunch").innerHTML='Membership';
			break;

		    case 'shop':
            str +='<ul data-role="listview" id="ul_shop" class="ul_shop" data-icon="false" data-iconpos="none">';
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S1\');" class="lt_shop_a"><h2>Khazana</h2></a></li>';
            str +='</ul>';
			
            $("#" + pageID + " .ui-content").html(str);
    $('#ul_shop').listview();
   break;
  
	}
	}





function shareMessagefb(msg)
{
	//window.plugins.socialsharing.share(msg,'Gini & Jony');
	window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(msg, null /* img */, null /* url */, brandname, function() {console.log('share ok')}, function(errormsg){alert(errormsg)})
}

function shareMessagetw(msg)
{
	//window.plugins.socialsharing.share(msg,'Gini & Jony');
      window.plugins.socialsharing.shareViaTwitter(msg);
}
function shareMessage(msg)
{
	window.plugins.socialsharing.share(msg,brandname);
}

function showTabContentRSS(id, url) {

  if(url==json_fb_mm || url==json_fb_pp || url==json_fb_ff || url==json_fb_mo || url==json_fb_vitsmumbai || url==json_fb_vitsbhub || url==json_fb_lotusgoa || url==json_fb_lotuskonark )
	{

  $.getJSON(
     url, {
     
       }, function (json) {

      
         renderTemplate(id, json);

          localStorage.setItem('facebook_orchid',JSON.stringify(json.item));
    

       }).error(function () {
		 try{
			 renderTemplate(id,JSON.parse(localStorage.getItem('facebook_orchid')));
		 }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );
 
}
if(url==RSS_youtube)
{

  $.getJSON(
     url, {
     
       }, function (json) {

      
         renderTemplate(id, json.feed.entry);

     

          localStorage.setItem('youtube_orchid',JSON.stringify(json.feed.entry));
     

    

       }).error(function () {
		   try{
			 renderTemplate(id,JSON.parse(localStorage.getItem('youtube_orchid')));
		   }
		   catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );


}
else if(url==RSS_twitter_mm || url==RSS_twitter_pp || url==RSS_twitter_ff || url==RSS_twitter_mo || url==RSS_twitter_vitsmumbai || url==RSS_twitter_vitsbhub || url==RSS_twitter_lotuskonark)
{


  $.ajax({
                url: url,
                type: 'GET',
                timeout: 50000,
				dataType: 'json',
                success: function (data, textStatus, xhr) {

				//console.log(JSON.stringify(data));
				renderTemplate(id, data);

			
            //  localStorage.setItem('twitter',JSON.stringify(json.responseData.feed.entries));
            localStorage.setItem('twitter_orchid', JSON.stringify(data));
                },
                error: function (xhr, textStatus, errorThrown) {
					var err = eval("(" + xhr.responseText + ")");

					alert(err.Message);

                  try {
				} catch (err)
				{
					renderTemplate(id, JSON.parse(localStorage.getItem('twitter_orchid')));
					//alert('here in catch');
				}
            //alert("Oops network error!!Please try again");
                }
            });


}
else if(url==RSS_twitter_lotusgoa)
{
	toast('No tweets found..');
	document.getElementById("TWITTER").innerHTML = '';
}
else if(url==RSS_pinterest)
{

 
  $.getJSON(
     url, {
     
       }, function (json) {

      
         renderTemplate(id, json.body);
			
     

          localStorage.setItem('pinterest_orchid',JSON.stringify(json.body));
       

    

       }).error(function () {
		   try{
			    renderTemplate(id,JSON.parse(localStorage.getItem('pinterest_orchid')));
		   }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );
 

}
else if(url==RSS_tumblr)
{

 
  $.getJSON(
     url, {
     
       }, function (json) {

      
         //renderTemplate(id, json.responseData.feed.entries);
			renderTemplate(id, json.channel.item);
     

        //  localStorage.setItem('twitter',JSON.stringify(json.responseData.feed.entries));
       localStorage.setItem('tumblr_orchid',JSON.stringify(json.channel.item));

    

       }).error(function () {
		   try{
			   renderTemplate(id,JSON.parse(localStorage.getItem('tumblr_orchid')));
		   }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );


}
else if(url==RSS_instagram_mm || url==RSS_instagram_pp || url==RSS_instagram_ff || url==RSS_instagram_mo || url==RSS_instagram_vitsmumbai )
{

 
  $.getJSON(
     url, {
     
       }, function (json) {

      
         //renderTemplate(id, json.responseData.feed.entries);
			renderTemplate(id, json.graphql.user);
     

        //  localStorage.setItem('twitter',JSON.stringify(json.responseData.feed.entries));
       localStorage.setItem('instagram_orchid',JSON.stringify(json.graphql.user));

    

       }).error(function () {
		   try{
			   renderTemplate(id,JSON.parse(localStorage.getItem('instagram_orchid')));
		   }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );


}

else if(url==RSS_instagram_vitsbhub || url==RSS_instagram_lotusgoa || url==RSS_instagram_lotuskonark )
{
	toast('No feeds found..');
	document.getElementById("INSTAGRAM").innerHTML = '';
}



 
}
//newfeedback
function changeRate(element)
{

	//var tImage = document.getElementById('rate_img');

	if(element=='b_icon1')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','0.4');
		$("#b_icon3").css('opacity','0.4');
		$("#b_icon4").css('opacity','0.4');
		$("#b_icon5").css('opacity','0.4');
		rating='1';
		document.getElementById("fdbk_text").innerHTML='Poor';
		//tImage.src = 'img/rating_img.png';

		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else if(element=='b_icon2')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','1');
		$("#b_icon3").css('opacity','0.4');
		$("#b_icon4").css('opacity','0.4');
		$("#b_icon5").css('opacity','0.4');
		rating='2';
		document.getElementById("fdbk_text").innerHTML='Fair';
		
		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else if(element=='b_icon3')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','1');
		$("#b_icon3").css('opacity','1');
		$("#b_icon4").css('opacity','0.4');
		$("#b_icon5").css('opacity','0.4');
		rating='3';
		document.getElementById("fdbk_text").innerHTML='Good';

		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else if(element=='b_icon4')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','1');
		$("#b_icon3").css('opacity','1');
		$("#b_icon4").css('opacity','1');
		$("#b_icon5").css('opacity','0.4');
		rating='4';
		document.getElementById("fdbk_text").innerHTML='Awesome';
		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else if(element=='b_icon5')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','1');
		$("#b_icon3").css('opacity','1');
		$("#b_icon4").css('opacity','1');
		$("#b_icon5").css('opacity','1');
		rating='5';
		document.getElementById("fdbk_text").innerHTML='Excellent';
		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else
	{
		rating='0';
	}
}

function rateFeed(){
	console.log("Rating:"+rating+" by:"+user.mobile);
}

$(document).on('pageshow', '#feedback', function (event, ui) {

	$('#feed_mobile').val(user.mobile);
    loadlocationNew();

});

function submitFeedback()
{

 var recomend=$('input[name="radio-choice-aa"]:checked').val();
 var valueformoney=$('input[name="radio-choice-bb"]:checked').val();
 var educate=$('input[name="radio-choice-cc"]:checked').val();
 var redeem=$('input[name="radio-choice-dd"]:checked').val();
 var convenient=$('input[name="radio-choice-ee"]:checked').val();

 var experience=$('input[name="radio-choice-a"]:checked').val();
 var namaskarexp=$('input[name="radio-choice-b"]:checked').val();
 var cleanliness=$('input[name="radio-choice-c"]:checked').val();
 var airconditioning=$('input[name="radio-choice-d"]:checked').val();
 var tvservice=$('input[name="radio-choice-e"]:checked').val();
 var laundry=$('input[name="radio-choice-f"]:checked').val();
 var broadband=$('input[name="radio-choice-g"]:checked').val();
 var inroomdining=$('input[name="radio-choice-h"]:checked').val();
 var businesscentre=$('input[name="radio-choice-i"]:checked').val();
 var fitness=$('input[name="radio-choice-j"]:checked').val();
 var boulevard=$('input[name="radio-choice-k"]:checked').val();
 var museum=$('input[name="radio-choice-l"]:checked').val();
 var banquet=$('input[name="radio-choice-m"]:checked').val();

 var chhajja=$('input[name="radio-choice-v"]:checked').val();
 var activities=$('input[name="radio-choice-w"]:checked').val();

 var frontoffice=$('input[name="radio-choice-n"]:checked').val();
 var teleoperator=$('input[name="radio-choice-p"]:checked').val();
 var housekeeping=$('input[name="radio-choice-q"]:checked').val();
 var restassociates=$('input[name="radio-choice-r"]:checked').val();
 var inroomadvisors=$('input[name="radio-choice-s"]:checked').val();
 var busassociates=$('input[name="radio-choice-t"]:checked').val();
 var fitnessassociates=$('input[name="radio-choice-u"]:checked').val();

 var comments=$('#feed_suggestion').val();
 var staffname=$('#feed_staff').val();
 var feed_loc = localStorage.getItem('selectedstore');
 var mobile =$('#feed_mobile').val();

 if(mobile==''){
		  toast('Please enter mobile no.');
		}
 else{

   $.ajax({
   url: SERVER+'feedback_json.asp', //login.php
    type: 'GET',
    timeout: 50000,
    dataType: 'html', //xml/html/script/json/jsonp
    data: {

				'MobileNo': mobile,
				'FirstName': '',
				'LastName': '',
				'EmailId': '',       
				'StoreId': feed_loc,    
				'Var1': recomend,   
				'Var2': valueformoney,     
				'Var3': educate, 
				'Var4': redeem,    
				'Var5': convenient,      
				'Var6': experience,     
				'Var7': namaskarexp,        
				'Var8': cleanliness,             
				'Var9': airconditioning,
				'Var10': tvservice,
				'Var11': laundry,           
				'Var12': broadband,
				'Var13': comments,
				'Var14': inroomdining,
				'Var15': businesscentre,
				'Var16': fitness,
				'Var17': boulevard,
				'Var18': museum,
				'Var19': banquet,
				'Var20': chhajja,
				'Var21': activities,
				'Var22': frontoffice,
				'Var23': teleoperator,
				'Var24': housekeeping,
				'Var25': restassociates,
				'Var26': inroomadvisors,
				'Var27': busassociates,
				'Var28': fitnessassociates,
				'Var29': staffname
			},
   
    success: function(data, textStatus, xhr) {
  
				console.log('JSONDATA:'+JSON.stringify(data));
 
				toast('Thanks for feedback. 50 BONUS PETALS have been credited to your account as a mark of appreciation for the feed  back provided.');
		        
				$.mobile.changePage( "#homepage", { transition: "none"} );

				resetFeed();
				resetFeed();

    },
    error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 }

}
//ends here
function resetFeed()
{
				$("input[type='radio']").checkboxradio();
				$("input[type='radio']").checkboxradio("refresh");
				$("input[type='radio']").removeAttr("checked");

				$('input[name="radio-choice-a"]').attr('checked', false);
				$('input[name="radio-choice-a"]').prop('checked',false);
				$('input[name="radio-choice-b"]').attr('checked', false);
				$('input[name="radio-choice-b"]').prop('checked',false);
				$('input[name="radio-choice-c"]').attr('checked', false);
				$('input[name="radio-choice-c"]').prop('checked',false);
				$('input[name="radio-choice-d"]').attr('checked', false);
				$('input[name="radio-choice-d"]').prop('checked',false);
				$('input[name="radio-choice-e"]').attr('checked', false);
				$('input[name="radio-choice-e"]').prop('checked',false);
				$('input[name="radio-choice-f"]').attr('checked', false);
				$('input[name="radio-choice-f"]').prop('checked',false);
				$('input[name="radio-choice-g"]').attr('checked', false);
				$('input[name="radio-choice-g"]').prop('checked',false);
				$('input[name="radio-choice-h"]').attr('checked', false);
				$('input[name="radio-choice-h"]').prop('checked',false);
				$('input[name="radio-choice-i"]').attr('checked', false);
				$('input[name="radio-choice-i"]').prop('checked',false);
				$('input[name="radio-choice-j"]').attr('checked', false);
				$('input[name="radio-choice-j"]').prop('checked',false);
				$('input[name="radio-choice-k"]').attr('checked', false);
				$('input[name="radio-choice-k"]').prop('checked',false);
				$('input[name="radio-choice-l"]').attr('checked', false);
				$('input[name="radio-choice-l"]').prop('checked',false);
				$('input[name="radio-choice-m"]').attr('checked', false);
				$('input[name="radio-choice-m"]').prop('checked',false);
				$('input[name="radio-choice-n"]').attr('checked', false);
				$('input[name="radio-choice-n"]').prop('checked',false);
				$('input[name="radio-choice-p"]').attr('checked', false);
				$('input[name="radio-choice-p"]').prop('checked',false);
				$('input[name="radio-choice-q"]').attr('checked', false);
				$('input[name="radio-choice-q"]').prop('checked',false);
				$('input[name="radio-choice-r"]').attr('checked', false);
				$('input[name="radio-choice-r"]').prop('checked',false);
				$('input[name="radio-choice-s"]').attr('checked', false);
				$('input[name="radio-choice-s"]').prop('checked',false);
				$('input[name="radio-choice-t"]').attr('checked', false);
				$('input[name="radio-choice-t"]').prop('checked',false);
				$('input[name="radio-choice-u"]').attr('checked', false);
				$('input[name="radio-choice-u"]').prop('checked',false);
				$('input[name="radio-choice-v"]').attr('checked', false);
				$('input[name="radio-choice-v"]').prop('checked',false);
				$('input[name="radio-choice-w"]').attr('checked', false);
				$('input[name="radio-choice-w"]').prop('checked',false);

				$('#feed_suggestion').val('');
				$('#feed_staff').val('');
}

function playvideo(url)
{
	
	//window.plugins.videoPlayer.play("https://www.youtube.com/watch?v=en_sVVjWFKk");
	openInWebView(url); 

}


function mobilecoupon()
{
	var mainpop = document.getElementById('mainpop'); 
    mainpop.style.display = 'none';
	var smallImage = document.getElementById('getbarimage');
    smallImage.style.display = 'none';
	var smallImage1 = document.getElementById('getmobcoupon');
    smallImage1.style.display = 'block';
	$.ajax({
			url: SERVER+'get_active_voucher_api.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				
				mobileno: user.mobile,
				
							
			},
			success: function(data, textStatus, xhr) {

				//console.log("Anoop"+url);
				
				
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						smallImage1.innerHTML = '<div>You will shortly receive a sms with your mobile coupon</div>';
						

				}
			
	
				
				
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
	
}

function showRewards1(){
	try{
		popupCloseRight1.remove();
	}catch(err) 
	{	}
		showRewards();
}


function showHome(){
 $.mobile.changePage( "#page-card", { transition: "none"} ); 
 var oth = document.getElementById("othercontent");
 var main = document.getElementById("cardcontent");  
 oth.style.display = 'none';
 main.style.display = 'block';
 try{
	$( "#left-panel" ).panel( "close" );
	}catch(err) 
	{	}
	
 document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
 document.getElementById("headername").innerHTML='Membership';	
}

function showHome1(){
	//document.getElementById("profilepts").innerHTML=user.balance;
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname==''){
		document.getElementById("profilenm").innerHTML= 'Welcome Guest!';
		document.getElementById("profilenm1").innerHTML='Guest';
          if(typeof localStorage.getItem('selectedstore')!=undefined && localStorage.getItem('selectedstore')!=null && localStorage.getItem('selectedstore')!='')
       {
            if(localStorage.getItem('selectedstore')=='jadhavgadh')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Fort JadhavGADH - Pune!';
            else if(localStorage.getItem('selectedstore')=='mahodadhi')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Mahodadhi Palace - Puri, Odisha!';
            else if(localStorage.getItem('selectedstore')=='mumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to The Orchid Hotel - Mumbai!';
            else if(localStorage.getItem('selectedstore')=='pune')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to The Orchid Hotel - Pune!';
            else if(localStorage.getItem('selectedstore')=='vitsmumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to VITS Mumbai!';
            else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to VITS Bhubaneswar!';
            else if(localStorage.getItem('selectedstore')=='lotusgoa')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Lotus Eco Beach Resort - Goa!';
            else if(localStorage.getItem('selectedstore')=='lotuskonark')
            document.getElementById("profilenm").innerHTML= 'Welcome Guest to Lotus Eco Beach Resort - Konark, Odisha!';
			else if(localStorage.getItem('selectedstore')=='shimla')
			document.getElementById("profilenm").innerHTML= 'Welcome Guest to The Orchid Hotel - Shimla!';
       }
	}else{
		document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
          if(typeof localStorage.getItem('selectedstore')!=undefined && localStorage.getItem('selectedstore')!=null && localStorage.getItem('selectedstore')!='')
       {
            if(localStorage.getItem('selectedstore')=='jadhavgadh')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Fort JadhavGADH - Pune!';
            else if(localStorage.getItem('selectedstore')=='mahodadhi')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Mahodadhi Palace - Puri, Odisha!';
            else if(localStorage.getItem('selectedstore')=='mumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Mumbai!';
            else if(localStorage.getItem('selectedstore')=='pune')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Pune!';
            else if(localStorage.getItem('selectedstore')=='vitsmumbai')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to VITS Mumbai!';
            else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to VITS Bhubaneswar!';
            else if(localStorage.getItem('selectedstore')=='lotusgoa')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Lotus Eco Beach Resort - Goa!';
            else if(localStorage.getItem('selectedstore')=='lotuskonark')
            document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Lotus Eco Beach Resort - Konark, Odisha!';
			else if(localStorage.getItem('selectedstore')=='shimla')
			document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to The Orchid Hotel - Shimla!';
       }
		document.getElementById("profilepts").innerHTML=user.balance+' Petals';
		document.getElementById("profilenm1").innerHTML=user.firstname;
		document.getElementById("profilepts1").innerHTML=user.balance+' Petals';
		if(parseInt(user.balance)<=2000){
			document.getElementById("category_img").src="img/Silver_icon.png";
		}
		else if(parseInt(user.balance)<=25000){
			document.getElementById("category_img").src="img/gold.png";
		}
		else{
			document.getElementById("category_img").src="img/platinum.png";
		}
	}
 $.mobile.changePage( "#homepage", { transition: "none"} ); 

 try{
	$( "#left-panel" ).panel( "close" );
	}catch(err) 
	{	}
	

}

function successHandler (result) {
	//alert('Callback Success! Result = '+result)
	}
function errorHandler(error) {
	 alert(error);
	}

function receivedEvent(id) {
       

 var push = PushNotification.init({ "android": {"senderID": "916251456453"}});
                     push.on('registration', function(data) {
                     
					 reg_id=data.registrationId;

					 localStorage.setItem("deviceid",reg_id);
                     });
          
                     push.on('notification', function(data) {
						alert(data.message);
					 
						//showInbox();
                     });
          
                     push.on('error', function(e) {
						//alert(e);
                     }
					);
    }

function getContacts(){


 try{
 var optFilter = new ContactFindOptions();
 optFilter.filter = "";  // to return all contacts
 optFilter.multiple = true; // return multiple results
 var fields = [navigator.contacts.fieldType.name,navigator.contacts.fieldType.phoneNumbers];
 
 // get all contacts
 navigator.contacts.find(fields,gcsSuccess, gcsError, optFilter);
 }
 catch(err)
 {
     txt="There was an error loading contacts.\n\n"; 
     txt+="Error description: " + err.message + "\n\n"; 
    // alert(txt); 
    
 }
}

/* get all contacts success */
function gcsSuccess(contacts){
 
 //alert("Contact sync start"+contacts.length);
 if( contacts.length != 0 ){
  // get formatted names and sort
  var names = new Array();
  var contactnos = new Array();
  
  
  for(var i=0; i<contacts.length; ++i){


   if( contacts[i].phoneNumbers == null )
            continue;

   
   
               
           
            
 

   
   if(contacts[i].name){
    var pname = contacts[i].displayName != null ? contacts[i].displayName: "No name";
     names.push(pname);
    
    }

   // display phone numbers
     if (contacts[i].phoneNumbers){
                              var pNumber = contacts[i].phoneNumbers[0].value; 
      
          contactnos.push(pNumber);
     

     }
   
  }
  names.sort();


  
 var contactstr='<label for="choosefrnd" class="select">Choose Friend:</label><select name="choosefrnd" id="choosefrnd"  onchange="if (this.selectedIndex) doSomething(this.selectedIndex);">';
  for(var i=0; i<names.length; ++i){
   contactstr += '<option value='+contactnos[i]+'>'+names[i]+'</option>';
  }
   contactstr += '</select>';

   //alert(contactstr);
   document.getElementById("allContacts").innerHTML=contactstr;

 } else document.getElementById("allContacts").innerHTML='No Contact';
}

/* get all contacts error */
function gcsError(contactError){
 navigator.notification.alert('Contacts Error');
}

function getContactno(i)
{
$('#search-mobile').val(phonenos.get(i));

}
function doSomething(str)
{
 
 var e = document.getElementById("choosefrnd");
    var strmob = e.options[e.selectedIndex].value;

 $('#giftmno').val(strmob);
 
}
function addincart(i)
{
	ids.push(i);
	cart.cartdata.push({ 
   "index":i,
   "url" : "https://orchid.mloyalretail.com/"+jsonary[i].brand_logo,
   "BrandId" : jsonary[i].brand_id,
   "BrandName" : jsonary[i].brand_name,
   "BrandValue" : jsonary[i].gift_voucher_value,
   "BrandDescription":jsonary[i].brand_description,
   "Validity":jsonary[i].end_date,
    });
   
  indexary.push(jsonary[i].brand_id);
  
  $('#cartval').html(ids.length);
}


 $(document).on('tap', '#view_cart', function (e, ui) {

        checkout();
 
 
});


function checkout(){
   var offers='';
  for (var i=0;i<cart.cartdata.length;i++ )
  {
        offers = offers + cart.cartdata[i].BrandId + ',';
  }
  
        offers = offers.substring(0,offers.length-1);

  $.ajax({
    url: 'https://orchid.mloyalretail.com/Rewards/complete.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'text', //xml/html/script/json/jsonp
    data: {'mobileno': user.mobile, 'offers': offers,'redeemval':'0'},
    success: function(data, textStatus, xhr) {
   
	
    var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		showHome();
		
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: data+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");
    	
    },
    error: function(xhr, textStatus, errorThrown) {
	
	
	alert('Could not connect to Server, make sure you are connected to Internet');
   
    }
  });
 
}

function getVoucher(id,val){

  
  
  $.ajax({
    url: 'https://orchid.mloyalretail.com/Rewards/complete.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'text', //xml/html/script/json/jsonp
    data: {'mobileno': user.mobile, 'offers': id,'redeemval':val},
    success: function(data, textStatus, xhr) {
   
	
    var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		showHome();
		
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: data+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");
    	
    },
    error: function(xhr, textStatus, errorThrown) {
	
	
	alert('Could not connect to Server, make sure you are connected to Internet');
   
    }
  });
 
}

function showPOPup()
{

	var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		showHome();
		
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: 'Please wait...'+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    

    $popUp.popup('open').trigger("create");

}

 function showShop(){

    openInWebView('https://www.zomato.com/');
    /*$.mobile.changePage( "#shop", { transition: "none"} ); 
    renderTemplatedetail('shop');
  $.mobile.changePage( "#innershop", {transition: "none"} );
  var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
  var the_width = $(window).width();
  var str1='';
  str1='<embed src="http://www.latin-quarters.com/" width='+the_width+' height='+the_height+' /></embed>';
  //$("#innershop .ui-content").html(str1);
  document.getElementById("barcontentinnershop").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span>';
  $("#innerdata").html(str1);*/
}

function openKnow_more()
{
    openInWebView('https://www.orchidrewards.in/');
}

function giftfriend(){
  var to_mob=$('#giftmno').val();
  var val=$('#giftpt').val();
  $.ajax({
    url: 'https://orchid.mloyalretail.com/m/gift_points_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'text', //xml/html/script/json/jsonp
    data: {'mobileno': user.mobile, 'tomobileno': to_mob,'gift_points':val},
    success: function(data, textStatus, xhr) {
   
	
    var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		showHome();
		
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: data+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");
    	
    },
    error: function(xhr, textStatus, errorThrown) {
	
	
	alert('Could not connect to Server, make sure you are connected to Internet');
   
    }
  });
 
}

function showRecharge()
{

	var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlayTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: 'Coming Soon...'+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");

}

function RewardsNA()
{

	var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlayTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#69534A'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: 'RewardStore is coming soon.\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");

}

$(document).bind('keydown', function(event) {

  if (event.keyCode == 27) { // 27 = 'Escape' keyCode (back button)
    event.preventDefault();
  }
});

function shareApp()
{
	window.plugins.socialsharing.share('Hi, Join The Orchid Rewards Program.', null, 'https://taghash.co/shareimg/orchid.jpg', 'https://orchid.mloyalretail.com/mapp');
}

function rateApp()
{
	var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
		 if (deviceType=='iPad' || deviceType=='iPhone') 
			 {
                //window.open('itms-apps://itunes.apple.com/us/app/domainsicle-domain-name-search/id511364723?ls=1&mt=8'); // or itms://
				//window.open('http://180.179.218.225:82/mloyaliphone.jsp?brandname='+brandname);
                window.open('itms-apps://itunes.apple.com/us/app/domainsicle-domain-name-search/id1205910589?ls=1&mt=8','_system');
			 } 
		 else if (deviceType=='Android') 
			 {
                //window.open('market://details?id=<package_name>');
				//window.open('http://180.179.218.225:82/mloyalandroid.jsp?brandname='+brandname);
                window.open("market://details?id=com.mobiquest.orchid","_system");
             }
		else if (deviceType=='BlackBerry')
			{
                //window.open('http://appworld.blackberry.com/webstore/content/<applicationid>');
				window.open('http://180.179.218.225:82/mloyalbb.jsp?brandname='+brandname);
            }
}

// onSuccess Geolocation
    //
    function onGeoSuccess(position) {
       /* var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + new Date(position.timestamp)          + '<br />';*/
	 var latlng = position.coords.latitude+','+position.coords.longitude;
	 showTabContent_Map1(latlng);
							
    }

    // onError Callback receives a PositionError object
    //
    function onGeoError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

function getNearStores(){
     navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
	 
}

function showPopuppage4(){
$.mobile.changePage( "#popuppage4", { transition: "slide"} ); 
	showTabContent('popuppage4', 'cpns_history_json.asp');
	
	
}

function showshoplinks(str)
{
 $.mobile.changePage( "#innershop", {transition: "flip"} );
 var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
 var the_width = $(window).width();
 var str1='';
	if(str=='S1')
	{
	//openInWebView('http://www.damilano.com/women');
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=1" width='+the_width+' height='+the_height+' /></embed>';
	}
	else if(str=='S2')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=5" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/men');
	}
	else if(str=='S3')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=7" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/leather-accessories');
	}
	else if(str=='S4')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=9" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/business-essentials');
	}
	else if(str=='S5')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=11" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/travel');
	}
	else if(str=='S6')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=4" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/home-195');
	}
	else if(str=='S7')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=6" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/');
	}
    else if(str=='S8')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=8" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/');

	}
	else if(str=='S9')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=10" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/');
	}
    else if(str=='S10')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=12" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/');

	}

	document.getElementById("barcontentinnershop").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span>';
    $("#innerdata").html(str1);
 //$("#innershop .ui-content").html(str1);
}


function showFbNew(){
  if(localStorage.getItem('selectedstore')=='jadhavgadh')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>Fort JadhavGADH - Pune';
  //showTabContentRSS('socialwall_facebook', json_fb_ff);
  document.getElementById("FACEBOOK").innerHTML= '<iframe src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/fortJadhavGADH&tabs=timeline&width=340&height=550&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="340" height="550" style="border:none;overflow:hidden" allow="encrypted-media"></iframe>';
  }
  else if(localStorage.getItem('selectedstore')=='mahodadhi')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>Mahodadhi Palace - Puri, Odisha';
  //showTabContentRSS('socialwall_facebook', json_fb_mo);
  document.getElementById("FACEBOOK").innerHTML= '<iframe src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/HotelMahodadhiPalace&tabs=timeline&width=340&height=550&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="340" height="550" style="border:none;overflow:hidden" allow="encrypted-media"></iframe>';
  }
  else if(localStorage.getItem('selectedstore')=='mumbai')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>The Orchid Hotel - Mumbai';
  //showTabContentRSS('socialwall_facebook', json_fb_mm);
  document.getElementById("FACEBOOK").innerHTML= '<iframe src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/TheOrchidHotels&tabs=timeline&width=340&height=550&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="340" height="550" style="border:none;overflow:hidden" allow="encrypted-media"></iframe>';
  }
  else if(localStorage.getItem('selectedstore')=='pune')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>The Orchid Hotel - Pune';
  //showTabContentRSS('socialwall_facebook', json_fb_pp);
  document.getElementById("FACEBOOK").innerHTML= '<iframe src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/OrchidHotelPune&tabs=timeline&width=340&height=550&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="340" height="550" style="border:none;overflow:hidden" allow="encrypted-media"></iframe>';
  }
  else if(localStorage.getItem('selectedstore')=='vitsmumbai')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>VITS Mumbai';
  //showTabContentRSS('socialwall_facebook', json_fb_vitsmumbai);
  document.getElementById("FACEBOOK").innerHTML= '<iframe src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/VITSHotels&tabs=timeline&width=340&height=550&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="340" height="550" style="border:none;overflow:hidden" allow="encrypted-media"></iframe>';
  }
  else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>VITS Bhubaneswar';
  //showTabContentRSS('socialwall_facebook', json_fb_vitsbhub);
  document.getElementById("FACEBOOK").innerHTML= '<iframe src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/VITSBbsr&tabs=timeline&width=340&height=550&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="340" height="550" style="border:none;overflow:hidden" allow="encrypted-media"></iframe>';
  }
  else if(localStorage.getItem('selectedstore')=='lotusgoa')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>Lotus Eco Beach Resort - Goa';
  //showTabContentRSS('socialwall_facebook', json_fb_lotusgoa);
  document.getElementById("FACEBOOK").innerHTML= '<iframe src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/LotusBeachResortGoa&tabs=timeline&width=340&height=550&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="340" height="550" style="border:none;overflow:hidden" allow="encrypted-media"></iframe>';
  }
  else if(localStorage.getItem('selectedstore')=='lotuskonark')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>Lotus Eco Beach Resort - Konark, Odisha';
  //showTabContentRSS('socialwall_facebook', json_fb_lotuskonark);
  document.getElementById("FACEBOOK").innerHTML= '<iframe src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/LotusResortKonark&tabs=timeline&width=340&height=550&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="340" height="550" style="border:none;overflow:hidden" allow="encrypted-media"></iframe>';
  }
  else if(localStorage.getItem('selectedstore')=='shimla')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>The Orchid Hotel - Shimla';
  //showTabContentRSS('socialwall_facebook', json_fb_shimla);
  document.getElementById("FACEBOOK").innerHTML= '<iframe src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/TheOrchidHotelShimla&tabs=timeline&width=340&height=550&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="340" height="550" style="border:none;overflow:hidden" allow="encrypted-media"></iframe>';
  }

	$("#navBdr_twitter").css('display', 'none');
    $("#navBdr_facebook").css('display', 'block');
    $("#navBdr_instagram").css('display', 'none');

	$("#TWITTER").css('display', 'none');
    $("#FACEBOOK").css('display', 'block');
    $("#INSTAGRAM").css('display', 'none');
    

	$.mobile.changePage( "#social", { transition: "none"} ); 
	
	//openInWebView('https://www.facebook.com/orchid');

  
}

function showTwitterNew(){

  if(localStorage.getItem('selectedstore')=='jadhavgadh')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>Fort JadhavGADH - Pune';
  showTabContentRSS('socialwall_twitter', RSS_twitter_ff);
  }
  else if(localStorage.getItem('selectedstore')=='mahodadhi')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>Mahodadhi Palace - Puri, Odisha';
  showTabContentRSS('socialwall_twitter', RSS_twitter_mo);
  }
  else if(localStorage.getItem('selectedstore')=='mumbai')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>The Orchid Hotel - Mumbai';
  showTabContentRSS('socialwall_twitter', RSS_twitter_mm);
  }
  else if(localStorage.getItem('selectedstore')=='pune')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>The Orchid Hotel - Pune';
  showTabContentRSS('socialwall_twitter', RSS_twitter_pp);
  }
  else if(localStorage.getItem('selectedstore')=='vitsmumbai')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>VITS Mumbai';
  showTabContentRSS('socialwall_twitter', RSS_twitter_vitsmumbai);
  }
  else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>VITS Bhubaneswar';
  showTabContentRSS('socialwall_twitter', RSS_twitter_vitsbhub);
  }
  else if(localStorage.getItem('selectedstore')=='lotusgoa')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>Lotus Eco Beach Resort - Goa';
  showTabContentRSS('socialwall_twitter', RSS_twitter_lotusgoa);
  }
  else if(localStorage.getItem('selectedstore')=='lotuskonark')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>Lotus Eco Beach Resort - Konark, Odisha';
  showTabContentRSS('socialwall_twitter', RSS_twitter_lotuskonark);
  }
  else if(localStorage.getItem('selectedstore')=='shimla')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>The Orchid Hotel - Shimla';
  showTabContentRSS('socialwall_twitter', RSS_twitter_shimla);
  }

	$("#navBdr_twitter").css('display', 'block');
    $("#navBdr_facebook").css('display', 'none');
    $("#navBdr_instagram").css('display', 'none');

	$("#TWITTER").css('display', 'block');
    $("#FACEBOOK").css('display', 'none');
    $("#INSTAGRAM").css('display', 'none');
    

	$.mobile.changePage( "#social", { transition: "none"} ); 
	
    //openInWebView('https://twitter.com/orchid');
  
}

function showInstagramNew(){

  if(localStorage.getItem('selectedstore')=='jadhavgadh')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>Fort JadhavGADH - Pune';
  showTabContentRSS('socialwall_instagram', RSS_instagram_ff);
  }
  else if(localStorage.getItem('selectedstore')=='mahodadhi')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>Mahodadhi Palace - Puri, Odisha';
  showTabContentRSS('socialwall_instagram', RSS_instagram_mo);
  }
  else if(localStorage.getItem('selectedstore')=='mumbai')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>The Orchid Hotel - Mumbai';
  showTabContentRSS('socialwall_instagram', RSS_instagram_mm);
  }
  else if(localStorage.getItem('selectedstore')=='pune')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>The Orchid Hotel - Pune';
  showTabContentRSS('socialwall_instagram', RSS_instagram_pp);
  }
  else if(localStorage.getItem('selectedstore')=='vitsmumbai')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>VITS Mumbai';
  showTabContentRSS('socialwall_instagram', RSS_instagram_vitsmumbai);
  }
  else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>VITS Bhubaneswar';
  showTabContentRSS('socialwall_instagram', RSS_instagram_vitsbhub);
  }
  else if(localStorage.getItem('selectedstore')=='lotusgoa')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>Lotus Eco Beach Resort - Goa';
  showTabContentRSS('socialwall_instagram', RSS_instagram_lotusgoa);
  }
  else if(localStorage.getItem('selectedstore')=='lotuskonark')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>Lotus Eco Beach Resort - Konark, Odisha';
  showTabContentRSS('socialwall_instagram', RSS_instagram_lotuskonark);
  }
  else if(localStorage.getItem('selectedstore')=='shimla')
  {
  document.getElementById("socialtype").innerHTML= 'Social Connect<br/>The Orchid Hotel - Shimla';
  showTabContentRSS('socialwall_instagram', RSS_instagram_shimla);
  }

	$("#navBdr_twitter").css('display', 'none');
    $("#navBdr_facebook").css('display', 'none');
    $("#navBdr_instagram").css('display', 'block');

	$("#TWITTER").css('display', 'none');
    $("#FACEBOOK").css('display', 'none');
    $("#INSTAGRAM").css('display', 'block');
   
	
	$.mobile.changePage( "#social", { transition: "none"} ); 
	
    
  
}

function showYoutubeNew(){

    openInWebView('https://www.youtube.com/channel/UCsirC93KJGwaUovn45YOt0Q');
  
}

function showPinterestNew(){
	
	$("#navBdr_twitter").css('display', 'none');
    $("#navBdr_facebook").css('display', 'none');
    $("#navBdr_pinterest").css('display', 'block');
    $("#navBdr_instagram").css('display', 'none');

	$("#TWITTER").css('display', 'none');
    $("#FACEBOOK").css('display', 'none');
    $("#INSTAGRAM").css('display', 'none');
    $("#PINTEREST").css('display', 'block');

	$.mobile.changePage( "#socialpg", { transition: "none"} );
	showTabContentRSS('socialwall_pinterest', RSS_pinterest);
	//openInWebView('https://in.pinterest.com/orchid/');
}

function showGplus(){
	
	openInWebView('https://plus.google.com/');
}

function showShop11()
{
    //toast_p("Enjoy 15% off on booking from Orchid Rewards App.", "*Applicable only on booking from Mobile App");

	/*indate*/
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
		dd='0'+dd;
	} 

	if(mm<10) {
		mm='0'+mm;
	}

	/*outdate*/
	var outdate = new Date();
    outdate.setDate(outdate.getDate() + 2);

	var dd1 = outdate.getDate();
	var mm1 = outdate.getMonth()+1; //January is 0!
	var yyyy1 = outdate.getFullYear();

	if(dd1<10) {
		dd1='0'+dd1;
	} 

	if(mm1<10) {
		mm1='0'+mm1;
	}

	/*var cindate=yyyy+'-'+mm+'-'+dd;
    var coutdate=yyyy1+'-'+mm1+'-'+dd1;

    document.getElementById('checkInDateLabel').value=cindate;
    document.getElementById('checkOutDateLabel').value=coutdate;

	$('#checkInDateLabel').val(cindate);
	$('#checkOutDateLabel').val(coutdate);*/

	$('#checkInDateLabel').text(mm+'/'+dd+'/'+yyyy);
	$('#checkOutDateLabel').text(mm1+'/'+dd1+'/'+yyyy1);
    

    $.mobile.changePage( "#booking", { transition: "fadein"} );
   
}

function loadLocation()
{
//alert('aaaaa');
     var cityid='';
	 $.ajax({
   //url: SERVER+'mloyallogin_json.asp', //login.php
   url: SERVER+'store_locator_json.asp', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'city': cityid},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
  
   //called when successful
   
        var listItems= "";
        for (var i = 0; i < data.length; i++)
			{
                if(data[i].storename.equals('THE ORCHID MUMBAI')>=0 || data[i].storename.indexOf('THE ORCHID PUNE')>=0 || data[i].storename.indexOf('FORT JADHAV GADH')>=0)
                    {
                       storecodelist.push(data[i].storename+'-'+data[i].storecode);
                      // alert(data[i].storename+'-'+data[i].storecode);
                    }
                    
             } 
      //$("#textinput-selstore").html(listItems);
	 // $("#bill_loc").html(listItems);
   
   
    },
    error: function(xhr, textStatus, errorThrown) {
 //$.mobile.changePage( "#homepage", { transition: "slide"} );
   //$('#login-msg').html('wtf: '+textStatus+': '+errorThrown); 
  // $('#login-msg').html('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
	 
	 
}

function loadlocationNew()
{

  var listItems= "";

  if(localStorage.getItem('selectedstore')=='jadhavgadh')
	{
	    document.getElementById("feedlocation").innerHTML= 'Connect<br/>@ Fort JadhavGADH - Pune';
		$("#feedbackdiv").css('display', 'block');

		listItems+= "<option value='0'>--Select--</option>";
		listItems+= "<option value='30'>CHHAJJA JADHAVGADH</option>";
		listItems+= "<option value='33'>PAYTHA JADHAVGHADH</option>";
		listItems+= "<option value='27'>Fort JadhavGADH - Pune</option>";

		$("#bill_loc").html(listItems);
	}
  else if(localStorage.getItem('selectedstore')=='mumbai')
	{
		document.getElementById("feedlocation").innerHTML= 'Connect<br/>@ The Orchid Hotel - Mumbai';
		$("#feedbackdiv").css('display', 'block');

		listItems+= "<option value='0'>--Select--</option>";
		listItems+= "<option value='13'>THE ORCHID MUMBAI</option>";
		listItems+= "<option value='9'>BOULEVARD MUMBAI</option>";
		listItems+= "<option value='16'>BANQUET MUMBAI</option>";
		listItems+= "<option value='18'>GOURMET SHOP MUMBAI</option>";
		listItems+= "<option value='10'>MERLINS MUMBAI</option>";
		listItems+= "<option value='11'>MOSTLY GRILLS MUMBAI</option>";
		listItems+= "<option value='12'>SOUTH OF VINDHYAS MUMBAI</option>";
		listItems+= "<option value='21'>SVS BANQUETS MGS MUMBAI</option>";

		$("#bill_loc").html(listItems);
		
	}
  else if(localStorage.getItem('selectedstore')=='pune')
	{
		
		document.getElementById("feedlocation").innerHTML= 'Connect<br/>@ The Orchid Hotel - Pune';
		$("#feedbackdiv").css('display', 'block');
		
		listItems+= "<option value='0'>--Select--</option>";
		listItems+= "<option value='25'>BOULEVARD PUNE</option>";
		listItems+= "<option value='39'>MERLINS PUNE</option>";
		listItems+= "<option value='29'>ORCHID RES PUNE</option>";
		listItems+= "<option value='24'>THE ORCHID PUNE</option>";

		$("#bill_loc").html(listItems);
	}
  else if(localStorage.getItem('selectedstore')=='mahodadhi')
	{
		document.getElementById("feedlocation").innerHTML= 'Connect<br/>@ Mahodadhi Palace - Puri, Odisha';
		$("#feedbackdiv").css('display', 'block');

		listItems+= "<option value='0'>--Select--</option>";
		listItems+= "<option value='55'>Mahodadhi Palace - Puri, Odisha</option>";

		//toast('Feedback not available for Mahodadhi Palace - Puri, Odisha');
	}
    else if(localStorage.getItem('selectedstore')=='vitsmumbai')
	{
		document.getElementById("feedlocation").innerHTML= 'Connect<br/>@ VITS Mumbai';
		$("#feedbackdiv").css('display', 'block');

		listItems+= "<option value='0'>--Select--</option>";
		listItems+= "<option value='73'>Q-BAR</option>";
		listItems+= "<option value='88'>VITS Mumbai</option>";
		listItems+= "<option value='89'>VITS BQN</option>";
		listItems+= "<option value='75'>THE POOLSIDE CAFE</option>";
        listItems+= "<option value='76'>THE FITNESS CENTRE</option>";

		
	}else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
	{
		document.getElementById("feedlocation").innerHTML= 'Connect<br/>@ VITS Hotel Bhubaneshwar';
		$("#feedbackdiv").css('display', 'block');


		listItems+= "<option value='0'>--Select--</option>";
		listItems+= "<option value='63'>VITS BHUBANESHWAR</option>";
		listItems+= "<option value='64'>BEHIND BAR</option>";
		listItems+= "<option value='66'>THE SIZZLE RESTAURANT</option>";
		listItems+= "<option value='68'>THE POOLSIDE</option>";
        listItems+= "<option value='69'>THE FITNESS CENTRE</option>";
        listItems+= "<option value='70'>SWEET PARLOUR</option>";
        listItems+= "<option value='71'>THE POOLSIDE OPEN AIR RESTAURANT</option>";

		
	}
    else if(localStorage.getItem('selectedstore')=='lotusgoa')
	{
  
		document.getElementById("feedlocation").innerHTML= 'Connect<br/>@ Lotus Eco Beach Resort - Goa';
		$("#feedbackdiv").css('display', 'block');

		listItems+= "<option value='0'>--Select--</option>";
		listItems+= "<option value='44'>LOTUS BEACH RESORT</option>";
		listItems+= "<option value='45'>SEA SHELL BAR</option>";
		listItems+= "<option value='46'>SEA WAVE RESTAURANT</option>";
		

		
	}
    else if(localStorage.getItem('selectedstore')=='lotuskonark')
	{
		document.getElementById("feedlocation").innerHTML= 'Connect<br/>@ Lotus Eco Beach Resort - Konark, Odisha';
		$("#feedbackdiv").css('display', 'block');

		listItems+= "<option value='0'>--Select--</option>";
		listItems+= "<option value='59'>Lotus Eco Beach Resort - Konark, Odisha</option>";
		listItems+= "<option value='60'>BAY SPIRITS BAR</option>";
		listItems+= "<option value='61'>WATER FRONT GRILL</option>";
		

		
	}
	else if(localStorage.getItem('selectedstore')=='shimla')
	{
		document.getElementById("feedlocation").innerHTML= 'Connect<br/>@ The Orchid Hotel - Shimla';
		$("#feedbackdiv").css('display', 'block');

		listItems+= "<option value='0'>--Select--</option>";
		listItems+= "<option value='165'>CAFE VINDHYAS SHIMLA</option>";
		listItems+= "<option value='168'>THE GLASSHOUSE SHIMLA</option>";
		listItems+= "<option value='166'>BANQUET SHIMLA</option>";
		

		
	}

}

function drawMap(latlng,index) {
    
        var myOptions = {
            zoom: 2,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP 
        };
   

   var bounds = new google.maps.LatLngBounds();
        var map = new google.maps.Map(document.getElementById('map-canvas'+index), myOptions);
        // Add an overlay to the map of current lat/lng
        var pinColor = "FE7569";
        var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                new google.maps.Size(21, 34),
                new google.maps.Point(0, 0),
                new google.maps.Point(10, 34));
        var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                new google.maps.Size(40, 37),
                new google.maps.Point(0, 0),
                new google.maps.Point(12, 35));



        bounds.extend(latlng);
        var markercurr = new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Current Position!!!',
            icon: pinImage,
            shadow: pinShadow

        });
        map.fitBounds(bounds);
    }

function purchaseHistory()
{
	var pop = document.getElementById('purchaseHistory');

	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('redeemHistory');
		var pop2 = document.getElementById('bonusHistory');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

function redeemHistory()
{
	var pop = document.getElementById('redeemHistory');
	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('purchaseHistory');
		var pop2 = document.getElementById('bonusHistory');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

function bonusHistory()
{
	var pop = document.getElementById('bonusHistory');
	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('purchaseHistory');
		var pop2 = document.getElementById('redeemHistory');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

var toast = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h5>" + msg + "</h5></div>")
            .css({display: "block",
                opacity: 0.94,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                background: "#833581",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(2500)
            .fadeOut(400, function () {
                $(this).remove();
            });
}
var toast_p = function (msg1, msg2) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h4>" + msg1 + "</h4><p class='tc'>"+ msg2 +"</p></div>")
            .css({display: "block",
                opacity: 0.94,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                background: "#833581",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(2500)
            .fadeOut(400, function () {
                $(this).remove();
            });
}


function capturePhoto1()
{
    
			$("input[type=file]").trigger("click");
		
}

$("input[type=file]").change(function(){
			
    
    var aFormData = new FormData();
    
  // alert($("input[type=file]")[0].files[0]);

    aFormData.append("filename", $("input[type=file]")[0].files[0]);
    
    

	aFormData.append("mobile", localStorage.getItem("username"));
    aFormData.append("brand", "Orchid");
     

	
	$.ajax(
    {
      url         : "http://103.25.128.61:9296/mloyalfileupload/fileupload1.php",
      type        : "POST",
      contentType : false,
      processData : false,
      data        : aFormData,
      success     : 
        function(data)
        {

		  toast("Your picture has been updated..Please reload page to see changes");
   
         document.getElementById("cardImagemenu").src='https://taghash.co/mloyalfileupload/uploads/Orchid_'+localStorage.getItem("username")+'.jpg';
      //   document.getElementById("cardImage").src='http://103.25.128.61:9296/mloyalfileupload/uploads/Orchid_'+localStorage.getItem("username")+'.jpg';
        }
    });

	

});


function imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

	

    return http.status != 404;

}
var clickdate='';
$(document).ready(function(e) {


    $("#checkInDateLabel").on("click", function(){
		//	console.log($(this).text())
        clickdate = 'checkInDateLabel';
		 $("#dateInPopup").popup( "open" );
		 
	});
	$("#checkOutDateLabel").on("click", function(){
		//	console.log($(this).text())
        clickdate = 'checkOutDateLabel';
		 $("#dateOutPopup").popup( "open" );
		 
	});
	$("#checkPersonLabel").on("click", function(){
		//	console.log($(this).text())
		 $("#PersonPopup").popup( "open" );
		 
	});
	$("#checkInDate").on("click", function(){
		//	console.log($(this).text())
        clickdate = 'checkInDate';
		 //$("#dateInPopup1").popup();
		 $("#dateInPopup1").popup( "open" );
		 
	});
	$("#checkOutDate").on("click", function(){
		//	console.log($(this).text())
        clickdate = 'checkOutDate';
		// $("#dateOutPopup1").popup();
		 $("#dateOutPopup1").popup( "open" );
		 
	});
});

$(document).ready(function() {

                           
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var dayNames = ["S", "M", "T", "W", "T", "F", "S"];
	var array = {
		//enable select
		enableSelect: true,
		//set day names
		dayNames: dayNames,
		//set month names
		monthNames: monthNames,
		//show dayNames
		showDays: true,
		//show month controller
		displayMonthController: true,
		//show year controller
		displayYearController: true,
		//change calendar to english format
		startWeekDay: 1,
		//set ajax call
		reqAjax: {
			type: 'get',
			url: ''
		}
	}
	$('#dateIn').bic_calendar(array);
	$('#dateOut').bic_calendar(array);

	$('#dateIn1').bic_calendar(array);
	$('#dateOut1').bic_calendar(array);

});
$(document).ready(function() {

	document.addEventListener('bicCalendarSelect', function(e) {
        try{
		$("#dateInPopup").popup( "close" );
        $('#dateOutPopup').popup( "close" );
        }catch(err){}
		//$("#dateInPopup1").popup();
        try{
		$("#dateInPopup1").popup( "close" );

        //$('#dateOutPopup1').popup();
		$('#dateOutPopup1').popup( "close" );
        }catch(err){}

		console.log(e.detail.date);
		//var dateFirst = new moment(e.detail.dateFirst);
		moment.locale('es'); // default the language to English
		//$('#checkInDateLabel').text(e.detail.date);
		//$('#checkOutDateLabel').text(e.detail.date);
		$('#'+clickdate+'').text(e.detail.date);

		/*
		 * more about moment.js
		 * http://momentjs.com/docs/#/displaying/
		 */
	});
});

function showRewardsNew()
{

	if(user.mobile==null || user.mobile=='')
	{
		$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
   
	else
	{
        var silverstr = '';
        var goldstr = '';
        var platinumstr = '';

        $.ajax({
			url: SERVER1+'apis/slabwise_offer_json_api.asp',
			type: 'GET',
            dataType: 'json',
			timeout: 30000,
			data: {},
			success: function(data, textStatus, xhr) {
			
			// console.log(textStatus);
			// document.getElementById('facilitiescontent').innerHTML=data;
             for(var i=0;i<data.data.length;i++)
             {
                 //alert(data.data[i].OfferSlab);
                 if(data.data[i].OfferSlab=='Silver')
                 {
                    //silverstr += '<div class="flip-block" onclick="generatecoupon('+data.data[i].OfferId+')">';
					silverstr += '<div class="flip-block" onclick="generatecoupon(\''+data.data[i].OfferId+'\',\''+data.data[i].OfferMinimumAmount+'\')">';
                    silverstr += '<div class="detail_img1"><img src="'+data.data[i].OfferImage+'" alt=""></div>';
                    silverstr += '<div class="detail_img2">';
                    silverstr += '<div class="ui-grid-a">';
                    silverstr += '<div class="ui-block-a flip_inner"><img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+data.data[i].OfferId+'&choe=UTF-8" style="padding:10px;"/></div>';
                    silverstr += '<div class="ui-block-b flip_inner">';
                    silverstr += '<img src="img/logo.png" alt="Logo Img"/>';
                    silverstr += '<div class="stay_badge">'+data.data[i].OfferSmsText+'</div>';
                    silverstr += '</div>';
                    silverstr += '</div></div></div>';    
                 }
                 else if(data.data[i].OfferSlab=='Gold')
                 {
                    //goldstr += '<div class="flip-block"  onclick="generatecoupon('+data.data[i].OfferId+')">';
					goldstr += '<div class="flip-block" onclick="generatecoupon(\''+data.data[i].OfferId+'\',\''+data.data[i].OfferMinimumAmount+'\')">';
                    goldstr += '<div class="detail_img1"><img src="'+data.data[i].OfferImage+'" alt=""></div>';
                    goldstr += '<div class="detail_img2">';
                    goldstr += '<div class="ui-grid-a">';
                    goldstr += '<div class="ui-block-a flip_inner"><img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+data.data[i].OfferId+'&choe=UTF-8" style="padding:10px;"/></div>';
                    goldstr += '<div class="ui-block-b flip_inner">';
                    goldstr += '<img src="img/logo.png" alt="Logo Img"/>';
                    goldstr += '<div class="stay_badge">'+data.data[i].OfferSmsText+'</div>';
                    goldstr += '</div>';
                    goldstr += '</div></div></div>';  
                 }
                 else if(data.data[i].OfferSlab=='Platinum')
                 {
                    //platinumstr += '<div class="flip-block"  onclick="generatecoupon('+data.data[i].OfferId+')">';
					platinumstr += '<div class="flip-block" onclick="generatecoupon(\''+data.data[i].OfferId+'\',\''+data.data[i].OfferMinimumAmount+'\')">';
                    platinumstr += '<div class="detail_img1"><img src="'+data.data[i].OfferImage+'" alt=""></div>';
                    platinumstr += '<div class="detail_img2">';
                    platinumstr += '<div class="ui-grid-a">';
                    platinumstr += '<div class="ui-block-a flip_inner"><img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+data.data[i].OfferId+'&choe=UTF-8" style="padding:10px;"/></div>';
                    platinumstr += '<div class="ui-block-b flip_inner">';
                    platinumstr += '<img src="img/logo.png" alt="Logo Img"/>';
                    platinumstr += '<div class="stay_badge">'+data.data[i].OfferSmsText+'</div>';
                    platinumstr += '</div>';
                    platinumstr += '</div></div></div>';  
                 }
             }  
             document.getElementById('rw_silver').innerHTML=silverstr;
             document.getElementById('rw_gold').innerHTML=goldstr;
             document.getElementById('rw_platinum').innerHTML=platinumstr;     
			 },
			error: function(xhr, textStatus, errorThrown) {
				 $('#forgot-msg').html('Could not connect to Server, make sure you are connected to Internet');
				}
		});
        

		if(parseInt(user.balance)<=2000){

			$("#rw_silver").removeClass("inactive").addClass("active");
			$("#rw_gold").addClass("inactive").removeClass("active");
			$("#rw_platinum").addClass("inactive").removeClass("active");

		}
		else if(parseInt(user.balance)<=25000){

			$("#rw_silver").removeClass("inactive").addClass("active");
			$("#rw_gold").removeClass("inactive").addClass("active");
			$("#rw_platinum").addClass("inactive").removeClass("active");
		}
		else{

			$("#rw_silver").removeClass("inactive").addClass("active");
			$("#rw_gold").removeClass("inactive").addClass("active");
			$("#rw_platinum").removeClass("inactive").addClass("active");
		}
		$.mobile.changePage( "#rewardspg", { transition: "none"} );
	}
}

function generatecoupon(offerid,offerminamount)
{
	
    if(parseFloat(offerminamount) > parseFloat(user.balance))
	{
		toast('Not enough petals for redemption');
	}
	else
	{

       $.ajax({
			url: SERVER1+'/apis/generate_coupon_code_json_api.asp11',
			type: 'GET',
			timeout: 30000,
		  	data: {
				 'apiuid':'MLOYALAPI',
                 'apipswd':'Ml0yalAP!2o14',
				 'mobileno':user.mobile,
				 'offerid':offerid
			},
			success: function(data, textStatus, xhr) {
				toast('You will shortly receive a confirmation code');
                $.mobile.changePage( "#homepage", { transition: "fadein"} );
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});
	}
}
function setPax()
{
    var adult = $('#noofAdults').val();
    var child = $('#noofChildren').val();
    var str='';
    if(adult!='' && adult!='0')
    {
        str= adult + ' Adult/s';
    }
    if(child!='' && child!='0')
    {
        if(str.length>0)
        str =str + ' ,';
        str = str + child;
        if(child=='1')
        str = str + ' child';
        else
        str = str + ' children';
    }
    document.getElementById('checkPersonLabel').innerHTML=str;
    $('#PersonPopup').popup('close');
}
function sendbookingrequest()
{
        var cindate=$('#checkInDateLabel').text();
        var coutdate=$('#checkOutDateLabel').text();
//alert('cindate'+cindate+'......coutdate'+coutdate);

  var storesel = localStorage.getItem('selectedstore');

 if(typeof storesel==undefined || storesel==null)
 storesel = '';
 if(storesel=='')
 {
	toast('Please select property to reserve');
 }
	  
 else if(cindate=='' || coutdate=='')
 {
     toast('Mandatory fields cannot be left blank');
 }
 else
 {
	var doc = cindate.split('/');
	var mm = doc.length == 3 ? doc[0] : '';
	var dd = doc.length == 3 ? doc[1] : '';
	var yyyy = doc.length == 3 ? doc[2] : '';

	var dov = coutdate.split('/');
	var mm1 = dov.length == 3 ? dov[0] : '';
	var dd1 = dov.length == 3 ? dov[1] : '';
	var yyyy1 = dov.length == 3 ? dov[2] : '';

    var firstDate=new Date();
    firstDate.setFullYear(doc[2],(doc[0] - 1 ),doc[1]);

    var secondDate=new Date();
    secondDate.setFullYear(dov[2],(dov[0] - 1 ),dov[1]);      
    
    var startstr = mm+'/'+dd+'/'+yyyy;
    var endstr = mm1+'/'+dd1+'/'+yyyy1;
    

    startstr = getFormattedDate(startstr);
    endstr = getFormattedDate(endstr);

	//console.log('startstr:'+startstr);
    
    
  if (firstDate > secondDate)
  {
   toast("Checkin Date cannot be greater than Checkout Date");
  }
  else
  {
        if(storesel=='jadhavgadh')
        {
        
        toast('Please wait while we process request for Fort JadhavGADH - Pune');

		setTimeout(function(){
			openInWebView('https://staahmax.staah.net/be/indexpackdetail?propertyId=MTA5Mw==&groupId=MTQ0Mw==&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&roomadult=2');
            //openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&ccode=Reward15&propertyId=1940');
			//openInWebView('https://bookings.simplotel.com/?checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&adults=2&children=0&promocode=Reward15&propertyId=24&min-room-price=&_ga=2.156280831.512204980.1542970639-1303106516.1532171687');

		}, 4000);

        }
        else if(storesel=='mumbai')
        {
        
        toast('Please wait while we process request for The Orchid Hotel - Mumbai');

		setTimeout(function(){
			openInWebView('https://staahmax.staah.net/be/indexpackdetail?propertyId=MTQwMw==&groupId=MTQ0Mw==&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&roomadult=2');
			//openInWebView('https://bookings.orchidhotel.com/?chainId=3685&propertyId=6&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&adults=2');
            //openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&ccode=Reward15&propertyId=1237');
			//openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=1237&Ln=en&Ccode=Reward15&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&nights=1');
		}, 4000);

        }
        else if(storesel=='pune')
        {
        
        toast('Please wait while we process request for The Orchid Hotel - Pune');

		setTimeout(function(){
			openInWebView('https://staahmax.staah.net/be/indexpackdetail?propertyId=NDg0==&groupId=MTQ0Mw==&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&roomadult=2');
			//openInWebView('https://staahmax.staah.net/bookings/indexpackdetail?propertyId=NDg0&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&individual=true');
		    //openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=1435&Ln=en&Ccode=Reward15&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&nights=1');
		}, 4000);

        }
        else if(storesel=='mahodadhi')
        {
          //toast('Coming Soon');  
          toast('Please wait while we process request for Mahodadhi Palace - Puri, Odisha');
          setTimeout(function(){
			    openInWebView('');
				//openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&ccode=Reward15&propertyId=4131');
				//openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=4131&Ln=en&Ccode=Reward15&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&nights=1');

        }, 4000);
        }
        else if(storesel=='vitsmumbai')
        {
        
        toast('Please wait while we process request for VITS Mumbai');

		setTimeout(function(){
			openInWebView('https://staahmax.staah.net/be/indexpackdetail?propertyId=MTQ3OA==&groupId=MTQ0Mw==&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&roomadult=2');
            //openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&ccode=Reward15&propertyId=1178');
			//openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=1178&Ln=en&Ccode=Reward15&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&nights=1');
		}, 4000);

        }
        else if(storesel=='vitsbhubaneshwar')
        {
        
        toast('Please wait while we process request for VITS Bhubaneswar');

		setTimeout(function(){
			openInWebView('https://staahmax.staah.net/be/indexpackdetail?propertyId=OTQ3==&groupId=MTQ0Mw==&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&roomadult=2');
            //openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&ccode=Reward15&propertyId=4114');
			//openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=4114&Ln=en&Ccode=Reward15&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&nights=1');
		}, 4000);

        }
        else if(storesel=='lotusgoa')
        {
        
        toast('Please wait while we process request for Lotus Eco Beach Resort - Goa');

		setTimeout(function(){
			openInWebView('https://staahmax.staah.net/be/indexpackdetail?propertyId=NDc0==&groupId=MTQ0Mw==&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&roomadult=2');
            //openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&ccode=Reward15&propertyId=4174');
			//openInWebView('https://bookings.simplotel.com/?checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&adults=1&children=0&promocode=Reward15&propertyId=176&chainId=175&min-room-price=');
		}, 4000);

        }
        else if(storesel=='lotuskonark')
        {
        
        toast('Please wait while we process request for Lotus Eco Beach Resort - Konark, Odisha');

		setTimeout(function(){
			openInWebView('https://staahmax.staah.net/be/indexpackdetail?propertyId=NDky&groupId=MTQ0Mw==&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&roomadult=2');
            //openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=4156&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&promoCode=Reward15&submit=Search&currency=INR');
			//openInWebView('https://staahmax.staah.net/bookings/indexpackdetail?packageId=&m_currency=INR&display=&propertyId=NDky&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&promoCode=Reward15&submit=Search&currency=INR');
		}, 4000);

        }
		else if(storesel=='shimla')
        {
        

        toast('Please wait while we process request for The Orchid Hotel - Shimla');

		setTimeout(function(){
			openInWebView('https://staahmax.staah.net/be/indexpackdetail?propertyId=MjYzMg==&groupId=MTQ0Mw==&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&roomadult=2');
			//openInWebView('https://staahmax.staah.net/bookings/indexpackdetail?packageId=&m_currency=INR&display=&propertyId=NDky&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&promoCode=Reward15&submit=Search&currency=INR');
			//openInWebView('https://bookings.simplotel.com/?checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&adults=2&children=0&promocode=&propertyId=5323&min-room-price=&_ga=2.156280831.512204980.1542970639-1303106516.1532171687');
		}, 4000);

        }
        
  }
 }
		/*var noofadults=$('#noofAdults').val();
		var noofkids = $('#noofChildren').val();
		var storeid = $('#storeid').val();
		$.ajax({
			url: SERVER1+'/apis/booking_request_json_api.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				 'apiuid':'MLOYALAPI',
                 'apipswd':'Ml0yalAP!2o14',
				 'checkindate':cindate,
				 'checkoutdate':coutdate,	
				 'adultmember':noofadults,
				 'childmember':noofkids,	
				 'storeid':storeid
			},
			success: function(data, textStatus, xhr) {
				toast('Booking request has been sent. We will get in touch with you shortly.');
                $.mobile.changePage( "#homepage", { transition: "fadein"} );
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});*/
    
}

function getFormattedDate(input) {
    var pattern = /(.*?)\/(.*?)\/(.*?)$/;
    var result = input.replace(pattern,function(match,p1,p2,p3){
        
		var dd1='';
		var mm1='';

		if( p2<10 && p2.indexOf("0")>=0 )
		{
			p2=p2;
		}
		if ( p2<10 && p2.indexOf("0")==-1 )
		{
			p2= "0"+p2;
		}
		if( p1<10 && p1.indexOf("0")>=0 )
		{
			p1=p1;
		}
		if ( p1<10 && p1.indexOf("0")==-1 )
		{
			p1= "0"+p1;
		}

        return p3 + "-" + p1 + "-" + p2;
    });

    return result;
}

function getFormattedDate_old(input) {
    var pattern = /(.*?)\/(.*?)\/(.*?)$/;
    var result = input.replace(pattern,function(match,p1,p2,p3){
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return (p2<10?"0"+p2:p2) + " " + months[(p1-1)] + " " + p3;
    });

    return result;
}

function showBooking()
{
		
  var cindate=$('#checkInDate').text();
  var coutdate=$('#checkOutDate').text();
  var storesel = localStorage.getItem('selectedstore');

  if(typeof storesel==undefined || storesel==null)
    storesel = '';
  if(storesel=='')
  {
      toast('Please select property to reserve');
  }
 else if(cindate=='' || coutdate=='')
 {
     toast('Mandatory fields cannot be left blank');
 }
 else
 {
	var doc = cindate.split('/');
	var mm = doc.length == 3 ? doc[0] : '';
	var dd = doc.length == 3 ? doc[1] : '';
	var yyyy = doc.length == 3 ? doc[2] : '';

	var dov = coutdate.split('/');
	var mm1 = dov.length == 3 ? dov[0] : '';
	var dd1 = dov.length == 3 ? dov[1] : '';
	var yyyy1 = dov.length == 3 ? dov[2] : '';

    var firstDate=new Date();
    firstDate.setFullYear(doc[2],(doc[0] - 1 ),doc[1]);

    var secondDate=new Date();
    secondDate.setFullYear(dov[2],(dov[0] - 1 ),dov[1]);      
    
    var startstr = mm+'/'+dd+'/'+yyyy;
    var endstr = mm1+'/'+dd1+'/'+yyyy1;
    

    startstr = getFormattedDate(startstr);
    endstr = getFormattedDate(endstr);

	console.log('startstr:'+startstr);
	console.log('endstr:'+endstr);
    
    
  if (firstDate > secondDate)
  {
   toast("Checkin Date cannot be greater than Checkout Date");
  }
  else
  {
	  //toast_p("Enjoy 15% off on booking from Orchid Rewards App.", "*Applicable only on booking from Mobile App");

        if(localStorage.getItem('selectedstore')=='jadhavgadh')
        {

		setTimeout(function(){
            toast('Please wait while we process request for Fort JadhavGADH - Pune');
		}, 3000);

		setTimeout(function(){
			openInWebView('https://staahmax.staah.net/be/indexpackdetail?propertyId=MTA5Mw==&groupId=MTQ0Mw==&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&roomadult=2');
            //openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&ccode=Reward15&propertyId=1940');
			//openInWebView('https://bookings.simplotel.com/?checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&adults=2&children=0&promocode=&propertyId=24&min-room-price=&_ga=2.229866076.1711243472.1638856254-18410764.1638856254');
		}, 4100);
        
        }
        else if(localStorage.getItem('selectedstore')=='mumbai')
        {
        
		setTimeout(function(){
            toast('Please wait while we process request for The Orchid Hotel - Mumbai');
		}, 3000);

        setTimeout(function(){
			openInWebView('https://staahmax.staah.net/be/indexpackdetail?propertyId=MTQwMw==&groupId=MTQ0Mw==&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&roomadult=2');
			//openInWebView('https://bookings.orchidhotel.com/?chainId=3685&propertyId=6&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&adults=2');
			//openInWebView('https://bookings.simplotel.com/?promocode=&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&propertyId=6');
			//openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=1237&Ln=en&Ccode=Reward15&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&nights=1');
		}, 4100);
        
        }
        else if(localStorage.getItem('selectedstore')=='pune')
        {
            
        setTimeout(function(){
            toast('Please wait while we process request for The Orchid Hotel - Pune');
		}, 3000);

        setTimeout(function(){
			openInWebView('https://staahmax.staah.net/be/indexpackdetail?propertyId=NDg0==&groupId=MTQ0Mw==&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&roomadult=2');
			//openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=1435&Ln=en&Ccode=Reward15&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&nights=1');
			//openInWebView('https://bookings.simplotel.com/?checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&adults=2&children=0&promocode=&propertyId=206&min-room-price=&_ga=2.156280831.512204980.1542970639-1303106516.1532171687');
		}, 4100);

        }
        else if(localStorage.getItem('selectedstore')=='mahodadhi')
        {
          
		  setTimeout(function(){
            toast('Please wait while we process request for Mahodadhi Palace - Puri, Odisha');
		}, 3000);

        setTimeout(function(){
			openInWebView('');
			//openInWebView('https://bookings.simplotel.com/?promocode=&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&propertyId=180');
			//openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=4131&Ln=en&Ccode=Reward15&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&nights=1');
		}, 4100);
          
        }
        else if(localStorage.getItem('selectedstore')=='vitsmumbai')
        {
            
        setTimeout(function(){
            toast('Please wait while we process request for VITS Mumbai');
		}, 3000);

        setTimeout(function(){
			openInWebView('https://staahmax.staah.net/be/indexpackdetail?propertyId=MTQ3OA==&groupId=MTQ0Mw==&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&roomadult=2');
            //openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=1178&Ln=en&Ccode=Reward15&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&nights=1');
			//openInWebView('https://bookings.simplotel.com/?promocode=&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&propertyId=246');
		}, 4100);

        }
		else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
        {
        
		setTimeout(function(){
            toast('Please wait while we process request for VITS Bhubaneswar');
		}, 3000);

		setTimeout(function(){
			openInWebView('https://staahmax.staah.net/be/indexpackdetail?propertyId=OTQ3==&groupId=MTQ0Mw==&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&roomadult=2');
            //openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=4114&Ln=en&Ccode=Reward15&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&nights=1');
			//openInWebView('https://bookings.simplotel.com/?promocode=&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&propertyId=251');
		}, 4100);

        }
		else if(localStorage.getItem('selectedstore')=='lotusgoa')
        {
        
		setTimeout(function(){
            toast('Please wait while we process request for Lotus Eco Beach Resort - Goa');
		}, 3000);

		setTimeout(function(){
			openInWebView('https://staahmax.staah.net/be/indexpackdetail?propertyId=NDc0&groupId=MTQ0Mw==&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&roomadult=2');
            //openInWebView('https://bookings.simplotel.com/?checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&adults=1&children=0&promocode=Reward15&propertyId=176&chainId=175&min-room-price=');
			//openInWebView('https://bookings.simplotel.com/?promocode=&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&propertyId=176');
		}, 4100);

        }
		else if(localStorage.getItem('selectedstore')=='lotuskonark')
        {
        
		setTimeout(function(){
            toast('Please wait while we process request for Lotus Eco Beach Resort - Konark, Odisha');
		}, 3000);


		setTimeout(function(){
			openInWebView('https://staahmax.staah.net/be/indexpackdetail?propertyId=NDky&groupId=MTQ0Mw==&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&roomadult=2');
            //openInWebView('https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=4156&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&promoCode=Reward15&submit=Search&currency=INR');
			//openInWebView('https://staahmax.staah.net/bookings/indexpackdetail?packageId=&m_currency=INR&display=&propertyId=NDky&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&promoCode=Reward15&submit=Search&currency=INR');
		}, 4100);

        }
		else if(localStorage.getItem('selectedstore')=='shimla')
        {
        
		setTimeout(function(){
            toast('Please wait while we process request for The Orchid Hotel - Shimla');
		}, 3000);


		setTimeout(function(){
			openInWebView('https://staahmax.staah.net/be/indexpackdetail?propertyId=MjYzMg==&groupId=MTQ0Mw==&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&roomadult=2');
			//openInWebView('https://staahmax.staah.net/bookings/indexpackdetail?packageId=&m_currency=INR&display=&propertyId=NDky&checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&promoCode=Reward15&submit=Search&currency=INR');
			//openInWebView('https://bookings.simplotel.com/?checkIn='+getFormattedDate(startstr)+'&checkOut='+getFormattedDate(endstr)+'&adults=2&children=0&promocode=&propertyId=5323&min-room-price=&_ga=2.156280831.512204980.1542970639-1303106516.1532171687');
		}, 4100);

        }
        //document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+' to Mahodadhi Palace - Puri, Odisha!';
      
     /* $('#checkInDateLabel').text(mm+'/'+dd+'/'+yyyy);
	  $('#checkOutDateLabel').text(mm1+'/'+dd1+'/'+yyyy1);
      $.mobile.changePage( "#booking", { transition: "fadein"} );*/
//
      
     // $('#PersonPopup').popup('open');
  }
 }
		
}
function pause(numberMillis) { 
    var now = new Date(); 
    var exitTime = now.getTime() + numberMillis; 
    while (true) { 
        now = new Date(); 
        if (now.getTime() > exitTime) 
            return; 
    } 
} 
 

function backtosocialmain()
{
	$.mobile.changePage( "#socialpgmain", { transition: "none"} );
	document.getElementById("MYSOCIAL").innerHTML = '';
	document.getElementById("socialtype").innerHTML = '';
     $("#wait").css("display","none");
}

function showFb(fbid)
{

   document.getElementById("socialtype").innerHTML = 'Facebook';

   if(fbid=='mm')
	{
        document.getElementById("socialtype").innerHTML = 'The Orchid - Mumbai<br/>Facebook';
		$.mobile.changePage( "#social", { transition: "none"} ); 
		showTabContentRSS('socialwall_facebook', json_fb_mm);
	}
   else if(fbid=='pp')
	{
        document.getElementById("socialtype").innerHTML = 'The Orchid - Pune<br/>Facebook';
	   $.mobile.changePage( "#social", { transition: "none"} ); 
	   showTabContentRSS('socialwall_facebook', json_fb_pp);
	}
   else if(fbid=='ff')
	{
        document.getElementById("socialtype").innerHTML = 'Fort JadhavGADH - Pune<br/>Facebook';
	   $.mobile.changePage( "#social", { transition: "none"} ); 
	   showTabContentRSS('socialwall_facebook', json_fb_ff);
	}
  
}

function showTwitter(tid)
{

   document.getElementById("socialtype").innerHTML = 'Twitter';

   if(tid=='mm')
	{
        document.getElementById("socialtype").innerHTML = 'The Orchid - Mumbai<br/>Twitter';
		$.mobile.changePage( "#social", { transition: "none"} ); 
		showTabContentRSS('socialwall_twitter', RSS_twitter_mm);
	}
   else if(tid=='pp')
	{
       document.getElementById("socialtype").innerHTML = 'The Orchid - Pune<br/>Twitter';
	   $.mobile.changePage( "#social", { transition: "none"} ); 
	   showTabContentRSS('socialwall_twitter', RSS_twitter_pp);
	}
   else if(tid=='ff')
	{
       document.getElementById("socialtype").innerHTML = 'Fort JadhavGADH - Pune<br/>Twitter';
	   $.mobile.changePage( "#social", { transition: "none"} ); 
	   showTabContentRSS('socialwall_twitter', RSS_twitter_ff);
	}
  
}

function showInstagram(instaid)
{

   document.getElementById("socialtype").innerHTML = 'Instagram';

   if(instaid=='mm')
	{
        document.getElementById("socialtype").innerHTML = 'The Orchid - Mumbai<br/>Instagram';
		$.mobile.changePage( "#social", { transition: "none"} ); 
		showTabContentRSS('socialwall_instagram', RSS_instagram_mm);
	}
   else if(instaid=='pp')
	{
       document.getElementById("socialtype").innerHTML = 'The Orchid - Pune<br/>Instagram';
	   $.mobile.changePage( "#social", { transition: "none"} ); 
	   showTabContentRSS('socialwall_instagram', RSS_instagram_pp);
	}
   else if(instaid=='ff')
	{
       document.getElementById("socialtype").innerHTML = 'Fort JadhavGADH - Pune<br/>Instagram'; 
	   $.mobile.changePage( "#social", { transition: "none"} ); 
	   showTabContentRSS('socialwall_instagram', RSS_instagram_ff);
	}
  
}


$(document).ready(function(){
    $('.detail_img1').on("click", function() {
    var page1 = $(this);
    var page2 = $(this).parent().find('.detail_img2');
    var toHide = page1.is(':visible') ? page1 : page2;
    var toShow = page2.is(':visible') ? page1 : page2;
    toHide.removeClass('flip in').addClass('flip out').hide();
    toShow.removeClass('flip out').addClass('flip in').show();
});

})
$(document).on('pageinit', '#rewardspg', function() {
    $('.inactive').on("click", function(e){
        e.preventDefault();
        //console.log("45245");
       // $.mobile.changePage("#popupNested2");
        $( "#popupNested2" ).enhanceWithin().popup();
        $('#popupNested2').popup("open")
        setTimeout(function(){
            $('#popupNested2').popup("close")
        },5000)
    });
});

function showFeedback()
{
  $('#feed_mobile').val(user.mobile);
  
  if(localStorage.getItem('selectedstore')=='mumbai')
	{
		document.getElementById("feedlocationnew").innerHTML= 'Feedback<br/>The Orchid Hotel - Mumbai';
		document.getElementById("prefertext").innerHTML= 'I would like to prefer/ recommend The Orchid for the next visit';
		document.getElementById("educatetext").innerHTML= 'Did any one educate you on environmental initiatives,benefits The Orchid Hotel does?';
		document.getElementById("boulevardtext").innerHTML= 'Boulevard/ South Of Vindhyas, Gourmet Shop, Merlins, Mostly Grills';
		$("#aaimuseumdiv").css('display', 'block');
		$("#boulevarddiv").css('display', 'block');
		$("#chhajjadiv").css('display', 'none');
		$("#activitiesdiv").css('display', 'none');

		$.mobile.changePage( "#feedbacknew", { transition: "none"} );
	}
  else if(localStorage.getItem('selectedstore')=='pune')
	{
		document.getElementById("feedlocationnew").innerHTML= 'Feedback<br/>The Orchid Hotel - Pune';
		document.getElementById("prefertext").innerHTML= 'I would like to prefer/ recommend The Orchid for the next visit';
		document.getElementById("educatetext").innerHTML= 'Did any one educate you on environmental initiatives,benefits The Orchid Hotel does?';
		document.getElementById("boulevardtext").innerHTML= 'Boulevard/ Merlins';
		$("#aaimuseumdiv").css('display', 'none');
		$("#boulevarddiv").css('display', 'block');
		$("#chhajjadiv").css('display', 'none');
		$("#activitiesdiv").css('display', 'none');

		$.mobile.changePage( "#feedbacknew", { transition: "none"} );
	}
  else if(localStorage.getItem('selectedstore')=='jadhavgadh')
	{
		document.getElementById("feedlocationnew").innerHTML= 'Feedback<br/>Fort JadhavGADH - Pune';
		document.getElementById("prefertext").innerHTML= 'I would prefer/ recommend Fort JadhavGADH - Pune visit';
		document.getElementById("educatetext").innerHTML= 'Did any one educate you on environmental initiatives,benefits Fort JadhavGADH - Pune does?';
		document.getElementById("boulevardtext").innerHTML= 'Boulevard/ Merlins';
		$("#aaimuseumdiv").css('display', 'none');
		$("#boulevarddiv").css('display', 'none');
		$("#chhajjadiv").css('display', 'block');
		$("#activitiesdiv").css('display', 'block');

		$.mobile.changePage( "#feedbacknew", { transition: "none"} );
	}
  else if(localStorage.getItem('selectedstore')=='mahodadhi')
	{
		document.getElementById("feedlocationnew").innerHTML= 'Feedback<br/>Mahodadhi Palace - Puri, Odisha';
		document.getElementById("prefertext").innerHTML= 'I would prefer/ recommend Mahadadhi Palace visit';
		document.getElementById("educatetext").innerHTML= 'Did any one educate you on environmental initiatives,benefits Mahadadhi Palace does?';
		document.getElementById("boulevardtext").innerHTML= 'GAA Restaurant/Baron Bar';
		$("#aaimuseumdiv").css('display', 'none');
		$("#boulevarddiv").css('display', 'none');
		$("#chhajjadiv").css('display', 'block');
		$("#activitiesdiv").css('display', 'block');

		$.mobile.changePage( "#feedbacknew", { transition: "none"} );
	}
 else if(localStorage.getItem('selectedstore')=='vitsmumbai')
	{
		document.getElementById("feedlocationnew").innerHTML= 'Feedback<br/>VITS Mumbai';
		document.getElementById("prefertext").innerHTML= 'I would prefer/ recommend VITS Mumbai visit';
		document.getElementById("educatetext").innerHTML= 'Did any one educate you on environmental initiatives,benefits VITS Mumbai does?';
		document.getElementById("boulevardtext").innerHTML= 'The Poolside Cafe/Q-Bar';
		$("#aaimuseumdiv").css('display', 'none');
		$("#boulevarddiv").css('display', 'block');
		$("#chhajjadiv").css('display', 'none');
		$("#activitiesdiv").css('display', 'none');

		$.mobile.changePage( "#feedbacknew", { transition: "none"} );
	}
 else if(localStorage.getItem('selectedstore')=='vitsbhubaneshwar')
	{
		document.getElementById("feedlocationnew").innerHTML= 'Feedback<br/>VITS Hotel Bhubaneshwar';
		document.getElementById("prefertext").innerHTML= 'I would prefer/ recommend VITS Hotel Bhubaneshwar visit';
		document.getElementById("educatetext").innerHTML= 'Did any one educate you on environmental initiatives,benefits VITS Hotel Bhubaneshwar does?';
		document.getElementById("boulevardtext").innerHTML= 'The Sizzle Restaurant/Behind Bars';
		$("#aaimuseumdiv").css('display', 'none');
		$("#boulevarddiv").css('display', 'block');
		$("#chhajjadiv").css('display', 'none');
		$("#activitiesdiv").css('display', 'none');

		$.mobile.changePage( "#feedbacknew", { transition: "none"} );
	}
	else if(localStorage.getItem('selectedstore')=='lotusgoa')
	{
		document.getElementById("feedlocationnew").innerHTML= 'Feedback<br/>Lotus Eco Beach Resort - Goa';
		document.getElementById("prefertext").innerHTML= 'I would prefer/ recommend Lotus Eco Beach Resort - Goa visit';
		document.getElementById("educatetext").innerHTML= 'Did any one educate you on environmental initiatives,benefits Lotus Eco Beach Resort - Goa does?';
		document.getElementById("boulevardtext").innerHTML= 'Sea Wave Restaurants/Sea Shell Bar';
		$("#aaimuseumdiv").css('display', 'none');
		$("#boulevarddiv").css('display', 'block');
		$("#chhajjadiv").css('display', 'none');
		$("#activitiesdiv").css('display', 'none');

		$.mobile.changePage( "#feedbacknew", { transition: "none"} );
	}
	else if(localStorage.getItem('selectedstore')=='lotuskonark')
	{
		document.getElementById("feedlocationnew").innerHTML= 'Feedback<br/>Lotus Eco Beach Resort - Konark, Odisha';
		document.getElementById("prefertext").innerHTML= 'I would prefer/ recommend Lotus Eco Beach Resort - Konark, Odisha visit';
		document.getElementById("educatetext").innerHTML= 'Did any one educate you on environmental initiatives,benefits Lotus Eco Beach Resort - Konark, Odisha does?';
		document.getElementById("boulevardtext").innerHTML= 'Water Front Grill Cafe/Bay Spirits Bar';
		$("#aaimuseumdiv").css('display', 'none');
		$("#boulevarddiv").css('display', 'block');
		$("#chhajjadiv").css('display', 'none');
		$("#activitiesdiv").css('display', 'none');

		$.mobile.changePage( "#feedbacknew", { transition: "none"} );
	}
	else if(localStorage.getItem('selectedstore')=='shimla')
	{
		document.getElementById("feedlocationnew").innerHTML= 'Feedback<br/>The Orchid Hotel - Shimla';
		document.getElementById("prefertext").innerHTML= 'I would prefer/ recommend The Orchid for the next visit';
		document.getElementById("educatetext").innerHTML= 'Did any one educate you on environmental initiatives,benefits The Orchid Hotel does?';
		document.getElementById("boulevardtext").innerHTML= 'Wine and Dine in Cafe Vindhyas';
		$("#aaimuseumdiv").css('display', 'none');
		$("#boulevarddiv").css('display', 'block');
		$("#chhajjadiv").css('display', 'none');
		$("#activitiesdiv").css('display', 'none');

		$.mobile.changePage( "#feedbacknew", { transition: "none"} );
	}
}

function openBrowser(url)
	{
	
          //var ref = window.open(url, '_blank', 'location=yes,toolbar=yes');
		  cordova.ThemeableBrowser.open(url, '_blank', {
               backButtonCanClose: true,
    statusbar: {
        color: '#7F2F7F'
    },
    toolbar: {
        height: 74,
        color: '#7F2F7F'
    },
    title: {
        color: '#ffffff',
  staticText: '', 
        showPageTitle: false
    },
    backButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'left',
        event: ''
    },
    forwardButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'center',
        event: ''
    },
    closeButton: {
        wwwImage: 'img/menu_back.png',
        wwwImagePressed: 'img/menu_back.png',
        align: 'left',
  marginLeft: '15px',
        event: ''
    },
    customButtons: [
        {
            image: 'share',
            imagePressed: 'share_pressed',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
           /* {
                event: 'helloPressed',
                label: 'Hello World!'
            },
            {
                event: 'testPressed',
                label: 'Test!'
            }*/
        ]
    },
    backButtonCanClose: true
}).addEventListener('backPressed', function(e) {
    //alert('back pressed');
}).addEventListener('helloPressed', function(e) {
    //alert('hello pressed');
}).addEventListener('sharePressed', function(e) {
    //alert(e.url);
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
});


}

$(document).on('pageinit', '#homepage', function (event, ui) {

	fillbookdt();
         
	/*$(document).on('change', '#checkInDate', function (e, ui) {
		e.preventDefault();
		e.stopPropagation();

		var indate = new Date($('#checkInDate').val());
       
		var outdate = new Date();
			outdate.setDate(indate.getDate() + 2);
            
		
		var dd1 = outdate.getDate();
		var mm1 = outdate.getMonth()+1; //January is 0!
		var yyyy1 = outdate.getFullYear();

		if(dd1<10) {
			dd1='0'+dd1;
		} 

		if(mm1<10) {
			mm1='0'+mm1;
		}

        var dateval = yyyy1+'-'+mm1+'-'+dd1;
        document.getElementById('checkOutDate').value=dateval;
		$('#checkOutDate').val(dateval);


 });*/
 $("#dateInPopup1").on("click", function() {
		

		var indate = new Date($('#checkInDate').text());
        console.log('indate'+indate);
		var outdate = new Date();
			outdate.setDate(indate.getDate() + 2);
            
		console.log('outdate'+outdate);
		var dd1 = outdate.getDate();
		var mm1 = outdate.getMonth()+1; //January is 0!
		var yyyy1 = outdate.getFullYear();

		if(dd1<10) {
			dd1='0'+dd1;
		} 

		if(mm1<10) {
			mm1='0'+mm1;
		}

        var dateval = mm1+'/'+dd1+'/'+yyyy1;
        //document.getElementById('checkOutDateLabel').value=dateval;
		$('#checkOutDate').text(dateval);


 });

});

$(document).on('pageinit', '#booking', function (event, ui) {   
	
	$("#dateInPopup").on("click", function() {
		

		var indate = new Date($('#checkInDateLabel').text());
       console.log('indate'+indate);
		var outdate = new Date();
			outdate.setDate(indate.getDate() + 2);
            
		console.log('outdate'+outdate);
		var dd1 = outdate.getDate();
		var mm1 = outdate.getMonth()+1; //January is 0!
		var yyyy1 = outdate.getFullYear();

		if(dd1<10) {
			dd1='0'+dd1;
		} 

		if(mm1<10) {
			mm1='0'+mm1;
		}

        var dateval = mm1+'/'+dd1+'/'+yyyy1;
        //document.getElementById('checkOutDateLabel').value=dateval;
		$('#checkOutDateLabel').text(dateval);


 });

});

function fillbookdt()
{
	/*indate*/
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
		dd='0'+dd;
	} 

	if(mm<10) {
		mm='0'+mm;
	}

	/*outdate*/
	var outdate = new Date();
    outdate.setDate(outdate.getDate() + 2);

	var dd1 = outdate.getDate();
	var mm1 = outdate.getMonth()+1; //January is 0!
	var yyyy1 = outdate.getFullYear();

	if(dd1<10) {
		dd1='0'+dd1;
	} 

	if(mm1<10) {
		mm1='0'+mm1;
	}

	$('#checkInDate').text(mm+'/'+dd+'/'+yyyy);
	$('#checkOutDate').text(mm1+'/'+dd1+'/'+yyyy1);
}

function logoutApp()
{
	localStorage.removeItem("usernameorchid");
	localStorage.removeItem("passwordorchid");
	localStorage.removeItem("profiledone_orchid");
	
    user.mobile='';

	$.mobile.changePage('#page-forgot-password');
}